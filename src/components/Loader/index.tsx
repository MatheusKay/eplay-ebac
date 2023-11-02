import { PacmanLoader } from 'react-spinners'

import { colors } from '../../styles'
import { ContainerLoader } from './style'

const Loader = () => {
  return (
    <ContainerLoader>
      <PacmanLoader color={colors.white} />
    </ContainerLoader>
  )
}

export default Loader
