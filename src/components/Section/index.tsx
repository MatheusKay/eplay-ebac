import { Container } from '../../styles'
import { ContainerSection, Titulo } from './style'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <ContainerSection background={background}>
    <Container>
      <Titulo>{title}</Titulo>
      {children}
    </Container>
  </ContainerSection>
)

export default Section
