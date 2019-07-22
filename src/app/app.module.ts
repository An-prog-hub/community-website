import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faChalkboardTeacher,
    faCheck,
    faExternalLinkAlt,
    faLaptop,
    faHeartbeat,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { RoutingModule } from './routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        LandingComponent,
        ScheduleComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RoutingModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
    constructor() {
        library.add(
            faChalkboardTeacher,
            faCheck,
            faExternalLinkAlt,
            faLaptop,
            faHeartbeat,
            faUsers,
            faGithub,
            faFacebook,
            faInstagram,
            faTwitter,
            faYoutube,
        );
    }
}
