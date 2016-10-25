import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: AppComponent, canActivate: [AuthGuard], data: {roles: ['admin']} },
    { path: '**', redirectTo: '' }];
 
export const routing = RouterModule.forRoot(appRoutes);