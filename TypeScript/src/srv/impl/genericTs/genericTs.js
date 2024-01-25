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
    static async dynamicTableCreate(clm, type, tablename) {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            // createGenericTable fonksiyonu bir Promise döndürdüğü için await ile bekleyebiliriz.
            const result = await db_1.db.genericSql.createGenericTable(clm, type, tablename);
            // result değeri success özelliğine göre kontrol edildi.
            if (result.success) {
                apiResp.message = result.message;
                apiResp.status = 200;
            }
            else {
                apiResp.message = result.message;
                apiResp.status = 500;
            }
        }
        catch (e) {
            apiResp.message = e.message;
            apiResp.status = 500;
        }
        return apiResp;
    }
    static async dropTable(tablename) {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            const result = await db_1.db.genericSql.dropGenericTable(tablename);
            if (result != null) {
                console.log(result);
                apiResp.message = result.message;
                apiResp.data = result;
                apiResp.status = 200;
            }
        }
        catch (error) {
            console.error('Hata oluştu:', error.message);
            apiResp.data = error;
            apiResp.message = error.message;
            apiResp.status = 500;
        }
        return apiResp;
    }
    static async allTableSelect() {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            const result = await db_1.db.genericSql.selectAllTable();
            if (result != null) {
                console.log(result);
                apiResp.message = "SCC";
                apiResp.data = result;
                apiResp.status = 200;
            }
            else {
                console.error('Beklenen tip veya özellik bulunamadı.');
            }
        }
        catch (error) {
            console.error('Hata oluştu:', error);
            const resultError = this.processUnknownType(error); // result: "HELLO"
            apiResp.data = resultError.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
    static async dynamicSelectTable(where, param, tablename) {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            const result = await db_1.db.genericSql.dynamicSelectTable(where, param, tablename);
            apiResp.message = "SCC";
            apiResp.data = result;
            apiResp.status = 200;
        }
        catch (e) {
            console.log(e);
            apiResp.message = e.message;
            apiResp.status = 500;
        }
        return apiResp;
    }
    static processUnknownType(value) {
        // typeof kontrolü ile tip kontrolü yapabiliriz.
        if (typeof value === 'string') {
            // Eğer value bir string ise güvenli bir şekilde kullanabiliriz.
            return value.toUpperCase();
        }
        else {
            // Eğer value başka bir türde ise, uygun bir şekilde işlem yapmalıyız.
            console.error('Beklenmeyen tip:', value);
            return 'Error';
        }
    }
}
exports.genericTs = genericTs;
