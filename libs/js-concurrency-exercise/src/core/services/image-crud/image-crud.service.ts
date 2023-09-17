import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ImageCrudService {

    constructor(private http: HttpClient) {

    }

    fetch(urlPath: string): Observable<any> {
        console.log('fetching url: ', urlPath);
        const url = 'https://picsum.photos/200';
        return this.http.get<any>(url);
    }
}
