import { Observable } from 'rxjs';
export { Observable };


export interface OpenObject {
  [key: string]: any;
}

export interface Manager<T> {

  collection: T[];

  api: string;

  load(limit?: number): Observable<T[]>;

  send(data: T): Observable<T>;

  update(target: T, updates: OpenObject): Observable<T>;

  search(criterias: OpenObject): Observable<T[]>;

}

