import { Component, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonTextarea } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { stopCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonTextarea, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class Tab1Page implements OnInit {
  recognition!: any;
  recognizedText = signal<string>('');
  isListening = signal<boolean>(false);

  constructor() {
    addIcons({ stopCircleOutline });
    const SpeechRecognition = (window as any).SpeechRecognition ||
                              (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech Recognition not supported');
      return;
    }
    this.recognition = new SpeechRecognition();
  }

  ngOnInit() {
    this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onstart = () => this.isListening.set(true);
    this.recognition.onend = () => this.isListening.set(false);

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      this.recognizedText.set(transcript);
      console.log('Recognized text:', transcript);
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };
  }

  record() {
    this.recognition.start();
  }

}
