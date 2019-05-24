import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {

  constructor(private http: HttpClient) { }

  getData(type: string): Observable<any> {
    return this.http.get(`https://assineliveinternet.com/data/${type}`);
  }

  sendDisponibility(number: string, city: string, state: string): Observable<any> {
    const formData = new FormData();
    formData.append('numero', number);
    formData.append('cidade', city);
    formData.append('estato', state);
    // tslint:disable-next-line:max-line-length
    return this.http.post(`https://assineliveinternet.com/tim-response/disponibilidade.php`, formData, {responseType: 'text'});
  }
}
