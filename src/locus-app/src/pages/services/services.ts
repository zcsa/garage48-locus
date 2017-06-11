import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesDetailPage, CategoryPage} from '../pages';

/**
 * Generated class for the ServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  hospitals = [{team: 'Zone 1', icon: "medkit"},
        {team: 'Zone 3', icon: "medkit"}];
  schools = [{team: 'Zone 5',icon: "school"},
	    {team: 'Zone 1',icon: "school"},
	    {team: 'Zone 3',icon: "school"}];
  stores = [{team: 'Zone 7B',icon: "cart"}, 
	    {team: 'Champs-des-Elysees',icon: "cart"}];
  organizations= [{team: 'Red Cross Site',icon: "globe",color: "red"},	
	     {team: 'FCA Site',icon: "globe",color: "orange"},
      {team: 'Relief International Site',icon: "globe",color: "blue"}];

 categories = [{name: "Hospitals", icon: "medkit", list: this.hospitals},
  {name: "Schools", icon: "school", list: this.schools},
  {name: "Stores", icon: "cart", list: this.stores},
  {name: "Organizations", icon: "globe", list: this.organizations}];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: NavController) {
  }

  getIcon(item) {
    return item.icon
  }

  listTapped(item) {
  console.log('**item:', item);
      if (item.name=="Hospitals") {
        this.nav.push(CategoryPage, {"list": this.hospitals,"name": "HOSPITALS"})
      } else if (item.name=="Schools") {
        this.nav.push(CategoryPage, {"list": this.schools,"name": "SCHOOLS"})
      } else if (item.name=="Stores") {
        this.nav.push(CategoryPage, {"list": this.stores,"name": "STORES"})
      } else if (item.name=="Organizations") {
        this.nav.push(CategoryPage, {"list": this.organizations,"name": "ORGANIZATIONS"})
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

}
