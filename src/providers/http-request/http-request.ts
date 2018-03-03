import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the HttpRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRequestProvider {
  private url_base: String = 'https://api.themoviedb.org/3'
  private api_key: String = 'api_key=92a9e0584da53a71f3a31d548687ad85'

  constructor(public http: HttpClient, public __http__: Http) {
    console.log('Hello HttpRequestProvider Provider')
  }

  getLatestMovie(page = 1) {
    var url = `/movie/popular?page=${page}&`
    return this.http.get(this.url_base + url + this.api_key)
  }

  getMovieById(id) {
    var url = `/movie/${id}?`
    return this.http.get(this.url_base + url + this.api_key)
  }

  testePingAPI() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    let option = new RequestOptions({headers: headers})

    var url = 'http://neuraapi-net.umbler.net/methods/teste.php'

    return this.__http__.post(url, '', option)
  }
}
