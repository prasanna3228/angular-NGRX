import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplyComponent } from './component/counterdisply/counterdisply.component';
import { counterReducer } from './shared/stored/counter.reducer';

@NgModule({
  declarations: [AppComponent, CounterbuttonComponent, CounterdisplyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
