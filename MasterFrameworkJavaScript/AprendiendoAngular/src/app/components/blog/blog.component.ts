import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from '../../models/article';
import { Global } from "../../services/global";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    //con subscribe nos permite recoger los datos que me devuelve la peticion http
    this._articleService.getArticles().subscribe(
      res =>{
        
        if(res.article) {
          this.articles = res.article;
        }else {
          
          
        }
      },
      error =>{
        console.log(error);
      }
    )
  }

}
