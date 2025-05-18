import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ReactWrapperComponent } from './react-wrapper';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-react-widget-loader',
  template: `<app-react-wrapper *ngIf=temP [reactComponent]="reactComp"></app-react-wrapper>`,
  standalone: true,
  imports: [ReactWrapperComponent,CommonModule],
})
export class ReactWidgetLoaderComponent implements OnInit {
  reactComp!: React.FC;
temP=false
  async ngOnInit() {
    const mfe = await loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'mfeReact',
      exposedModule: './Widget',
    });
    console.log('Loaded remote module:', mfe);
    this.reactComp = mfe.Widget;  // default export from React remote
    
    this.temP=true
  }
}
