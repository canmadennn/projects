 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/lineMonitorYieldAndScrapExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/lineMonitorYieldAndScrapExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/lineMonitorYieldAndScrapExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/lineMonitorYieldAndScrapExtensionProvider/ExtensionUtils",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, PropertyEditorExtension, ExtensionUtils, LogUtils) {
    "use strict";

    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.lineMonitorYieldAndScrapExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtils = new ExtensionUtils();
            this.oLogUtils = new LogUtils();
        },

        getExtensions: function () {
            const oLifecycleExtension = new LifecycleExtension(this.oExtensionUtils, this.oLogUtils);
            const oPluginEventExtension = new PluginEventExtension(this.oExtensionUtils, this.oLogUtils);
            const oPropertyEditorExtension = new PropertyEditorExtension(this.oLogUtils);

            // make public functions available to utils and lifecycle extension
            this.oExtensionUtils.setPluginEventExtension(oPluginEventExtension);
            oLifecycleExtension.setPluginEventExtension(oPluginEventExtension);

            return [ oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension ];
        }
    })
});
