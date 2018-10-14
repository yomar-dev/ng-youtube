import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  constructor(public _youtube: YoutubeService) {
    this._youtube.getVideos().subscribe((response => {
      this.videos = response;
    }));
  }

  ngOnInit() {
  }

}
