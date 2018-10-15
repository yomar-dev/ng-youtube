import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSelected: any;

  constructor(public _youtube: YoutubeService) {
    this._youtube.getVideos().subscribe((response => {
      this.videos = response;
      console.log(this.videos);
    }));
  }

  ngOnInit() {
  }

  viewVideo(video: any) {
    this.videoSelected = video;
    $('#exampleModal').modal();
  }

  closeVideo() {
    this.videoSelected = null;
    $('#exampleModal').modal('hide');
  }

}
