'use strict';


const params =
    {
        "baseUrl": "https://api.us20.dmc.cloud.sap"
    }

const auth_config =
    {
        "url": "https://slv-dmc-dev-002-p1ebyin6.authentication.us20.hana.ondemand.com/oauth/token",
        "clientid": "sb-8d8662cc-b091-4f42-b96d-5ca8aaf5bcc0!b1472|dmc-services-quality!b257",
        "clientsecret": "Cv7LYN20LjySlCjgg44iKhI7Xec=",
        "grant_type": "oauth2"
    }

const SYS_URL = params.baseUrl;

const URL = {
    getOrderDetail: SYS_URL + "/order/v1/orders"
};


const authService = {
    getOauthToken : function(){
        const AUTHORIZATION = 'Basic ' + Buffer.from(auth_config.clientid + ':' + auth_config.clientsecret).toString('base64');
        let formData = {
            clientid : auth_config.clientid,
            grant_type : auth_config.grant_type
        };
        return new Promise((resolve , reject)=>{
            request.post({
                url : auth_config.url ,
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded",
                    "Authorization" : AUTHORIZATION
                },
                form : formData
            },(err,httpResponse,body)=>{
                if(err){
                    reject(err);
                    return ;
                }
                resolve(JSON.parse(body));
            });
        });
    }
}

const httpService = {
    get : function(options , callback){
        authService.getOauthToken().then((result)=>{

            console.log("AUTHTOKEN - GET SUCCESSFUL");
            options = Object.assign({},{
                headers : {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " +  result.access_token
                }},options);
            request.get(options , callback);
        });
    }
}


const dmcService = {
    getOrderDetail : function(plant,order){
        return new Promise( (resolve , reject)=>{
            console.log("URL ---" + URL.getOrderDetail + "?order=" + order + "&plant=" + plant);
            httpService.get({
                url : URL.getOrderDetail + "?order=" + order + "&plant=" + plant
            },(err , httpResponse , body)=>{
                if(err){
                    reject(err);
                    return ;
                }
                resolve(body);
            });
        });
    }
}

