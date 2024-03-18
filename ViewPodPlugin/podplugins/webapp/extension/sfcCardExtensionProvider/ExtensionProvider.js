 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/sfcCardExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/sfcCardExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/sfcCardExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities",
    "com/maden/viewplugins/extension/sfcCardExtensionProvider/SfcCardUtility"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities, SfcCardUtility) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.sfcCardExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
            this.oSfcCardUtility = new SfcCardUtility();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities, this.oSfcCardUtility);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities);
            this.oSfcCardUtility.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});
