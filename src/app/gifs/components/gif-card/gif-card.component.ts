import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent implements OnInit {

  @Input()
  //public gifs:Gif[]=[];
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');
  }
}
