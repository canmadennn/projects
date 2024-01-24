import {OrderApi} from "../../OrderApi";
import {sfcInfoDto} from "../../dto/sfcInfo/sfcInfoDto";
import {ApiResponse} from "../../dto/ApiResponse";
import { FindOrderResponse } from '../../../apisdk/sapdme_order';
import {SfcDetailResponse} from "../../../apisdk/sapdme_sfc";
import {db} from '../../../db';
import {ISfcAssy, Itest,IgenericTables} from "../../../db/models";
import xsenv from "@sap/xsenv";
import * as hanaClient from '@sap/hana-client';
import {type} from "os";
import {error} from "pg-monitor";

export abstract class genericTs{

    static  async getBOMInfoBySfc(plant: string , sfc: string): Promise<ApiResponse>{
        let apiResp = new ApiResponse();
        let apiResq = new ApiResponse();
        try{

            let componentsResponse = new sfcInfoDto();

            // @ts-ignore
            let orderResp: FindOrderResponse = (await OrderApi.getOrders(plant, sfc)).data;
            // @ts-ignore
            // let sfcResp: SfcDetailResponse = (await OrderApi.getSfcDetails(plant, orderResp.sfcs[0])).data;


            apiResp=await OrderApi.getSfcDetails(plant, orderResp.sfcs[0]);




            //  apiResp.data = sfcResp;
        }
        catch (e: any){
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }

    static  async getUser(): Promise<ApiResponse>{
        let apiResp = new ApiResponse();

        try{
            db.userOperations.createUserTable();
            apiResp.message = "SCC";
            apiResp.data ="kayit basarili"
            apiResp.status = 200;
        }
        catch (e: any){
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }

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
                apiResp.message = "SCC";
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


    private static processUnknownType(value: unknown): string {
        // typeof kontrolü ile tip kontrolü yapabiliriz.
        if (typeof value === 'string') {
            // Eğer value bir string ise güvenli bir şekilde kullanabiliriz.
            return value.toUpperCase();
        } else {
            // Eğer value başka bir türde ise, uygun bir şekilde işlem yapmalıyız.
            console.error('Beklenmeyen tip:', value);
            return 'Error';
        }
    }





}