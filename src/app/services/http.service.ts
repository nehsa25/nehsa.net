import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactForm } from '../types/ContactForm';

@Injectable()
export class HttpService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) { }

    contactmeUrl = 'api/v1/contactme';
    dhUrl = 'api/v1/dh';

    postContactMe(body: ContactForm) {
        return this.http.post<ContactForm>(this.contactmeUrl, body);
    }

    getDouglasAdamQuote() {
        return this.http.get(this.dhUrl);
    }
}
