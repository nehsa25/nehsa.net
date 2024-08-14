import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactType } from '../types/contact.type';
import { AddUserType } from '../types/adduser.type';
import { NameType } from '../types/name.type';
import { AiImageType } from '../types/aiimage.type';
import { AIQuestion } from '../types/ai.type';
import { Observable } from 'rxjs';

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
    dbhealth = 'https://api.nehsa.net/v1/dbhealth';
    commentUrl = 'https://api.nehsa.net/v1/comment';
    aiQuestionUrl = 'https://api.nehsa.net/v1/ai';

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

    /** Returns the comments for a page */
    getComments(page_name: string, numToReturn: number = 5) {
        let url = `${this.commentUrl}/${page_name}/${numToReturn}`;
        return this.http.get(url);
    }
    getDBHealth() {
        return this.http.get(this.dbhealth);
    }

    postComment(body: any) {
        return this.http.post(this.commentUrl, body);
    }

    /** Returns a random name */
    getName() {
        return this.http.get(this.nameUrl);
    }

    /** Returns a weather */
    getWeather(city: string, units: string = 'imperial', typeStyle: string = 'words') {
        const getWeatherUrl = `https://api.nehsa.net/v1/getweather?city=${city}&units=${units}&weatherType=${typeStyle}`;
        return this.http.get(getWeatherUrl);
    }

    /** Returns the specified number random names */
    getNames(numToReturn: number) {
        return this.http.get(`${this.nameUrl}/${numToReturn}`);
    }

    /** Asks an AI questions */
    postAIQuestion(body: AIQuestion): Observable<AIQuestion> {
        return this.http.post<any>(this.aiQuestionUrl, body);
    }

    /** Returns a random list of positive adjectives */
    getPosTerms() {
        return this.http.get(this.posAdjUrl);
    }

    /** updates name */
    updateName(name: string) {
        let user: NameType = new NameType();
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
