"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericTs = void 0;
const OrderApi_1 = require("../../OrderApi");
const sfcInfoDto_1 = require("../../dto/sfcInfo/sfcInfoDto");
const ApiResponse_1 = require("../../dto/ApiResponse");
const db_1 = require("../../../db");
class genericTs {
    static async getBOMInfoBySfc(plant, sfc) {
        let apiResp = new ApiResponse_1.ApiResponse();
        let apiResq = new ApiResponse_1.ApiResponse();
        try {
            let componentsResponse = new sfcInfoDto_1.sfcInfoDto();
            // @ts-ignore
            let orderResp = (await OrderApi_1.OrderApi.getOrders(plant, sfc)).data;
            // @ts-ignore
            // let sfcResp: SfcDetailResponse = (await OrderApi.getSfcDetails(plant, orderResp.sfcs[0])).data;
            apiResp = await OrderApi_1.OrderApi.getSfcDetails(plant, orderResp.sfcs[0]);
            //  apiResp.data = sfcResp;
        }
        catch (e) {
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
    static async getUser() {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            db_1.db.userOperations.createUserTable();
            apiResp.message = "SCC";
            apiResp.data = "kayit basarili";
            apiResp.status = 200;
        }
        catch (e) {
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
    static async dinamikTable() {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            // Dizi oluşturma
            let clm = ['apple', 'banana', 'orange'];
            let type = ['NCHAR(412)', 'NCHAR(412)', 'NCHAR(412)'];
            db_1.db.genericSql.createGenericTable(clm, type);
            apiResp.message = "SCC";
            apiResp.data = "kayit basarili";
            apiResp.status = 200;
        }
        catch (e) {
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
}
exports.genericTs = genericTs;
