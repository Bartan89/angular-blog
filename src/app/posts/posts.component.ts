import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { FetchService } from '../fetch.service';
import { Categories, Post } from '../types';
import { from, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';






@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Post[]
  filteredPost!: Post[]
  youSearchedFor: string | null = null
  showCategories: string[] = []

  handleKey(event: KeyboardEvent, subitem: string) {
    if (event.key === "Tab") {
      this.filteredPost = this.posts
    }
    if (event.key === 'Enter') {
      this._formInput = subitem
      if (this._formInput.length >= 1) {
        const filtered = this.posts.filter((post => {
          if (post.categories.includes(this.formInput)) {
            this.youSearchedFor = this.formInput
            this.formInput = ""
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
  }


  private _formInput!: string

  get formInput(): string {
    return this._formInput
  }

  set formInput(value: string) {
    this._formInput = value


  }



  constructor(private FetchService: FetchService) { }

  ngOnInit(): void {
    const oneSecond = 1000
    const response = this.FetchService.getPosts()

    from(response).pipe(
      concatMap(item => of(item).pipe(delay(oneSecond)))
    ).subscribe(timedItem => {
      this.posts = timedItem.items
      this.filteredPost = this.posts


      this.posts.forEach((post) => {
        post.categories.forEach((categoryItem) => {
          this.showCategories.push(categoryItem)
        })
      })

      this.showCategories = [...new Set(this.showCategories)]
    });
  }

  showInputSuggestions() {
    if (this._formInput) {
      this.showCategories = this.showCategories.sort((a, b) => {
        if (a.includes(this._formInput)) { return -1; }
        if (!a.includes(this._formInput)) { return 1; }
        return 0;
      })
      return true
    } else {
      return false

    }
  }

  initialState() {
    this.filteredPost = this.posts
    this.youSearchedFor = null
  }

}



