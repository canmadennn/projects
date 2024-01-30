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
    /*   dynamicSqlQueries(conditions: any[], selectColumns: any[], table: string, methot: string, sharedData: any[]) {
           const conditionClauses = conditions
               ? Object.entries(conditions).map(([column, value]) => `${column.toLowerCase()} = '${value}'`) : [];
           let sqlQuery = '';
   
           switch (methot.toUpperCase()) {
               case 'SELECT':
                   sqlQuery = `SELECT ${selectColumns.map(column => column.toLowerCase()).join(',')} FROM ${table.toLowerCase()}${conditionClauses.length ? ` WHERE ${conditionClauses.join(' AND ')}` : ''}`;
                   break;
               case 'UPDATE':
                   sqlQuery = `UPDATE ${table.toLowerCase()} SET ${Object.entries(sharedData).map(([column, value]) => `${column} = '${value}'`).join(', ')} WHERE ${conditionClauses.join(' AND ')}`;
                   break;
               case 'INSERT':
                   sqlQuery = `INSERT INTO ${table.toLowerCase()} (${Object.keys(sharedData).map(column => column.toLowerCase()).join(', ')}) VALUES (${Object.values(sharedData).map(value => `'${value}'`).join(', ')})`;
                   break;
               case 'DELETE':
                   sqlQuery = `DELETE FROM ${table.toLowerCase()} WHERE ${conditionClauses.join(' AND ')}`;
                   break;
               default:
                   console.error('Unsupported method:', methot);
                   break;
           }
           return new Promise((resolve, reject) => {
               setTimeout(async () => {
                   try {
                       console.log(sqlQuery);
                       const result = this.db.any(sqlQuery);
                       resolve(result);
                   } catch (error) {
                       reject("Hata oluştu: " + error);
                   }
               }, 1000);
           });
       }*/
    async dynamicSqlQueries(conditions, selectColumns, table, methot, sharedData, queris) {
        const conditionClauses = conditions
            ? Object.entries(conditions).map(([column, value]) => `${column.toLowerCase()} = '${value}'`) : [];
        let sqlQuery = '';
        switch (methot.toUpperCase()) {
            case 'SELECT':
                sqlQuery = `SELECT ${selectColumns.map(column => column.toLowerCase()).join(',')} FROM ${table.toLowerCase()}${conditionClauses.length ? ` WHERE ${conditionClauses.join(' AND ')}` : ''}`;
                break;
            case 'UPDATE':
                sqlQuery = `UPDATE ${table.toLowerCase()} SET ${Object.entries(sharedData).map(([column, value]) => `${column} = '${value}'`).join(', ')} WHERE ${conditionClauses.join(' AND ')}`;
                break;
            case 'INSERT':
                sqlQuery = `INSERT INTO ${table.toLowerCase()} (${Object.keys(sharedData).map(column => column.toLowerCase()).join(', ')}) VALUES (${Object.values(sharedData).map(value => `'${value}'`).join(', ')})`;
                break;
            case 'DELETE':
                sqlQuery = `DELETE FROM ${table.toLowerCase()} WHERE ${conditionClauses.join(' AND ')}`;
                break;
            case 'QUERY':
                sqlQuery = queris;
                break;
            default:
                console.error('Unsupported method:', methot);
                break;
        }
        try {
            console.log(sqlQuery);
            const result = await this.db.any(sqlQuery);
            return result;
        }
        catch (error) {
            throw new Error(`Hata oluştu: ${error}`);
        }
    }
    selectAllTable() {
        return this.db.any(sql_1.genericSql.selectAllTable);
    }
}
exports.GenericSqlRepository = GenericSqlRepository;
