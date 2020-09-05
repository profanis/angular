import { Component, OnInit, Attribute } from '@angular/core';

@Component({
  selector: 'app-attribute-decorator-child',
  template: `
    Hello {{title}}
  `
})
export class AttributeDecoratorChildComponent {
  constructor(@Attribute('outer-title') public title: string) { }
}