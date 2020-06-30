"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phonebook_service_1 = require("../services/phonebook.service");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var db_data_1 = require("../db-data");
require("jasmine");
describe("PhonebookService", function () {
    var phoneService, httpTestingController;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [
                phonebook_service_1.PhoneBookService
            ]
        });
        phoneService = testing_1.TestBed.get(phonebook_service_1.PhoneBookService);
        httpTestingController = testing_1.TestBed.get(testing_2.HttpTestingController);
    });
    it('should return all phone book entries', function () {
        phoneService.getPhonebookList()
            .subscribe(function (phoneList) {
            expect(phoneList).toBeTruthy('No records retured');
            expect(phoneList.length).toBe(1, 'inccorect number of records');
            // expect(phoneList.).toBe("Reagan");
        });
        var req = httpTestingController.expectOne('/api/Phonebook');
        expect(req.request.method).toEqual("GET");
        req.flush({ payload: Object(db_data_1.CONTACT) });
    });
    it('should save phone book entry', function () {
        var changes = {
            name: "Reagan",
            surname: "Gallant",
            number: "0719164855"
        };
        phoneService.addPhonebookEntry(changes)
            .subscribe(function (contact) {
            expect(contact[0].name).toBe('Reagan');
        });
        var req = httpTestingController.expectOne('/api/phonebook/100');
        expect(req.request.method).toEqual("POST");
        expect(req.request.body.name).toEqual(changes[0].name);
        req.flush(db_data_1.CONTACT[100]);
    });
    afterEach(function () {
        httpTestingController.verify();
    });
});
//# sourceMappingURL=phonebook.service.spec.js.map