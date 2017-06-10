import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesDetailPage} from '../pages';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = this.navParams.data; 

  }

   categoryTapped() {
      this.navCtrl.push(ServicesDetailPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
