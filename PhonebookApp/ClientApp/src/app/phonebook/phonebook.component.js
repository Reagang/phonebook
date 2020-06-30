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
var $ = require("jquery");
var PhoneBookComponent = /** @class */ (function () {
    function PhoneBookComponent(http, fb, alertify, phonebookService) {
        this.http = http;
        this.fb = fb;
        this.alertify = alertify;
        this.phonebookService = phonebookService;
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
        this.phonebookService.getPhonebookList().subscribe(function (response) {
            console.log(response);
            _this.values = response;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhoneBookComponent.prototype.onSubmit = function () {
        if (this.form.status == 'VALID') {
            //console.log(this.form.value);
            this.values.push(this.form.value);
            var cloned = this.values.slice();
            this.values = cloned;
            var postSuccess_1 = true;
            this.phonebookService.addPhonebookEntry(this.form.value).subscribe(function () {
                //this.alertify.success("Added succesfully");
            }, function (error) {
                postSuccess_1 = false;
                ///this.alertify.error(error);
            });
            if (postSuccess_1 === true) {
                this.alertify.success("Added succesfully");
            }
            this.form.reset();
            this.hide();
        }
    };
    PhoneBookComponent.prototype.onClick = function (event) {
        this.showModal = true;
    };
    PhoneBookComponent.prototype.hide = function () {
        this.showModal = false;
        $(document.body).removeClass("modal-open");
        $(".modal-backdrop").remove();
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