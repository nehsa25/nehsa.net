import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactType } from '../types/contact.type';
import { AddUserType } from '../types/adduser.type';
import { NameType } from '../types/name.type';
import { AiImageType } from '../types/aiimage.type';

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
    posAdjUrl = "https://api.nehsa.net/v1/positiveadjective";
    stabilityaiUrl = `https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image`;

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

    getDBHealth() { 
        return this.http.get('https://api.nehsa.net/v1/dbhealth');
    }

    /** Returns a random name */  
    getName() {
        return this.http.get(this.nameUrl);
    }

    /** Returns the specified number random names */  
    getNames(numToReturn: number) {
        return this.http.get(`${this.nameUrl}/${numToReturn}`);
    }

    /** Returns a random list of positive adjectives */  
    getPosTerms() {
        return this.http.get(this.posAdjUrl);
    }

    /** updates name */  
    updateName(name: string) {
        let user:NameType = new NameType();
        user.Name = name;
        return this.http.post(this.nameUrl, user);
    }
  
    getAiImage(image: AiImageType) {
        const bearer = "sk-aIIMUE6NJeYvXfmJ83d8T6Rqueur7hOjT07hskStmrnB7khw";

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + bearer);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        return this.http.post(this.stabilityaiUrl, image, { headers });
    }
}
