import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompWithHostBindingComponent } from './comp-with-host-binding.component';
import { AttributeDecoratorChildComponent } from './attribute-decorator-child.component';


@NgModule({
  declarations: [
    AppComponent,
    CompWithHostBindingComponent,
    AttributeDecoratorChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
