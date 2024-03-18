 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/lineMonitorSelectionExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/lineMonitorSelectionExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/lineMonitorSelectionExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/lineMonitorSelectionExtensionProvider/ExtensionUtils",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, PropertyEditorExtension, ExtensionUtils, LogUtils) {
    "use strict";

    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.lineMonitorSelectionExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtils = new ExtensionUtils();
            this.oLogUtils = new LogUtils();
        },

        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtils, this.oLogUtils);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtils, this.oLogUtils);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oLogUtils);

            this.oExtensionUtils.setPluginEventExtension(oPluginEventExtension);
            oLifecycleExtension.setPluginEventExtension(oPluginEventExtension);

            return [ oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension ];
        }
    })
});
