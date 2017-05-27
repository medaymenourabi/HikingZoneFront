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
                UserService.prototype.Test = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var params = "json=" + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post("http://validate.jsontest.com", params, {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBRUEscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRSxDQUFDO2dCQUUzQiw2QkFBTyxHQUFkLFVBQWUsUUFBZ0IsRUFBQyxLQUFhLEVBQUMsUUFBZ0I7b0JBQzVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7b0JBQzlFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUU7d0JBQzNELE9BQU8sRUFBRSxPQUFPO3FCQUNqQixDQUFDLENBQUMsR0FBRyxDQUNGLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FDcEIsQ0FBQztnQkFDRixDQUFDO2dCQUdDLDBCQUFJLEdBQUo7b0JBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sR0FBQyxJQUFJLENBQUM7b0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBQyxNQUFNLEVBQUU7d0JBQzVELE9BQU8sRUFBRSxPQUFPO3FCQUNqQixDQUFDLENBQUMsR0FBRyxDQUNFLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FDdEIsQ0FBQztnQkFDSixDQUFDO2dCQTNCSDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE2QmIsa0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELHFDQTRCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3VzZXIuc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcblxyXG5wdWJsaWMgQWRkVXNlcih1c2VybmFtZSA6c3RyaW5nLGVtYWlsIDpzdHJpbmcscGFzc3dvcmQgOnN0cmluZyl7XHJcbiAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6IHVzZXJuYW1lLGVtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkfSk7XHJcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYWRkXCIsanNvbiwge1xyXG4gICAgaGVhZGVyczogaGVhZGVyc1xyXG4gIH0pLm1hcChcclxuICAgICAgcmVzPT5yZXMuanNvbigpXHJcbik7XHJcbn1cclxuXHJcblxyXG4gIFRlc3QoKXtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3ZhcjE6ICd0ZXN0Jyx2YXIyOjN9KTtcclxuICAgIHZhciBwYXJhbXMgPSBcImpzb249XCIranNvbjtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFwiaHR0cDovL3ZhbGlkYXRlLmpzb250ZXN0LmNvbVwiLHBhcmFtcywge1xyXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICB9KS5tYXAoXHJcbiAgICAgICAgICAgIHJlcz0+cmVzLmpzb24oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
