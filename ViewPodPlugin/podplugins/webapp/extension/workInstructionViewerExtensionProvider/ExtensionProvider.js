sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/workInstructionViewerExtensionProvider/CreateExtension"
], function (PluginExtensionProvider, CreateExtension) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.workInstructionViewerExtensionProvider.ExtensionProvider", {
        constructor: function () {
        },
        getExtensions: function () {
            return [
                new CreateExtension()
            ];
        }
    });
});
