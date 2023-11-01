import {ApiResponse} from "../dto/ApiResponse";
import {AxiosError, AxiosResponse} from "sap-cf-axios";
import {ApiType} from "../enum/ApiType";
import {RequestType} from "../enum/RequestType";

const cfAxios =require('sap-cf-axios').default;
const dmcAxios = cfAxios("DMC_OAuth");
class AxiosCaller {
    static async callDMC(apiType: ApiType, method: string, reqType: RequestType, params: Object): Promise<any> {
        function catchError(err: any) {
            let resp: ApiResponse = new ApiResponse();
            if (err instanceof AxiosError) {
                resp.status = err.response?.status;
                resp.data = err.response?.data;
                resp.message = err.response?.data.message;
            }
            else if(err.data){
                resp.status = 500;
                resp.data = err.data.message;
                resp.message = "Error";
            }
            else {
                resp.status = 500;
                resp.data = "Unknown error: Axioscaller: 24";
                resp.message = "Error";
            }
            return resp;
        }
        if (reqType == RequestType.GET) {
            const searchParams = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
            return await dmcAxios.get(apiType+method+"?"+searchParams)
                .then(function (value: AxiosResponse) {
                    let resp: ApiResponse = new ApiResponse();
                    resp.data = value.data;
                    return resp;
                })
                .catch(catchError)
        }
        else if (RequestType.POST || RequestType.PUT || RequestType.PATCH) {
            return await dmcAxios.post((apiType + method), params)
                .then(function (value: AxiosResponse) {
                    let resp: ApiResponse = new ApiResponse();
                    resp.data = value.data;
                    return resp;
                })
                .catch(catchError)
        }
    }

}
export = AxiosCaller;
