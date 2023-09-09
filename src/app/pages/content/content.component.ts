import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://cdn.resfu.com/media/img_news/agencia-efe_multimedia_55010875259.multimedia.photos.55010875259005.file.jpg?size=720x&lossy=1";
  contentTitle:string = "Noticia Exemplo";
  contentDescription:string = "Noticia Exemplo";

  constructor() { }

  ngOnInit(): void {
  }

}
