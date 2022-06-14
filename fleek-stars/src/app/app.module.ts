// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// APP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlCodeBuilderComponent } from './components/html-code-builder/html-code-builder.component';

// LIBRARIES
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCodeBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
