import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList games={sportGames} background="black" title="Esportes" />
        <ProductsList games={actionGames} background="gray" title="Ação" />
        <ProductsList
          games={simulationGames}
          background="black"
          title="Simulação"
        />
        <ProductsList games={fightGames} background="gray" title="Luta" />
        <ProductsList games={rpgGames} background="black" title="RPG" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
