sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/dm/dme/podfoundation/model/PodType",
    "../script/costum",
    "../script/apiCaller",
    "../script/customStyle",
], function(JSONModel, PluginViewController, PodType,costum,css) {
    "use strict";
    var c="s";

    var oPluginViewController = PluginViewController.extend("com.maden.viewplugins.serviceReturnTable.controller.PluginView", {
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

        /**
         * @see PluginViewController.onBeforeRenderingPlugin()
         */
        onBeforeRenderingPlugin: function() {
            this.subscribe("PodSelectionChangeEvent", this.onPodSelectionChangeEvent, this);
            this.subscribe("OperationListSelectEvent", this.onOperationChangeEvent, this);
            this.subscribe("WorklistSelectEvent", this.onWorkListSelectEvent, this);
        },

        onExit: function() {
            if (PluginViewController.prototype.onExit) {
                PluginViewController.prototype.onExit.apply(this, arguments);
            }
            this.unsubscribe("PodSelectionChangeEvent", this.onPodSelectionChangeEvent, this);
            this.unsubscribe("OperationListSelectEvent", this.onOperationChangeEvent, this);
            this.unsubscribe("WorklistSelectEvent", this.onWorkListSelectEvent, this);
        },

        onTest:function () {
            this.getOrderDetail(plant,order);
        },

        onPress:function (){

            const plant = sap.dm.dme.util.PlantSettings.getCurrentPlant();
            const sfc = this.getPodSelectionModel().getSelection().shopOrder.shopOrder;
            const params = {
                "clm":["test1","test2"],
                "tableName":"tableName",
                "type":["NCHAR(412)","NCHAR(412)","NCHAR(412)"]
            }

            /*         apiGET("getBomBySfc",params,this.setProp.bind(this));
          */

            //apiGET("ornekEndpoint",params,this.setPropx.bind(this));

            //apiPOST("ornekEndpoint",params,this.setPropx.bind(this))
            //apiPostAjax("ornekEndpoint",params);
          //  this.postTest(params);
            apiPostAjax("createGenericTable",params);

        },
        setPropx:function (data){
            console.log(data);
        },





        setProp:function (data){
            this.getView().byId("orderText").setText(data.data.order);
            this.getView().byId("matText").setText(data.data.material);
            this.getView().byId("matdescText").setText(data.data.materialDesc);
            this.getView().byId("orderQuanText").setText(data.data.ordQuan);
            this.getView().byId("sfcText").setText(data.data.sfc);
            this.getView().byId("statusText").setText(data.data.status);
        },


    })
    return oPluginViewController;
});
