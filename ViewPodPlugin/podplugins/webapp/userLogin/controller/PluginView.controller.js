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
            //test("allTableSelect", this.allTableModel.bind(this));
            },

        onPressInterest: function (data) {
            MessageBox.show("test2","S");
           // test("allTableSelect", this.allTableModel.bind(this));
            },


    })
    return oPluginViewController;
});
