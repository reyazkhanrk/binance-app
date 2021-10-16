/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  baseUrl: 'http://localhost:8100';

  // 07:2E:94:1F:3D:5C:40:61:D9:46:96:9C:18:76:AB:19:D7:E6:BC:B4  SHM 1 Certificate Fingerprints
  // 525141680799-98sddrf4hmahsneb49mnk0teficu6ij9.apps.googleusercontent.com  it is client id use in config.xml

  constructor(private httpClient: HttpClient) { }
  token: string;

  // login(body): any{
    login(body){
    console.log('login api called');
    console.log(body);
    // return this.httpClient.post(this.baseUrl + '/login' , body);
    // return 'success';
  }
}
