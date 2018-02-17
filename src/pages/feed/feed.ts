import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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

  public page: any = 1
  public refresher: any
  public isRefresh: boolean = false
  public loader: any
  public infinityScroll: any

  public lista_content = new Array<any>()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpRequestProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  doInfinite(infiniteScroll) {
    this.page++
    this.infinityScroll = infiniteScroll
    this.loadingContent(true)
  }

  doRefresh(refresher) {
    this.refresher = refresher
    this.isRefresh = true
    this.loadingContent()
  }

  abrirDetalhes(filme) {
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id })
  }

  openLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss()
  }

  public alteraNome(): void {

    this.nome_user = 'É UE';
  }

  ionViewDidEnter() {
    this.loadingContent()
  }

  loadingContent(newpage: boolean = false) {
    this.openLoading()
    console.log('ionViewDidLoad FeedPage');
    this.http.getLatestMovie(this.page).subscribe(data => {
      const response = (data as any)
      //const retorno = JSON.parse(response.body)

      if(newpage){
        this.lista_content = this.lista_content.concat(response.results)
        this.infinityScroll.complete()
      }else{
        this.lista_content = response.results
      }
      
      console.log(this.lista_content)
      console.log(this.lista_content.length)
      this.closeLoading()

      if (this.isRefresh) {
        this.refresher.complete()
        this.isRefresh = false
      }

    }, error => {
      console.log('erro')
      this.closeLoading()
    })
    this.alteraNome();
  }
}
