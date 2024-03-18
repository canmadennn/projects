sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/dm/dme/podfoundation/model/PodType",
    "../../script/apiCaller",
    "sap/m/MessageBox"
], function(JSONModel, PluginViewController, PodType,costum,MessageBox) {
    "use strict";


    var oPluginViewController = PluginViewController.extend("com.maden.viewplugins.userLogin.controller.PluginView", {
        metadata : {
            properties: {
            }
        },

        onAfterRendering(){},
        onInit: function() {

            if (PluginViewController.prototype.onInit) {
                PluginViewController.prototype.onInit.apply(this, arguments);
            }

        },

        onPressAdd: function (data) {
            MessageBox.show("test","E");
            var oModel = new sap.ui.model.json.JSONModel();
            jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                url: "/serviceCall",
                dataType: "json",
                success: function(data) {
                    // Veriyi modele yükleme
                    oModel.setData(data);
                },
                error: function(error) {
                    console.error("API çağrısında hata oluştu: " + error);
                }
            });





        },

        onPressInterest: function (data) {
            // Hedef destinasyon adı
            var destinationName = "northwind";

// SAP Cloud Platform Destination Service URL
            var destinationServiceUrl = "https://1a8fcc0etrial.authentication.us10.hana.ondemand.com";

// Hedef destinasyon yapılandırmasını almak için istek yapma
            $.ajax({
                type: "GET",
                url: destinationServiceUrl + "/destination-configuration/v1/destinations/" + destinationName,
                success: function(data) {
                    // Hedef destinasyon yapılandırmasını al
                    var destination = data;
                    // Hedef destinasyonun URL'sini al
                    var destinationUrl = destination.destinationConfiguration.URL;
                    console.log("Hedef destinasyonun URL'si: " + destinationUrl);
                    // Burada hedef destinasyonun URL'sini kullanarak isteği gerçekleştirebilirsiniz
                },
                error: function(error) {
                    console.error("Hedef destinasyon alınırken bir hata oluştu:", error);
                }
            });


        },


    })
    return oPluginViewController;
});
