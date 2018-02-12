import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the FinancasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financas',
  templateUrl: 'financas.html',
  providers: [
    HttpRequestProvider,
    Toast
  ]
})
export class FinancasPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpRequestProvider,
    private toast: Toast
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancasPage');
  }

  testePing() {
    this.toast.show('teste toast', '5000', 'center').subscribe(
      data => {

      }
    )
    this.http.testePingAPI().subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

}
