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
        <input type="text" class="form-control" [(ngModel)]="username"/><br><br>
        <i class="mdi mdi-account">email</i>
        <input type="email" class="form-control" [(ngModel)]="email" /><br><br>
        <i class="mdi mdi-account md-70">Password</i>
        <input type="text" class="form-control" [(ngModel)]="Password" /><br><br>
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
<button (click)="go2()">butt</button>
<p>output : {{result }}</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
    `,
    providers:[UserService]
})
export class SignUpComponent {
string: username;
string: email;
string: Password;
string: result ;
constructor(private _userservice :UserService){}
go(){
    this._userservice.AddUser(this.username,this.email,this.Password).subscribe(
        (data)=> this.result=JSON.stringify(data);
    (error)=>alert(error);
    ()=>console.log("finish");
    );

}
    go2(){
        this._userservice.Test().subscribe(
            (data)=> this.result=JSON.stringify(data);
        (error)=>alert(error);
        ()=>console.log("finish");
    );

    }

}
