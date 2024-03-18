 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/orderCardExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/orderCardExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/orderCardExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities",
    "com/maden/viewplugins/extension/orderCardExtensionProvider/OrderCardUtility"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities, OrderCardUtility) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.orderCardExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
            this.oOrderCardUtility = new OrderCardUtility();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities, this.oOrderCardUtility);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities);
            this.oOrderCardUtility.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});
