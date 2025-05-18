import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { VueWrapperComponent } from './vue-wrapper.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vue-widget-loader',
  template: `<app-vue-wrapper *ngIf="temp" [vueComponent]="vueComp"></app-vue-wrapper>`,
  standalone: true,
  imports: [VueWrapperComponent,CommonModule],
})
export class VueWidgetLoaderComponent implements OnInit {
  vueComp: any;
temp:boolean=false
  async ngOnInit() {
    const mfe = await loadRemoteModule({
      remoteEntry: 'http://localhost:8080/remoteEntry.js',
      remoteName: 'mfeVue',
      exposedModule: './Widget',
    });
    this.vueComp = mfe?.default;
    this.temp=true
  }
}
