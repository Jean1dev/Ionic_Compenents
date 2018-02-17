import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    HttpRequestProvider
  ]
})
export class FilmeDetalhesPage {

  public filme: any
  public id: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpRequestProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeDetalhesPage');
  }

  ionViewDidEnter() {
    this.id = this.navParams.get('id')
    this.http.getMovieById(this.id).subscribe(data => {
    
      let res = (data as any)
      
      this.filme = res
      console.log(this.filme)
      
    }, error => {

    })
  }

}
