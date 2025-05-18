import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  template: `<div #container></div>`,
  standalone: true,
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  @Input() reactComponent!: React.FC;
  private root!: ReactDOM.Root;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const container = this.elementRef.nativeElement.querySelector('div');
    this.root = ReactDOM.createRoot(container);
    this.root.render(React.createElement(this.reactComponent));
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
