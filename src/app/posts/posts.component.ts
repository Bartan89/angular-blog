import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { FetchService } from '../fetch.service';
import { Post } from '../types';





@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private _formInput: string = "seach me"

  get formInput(): string {
    return this._formInput
  }

  set formInput(value: string) {
    this._formInput = value

    if (this._formInput.length >= 1) {
      const filtered = this.posts.filter((post => {
        if (post.title.toLowerCase().includes(this.formInput.toLowerCase())) {
          return true
        } else {
          return false
        }
      }))
      this.filteredPost = filtered
    } else {
      this.filteredPost = this.posts
    }
  }

  posts!: Post[]
  filteredPost!: Post[]

  constructor(private FetchService: FetchService) { }

  ngOnInit(): void {

    this.FetchService.getPosts().subscribe(data => {
      this.posts = data.items
      this.filteredPost = this.posts
    })

  }


}
