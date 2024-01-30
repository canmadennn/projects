sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/dm/dme/podfoundation/model/PodType",
    "../../script/apiCaller",
    "sap/m/MessageBox"
], function (JSONModel, PluginViewController, PodType, costum, MessageBox) {
    "use strict";
    var cess = "s";

    var oPluginViewController = PluginViewController.extend("com.maden.viewplugins.dbOperations.controller.PluginView", {
        metadata: {},

        onAddRow: function () {
            var oModel = this.getView().getModel();
            var aTableData = oModel.getProperty("/tableData");
            aTableData.push({colName: "", colType: ""});
            oModel.setProperty("/tableData", aTableData);
            //this.getMetadata().getProperties();
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

        onTableCreate: function () {
            var tableNameInput = this.getView().byId("tableNameInput").getValue();
            var params = {
                "clm": [],
                "type": [],
                "tableName": ""
            };
            var oTable = this.byId("createTable");
            var oModel = oTable.getModel(); //
            var aTableData = oModel.getProperty("/tableData");
            if (aTableData.length === 0) return MessageBox.error("Tablo Alanları Boş");
            if (tableNameInput === "") return MessageBox.error("Tablo İsmi Boş");
            var hasError = aTableData.some(function (columnData) {
                if (columnData.colName === "" || columnData.colType === "") {
                    MessageBox.error("hata2");
                    return true;
                }
                return false;
            });

            if (hasError) return;
            aTableData.forEach(function (columnData) {
                params["clm"].push(columnData.colName.toLowerCase().trim());
                params["type"].push(columnData.colType.toUpperCase().trim());
            });
            params["tableName"] = tableNameInput.toLowerCase().trim();

            apiPostAjax("createGenericTable", params, this.onTableCreateReturn.bind(this));
        },

        onTableCreateReturn: function (data) {
            sap.m.MessageBox.show(data.message, data.status === 200 ? "S" : "E");
            this.allTableData();
            //scc dönerse tablonun içindeki verileri clear at
        },

        allTableData: function (data) {
            if (data !== undefined) {
                sap.m.MessageBox.show(data.message, data.status === 200 ? "S" : "E");
                data.status === 200 && this.getView().byId("existingTablesCombo").setSelectedKey("");
            }
            apiGETNoParam("allTableSelect", this.allTableModel.bind(this));
        },
        allTableModel: function (data) {
            var oModel = new JSONModel();
            oModel.setSizeLimit(1000);
            oModel.setData(data.data);
            this.getView().setModel(oModel, "existingTables");
        },

        onDeleteTableButton: function () {
            let comboBoxData = this.getView().byId("existingTablesCombo").getSelectedKey();
            var params = {
                "tableName": comboBoxData
            };
            apiGET("dropTable", params, this.allTableData.bind(this));
        },


        queryRunButton: function () {

            var queryInput = this.getView().byId("queryInput").getValue();
            if (queryInput == "") return MessageBox.error("Query Alanı boş");
            var params = {
                "methot": "QUERY",
                "query": queryInput
            };
            apiPostAjax("dynamicSqlQueries", params);
            if (this.getView().byId("selectTableNameCombo").getSelectedKey() == queryInput) {
                apiPostAjax("dynamicSqlQueries", this.selectParams, this.selectTableModel.bind(this));
            }
        },

        insertTableButton: function () {
            var sharedDataInput = this.getView().byId("insertSharedDataInput").getValue();
            var tableNameCombo = this.getView().byId("insertTableNameCombo").getSelectedKey();
            if (tableNameCombo == "") return MessageBox.error("Tablo İsmi Boş");
            if (sharedDataInput == "") return MessageBox.error("İnsert Parametleri Boş");
            var params = {
                "table": tableNameCombo,
                "methot": "insert",
                "sharedData": {}
            };

            if (sharedDataInput) {
                var columnsAndValueArray = sharedDataInput.split(',');
                columnsAndValueArray.forEach(condition => {
                    var [column, value] = condition.split('=');
                    params.sharedData[column.toLowerCase()] = value;
                });
            }
            apiPostAjax("dynamicSqlQueries", params);
            if (this.getView().byId("selectTableNameCombo").getSelectedKey() == tableNameCombo) {
                apiPostAjax("dynamicSqlQueries", this.selectParams, this.selectTableModel.bind(this));
            }
        },

        updateTableButton: function () {
            var sharedDataInput = this.getView().byId("updateSharedDataInput").getValue();
            var tableNameCombo = this.getView().byId("updateTableNameCombo").getSelectedKey();
            var conditionsDataInput = this.getView().byId("updateConditionsInput").getValue();
            if (tableNameCombo == "") return MessageBox.error("Tablo İsmi Boş");
            if (sharedDataInput == "") return MessageBox.error("Update Parametleri Boş");
            var params = {
                "table": tableNameCombo,
                "methot": "update",
                "sharedData": {},
                "conditions": {}
            };

            var columnsAndValueArray = sharedDataInput.split(',');
            columnsAndValueArray.forEach(condition => {
                var [column, value] = condition.split('=');
                params.sharedData[column.toLowerCase()] = value;
            });

            var conditionsArray = conditionsDataInput.split(',');
            conditionsArray.forEach(condition => {
                var [column, value] = condition.split('=');
                params.conditions[column.toLowerCase()] = value;
            });

            apiPostAjax("dynamicSqlQueries", params);

            if (this.getView().byId("selectTableNameCombo").getSelectedKey() == tableNameCombo) {
                apiPostAjax("dynamicSqlQueries", this.selectParams, this.selectTableModel.bind(this));
            }
        },


        selectTableData: function () {
            var columnsInput = this.getView().byId("columnsInput").getValue().toLowerCase();
            var tableNameCombo = this.getView().byId("selectTableNameCombo").getSelectedKey();
            var conditionsInput = this.getView().byId("conditionsInput").getValue();
            var querisInput = this.getView().byId("querisInput").getValue();

            var params = {
                "table": tableNameCombo,
                "selectColumns": [],
                "methot": "SELECT",
                "conditions": {},
                "query": ""
            };
            if (querisInput != "") {
                params.query = querisInput;
                params.methot = "QUERY";
            } else {
                if (tableNameCombo == "") return MessageBox.error("Tablo İsmi Boş");
                if (columnsInput == "") return MessageBox.error("Tablo Kolonları Boş")
            }
            var conditionsArray = conditionsInput.split(',');
            conditionsArray.forEach(condition => {
                var [column, value] = condition.split('=');
                params.conditions[column] = value;
            });
            var columnsArray = columnsInput.split(',');
            params.selectColumns = columnsArray;
            this.selectParams = params;
            apiPostAjax("dynamicSqlQueries", params, this.selectTableModel.bind(this));
        },

        selectTableModel: function (data) {
            if (data.status == 500) {
                MessageBox.error(data.message);
                return;
            }
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({tableData: data.data});
            var oTable = this.getView().byId("selectDbTable")
            oTable.removeAllColumns();
            oTable.setModel(oModel);
            for (var key in data.data[0]) {
                var oColumn = new sap.m.Column({
                    header: new sap.m.Text({text: key}),
                    width: "auto"
                });
                oTable.addColumn(oColumn);
                oTable.bindItems("/tableData", function (id, context) {
                    var item = context.getObject();
                    var cells = [];

                    for (var key in item) {
                        cells.push(new sap.m.Text({text: "{" + key + "}"}));
                    }

                    return new sap.m.ColumnListItem({
                        cells: cells
                    });
                });
            }
            oTable.setVisible(true);
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

            this.allTableData();
        },


    })
    return oPluginViewController;
});
