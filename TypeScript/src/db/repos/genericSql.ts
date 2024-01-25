import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {IgenericTables} from '../models';
import {genericSql as sql} from '../sql';
import {test as test} from '../test';
import {promises} from "dns";


/*
 This repository mixes hard-coded and dynamic SQL, just to show how to use both.
*/

export class GenericSqlRepository {

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
    constructor(private db: IDatabase<any>, private pgp: IMain) {
        /*
          If your repository needs to use helpers like ColumnSet,
          you should create it conditionally, inside the constructor,
          i.e. only once, as a singleton.
        */
    }



    createGenericTable(tableColumns: any[], tableColumnsType: any[], tableName: string): Promise<{ success: boolean, message: string }> {
        return new Promise((resolve, reject) => {

            this.db.none(sql.createTable, [tableColumns, tableColumnsType, tableName])
                .then(() => {
                    resolve({ success: true, message: "Tablo başarıyla oluşturuldu." });
                })
                .catch((error) => {
                    reject({ success: false, message: `Tablo oluşturma hatası: ${error.message || "Bilinmeyen bir hata"}` });
                });
        });
    }

    dropGenericTable(tableName: string): Promise<{ success: boolean, message: string }> {
        return new Promise((resolve, reject) => {
            this.db.none(sql.dropTable, [tableName])
                .then(() => {
                    resolve({ success: true, message: "Tablo başarıyla silindi." });
                })
                .catch((error) => {
                    reject({ success: false, message: `Tablo silme hatası: ${error.message || "Bilinmeyen bir hata"}` });
                });
        });
    }





     dynamicSelectTable(where: any[], param: any[], tablename: string) {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    // Asenkron bir işlem simülasyonu (örneğin, bir veritabanı sorgusu)
                    const result = this.db.any(sql.selectSelectedTable);

                    // Sorgu sonucunu resolve et
                    resolve(result);
                } catch (error) {
                    // Hata durumunu reject et
                    reject("Hata oluştu: " + error);
                }
            }, 1000);
        });
    }






    selectAllTable(): Promise<IgenericTables[] | null> {
        return this.db.any(sql.selectAllTable);
    }


}
