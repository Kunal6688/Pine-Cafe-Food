import React from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay'

const Home = () => {
  const [category,setCategory]= React.useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
