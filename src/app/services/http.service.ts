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
    dhUrl = "https://api.nehsa.net/api/v1/da";
    swaggerUrl = "https://api.nehsa.net/api/v1/swagger";

    /** 
     * Posts the contact me form to API
     * @param {ContactForm} body - The body to the message
     * @returns {object} - The response from the API
     * */  
    postContactMe(body: ContactForm) {
        return this.http.post<ContactForm>(this.contactmeUrl, body);
    }

    /** Returns the Douglas Adam quote */  
    getDouglasAdamQuote() {
        return this.http.get(this.dhUrl);
    }

    /** Returns the Douglas Adam quote */  
    getSwagger() {
        return this.http.get(this.swaggerUrl);
    }
}
