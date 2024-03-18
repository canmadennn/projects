 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/operationListExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/operationListExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/operationListExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.operationListExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities);
            oLifecycleExtension.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});
