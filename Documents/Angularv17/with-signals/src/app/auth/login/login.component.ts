import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'swv-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styles: `
.card {
  width: 300px; /* Adjust the width as needed */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login_div {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -150px;
}

.login_form {
  width: 400px;
  height:800px
  border-radius: 10px;
  padding: 30px;
  background: lightgoldenrodyellow;

}
.form-group{
  margin-bottom :10px;
  input{
  margin-bottom :10px;
}
label{
  margin-bottom : 10px;
}
}
.submit-btn{
  padding: 12px;
    width: 150px;
}

`,
})
export class LoginComponent {}
