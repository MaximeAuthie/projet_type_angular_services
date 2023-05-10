import { Component, EventEmitter, Output } from '@angular/core';
import { LogService } from '../log.service';
import { ProfilesService } from '../profile.service'; //! Etant donnée qu'il est déjà dans les providers de app.module.ts, pas besoin de le remettre en providers ici

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css'],
  providers: [LogService] //! On précise ici les différents services utilisés dans ce componsant (sauf ceux déjà précisés dans un composant parent (comme ProfilesService dans app.module.ts))
})
export class NewProfileComponent {
  // @Output() profileAdded=new EventEmitter<{name:string,status:string}>();

  constructor(private logService:LogService, private profilesService:ProfilesService) {
    //! Permet de créer une nouvelle instance du service LogService lors de la construction du composant, dans une variable privée de type LogService (qui reste limité uniquement à ce composant)
    //! Permet de créer une nouvelle instance du service ProfilesService lors de la construction du composant, dans une variable privée de type ProfilesService (qui reste limité uniquement à ce composant)
  }

  onCreateProfile(profileName:string,profileStatus:string){
    // this.profileAdded.emit({
    //   name:profileName,
    //   status:profileStatus
    // });
    this.profilesService.addProfile(profileName, profileStatus)
    this.logService.logStatusChange(profileStatus); //! Ici je fais appel au service
  }
}
