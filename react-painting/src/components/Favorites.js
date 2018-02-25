import React from 'react'

const Favorites = (props) => {
  return (
    <form className="filter" onChange={props.selectFavorites} >
      <input type="radio" name="favorites" value="All"/>All
      <input type="radio" name="favorites" value="Favorites"/>Favorites
    </form>
  )
}

export default Favorites
