import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  responseMsg: string = '';

  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router){
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ])
    })
  }

  getEmailErrors() {
    if (this.Email.hasError('required')) return 'Email is required!';
    if (this.Email.hasError('email')) return 'Email is invalid.';
    return '';
  }

  getPasswordErrors() {
    if (this.Password.hasError('required')) return 'Password is required!';
    if (this.Password.hasError('minlength'))
      return 'Minimum 8 characters are required!';
    if (this.Password.hasError('maxlength'))
      return 'Maximum 15 characters are required!';
    return '';
  }

  login() {
    
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    

    this.loginservice.login(email,password).subscribe({
      next: (res:any) => {
        if(res.tostring() === 'invalid')
          this.responseMsg = 'Invalid Credentials!';
        else{
          this.responseMsg = '';
          this.loginservice.saveToken(res.tostring());
          this.router.navigateByUrl('/cars/library');
        }
      },
      error: (err: any) => {
        console.log('Error: ');
        console.log(err);
      },
    });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
