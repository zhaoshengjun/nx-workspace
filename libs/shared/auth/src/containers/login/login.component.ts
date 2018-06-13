import { AuthState } from "./../../src/lib/+state/auth.reducer";
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from "@nx-workspace/shared/auth/src/lib/+state/auth.actions";

@Component({
  selector: 'nx-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LoginAction())
  }
}
