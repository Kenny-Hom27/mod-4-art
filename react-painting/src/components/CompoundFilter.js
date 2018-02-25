import React from 'react'

const CompoundFilter = (props) => {

  return (
    <div className="filter"> 
      Search By: &nbsp;
      <select onChange={props.handleCompoundType}>
        <option value="Title">Title</option>
        <option value="Artist">Artist</option>
        <option value="Year">Year</option>
      </select>
      <input type="text" placeholder="Search" onChange={props.handleCompoundSearch}/>
    </div>

  )
}

export default CompoundFilter
