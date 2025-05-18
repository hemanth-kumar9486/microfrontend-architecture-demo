import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation'; 
 

import { CommonModule } from '@angular/common';
import { ReactWrapperComponent } from './react-wrapper';

@Component({
  selector: 'app-react-host',
 
  template: `<app-react-wrapper *ngIf="temP" [reactComponent]="reactApp"></app-react-wrapper>`,
  standalone: true,
  imports: [ReactWrapperComponent,CommonModule],
})
export class ReactHostComponent implements OnInit {
  reactApp!: React.FC;
  temP=false
  async ngOnInit() {
    const mfe = await loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'mfeReact',
      exposedModule: './App',
    });
    this.reactApp = mfe.default;
    this.temP=true
  }
}
