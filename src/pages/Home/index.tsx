import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GallaryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
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

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (soonGames && onSaleGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} background="gray" title="Promoções" />
        <ProductsList games={soonGames} background="black" title="Em breve" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
