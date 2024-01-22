sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/dm/dme/podfoundation/model/PodType",
    "../script/apiCaller"
], function(JSONModel, PluginViewController, PodType,costum) {
    "use strict";
    var cess="s";

    var oPluginViewController = PluginViewController.extend("com.maden.viewplugins.dbOperations.controller.PluginView", {
        metadata : {
            properties: {
            }
        },

        onAfterRendering(){},
        onInit: function() {
            if (PluginViewController.prototype.onInit) {
                PluginViewController.prototype.onInit.apply(this, arguments);
            }
            var oModel = new JSONModel({
                tableData: []
            });
            this.getView().setModel(oModel);
                const oData = {
                    "item": [
                        {
                            "Type":"VARCHAR(255)"
                        },
                        {
                            "Type":"NUMERIC"
                        },
                        {
                            "Type":"BOOLEAN"
                        },
                        {
                            "Type":"TIMESTAMP"
                        },
                        {
                            "Type":"INTEGER"
                        }
                        ]
                };

            oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel, "getClmTypeModel");


        },

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

        onAddRow: function () {
            var oModel = this.getView().getModel();
            var aTableData = oModel.getProperty("/tableData");
            aTableData.push({ colName: "", colType: "" });
            oModel.setProperty("/tableData", aTableData);
        },

        onDeleteRow: function (oEvent) {
            var oModel = this.getView().getModel();
            var oItem = oEvent.getSource().getParent();
            var iIndex = oItem.getBindingContext().getPath().split("/")[2];
            var aTableData = oModel.getProperty("/tableData");
            aTableData.splice(iIndex, 1);
            oModel.setProperty("/tableData", aTableData);
        },

        onGetAllData: function() {
            var oTable = this.byId("createTable");
            var oModel = oTable.getModel(); //
            var aTableData = oModel.getProperty("/tableData");
            var params = {
                "clm": [],
                "type": [],
                "tableName": ""
            };

            aTableData.forEach(function(columnData) {
                params["clm"].push(columnData.colName);
                params["type"].push(columnData.colType);
            });

            params["tableName"] = this.getView().byId("tableNameInput").getValue();

            apiPostFetch("createGenericTable",params,this.setPropx.bind(this));
        },

        setPropx: function(data) {
            console.log(data);
        },




        onComboBoxSelectionChange: function(oEvent) {
            var oComboBox = oEvent.getSource();
            var sSelectedText = oComboBox.getSelectedItem().getText();
            var index = oEvent.getSource().getParent().getBindingContext().getPath().split("/")[2]
            this.getView().getModel().getProperty("/tableData")[index].colType=sSelectedText;
        },
    })
    return oPluginViewController;
});
