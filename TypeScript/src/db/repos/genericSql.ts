import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {IgenericTables} from '../models';
import {genericSql as sql} from '../sql';

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



    createGenericTable(tableColumns:any[],tableColumnsType:any[],tableName:string): Promise<null> {
        return this.db.none(sql.createTable,[tableColumns,tableColumnsType,tableName]);
        //return this.db.result('select * from test');
    }
    selectAllTable(): Promise<IgenericTables[] | null> {
        return this.db.any(sql.selectAllTable);
    }


}
