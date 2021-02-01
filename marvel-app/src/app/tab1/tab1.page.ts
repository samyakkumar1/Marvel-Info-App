import { Component } from '@angular/core';
import { MarvelServiceService } from 'src/app/Service/marvel-service.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  infos:any

  constructor(private marvelservice:MarvelServiceService) {
    this.loadHeroes();
   
    
   
  }
  loadHeroes(){
    this.marvelservice.getHeroes().subscribe(data =>{
      this.infos=data['data']['results'];
      console.log(this.infos)
    })
  }
  

}
