sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/speedlossExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/speedlossExtensionProvider/PluginLifecycleExtension",
    "com/maden/viewplugins/extension/speedlossExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/speedlossExtensionProvider/ExtensionUtilities"
], function (PluginExtensionProvider, PluginEventExtension, PluginLifecycleExtension, PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.speedlossExtensionProvider.ExtensionProvider", {
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