declare interface GallaryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    langueges: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GallaryItem[]
  }
}
