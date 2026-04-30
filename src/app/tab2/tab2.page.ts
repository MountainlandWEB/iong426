import { Component, OnInit } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { GoogleMap } from '@angular/google-maps';
import { informationCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonIcon, IonButton, IonButtons,  IonHeader, IonToolbar, IonTitle, IonContent, GoogleMap]
})
export class Tab2Page implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private modalCtrl: ModalController) {
    addIcons({ informationCircle })
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AboutPage,
      initialBreakpoint: 0.75,
      breakpoints: [0, 0.25, 0.5, 0.75, 1]
    });
    modal.present();
    // const { data, role } = await modal.onWillDismiss();
  }
}
