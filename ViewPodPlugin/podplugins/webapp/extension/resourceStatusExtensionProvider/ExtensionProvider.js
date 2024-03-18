sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/resourceStatusExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/resourceStatusExtensionProvider/PluginLifecycleExtension",
    "com/maden/viewplugins/extension/resourceStatusExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/resourceStatusExtensionProvider/ExtensionUtilities"
], function (PluginExtensionProvider, PluginEventExtension, PluginLifecycleExtension, PropertyEditorExtension, ExtensionUtilities) {
    "use strict";

    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.resourceStatusExtensionProvider.ExtensionProvider", {
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