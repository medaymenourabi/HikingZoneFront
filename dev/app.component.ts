import {Component} from 'angular2/core';
import {SignInComponent} from './SignIn&SignUp/SignIn.component';
import {SignUpComponent} from './SignIn&SignUp/SignUp.component';
@Component({
    selector: 'my-app',
    template: `
    <Sign-in></Sign-in>
    <Sign-Up></Sign-Up>
    `,
    directives:[SignInComponent,SignUpComponent]
})
export class AppComponent {

}
