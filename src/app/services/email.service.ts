import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  send(subject: string, body: string): Observable<any> {
    const formData = new FormData();
    formData.append('body', body);
    formData.append('subject', subject);
    return this.http.post('http://localhost/tim-response/send.php', formData, {responseType: 'text'});
    // return this.http.post('http://timpromocao.com.br/tim-response/send.php', formData, {responseType: 'text'});
  }
}
