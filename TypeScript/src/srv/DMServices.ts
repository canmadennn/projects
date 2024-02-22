import AxiosCaller from "./util/AxiosCaller";
import {ApiType} from "./enum/ApiType";
import {RequestType} from "./enum/RequestType";
import {FindOrderResponse, PageFindOrderResponse} from "../apisdk/sapdme_order";
import {OrderApi} from "./OrderApi";


export abstract class DMServices{


    static async getOrderList(params:any): Promise<FindOrderResponse[]> {
        try {
            const response:PageFindOrderResponse = (await AxiosCaller.callDMC(ApiType.ORDER, "/orders/list", RequestType.GET,params)).data;
            return response.content;
        } catch (error) {
            throw error;
        }
    }



}