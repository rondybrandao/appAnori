import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(
    private authService: LoginService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.ngZone.run(()=>{
            this.router.navigate(["/home"]);
            //this.splashScreen.hide();
          })
        }

        resolve(!user ? true : false);
      });
    });
  }
}
