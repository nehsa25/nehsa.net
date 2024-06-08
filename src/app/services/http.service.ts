import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactType } from '../types/contact.type';
import { AddUserType } from '../types/adduser.type';
import { UpdateUserType } from '../types/updateuser.type';

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
     * @param {ContactType} body - The body to the message
     * @returns {object} - The response from the API
     * */  
    postContactMe(body: ContactType) {
        return this.http.post<ContactType>(this.contactmeUrl, body);
    }

    /** 
     * Posts the contact me form to API
     * @param {AddUserType} body - The body to the message
     * @returns {object} - The response from the API
     * */  
    postAddUser(body: AddUserType) {
        return this.http.post<AddUserType>(this.addUserUrl, body);
    }

    /** Returns the quote */  
    getQuote() {
        return this.http.get(this.quoteUrl);
    }

    /** Returns a random name */  
    getName() {
        return this.http.get(this.nameUrl);
    }

    /** updates name */  
    updateName(name: string) {
        let user:UpdateUserType = new UpdateUserType();
        user.name = name;
        return this.http.post(this.nameUrl, user);
    }
}
