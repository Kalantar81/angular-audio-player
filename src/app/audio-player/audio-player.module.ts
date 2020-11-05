import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAudioPlayerComponent } from './ngx-audio-player/ngx-audio-player.component';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerComponent } from './players/youtube-player/youtube-player.component';




@NgModule({
  declarations: [
    NgxAudioPlayerComponent,
    YoutubePlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxAudioPlayerComponent
  ],
  entryComponents: [
    NgxAudioPlayerComponent
  ]
})
export class AudioPlayerModule { }
