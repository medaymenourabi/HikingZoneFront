import {Injectable} from "angular2/core";
import {Http,Headers} from "angular2/http";
import "rxjs/add/operator/map";
@Injectable()
export class UserService{

constructor(private _http: Http){}

public AddUser(username :string,email :string,password :string){
  var json = JSON.stringify({username: username,email:email,password:password});
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.post("http://127.0.0.1:8000/api/add",json, {
    headers: headers
  }).map(
      res=>res.json()
);
}
  public Authentification(email :string,password :string){
    var json = JSON.stringify({email:email,password:password});
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post("http://127.0.0.1:8000/api/signin",json, {
      headers: headers
    }).map(
            res=>res.json()
    );
  }



}
