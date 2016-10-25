import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
    moduleId : module.id,
    templateUrl : './login.component.html'
})
export class LoginComponent {

    private model: any = {};
    private error: string = "";
    private loading:boolean = false;

    constructor(private router: Router,
                private authService: AuthService) {}

    ngOnInit() {
        // reset login status
        this.authService.logout();
    }

    login() {
        debugger;
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }



    
}