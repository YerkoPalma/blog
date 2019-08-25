import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(
    private storage: AngularFireStorage,
    private http: HttpClient) { }

  readFile(filename: string): Observable<string | Blob> {
    return this.getFileUrl(filename)
      .pipe(switchMap(url => this.http.get(url, { responseType: 'blob' })));
  }

  getFileUrl(filename: string): Observable<string> {
    return this.storage.ref(filename)
      .getDownloadURL();
  }

  writeFile(filename: string, content: string): Observable<number> {
    const documentData = new Blob([content], { type: 'application/octet-stream'});
    return this.storage.ref(filename).put(documentData).percentageChanges();
  }
}
