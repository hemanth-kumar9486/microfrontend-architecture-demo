import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes = [
  {
    path: 'next-widget',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mfeNext',
        exposedModule: './Widget',
      }).then(m => m.WidgetComponent),
  },
  {
    path: 'react-widget',
    loadComponent: () =>
      import('./REACT/react-widget-loader.component').then(m => m.ReactWidgetLoaderComponent),
  },
  {
    path: 'react',
    loadComponent: () =>
      import('./REACT/react-host.component').then(m => m.ReactHostComponent),
  },
  {
    path: 'vue',
    loadComponent: () =>
      import('./VUE/vue-host.component').then(m => m.VueHostComponent),
  },
  {
    path: 'vue-widget',
    loadComponent: () =>
      import('./VUE/vue-widget-loader.component').then(m => m.VueWidgetLoaderComponent),
  },
   {
    path: 'angular-widget',
    loadComponent: () =>
      import('./ANGULAR/angular-widget/angular-widget.component').then(m => m.AngularWidgetComponent),
  },
  { path: '**', redirectTo: '/react' } ,
];
