"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PhoneBookComponent = /** @class */ (function () {
    function PhoneBookComponent(http) {
        this.http = http;
    }
    PhoneBookComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    PhoneBookComponent.prototype.getPeople = function () {
        var _this = this;
        this.http.get('https://localhost:44362/api/Phonebook')
            .subscribe(function (response) {
            _this.values = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    PhoneBookComponent.prototype.onSubmit = function (data) {
        this.http.post('https://localhost:44362/api/' + 'person', data)
            .subscribe(function (result) {
            console.warn("result", result);
        });
    };
    PhoneBookComponent.prototype.onClick = function (event) {
        this.showModal = true; // Show-Hide Modal Check
        this.id = event.target.id;
        this.name = document.getElementById("name" + this.id).innerHTML;
        this.surname = document.getElementById("surname" + this.id).innerHTML;
    };
    //Bootstrap Modal Close event
    PhoneBookComponent.prototype.hide = function () {
        this.showModal = false;
    };
    PhoneBookComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './phonebook.component.html',
            styleUrls: ['./phonebook.component.css']
        })
    ], PhoneBookComponent);
    return PhoneBookComponent;
}());
exports.PhoneBookComponent = PhoneBookComponent;
//# sourceMappingURL=phonebook.component.js.map