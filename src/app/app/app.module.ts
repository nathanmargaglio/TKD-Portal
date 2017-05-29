import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Navbar} from '../navigation/navbar.component';
import {IncomeTable} from '../incomeData/incomeTable.component';
import {IncomeData} from '../incomeData/incomeData.service';
import {IncomeForm} from '../incomeData/incomeForm.component';
import {LoginService} from '../login/login.service';
import {Login} from '../login/loginForm.component';
import {LogoutButton} from '../login/logoutButton.component';

@NgModule({
    declarations: [
        AppComponent,
        Navbar,
        IncomeTable,
        IncomeForm,
        Login,
        LogoutButton
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        LoginService,
        IncomeData,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
