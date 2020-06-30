import { PhoneBookService } from '../services/phonebook.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CONTACT } from '../db-data';
import 'jasmine';
import { Phonebook } from '../models/phonebook.model';
import { PhonebookEntry } from '../models/phonebookentry.model';


describe("PhonebookService", () => {
  let phoneService: PhoneBookService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PhoneBookService
      ]
    });
    phoneService = TestBed.get(PhoneBookService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should return all phone book entries', () => {
    phoneService.getPhonebookList()
      .subscribe(phoneList => {
          expect(phoneList).toBeTruthy('No records retured');
        expect(phoneList.length).toBe(1, 'inccorect number of records');
       // expect(phoneList.).toBe("Reagan");
    });

    const req = httpTestingController.expectOne('/api/Phonebook');
    expect(req.request.method).toEqual("GET");
    req.flush({ payload: Object(CONTACT) })
    
  });


  it('should save phone book entry', () => {
    const changes: Partial<PhonebookEntry> =
    {
      name: "Reagan",
      surname: "Gallant",
      number: "0719164855"
    };
    phoneService.addPhonebookEntry(changes)
      .subscribe(contact => {
        expect(contact.name).toBe('Reagan');
      });

    const req = httpTestingController.expectOne('/api/phonebook/39');
    expect(req.request.method).toEqual("POST");

    expect(req.request.body.name)
      .toEqual(changes.name);

    req.flush(CONTACT[39]
    )
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
