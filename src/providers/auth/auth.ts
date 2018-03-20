import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
    private storage: Storage,
    public __http__: Http) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials) {
    let url = ''
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    let option = new RequestOptions({ headers: headers })

    this.__http__.post(url, credentials, option)
    .subscribe(data => {
      console.log('logou')
    })
  }

  logout() {
    this.storage.remove('token')
  }

  isLogged() {
    return this.storage.get('token').then(val => {
      if (val !== undefined) {
        return val
      } else {
        return false
      }
    })
  }

}
