export interface rawDataPost {
  status: string
  feed: {
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: Post[]
}

export type Categories = string[]

export interface Post {
  author: string
  categories: Categories
  content: string
  description: string
  enclosure: {}
  guid: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}