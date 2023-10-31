import { Container } from '../../styles'
import * as S from './style'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <S.ContainerSection background={background}>
    <Container>
      <S.Title>{title}</S.Title>
      {children}
    </Container>
  </S.ContainerSection>
)

export default Section
