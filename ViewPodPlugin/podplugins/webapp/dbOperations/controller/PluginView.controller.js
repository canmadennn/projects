sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/dm/dme/podfoundation/model/PodType",
    "../script/apiCaller",
    "sap/m/MessageBox"
], function (JSONModel, PluginViewController, PodType, costum, MessageBox) {
    "use strict";
    var cess = "s";

    var oPluginViewController = PluginViewController.extend("com.maden.viewplugins.dbOperations.controller.PluginView", {
        metadata: {
            properties: {}
        },

        onAddRow: function () {
            var oModel = this.getView().getModel();
            var aTableData = oModel.getProperty("/tableData");
            aTableData.push({colName: "", colType: ""});
            oModel.setProperty("/tableData", aTableData);
        },
        onAfterRendering() {
        },

        onBeforeRenderingPlugin: function () {
            this.subscribe("PodSelectionChangeEvent", this.onPodSelectionChangeEvent, this);
            this.subscribe("OperationListSelectEvent", this.onOperationChangeEvent, this);
            this.subscribe("WorklistSelectEvent", this.onWorkListSelectEvent, this);
        },

        onComboBoxSelectionChange: function (oEvent) {
            var oComboBox = oEvent.getSource();
            var sSelectedText = oComboBox.getSelectedItem().getText();
            var index = oEvent.getSource().getParent().getBindingContext().getPath().split("/")[2]
            this.getView().getModel().getProperty("/tableData")[index].colType = sSelectedText;
        },

        onDeleteRow: function (oEvent) {
            var oModel = this.getView().getModel();
            var oItem = oEvent.getSource().getParent();
            var iIndex = oItem.getBindingContext().getPath().split("/")[2];
            var aTableData = oModel.getProperty("/tableData");
            aTableData.splice(iIndex, 1);
            oModel.setProperty("/tableData", aTableData);
        },

        onExit: function () {
            if (PluginViewController.prototype.onExit) {
                PluginViewController.prototype.onExit.apply(this, arguments);
            }
            this.unsubscribe("PodSelectionChangeEvent", this.onPodSelectionChangeEvent, this);
            this.unsubscribe("OperationListSelectEvent", this.onOperationChangeEvent, this);
            this.unsubscribe("WorklistSelectEvent", this.onWorkListSelectEvent, this);
        },

        onGetAllData: function () {
           var tableNameInput= this.getView().byId("tableNameInput").getValue();
            var params = {
                "clm": [],
                "type": [],
                "tableName": ""
            };
            var oTable = this.byId("createTable");
            var oModel = oTable.getModel(); //
            var aTableData = oModel.getProperty("/tableData");
            if (aTableData.length === 0) return MessageBox.error("tablo alanaları bos");
            if (tableNameInput === "") return MessageBox.error("tablo ismi bos");


            var hasError = aTableData.some(function(columnData) {
                if (columnData.colName === "" || columnData.colType === "") {
                    MessageBox.error("hata2");
                    return true;
                }
                return false;
            });

            if (hasError) return;

            aTableData.forEach(function(columnData) {
                params["clm"].push(columnData.colName.toUpperCase());
                params["type"].push(columnData.colType.toUpperCase());
            });
            params["tableName"] = tableNameInput;

            apiPostAjax("createGenericTable", params,this.setPropx.bind(this));
        },

        setPropx: function (data) {
            sap.m.MessageBox.show(data.message, data.status === 200 ? "S" : "E");
        },

        onInit: function () {
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
                        "Type": "VARCHAR(255)"
                    },
                    {
                        "Type": "NUMERIC"
                    },
                    {
                        "Type": "BOOLEAN"
                    },
                    {
                        "Type": "TIMESTAMP"
                    },
                    {
                        "Type": "INTEGER"
                    }
                ]
            };

            oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel, "getClmTypeModel");


        },



    })
    return oPluginViewController;
});
