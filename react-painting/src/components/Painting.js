import React from 'react'

const Painting = (props) => {
  return (
    <div className="card" id={props.id} onClick={props.toggleFavorite} style={{background: props.color, color: props.favoriteList.includes(props.id.toString()) ? "white" : "black"}}>
      <h2>{props.title}</h2>
      <div>Artist: {props.artist}</div>
      <div>Year: {props.date.match(/\d{4}/)}</div>
      <img src={props.image} width="150px" height="150px" />
    </div>
  )
}

export default Painting
