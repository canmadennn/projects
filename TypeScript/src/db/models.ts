/*
  Here we typed in simple models manually. But there are many tools out there
  for generating database models automatically, from an existing database.

  For example, schemats: https://github.com/sweetiq/schemats
*/

export interface ISfcAssy {
    id: number;
    sfc_bo: string;
    shop_order_bo: string;
    resource_bo: string;
    operation_bo: string;
    component_bo: string;
    qty: number;
    bom_component_bo: string;
    insUser: string;
    insDate: Date;
    updUser: string;
    updDate: Date;
    is_deleted: string;
}

export interface Itest{
    test1:string;
    test2:string;
}

export interface IuserOperations{
    ID:number;
    NAME:string;
    SURNAME:string;
    CARD_NUMBER:string
}

export interface IgenericTables{
    table_name:string
}