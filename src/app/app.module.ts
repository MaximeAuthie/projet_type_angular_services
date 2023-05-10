import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { ProfileComponent } from './profile/profile.component';


import { ProfilesService } from './profile.service';


@NgModule({ //! MODULE = bibliothèque de tous les composants
  declarations: [
    AppComponent,
    NewProfileComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
