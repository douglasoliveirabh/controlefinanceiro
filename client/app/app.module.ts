import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

//Routes
import { routing } from './app.routing';

//Components
import { AppComponent }   from './app.component';
import { LoginComponent }   from './login/login.component';
import { HomeComponent }   from './home/home.component';
import {AuthGuard} from './shared/guards/auth.guard';

//Services
import { AuthService } from './shared/services/auth.service';


@NgModule({
  imports: [ 
    //MaterialModule.forRoot(),
    BrowserModule,
    HttpModule, 
    FormsModule,
    routing
    ],
  declarations: [ 
    AppComponent, 
    LoginComponent,
    HomeComponent
    /*CustomerListComponent,
    UserListComponent*/
    ],
  providers : [
    AuthGuard,
    AUTH_PROVIDERS,
    AuthService
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
