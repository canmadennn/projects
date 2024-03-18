 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/assemblyPointExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/assemblyPointExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/assemblyPointExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/assemblyPointExtensionProvider/ExtensionUtilities",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.assemblyPointExtensionProvider.ExtensionProvider", {
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
