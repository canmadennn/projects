"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericTs = void 0;
const ApiResponse_1 = require("../../dto/ApiResponse");
const db_1 = require("../../../db");
class genericTs {
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
                apiResp.message = "İşlem Başarlı";
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
    static async dynamicSqlQueries(conditions, selectColumns, table, methot, sharedData, queris) {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            const result = await db_1.db.genericSql.dynamicSqlQueries(conditions, selectColumns, table, methot, sharedData, queris);
            apiResp.message = "İşlem Başarılı";
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
        // typeof kontrolü
        if (typeof value === 'string') {
            // Eğer value bir string ise güvenli bir şekilde kullanabiliriz.
            return value.toUpperCase();
        }
        else {
            // else if ile farklı türler eklenir ve olası dönüşümü yap
            console.error('Beklenmeyen tip:', value);
            return 'Error';
        }
    }
}
exports.genericTs = genericTs;
