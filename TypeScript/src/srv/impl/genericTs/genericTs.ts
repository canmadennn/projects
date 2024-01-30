import {ApiResponse} from "../../dto/ApiResponse";
import {db} from '../../../db';
import {ISfcAssy, Itest,IgenericTables} from "../../../db/models";


export abstract class genericTs{

    static async dynamicTableCreate(clm: any[], type: any[], tablename: string): Promise<ApiResponse> {
        let apiResp = new ApiResponse();
        try {
            // createGenericTable fonksiyonu bir Promise döndürdüğü için await ile bekleyebiliriz.
            const result = await db.genericSql.createGenericTable(clm, type, tablename);

            // result değeri success özelliğine göre kontrol edildi.
            if (result.success) {
                apiResp.message = result.message;
                apiResp.status = 200;
            } else {
                apiResp.message = result.message;
                apiResp.status = 500;
            }
        } catch (e: any) {
            apiResp.message = e.message;
            apiResp.status = 500;
        }
        return apiResp;
    }

    static async dropTable(tablename:string): Promise<ApiResponse> {
        let apiResp = new ApiResponse();

        try {

            const result = await db.genericSql.dropGenericTable(tablename);

            if (result!=null) {
                console.log(result);
                apiResp.message = result.message;
                apiResp.data = result;
                apiResp.status = 200;

            }
        } catch (error:any) {
            console.error('Hata oluştu:', error.message);
            apiResp.data = error;
            apiResp.message = error.message;
            apiResp.status = 500;
        }
        return apiResp;
    }


    static async allTableSelect(): Promise<ApiResponse> {
        let apiResp = new ApiResponse();

        try {
            const result: IgenericTables[] | null = await db.genericSql.selectAllTable();

            if (result!=null) {
                console.log(result);
                apiResp.message = "İşlem Başarlı";
                apiResp.data = result;
                apiResp.status = 200;

            } else {
                console.error('Beklenen tip veya özellik bulunamadı.');
            }
        } catch (error) {
            console.error('Hata oluştu:', error);
            const resultError = this.processUnknownType(error); // result: "HELLO"
            apiResp.data = resultError.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }

        return apiResp;
    }

    static async dynamicSqlQueries(conditions: any[], selectColumns: any[], table: string,methot: string, sharedData: any[],queris:string): Promise<ApiResponse> {
        let apiResp = new ApiResponse();
        try {
            const result:any = await db.genericSql.dynamicSqlQueries(conditions, selectColumns, table,methot,sharedData,queris);
            apiResp.message = "İşlem Başarılı";
            apiResp.data = result;
            apiResp.status = 200;
        } catch (e: any) {
            console.log(e);
            apiResp.message = e.message;
            apiResp.status = 500;
        }
        return apiResp;
    }


    private static processUnknownType(value: unknown): string {
        // typeof kontrolü
        if (typeof value === 'string') {
            // Eğer value bir string ise güvenli bir şekilde kullanabiliriz.
            return value.toUpperCase();
        } else {
            // else if ile farklı türler eklenir ve olası dönüşümü yap
            console.error('Beklenmeyen tip:', value);
            return 'Error';
        }
    }





}