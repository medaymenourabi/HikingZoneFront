import {Component} from 'angular2/core';
import {UserService} from '../services/user.services';
@Component({
    selector: 'Sign-Up',
    template: `

    <div id="Signupmodal" class="modal fade" role="dialog" style="margin-left:4cm;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">start with creating your account </h4>
      </div>
      <div class="modal-body">
      <img src="../../assets/svgimages/ripple.svg"><br>
        <i class="mdi mdi-account">username</i>
        <input type="text" class="form-control" [(ngModel)]="username" required/><br><br>

        <i class="mdi mdi-account">email</i>
        <input type="email" (keyup)="validateE()" class="form-control" [(ngModel)]="email" required /><br>
         <div [innerHTML]="emailcheck"></div><br>

        <i class="mdi mdi-account md-70">Password</i>
        <input type="password" (keyup)="ckpassword()" class="form-control" [(ngModel)]="Password" required /><br>
        <div [innerHTML]="pwcheck"></div>
        <br>

          <i class="mdi mdi-account md-70">Retype Password</i>
        <input type="password" (keyup)="reckpassword()" class="form-control" [(ngModel)]="rePassword" required /><br>
        <div [innerHTML]="repwcheck"></div>
        <br>
        <button

         type="submit"
          (click)="go()"
        class="mdc-button
               mdc-button--raised
               mdc-button--primary
               mdc-ripple-surface"
        data-mdc-auto-init="MDCRipple" id="but">
Sign Up
</button>

<div [innerHTML]="htmlStr"><p>output : {{result }}</p></div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
    `,
    providers: [UserService]
})
export class SignUpComponent {
    username:string;
    email:string;
    Password:string;
    result:string;
    htmlStr = '' :string;
    rePassword:string;
    pwcheck = '':string;
    emailcheck = '':string;
    repwcheck = '':string;


    constructor(private _userservice:UserService) {
    }



    go() {
        if (this.checkpassword(this.Password) !== "okeyy" || this.validateE(this.email) == false || this.reckpassword() == false) {


        } else {
            this.htmlStr = '<img src="../../assets/svgimages/ripple.svg" width="25px" height="25px">';
            this._userservice.AddUser(this.username, this.email, this.Password).subscribe(
         (data)=> this.htmlStr = '<div class="alert alert-success"><strong>Success!</strong> register successfully !!  </div>';
            (error)=> this.htmlStr = '<h1>Error</h1>';
            ()=>console.log("finish");
        )
            ;
        }

    }


    reckpassword():boolean {
        if (this.Password !== this.rePassword) {
            this.repwcheck = '<p style="color: red"> passwords does not match </p>';
            return false;
        } else {
            this.repwcheck = '<p style="color: green"> Great !! password match !! </p>';
            return true;
        }
    }

    ckpassword() {
        if (this.checkpassword(this.Password) !== "okeyy" ) {
            this.pwcheck = '<p style="color:red;">' + this.checkpassword(this.Password) + '</p>';
        } else {
            this.pwcheck = '<p style="color:green;">Great your password is valid  !!</p>';
        }
    }

    checkpassword(str:string):string {
        if (str.length < 6) {

            return ("minimum length should be 6 !! ");
        } else if (str.length > 50) {

            return ("password too long !! ");
        } else if (str.search(/\d/) == -1) {

            return (" the password should be composed of numbers and letters please enter numbers !! ");
        } else if (str.search(/[a-zA-Z]/) == -1) {

            return ("the password should be composed of numbers and letters please enter letters !! ");
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {

            return ("bad charts !! ");
        } else {
            return "okeyy";
        }

    }


    validateEmail(email:string):boolean {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateE():boolean {

        if (this.email.length > 2) {
            if (this.validateEmail(this.email)) {

                this.emailcheck = '<p style="color:green;"> Great !! email is  valid </p>';
                return true;
            } else {

                this.emailcheck = '<p style="color:red;">Error !! please enter a valide email ' +
                    'the email should have this format xxx@sthg.yy</p>';
                return false;
            }

        }
    }

}
