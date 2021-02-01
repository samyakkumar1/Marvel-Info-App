import { Component } from '@angular/core';
import { MarvelServiceService } from 'src/app/Service/marvel-service.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  infos2:any


  constructor(private marvelservice:MarvelServiceService) {
    this.loadComics();
  }

  loadComics(){
    this.marvelservice.getComics().subscribe(data2=>{
      this.infos2=data2["data"]["results"];
      console.log(this.infos2)
    })
  }

}
