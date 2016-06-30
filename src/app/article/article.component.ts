import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  post = {
      "href": "http://blog.miniasp.com/post/2016/04/30/Visual-Studio-Code-from-Command-Prompt-notes.aspx",
      "title": "從命令提示字元中開啟 Visual Studio Code 如何避免顯示惱人的偵錯訊息",
      "date": "2016/04/30 18:05",
      "author": "Will 保哥",
      "category": "Visual Studio",
      "category-link": "http://blog.miniasp.com/category/Visual-Studio.aspx",
      "summary": "<p>由於我的 Visual Studio Code 大部分時候都是在命令提示字元下啟動，所以只要用 <strong><font color='#ff0000' face='Consolas'>code .</font></strong>就可以快速啟動 Visual Studio Code 並自動開啟目前所在資料夾。不過不知道從哪個版本開始，我在啟動 Visual Studio Code 之後，卻開始在原本所在的命令提示字元視窗中出現一堆惱人的偵錯訊息，本篇文章試圖解析這個現象，並提出解決辦法。</p><p>... <a class='more' href='http://blog.miniasp.com/post/2016/04/30/Visual-Studio-Code-from-Command-Prompt-notes.aspx#continue'>繼續閱讀</a>...</p>"
    };

  constructor() {}

  ngOnInit() {
  }

}
