import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.user
      .pipe(map(user => {
        if (!user) { this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()); }
        console.log(user);
        return !!user;
      }));
  }
}
