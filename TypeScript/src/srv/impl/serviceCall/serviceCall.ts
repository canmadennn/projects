import {ApiResponse} from "../../dto/ApiResponse";
import {db} from '../../../db';
import axios from 'axios';
import {ApiType} from "../../enum/ApiType";
import AxiosCaller from "../../util/AxiosCaller";
import {RequestType} from "../../enum/RequestType";
import {sfcInfoDto} from "../../dto/sfcInfo/sfcInfoDto";
import {FindOrderResponse} from "../../../apisdk/sapdme_order";
import {OrderApi} from "../../OrderApi";
import {DMServices} from "../../DMServices";
const cfAxios =require('sap-cf-axios').default;
const dmcAxios = cfAxios("DMC_OAuth");

export abstract class serviceCall{


    static async getOrderList(): Promise<any> {
        try {
            let response = await DMServices.getOrderList({ plant: "PP01" ,});

            console.log(response[0].order);
            return response[0].order;
        } catch (error) {
            return error;
        }
    }


    static async test(): Promise<any> {
        let queryParameters ={
            plant:"PP01"
        }
        dmcAxios.get(ApiType.ORDER+'/orders/list'+"?"+queryParameters)
            .then((response: { data: any; }) => {
                console.log(response.data);
                return response;
            }).catch((error: any) => {
            console.error('Error fetching orders:', error);
            return error;
        });
    }
}