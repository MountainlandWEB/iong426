import { Component, EnvironmentInjector, inject, OnInit, signal } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { micCircleOutline, micCircle, square, squareOutline, navigate, navigateOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonBadge, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {
  badgeCount = signal(0);
  public environmentInjector = inject(EnvironmentInjector);
  activeTab = 'tab1';

  constructor() {
    addIcons({ navigate, navigateOutline, micCircleOutline, micCircle, square, squareOutline });
  }

  ngOnInit() {
    // listen for badgeCount event and update badgeCount property
    window.addEventListener('badgeCount', (event: any) => {
      console.log('Received badgeCount event:', event);
      this.badgeCount.set(event.detail.count);
    });
  }

  onTabChange(event: any) {
    this.activeTab = event.tab;
  }
}
