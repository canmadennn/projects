sap.ui.define([
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function(PropertyEditor) {
    "use strict";

    var oPropertyEditor = PropertyEditor.extend("com.maden.viewplugins.dbOperations.builder.PropertyEditor", {
        constructor: function (sId, mSettings) {
            PropertyEditor.apply(this, arguments);
           // this.setI18nKeyPrefix("dbOperations.");
            this.setResourceBundleName("com.maden.viewplugins.dbOperations.i18n.builder");
            this.setPluginResourceBundleName("com.maden.viewplugins.dbOperations.i18n.i18n");
        },

        addPropertyEditorContent : function(oPropertyFormContainer) {
            var oData = this.getPropertyData();
            this.addSwitch(oPropertyFormContainer, "notificationsEnabled", oData);
        },

        getDefaultPropertyData : function() {
             var oData = {
                "notificationsEnabled": true
            };

            return oData;
        }
    });

    return oPropertyEditor;
});