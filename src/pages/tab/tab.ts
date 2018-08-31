import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { PortifolioPage } from '../portifolio/portifolio';
import { AttachmentsPage } from '../attachments/attachments';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

	tab1Root: any = HomePage;
	tab2Root: any = PortifolioPage;
	tab3Root: any = ContactPage;
	tab4Root: any = AttachmentsPage;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttachmentsPage');
  }
  
}
