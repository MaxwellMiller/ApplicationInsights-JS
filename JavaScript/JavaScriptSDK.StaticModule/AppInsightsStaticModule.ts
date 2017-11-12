/// <reference path="../JavaScriptSDK.Interfaces/IConfig.ts"/>
/// <reference path="../JavaScriptSDK/Initialization.ts" />

"use strict";

export class AppInsights {
    constructor(configuration: Microsoft.ApplicationInsights.IConfig) {
        // overwrite snippet with full appInsights
        var init = new Microsoft.ApplicationInsights.Initialization({queue: [], config: configuration});
        var appInsightsLocal = init.loadAppInsights();

        // apply full appInsights to the global instance that was initialized in the snippet
        for (var field in appInsightsLocal) {
            this[field] = appInsightsLocal[field];
        }
    }
}
