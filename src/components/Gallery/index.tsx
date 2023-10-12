import { useState } from 'react'

import Section from '../Section'

import { Item, Items, Action, Modal } from './style'

import diablo from '../../assets/imagens/diablo.png'
import hogwarts from '../../assets/imagens/fundo_hogwarts.png'

import iconZoom from '../../assets/imagens/zoom.png'
import iconPlay from '../../assets/imagens/play.png'
import iconFechar from '../../assets/imagens/fechar.png'

import { Container } from '../../styles'
import { GallaryItem } from '../../pages/Home'

const mock: GallaryItem[] = [
  {
    type: 'image',
    url: diablo
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/78CP8na1Fpo?si=i3ecxqgTA7PgZOt0'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GallaryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GallaryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GallaryItem) => {
    if (item.type === 'image') return iconZoom
    return iconPlay
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} do ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para visualizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <Container>
          <header>
            <h4>{name}</h4>
            <img
              src={iconFechar}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </Container>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
