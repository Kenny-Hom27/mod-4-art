import React from 'react'
import PaintingContainer from './PaintingContainer'
import SortFilter from './SortFilter'
import CompoundFilter from './CompoundFilter'
import Favorites from './Favorites'


export default class NavBar extends React.Component {

  state = {
    sortType: "",
    compoundType: "Title",
    compoundSearch: "",
    color: "red",
    count: 0,
    favorite: false
  }

  changeColor = () => {
    let colors = ["red", "orange", "yellow", "green", "blue", "cyan", "purple", "magenta"]
    this.setState({ color: colors[++this.state.count % colors.length]})
  }

  handleSort = event => {
    this.setState({
      sortType: event.target.value
    })
  }

  handleCompoundType = event => {
    this.setState({
      compoundType: event.target.value
    })
  }

  handleCompoundSearch = event => {
    this.setState({
      compoundSearch: event.target.value
    })
    this.changeColor()
  }

  selectFavorites = event => {
    event.target.value === "All" ? this.setState({favorite: false}) : this.setState({favorite: true})
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 style={{color: this.state.color}}>Kenny's Truely Amazing Art Gallery</h1>
        </div>
        <div className="filters" style={{background: this.state.color}}>
          <SortFilter handleSort={this.handleSort}/>
          <CompoundFilter handleCompoundType={this.handleCompoundType} handleCompoundSearch={this.handleCompoundSearch}  />
        </div>
        <h1 style={{background: this.state.color}}> Paintings </h1>
        <Favorites selectFavorites={this.selectFavorites}/>
        <PaintingContainer color={this.state.color} sortType={this.state.sortType} compoundType={this.state.compoundType} compoundSearch={this.state.compoundSearch} favorite={this.state.favorite} />
      </div>
    )
  }
}
