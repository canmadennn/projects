import {OrderApi} from "../../OrderApi";
import {sfcInfoDto} from "../../dto/sfcInfo/sfcInfoDto";
import {ApiResponse} from "../../dto/ApiResponse";
import { FindOrderResponse } from '../../../apisdk/sapdme_order';
import {SfcDetailResponse} from "../../../apisdk/sapdme_sfc";

export abstract class sfcInfo{
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


}