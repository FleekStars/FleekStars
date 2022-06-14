import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-code-builder',
  templateUrl: './html-code-builder.component.html',
  styleUrls: ['./html-code-builder.component.scss']
})
export class HtmlCodeBuilderComponent implements OnInit {

  codeMirrorOptions: any = {
    mode: "text/html",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };
  content: any = 
  `<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>My Page Title</title>
    </head>
    <body>
 
    </body>
  </html>`;

  availableTags = ['h1', 'p', 'img',]

  attributes: any = {
    h1: ['style', 'other attribute'],
    p: ['style'],
    img: ['src', 'width', 'height'],    
  }

  styleAttributes = ['color', 'background-color', 'font-size', 'font-family']

  selectedTag: string = '';

  constructor() { }

  ngOnInit(): void { }

  addTag(tagName: string) {
    this.selectedTag = tagName;
    if (tagName == 'img') {

    } else if (tagName == 'p') {

    }
  }

}
