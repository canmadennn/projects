"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSqlRepository = void 0;
const sql_1 = require("../sql");
/*
 This repository mixes hard-coded and dynamic SQL, just to show how to use both.
*/
class GenericSqlRepository {
    /**
     * @param db
     * Automated database connection context/interface.
     *
     * If you ever need to access other repositories from this one,
     * you will have to replace type 'IDatabase<any>' with 'any'.
     *
     * @param pgp
     * Library's root, if ever needed, like to access 'helpers'
     * or other namespaces available from the root.
     */
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
        /*
          If your repository needs to use helpers like ColumnSet,
          you should create it conditionally, inside the constructor,
          i.e. only once, as a singleton.
        */
    }
    createGenericTable(tableColumns, tableColumnsType, tableName) {
        return new Promise((resolve, reject) => {
            this.db.none(sql_1.genericSql.createTable, [tableColumns, tableColumnsType, tableName])
                .then(() => {
                resolve({ success: true, message: "Tablo başarıyla oluşturuldu." });
            })
                .catch((error) => {
                reject({
                    success: false,
                    message: `Tablo oluşturma hatası: ${error.message || "Bilinmeyen bir hata"}`
                });
            });
        });
    }
    dropGenericTable(tableName) {
        return new Promise((resolve, reject) => {
            this.db.none(sql_1.genericSql.dropTable, [tableName])
                .then(() => {
                resolve({ success: true, message: "Tablo başarıyla silindi." });
            })
                .catch((error) => {
                reject({ success: false, message: `Tablo silme hatası: ${error.message || "Bilinmeyen bir hata"}` });
            });
        });
    }
    dynamicSelectTable(conditions, selectColumns, table, methot, sharedData) {
        let sqlQuery = "";
        if (methot === "SELECT") {
            sqlQuery = `SELECT ${selectColumns.join(',')} FROM ${table} WHERE `;
            const conditionClauses = Object.entries(conditions).map(([column, value]) => `${column} = '${value}'`);
            sqlQuery += conditionClauses.join(' AND ');
        }
        else if (methot === "UPDATE") {
            sqlQuery = `UPDATE ${table} SET `;
            const updateClauses = Object.entries(sharedData).map(([column, value]) => `${column} = '${value}'`);
            sqlQuery += updateClauses.join(', ');
            const conditionClauses = Object.entries(conditions).map(([column, value]) => `${column} = '${value}'`);
            sqlQuery += ` WHERE ${conditionClauses.join(' AND ')}`;
        }
        else if (methot === "INSERT") {
            sqlQuery = `INSERT INTO ${table} (${Object.keys(sharedData).join(', ')}) VALUES `;
            const insertValues = Object.values(sharedData).map(value => `'${value}'`);
            sqlQuery += `(${insertValues.join(', ')})`;
        }
        else if (methot === "DROP") {
            sqlQuery = `
            DO $$ 
            BEGIN 
            EXECUTE 'DROP TABLE ' || quote_ident(${table}); 
            END $$;`;
        }
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    console.log(sqlQuery);
                    const result = this.db.any(sqlQuery);
                    resolve(result);
                }
                catch (error) {
                    reject("Hata oluştu: " + error);
                }
            }, 1000);
        });
    }
    selectAllTable() {
        return this.db.any(sql_1.genericSql.selectAllTable);
    }
}
exports.GenericSqlRepository = GenericSqlRepository;
