import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {
  public nome_user:String = 'Jeanluca';
  public obj_feed = {
    titulo: 'Titulo',
    data: '10/02/2018',
    descricao: 'TESTE OBJETO TYPESCRIPT',
    likes: 3,
    coments: 2,
    time_coment: '1h ago'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public alteraNome(): void{
    //alert('maoi')
    this.nome_user = 'É UE';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.alteraNome();
  }

}
