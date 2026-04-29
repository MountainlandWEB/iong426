import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { micCircleOutline, micCircle, square, squareOutline, navigate, navigateOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  activeTab = 'tab1';

  constructor() {
    addIcons({ navigate, navigateOutline, micCircleOutline, micCircle, square, squareOutline });
  }

  onTabChange(event: any) {
    this.activeTab = event.tab;
  }
}
