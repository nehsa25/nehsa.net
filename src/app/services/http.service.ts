import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactForm } from '../types/contactform';

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

    /** 
     * Posts the contact me form to API
     * @param {ContactForm} body - The body to the message
     * @returns {object} - The response from the API
     * */  
    postContactMe(body: ContactForm) {
        return this.http.post<ContactForm>(this.contactmeUrl, body);
    }

    /** Returns a random Douglas Adam quote - doesn't work yet.. */  
    getDouglasAdamQuote() {
        return this.http.get(this.dhUrl);
    }
}
