sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/downtimeExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/downtimeExtensionProvider/PluginLifecycleExtension",
    "com/maden/viewplugins/extension/downtimeExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/downtimeExtensionProvider/ExtensionUtilities"
], function (PluginExtensionProvider, PluginEventExtension, PluginLifecycleExtension, PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.downtimeExtensionProvider.ExtensionProvider", {
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