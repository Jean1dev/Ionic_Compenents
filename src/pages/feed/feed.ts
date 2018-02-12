import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    HttpRequestProvider
  ]
})
export class FeedPage {
  public nome_user: String = 'Jeanluca';
  public obj_feed = {
    titulo: 'Titulo',
    data: '10/02/2018',
    descricao: 'TESTE OBJETO TYPESCRIPT',
    likes: 3,
    coments: 2,
    time_coment: '1h ago'
  };
  public lista_content = new Array<any>()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpRequestProvider
  ) {
  }

  public alteraNome(): void {
    //alert('maoi')
    //console.log("Filmes pop's",data['results']);
    this.nome_user = 'É UE';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.http.getLatestMovie().subscribe(data => {
      const response = (data as any)
      //const retorno = JSON.parse(response.body)
      this.lista_content = response.results
      console.log(this.lista_content)
      console.log(this.lista_content.length)
    }, error => {
      console.log('erro')
    })
    this.alteraNome();
  }

}
