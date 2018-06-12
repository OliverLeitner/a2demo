import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//http.get http.post yadda yadda...
import { HttpModule }      from '@angular/http';

//form handling, for dual way binding mainly
//not using it that much for now...
import { FormsModule } from '@angular/forms';

//hamburger menu for mobile
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

//hash in url and having browser refresh not go 404, less jscripty behaviour;-)
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//common routing functionality
import { RouterModule, Routes } from '@angular/router';

//local components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DataComponent } from './data/data.component';
import { ApiComponent } from './api/api.component';
import { GuestFormComponent } from './guest-form/guest-form.component';

//our menu tabs
const appRoutes: Routes = [
   { path: 'main', component: MainComponent },
   { path: 'data', component: DataComponent },
   { path: 'guest', component: GuestFormComponent },
   { path: 'api', component: ApiComponent },
   { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DataComponent,
    GuestFormComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    SlideMenuModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
