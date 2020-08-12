import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../shared/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http:HttpClient) { }

  uploadImage(imageData):Observable<any>{
    return this.http.post('upload',imageData)
  }
}
