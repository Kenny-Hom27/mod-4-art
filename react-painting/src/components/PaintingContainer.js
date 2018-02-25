import React from 'react'
import Painting from './Painting'

export default class PaintingContainer extends React.Component {

  state = {
    paintingList: [],
    favoriteList: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/paintings')
    .then(res => res.json())
    .then(json => this.setState({ paintingList: json}))
  }

  sortNames = (paintings) => {
    return paintings.sort(function(a,b) {
      return a.title.localeCompare(b.title)
    })
  }

  sortDate = (paintings) => {
    return paintings.sort(function(a,b) {
      return a.date - b.date
    })
  }

  sortPaintings = (paintings) => {
    switch(this.props.sortType) {
      case ("Name Ascending"): return this.sortNames(paintings)
      break
      case("Name Descending"): return this.sortNames(paintings).reverse()
      break
      case ("Date Ascending"): return this.sortDate(paintings)
      break
      case("Date Descending"): return this.sortDate(paintings).reverse()
      break
    }
  }

  searchPaintings = (paintings) => {
    switch(this.props.compoundType) {
      case ("Artist"): return paintings.filter(painting => {return painting.artist.name.toLowerCase().includes(this.props.compoundSearch.toLowerCase())})
      break
      case("Title"): return paintings.filter(painting => {return painting.title.toLowerCase().includes(this.props.compoundSearch.toLowerCase())})
      break
      case ("Year"): return paintings.filter(painting => {return (painting.date || "").includes(this.props.compoundSearch)})
      break
    }
  }

  toggleFavorite = event => {
    if (this.state.favoriteList.includes(event.target.parentElement.id)) {
      let index = this.state.favoriteList.indexOf(event.target.parentElement.id)
      this.state.favoriteList.splice(index, 1)
      let newFavorite = this.state.favoriteList
      this.setState({
        favoriteList: newFavorite
      })
    } else {
      this.setState({
        favoriteList: [...this.state.favoriteList, event.target.parentElement.id]
      })
    }
  }

  render() {
    let paintingsInfo = [...this.state.paintingList]
    let sortedPaintings = this.props.sortType === "None" ? this.state.paintingList : this.sortPaintings(paintingsInfo)

    let searchedPaintings = this.searchPaintings(sortedPaintings || paintingsInfo)
    let displayPaintings = (searchedPaintings || paintingsInfo).map(painting =>
      <Painting key={painting.id} id={painting.id} favoriteList={this.state.favoriteList} color={this.props.color} title={painting.title} toggleFavorite = {this.toggleFavorite} artist={painting.artist.name} image={painting.image} date={painting.date || "1000"}/>
    )

    return (
      <div className="cards" >
        {this.props.favorite ? displayPaintings.filter(painting => {return this.state.favoriteList.includes(painting.key)}) : displayPaintings}
      </div>
    )
  }
}
