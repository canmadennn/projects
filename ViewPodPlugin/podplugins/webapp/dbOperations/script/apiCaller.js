jQuery.sap.require("sap.m.MessageBox");

const API_URL = "https://demobackendservices.cfapps.us10-001.hana.ondemand.com/";

function apiGET(service, param, afterMethod) {
    const searchParams = Object.entries(param).map(([key, val]) => `${key}=${val}`).join('&');
    $.ajax({
        url: API_URL + service + "?" + searchParams,
        type: "GET",
        async: false,
        success: function (data) {
            console.log("Ajax Response: " + data);
            afterMethod(data);
        },
        error: function (error) {

            sap.m.MessageBox.error(error.responseText, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            }.bind(this));
        },
    });
}

function apiPostFetch(service, params,afterMethod) {
    fetch(API_URL + service , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then(data => console.log(data) ,afterMethod(data))
        .catch(error => console.error(error));

}

function apiPostAjax(service, params) {
    $.ajax({
        url: API_URL + service,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(params),
        /* beforeSend: function (xhr) {
             xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
             xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
             xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
         },*/
        success: function (data,xhr) {
            console.log('API yanıtı:', data.message);
            sap.m.MessageBox.show(data.message,"S");

        },
        error: function (xhr, status, data) {
            console.error('Hata:', xhr.responseJSON.message);
            sap.m.MessageBox.error(xhr.responseJSON.message, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            }.bind(this));
        }
    });
}

function apiPostAjax(service, params,afterMethod) {
    $.ajax({
        url: API_URL + service,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(params),
        success: function (data,xhr) {
            afterMethod === undefined ? sap.m.MessageBox.show(data.message, "S") : afterMethod(data);
           // console.log('API yanıtı:', data.message);
        },
        error: function (xhr, status, data) {
           // console.error('Hata:', xhr.responseJSON.message);
            afterMethod === undefined ? sap.m.MessageBox.show(xhr.responseJSON.message, "E") : afterMethod(xhr.responseJSON);
        }
    });
}

function apiPOST(service, param, afterMethod) {
    $.post(API_URL + service, JSON.stringify(param))
        .done((data, status) => {
            afterMethod(data);
        })
        .fail(function (e) {
            this.getView().setBusy(false);
            sap.m.MessageBox.error(e.responseJSON.message, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            });
        }.bind(this));
}

function apiPOSTFile(service, param, afterMethod) {
    var vd = new FormData();
    vd.append("myFileUpload", param.myFileUpload);
    fetch(API_URL + service, {
        body: vd,
        method: "POST"
    }).then(a => {
        a.json().then(r => {
            afterMethod(r);
        });
    }).catch(function (e) {
        this.getView().setBusy(false);
        sap.m.MessageBox.error(e.message, {
            title: "Error",
            actions: sap.m.MessageBox.Action.CLOSE
        });
    }.bind(this));
}