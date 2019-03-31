import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Anime} from '../anime';
import {Episode } from '../episode';
import { AnimeService } from '../anime.service';
import * as AnimeActions from '../store/actions'

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() anime:Anime;
  selectedEpisode:Episode;
  
  constructor(private animeService : AnimeService) { }

  ngOnInit() {
    this.selectedEpisode = null;
    //this.store.dispatch(new AnimeActions.LoadAnime(this.anime));

  }

  selectEpisode(episode:Episode):void{
   // debugger;
    if (this.selectedEpisode == episode){
      this.selectedEpisode = null;
    }
    else {
      this.selectedEpisode = episode;
    }
  }

}
