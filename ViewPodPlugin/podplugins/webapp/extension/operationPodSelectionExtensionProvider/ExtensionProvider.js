 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/operationPodSelectionExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/operationPodSelectionExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/operationPodSelectionExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities",
    "com/maden/viewplugins/extension/utils/PodSelectionExtensionUtility"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities, ExtensionUtility) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.operationPodSelectionExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
            this.oExtensionUtility = new ExtensionUtility();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities, this.oExtensionUtility);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities, this.oExtensionUtility);
            this.oExtensionUtility.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});
