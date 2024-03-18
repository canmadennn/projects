 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/phaseDetailExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/phaseDetailExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/phaseDetailExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities",
    "com/maden/viewplugins/extension/phaseDetailExtensionProvider/PhaseDetailUtility"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities, PhaseDetailUtility) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.phaseDetailExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
            this.oPhaseDetailUtility = new PhaseDetailUtility();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities, this.oPhaseDetailUtility);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities);
            this.oPhaseDetailUtility.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});
