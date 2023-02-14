import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(public http: HttpClient) { }

  getUserSocialNetworks() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUserSocialNetworksData() {
    return this.getUserSocialNetworks()
      .pipe(
        delay(1500),
        map(data => {

          const labels = Object.keys(data);
          const values = Object.values(data);

          return { labels, values };

        })
      )
  }

}
