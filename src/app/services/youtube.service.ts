import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyCD12tjLIo8u4vyJbEsITyoz5-AA9SuQZo';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(public http: HttpClient) { }

  getVideos() {
    const url = `${ this.youtubeURL }/playlistItems`;
    let params = new HttpParams();

    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', this.playlist);
    params = params.set('key', this.apiKey);

    return this.http.get(url, { params }).pipe(map( response => {
      this.nextPageToken = response['nextPageToken'];

      const videos: any[] = [];
      for (const video of response['items']) {
        const snippet = video['snippet'];
        videos.push(snippet);
      }
      return videos;
    }));
  }
}
