import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { FetchService } from '../fetch.service';





@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any

  constructor(private FetchService: FetchService) { }

  ngOnInit(): void {

    const temp = this.FetchService.getPosts().subscribe(data => {
      this.posts = data.items
      console.log(data.items)
    })



  }


}
