import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class HeroApiService {
  PUBLIC_KEY = '0838e84408576819e1f9c0322e4ea544';
  HASH = '55802cad19d96fbfa6c89f25954ed988';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  PRIVATE_KEY = '910537f494481f540b65da3cb695b94592b154b0';

  constructor(private http: HttpClient) {
   }

  getAllCharacter(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(
      map((data: any) => data.data.results),
      tap((data: any) => console.log(data))
    )
  }
}
