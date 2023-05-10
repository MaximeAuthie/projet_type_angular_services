import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../log.service';
import { ProfilesService } from '../profile.service'; //! Etant donnée qu'il est déjà dans les providers de app.module.ts, pas besoin de le remettre en providers ici

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [LogService] //! On précise ici les différents services utilisés dans ce componsant (sauf ceux déjà précisés dans un composant parent (comme ProfilesService dans app.module.ts))
})
export class ProfileComponent {
  @Input() id:number; //!props envoyée par app.component.ts
  @Input() profile:{name:string,status:string};
  // @Output() statusChanged=new EventEmitter<{id:number,newStatus:string}>();

  constructor(private logService:LogService, private profilesService:ProfilesService) {

  }

  onSetStatusTo(status:string){
    this.profilesService.updateProfile(this.id, status);
    this.logService.logStatusChange(status);
  }
}
