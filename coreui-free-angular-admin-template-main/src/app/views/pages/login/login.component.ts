import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';
import {IconDirective} from '@coreui/icons-angular';
import {NgStyle} from '@angular/common';
import {LoginService} from "../../../providers/services/login.service";
import {AuthResponse} from "./models/AuthResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, NgStyle,
    ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
    CardComponent, CardBodyComponent, FormDirective, InputGroupComponent,
    InputGroupTextDirective, IconDirective, FormControlDirective,
    ButtonDirective
  ]
})
export class LoginComponent implements OnInit {

  authResponse= new AuthResponse();
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {

  }

  loginForm = new FormGroup({

    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }

  onSubmit(): void {

    if (this.loginForm?.valid) {
      this.loginService.add$(this.loginForm.value).subscribe(
        data => {
          // @ts-ignore
          this.authResponse=data;
          console.log(this.authResponse);
          if (this.authResponse.token != null) {
            localStorage.setItem("token", this.authResponse.token);
          }
          if (localStorage.getItem("token")) {
            this.router.navigate(['dashboard']);
          }
          this.loginForm.reset();
        }
      )
      //console.log(this.loginForm?.value); // o llamar a tu servicio de login
    }
  }
}
