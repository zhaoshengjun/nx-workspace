import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  AuthActionTypes,
  LoginAction,
  LoginSuccessAction
} from './auth.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect() effect$ = this.actions$.ofType(AuthActionTypes.Login);

  @Effect()
  loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: LoginAction, state: AuthState) => {
      return this.authService.login().pipe(
        map(user => {
          return new LoginSuccessAction(user);
        })
      );
    },

    onError: (action: LoginAction, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>
  ) {}
}
