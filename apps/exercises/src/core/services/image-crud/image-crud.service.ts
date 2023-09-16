import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ImageCrudService {

    constructor(private http: HttpClient) {

    }

    fetch(urlPath: string): Observable<string> {
        // console.log('fetching url: ', urlPath);
        const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sita_%28IT-Unternehmen%29_logo.svg/1200px-Sita_%28IT-Unternehmen%29_logo.svg.png';
        return this.http.get<string>(url);
    }
}
