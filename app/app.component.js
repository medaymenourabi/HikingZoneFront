System.register(['angular2/core', './SignIn&SignUp/SignIn.component', './SignIn&SignUp/SignUp.component'], function(exports_1, context_1) {
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
    var core_1, SignIn_component_1, SignUp_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SignIn_component_1_1) {
                SignIn_component_1 = SignIn_component_1_1;
            },
            function (SignUp_component_1_1) {
                SignUp_component_1 = SignUp_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <Sign-in></Sign-in>\n    <Sign-Up></Sign-Up>\n    ",
                        directives: [SignIn_component_1.SignInComponent, SignUp_component_1.SignUpComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwwREFHVDt3QkFDRCxVQUFVLEVBQUMsQ0FBQyxrQ0FBZSxFQUFDLGtDQUFlLENBQUM7cUJBQy9DLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSAnLi9TaWduSW4mU2lnblVwL1NpZ25Jbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gJy4vU2lnbkluJlNpZ25VcC9TaWduVXAuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxTaWduLWluPjwvU2lnbi1pbj5cbiAgICA8U2lnbi1VcD48L1NpZ24tVXA+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltTaWduSW5Db21wb25lbnQsU2lnblVwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXX0=
