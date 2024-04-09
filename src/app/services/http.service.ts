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

    configUrl = 'api/v1/contactme';

    postContactMe(body: ContactForm) {
        return this.http.post<ContactForm>(this.configUrl, body);
    }
}
