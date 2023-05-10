export class ProfilesService {
  profiles= [
    {
      name:'Steven Seagal',
      status:'online'
    },
    {
      name:'Bob Lafleur',
      status:'absent'
    },
    {
      name:'Gigi Dorio',
      status:'offline'
    },
  ]

  addProfile(name:string, status:string) {
    console.log('Via ProfilesService : Profil ajouté : ' + name + ' ' + status);
    this.profiles.push({
      name: name,
      status: status
    })
  }

  updateProfile(id:number, status:string) {
    console.log('Via ProfilesService : Profil modifié : ' + name + ' ' + status);
    this.profiles[id].status = status;
    console.log(this.profiles);
  }
}
