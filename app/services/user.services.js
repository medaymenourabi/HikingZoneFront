System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                }
                UserService.prototype.AddUser = function (username, email, password) {
                    var json = JSON.stringify({ username: username, email: email, password: password });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post("http://127.0.0.1:8000/api/add", json, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                UserService.prototype.Authentification = function (email, password) {
                    var json = JSON.stringify({ email: email, password: password });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post("http://127.0.0.1:8000/api/signin", json, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBRUEscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRSxDQUFDO2dCQUUzQiw2QkFBTyxHQUFkLFVBQWUsUUFBZ0IsRUFBQyxLQUFhLEVBQUMsUUFBZ0I7b0JBQzVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7b0JBQzlFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUU7d0JBQzNELE9BQU8sRUFBRSxPQUFPO3FCQUNqQixDQUFDLENBQUMsR0FBRyxDQUNGLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FDcEIsQ0FBQztnQkFDRixDQUFDO2dCQUNRLHNDQUFnQixHQUF2QixVQUF3QixLQUFhLEVBQUMsUUFBZ0I7b0JBQ3BELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUMsSUFBSSxFQUFFO3dCQUM5RCxPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQyxDQUFDLEdBQUcsQ0FDRSxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQ3RCLENBQUM7Z0JBQ0osQ0FBQztnQkF4Qkg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBNEJiLGtCQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCxxQ0EyQkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy91c2VyLnNlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG5cclxuY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG5cclxucHVibGljIEFkZFVzZXIodXNlcm5hbWUgOnN0cmluZyxlbWFpbCA6c3RyaW5nLHBhc3N3b3JkIDpzdHJpbmcpe1xyXG4gIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOiB1c2VybmFtZSxlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZH0pO1xyXG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FkZFwiLGpzb24sIHtcclxuICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICB9KS5tYXAoXHJcbiAgICAgIHJlcz0+cmVzLmpzb24oKVxyXG4pO1xyXG59XHJcbiAgcHVibGljIEF1dGhlbnRpZmljYXRpb24oZW1haWwgOnN0cmluZyxwYXNzd29yZCA6c3RyaW5nKXtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkfSk7XHJcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvc2lnbmluXCIsanNvbiwge1xyXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICB9KS5tYXAoXHJcbiAgICAgICAgICAgIHJlcz0+cmVzLmpzb24oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19
