import {Component} from 'angular2/core';

@Component({
    selector: 'Sign-in',
    template: `
    <div id="Signinmodal" class="modal fade" role="dialog" style="margin-left:4cm;">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Sign In to out web site </h4>
      </div>
      <div class="modal-body">
      <img src="../../assets/svgimages/ripple.svg"><br>
        <i class="mdi mdi-account">Login</i>
        <input type="text" class="form-control" /><br><br>
        <i class="mdi mdi-account md-70">Password</i>
        <input type="text" class="form-control" /><br><br>
        <button type="submit"
        class="mdc-button
               mdc-button--raised
               mdc-button--primary
               mdc-ripple-surface"
        data-mdc-auto-init="MDCRipple" id="but">
Se connecter
</button>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
    `,
    styleUrls:["../../assets/css/signinstyle.css"]
})
export class SignInComponent {

}
