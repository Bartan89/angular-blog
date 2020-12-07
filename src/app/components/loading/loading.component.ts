import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/types';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() truthyPosts!: Post[]

  constructor() { }

  ngOnInit(): void {
  }

}
