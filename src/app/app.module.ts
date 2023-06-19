import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputMaskModule,
    CalendarModule,
    ConfirmPopupModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
