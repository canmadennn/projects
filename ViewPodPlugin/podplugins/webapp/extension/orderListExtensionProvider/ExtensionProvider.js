 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/orderListExtensionProvider/CreateExtension",
    "com/maden/viewplugins/extension/orderListExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/orderListExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/orderListExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, CreateExtension, LifecycleExtension, PluginEventExtension, PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.orderListExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
           return [
               new CreateExtension(this.oExtensionUtilities),
               new LifecycleExtension(this.oExtensionUtilities),
               new PluginEventExtension(this.oExtensionUtilities),
               new PropertyEditorExtension(this.oExtensionUtilities)
           ];
        }
    })
});
