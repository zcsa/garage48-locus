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
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = this.navParams.get("list");
     this.name = this.navParams.get("name");
    console.log('**nav params:', this.navParams);
  }

   categoryTapped() {
      this.navCtrl.push(ServicesDetailPage);
  }

  getIcon(item) {
    return item.icon
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
