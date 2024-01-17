import {OrderApi} from "../../OrderApi";
import {sfcInfoDto} from "../../dto/sfcInfo/sfcInfoDto";
import {ApiResponse} from "../../dto/ApiResponse";
import { FindOrderResponse } from '../../../apisdk/sapdme_order';
import {SfcDetailResponse} from "../../../apisdk/sapdme_sfc";
import {db} from '../../../db';
import {ISfcAssy, Itest} from "../../../db/models";
import xsenv from "@sap/xsenv";
import * as hanaClient from '@sap/hana-client';

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

    static  async dinamikTable(): Promise<ApiResponse>{
        let apiResp = new ApiResponse();

        try{
            // Dizi oluşturma

            let clm: string[] = ['apple', 'banana', 'orange'];
            let type: string[] = ['NCHAR(412)', 'NCHAR(412)', 'NCHAR(412)'];


                db.genericSql.createGenericTable(clm,type);
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


}