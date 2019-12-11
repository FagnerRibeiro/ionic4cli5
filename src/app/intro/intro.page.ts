import { TabsPage } from './../tabs/tabs.page';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  router: any;

  constructor(
    public navCtrl: NavController,) {
      
    }

  ngOnInit() {
  }
  trocaPagina(){
    this.router.navigate(TabsPage)
  }

}
