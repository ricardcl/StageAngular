import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  private cache = new Map(); // Initialisation du cache memoire

  constructor(private http: HttpClient) {
    console.log(this.http);
    // const url  = 'http://localhost:5050/users';
    // this.http.get(url).subscribe( data => console.log(data));
  }

  /** utilites de reecrire ses requetes http ( au lieu de les utiliser directement dans les services
   cache ( si donnee deja chargee, on lenvoi direct
   log des acces
   redirection si la donnee a change dendroit ...
   faire des couches de verification centralisees */

  // on ne ocnnait pas encore le type de l'observable retourné donc on indique any
  create(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
  read(url: string): Observable<any> {

    // pour ne pas recharger si le cache est deja rempli
   // if (this.cache.has(url)) { return of( this.cache.get(url)); }

    return this.http.get(url)
    .pipe(
      tap( data => this.cache.set(url, data))   // On remplis le cache memoire
    )
    .pipe(
      catchError(err => {
        console.warn('HTTP ERROR');
        return of(err);
      })
    );
  }
  update(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }
  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
