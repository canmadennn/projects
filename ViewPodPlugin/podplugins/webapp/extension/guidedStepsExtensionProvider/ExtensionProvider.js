 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/guidedStepsExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/guidedStepsExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/guidedStepsExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, PropertyEditorExtension) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.guidedStepsExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
           return [
               new LifecycleExtension(this.oExtensionUtilities),
               new PluginEventExtension(this.oExtensionUtilities),
               new PropertyEditorExtension(this.oExtensionUtilities)
           ];
        }
    })
});
