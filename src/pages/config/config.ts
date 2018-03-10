import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  //public rootPage = PerfilPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  openPage(param){
    let page:any

    switch(parseInt(param)){
      case 1: page =  PerfilPage; break
      case 2: page = LoginPage; break
      default: page = HomePage
    }

    this.navCtrl.push(page)
  }

  closeMenu(){
    
  }

}
