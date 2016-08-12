import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ReflectiveInjector} from '@angular/core';
import {Http} from '@angular/http';

import {AppModule} from './app.module';

var injector = ReflectiveInjector.resolveAndCreate([Http]);
 var getWebSite =function(){ 
 return window['$'].ajax({
type:'GET',
url:'web-site.json',
success:function(rtn){
	console.log(rtn);
}
});
}


//platformBrowserDynamic().bootstrapModule(AppModule);


