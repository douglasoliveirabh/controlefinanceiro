import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: AppComponent, canActivate: [AuthGuard], data: {roles: ['admin']} },
    { path: '**', redirectTo: '' }];
 
export const routing = RouterModule.forRoot(appRoutes);