import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={sportGames}
        background="black"
        title="Esportes"
        id="sport"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={actionGames}
        background="gray"
        title="Ação"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={simulationGames}
        background="black"
        title="Simulação"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        background="gray"
        title="Luta"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        background="black"
        title="RPG"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories
