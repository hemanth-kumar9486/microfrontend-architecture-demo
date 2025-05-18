import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { createApp, defineComponent, h } from 'vue';

@Component({
  selector: 'app-vue-wrapper',
  template: `<div #vueContainer></div>`,
  standalone: true,
})
export class VueWrapperComponent implements OnChanges {
  @ViewChild('vueContainer', { static: true }) container!: ElementRef<HTMLDivElement>;
  @Input() vueComponent!: any;
  appInstance: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['vueComponent'] && this.vueComponent) {
      if (this.appInstance) {
        this.appInstance.unmount();
      }
      this.appInstance = createApp(this.vueComponent);
      this.appInstance.mount(this.container.nativeElement);
    }
  }
}
