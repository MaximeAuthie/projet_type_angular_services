import { Component } from '@angular/core';
import { ProfilesService } from './profile.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent {
  mesArticles=[
    {
      type:'article',
      title:'Article de test',
      content:'Contenu de test'
    }
  ];

  profiles:{name:string,status:string}[]=[]; //!Déclaration d'une variable profil qui est un tableau d'objets, composés des champs name et status (syntaxe TypeScript)

  constructor(private profileService:ProfilesService) {

  }

  ngOnInit() {
    this.profiles = this.profileService.profiles;
    console.log(this.profiles);

  }

  // ngDoCheck() {
  //   this.profileService = new ProfilesService;
  //   this.profiles = this.profileService.profiles;
  //   console.log(this.profileService.profiles);
  //   console.log(this.profiles);
  // }

  onArticleAdded(articleData:{articleTitle:string,articleContent:string}){
    this.mesArticles.push(
      {
        type:'article',
        title:articleData.articleTitle,
        content:articleData.articleContent
      }
    )
  }
  onBrouillonAdded(brouillonData:{articleTitle:string,articleContent:string}){
    this.mesArticles.push(
      {
        type:'brouillon',
        title:brouillonData.articleTitle,
        content:brouillonData.articleContent
      }
    )
  }

  // onProfileAdded(newProfile:{name:string,status:string}){
  //   this.profiles.push(newProfile);
  // }

  // onStatusChanged(updateInfo:{id:number,newStatus:string}){
  //   this.profiles[updateInfo.id].status = updateInfo.newStatus;
  // }
}
