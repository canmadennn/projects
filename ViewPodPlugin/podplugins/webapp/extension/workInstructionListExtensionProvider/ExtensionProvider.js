sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/workInstructionListExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/workInstructionListExtensionProvider/PluginEventExtension"
], function (PluginExtensionProvider, CreateExtension, PluginEventExtension) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.workInstructionListExtensionProvider.ExtensionProvider", {
        constructor: function () {
        },
        getExtensions: function () {
            return [
                new CreateExtension(),
                new PluginEventExtension()
            ];
        }
    });
});
