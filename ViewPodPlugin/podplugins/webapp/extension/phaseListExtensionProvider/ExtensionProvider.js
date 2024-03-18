 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "com/maden/viewplugins/extension/phaseListExtensionProvider/LifecycleExtension",
    "com/maden/viewplugins/extension/phaseListExtensionProvider/PluginEventExtension",
    "com/maden/viewplugins/extension/phaseListExtensionProvider/PropertyEditorExtension",
    "com/maden/viewplugins/extension/utils/ExtensionUtilities",
    "com/maden/viewplugins/extension/phaseListExtensionProvider/PhaseListUtility"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities, PhaseListUtility) {
    "use strict";
    return PluginExtensionProvider.extend("com.maden.viewplugins.extension.phaseListExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
            this.oPhaseListUtility = new PhaseListUtility();
        },
        getExtensions: function () {
            let oLifecycleExtension = new LifecycleExtension(this.oExtensionUtilities, this.oPhaseListUtility);
            let oPluginEventExtension = new PluginEventExtension(this.oExtensionUtilities);
            this.oPhaseListUtility.setPluginEventExtension(oPluginEventExtension);
            let oPropertyEditorExtension = new PropertyEditorExtension(this.oExtensionUtilities);
            return [oLifecycleExtension, oPluginEventExtension, oPropertyEditorExtension];
        }
    })
});
