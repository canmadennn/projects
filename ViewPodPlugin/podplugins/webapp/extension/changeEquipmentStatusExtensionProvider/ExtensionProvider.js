sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/changeEquipmentStatusExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/changeEquipmentStatusExtensionProvider/PluginLifecycleExtension",
    "com/maden/viewplugins/extension/changeEquipmentStatusExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/changeEquipmentStatusExtensionProvider/ExtensionUtilities"
], function (PluginExtensionProvider, PluginEventExtension, PluginLifecycleExtension, PropertyEditorExtension, ExtensionUtilities) {
    "use strict";

    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.changeEquipmentStatusExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },

        getExtensions: function () {
           return [
               new PluginEventExtension(this.oExtensionUtilities),
               new PluginLifecycleExtension(this.oExtensionUtilities),
               new PropertyEditorExtension(this.oExtensionUtilities)
           ];
        }
    })
});