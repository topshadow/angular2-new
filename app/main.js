"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var injector = core_1.ReflectiveInjector.resolveAndCreate([http_1.Http]);
var getWebSite = function () {
    return window['$'].ajax({
        type: 'GET',
        url: 'web-site.json',
        success: function (rtn) {
            console.log(rtn);
        }
    });
};
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map