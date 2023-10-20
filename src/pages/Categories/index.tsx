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
        <ProductsList
          games={sportGames}
          background="black"
          title="Esportes"
          id="sport"
        />
        <ProductsList
          games={actionGames}
          background="gray"
          title="Ação"
          id="action"
        />
        <ProductsList
          games={simulationGames}
          background="black"
          title="Simulação"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          background="gray"
          title="Luta"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          background="black"
          title="RPG"
          id="rpg"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
