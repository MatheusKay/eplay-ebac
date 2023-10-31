import { useState } from 'react'

import { GallaryItem } from '../../pages/Home'

import Section from '../Section'

import zoomIcon from '../../assets/imagens/zoom.png'
import playIcon from '../../assets/imagens/play.png'
import closeIcon from '../../assets/imagens/fechar.png'

import { Container } from '../../styles'
import * as S from './style'

type Props = {
  defaultCover: string
  name: string
  items: GallaryItem[]
}

interface ModalState extends GallaryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
    if (item.type === 'image') return zoomIcon
    return playIcon
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
        <S.Items>
          {items.map((media, index) => (
            <S.Item
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
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para visualizar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <Container>
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Icone de fechar" onClick={closeModal} />
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
      </S.Modal>
    </>
  )
}

export default Gallery
