import { ContainerCard } from './style'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <ContainerCard>
      <h2>{title}</h2>
      {children}
    </ContainerCard>
  )
}

export default Card
