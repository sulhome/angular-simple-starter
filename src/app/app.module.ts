import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ConsoleLogger} from './shared/logger.service';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    providers: [ConsoleLogger],
    bootstrap: [AppComponent]
})
export class AppModule{
    constructor(){}
}