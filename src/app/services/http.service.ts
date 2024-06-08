import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactForm } from '../types/contact.form';
import { AddUserForm } from '../types/adduser.form';

@Injectable()
export class HttpService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) { }

    contactmeUrl = 'https://api.nehsa.net/v1/contactme';
    addUserUrl = 'https://api.nehsa.net/v1/adduser';
    quoteUrl = "https://api.nehsa.net/v1/quote";
    nameUrl = "https://api.nehsa.net/v1/name";
    
    /** 
     * Posts the contact me form to API
     * @param {ContactForm} body - The body to the message
     * @returns {object} - The response from the API
     * */  
    postContactMe(body: ContactForm) {
        return this.http.post<ContactForm>(this.contactmeUrl, body);
    }

    /** 
     * Posts the contact me form to API
     * @param {AddUserForm} body - The body to the message
     * @returns {object} - The response from the API
     * */  
    postAddUser(body: AddUserForm) {
        return this.http.post<AddUserForm>(this.addUserUrl, body);
    }

    /** Returns the quote */  
    getQuote() {
        return this.http.get(this.quoteUrl);
    }

    /** Returns a random name */  
    getName() {
        return this.http.get(this.nameUrl);
    }

}
