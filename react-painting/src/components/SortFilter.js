import React from 'react'

const SortFilter = (props) => {

  return (
    <div className="filter"> Sort By: &nbsp;
      <select onChange={props.handleSort}>
        <option value="None">None</option>
        <option value="Name Ascending">Name Ascending</option>
        <option value="Name Descending">Name Descending</option>
        <option value="Date Ascending">Date Ascending</option>
        <option value="Date Descending">Date Descending</option>
      </select>
    </div>

  )
}

export default SortFilter
