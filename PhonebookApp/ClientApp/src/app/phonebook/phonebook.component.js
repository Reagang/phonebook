"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_prod_1 = require("../../environments/environment.prod");
var PhoneBookComponent = /** @class */ (function () {
    function PhoneBookComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.baseUrl = environment_prod_1.environment.apiUrl;
    }
    PhoneBookComponent.prototype.ngOnInit = function () {
        this.createPhonbookEntryForm();
        this.getPeople();
    };
    PhoneBookComponent.prototype.createPhonbookEntryForm = function () {
        this.form = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(35)]],
            surname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(35)]],
            number: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10), forms_1.Validators.pattern("^[0-9]*$")]]
        });
    };
    PhoneBookComponent.prototype.getPeople = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'Phonebook')
            .subscribe(function (response) {
            _this.values = response;
        }, function (error) {
            console.log(error);
        });
    };
    PhoneBookComponent.prototype.onSubmit = function (formData) {
        if (this.form.status == 'VALID') {
            this.values.push(this.form.value);
            var cloned = this.values.slice();
            this.values = cloned;
            console.log(this.form.value);
            this.http.post(this.baseUrl + 'PhoneBook', this.form.value)
                .subscribe(function (result) {
            }, function (error) {
                console.log(error);
            });
            this.form.reset();
            this.hide();
        }
    };
    PhoneBookComponent.prototype.onClick = function (event) {
        this.showModal = true;
    };
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