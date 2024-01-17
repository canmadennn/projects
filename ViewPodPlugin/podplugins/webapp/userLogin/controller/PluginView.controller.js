sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/dm/dme/podfoundation/model/PodType",
    "../script/apiCaller"
], function(JSONModel, PluginViewController, PodType,costum) {
    "use strict";
    var cess="s";

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

        onPressInterest:function () {
         var userID=this.getView().byId("userNameInput").getValue();
          console.log( userID+"çıkart")
        },

        onPressAdd:function (){

            const plant = sap.dm.dme.util.PlantSettings.getCurrentPlant();
          //  const sfc = this.getPodSelectionModel().getSelection().shopOrder.shopOrder;
            var userID=this.getView().byId("userNameInput").getValue();
            console.log(plant+"       "+userID+"     "+"ekle")

            const params = {

            };
            apiGET("getData",params,this.setProp.bind(this));
        },

        setProp:function (data) {
            console.log(data)
        },






    })
    return oPluginViewController;
});
