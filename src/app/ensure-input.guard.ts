import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsureInputGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!component.form.dirty) {
      return confirm('確定要離開嗎？');
    }
    return true;
  }
}
