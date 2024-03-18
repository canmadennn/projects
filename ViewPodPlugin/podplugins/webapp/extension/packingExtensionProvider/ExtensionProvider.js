sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/packingExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/packingExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/packingExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/packingExtensionProvider/CreateExtension"
], function (PluginExtensionProvider, PluginEventExtension, LifecycleExtension, PropertyEditorExtension, CreateExtension) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.packingExtensionProvider.ExtensionProvider", {
        constructor: function () {
        },
        getExtensions: function () {
            return [
                new PluginEventExtension(),
                new LifecycleExtension(),
                new PropertyEditorExtension(),
                new CreateExtension()
            ];
        }
    });
});
