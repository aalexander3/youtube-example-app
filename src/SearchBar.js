import React from 'react'

const SearchBar = (props) => {
  const {handleClick, handleChange} = props

  return (
    <div className="sixteen wide column">
      <div className="ui segment secondary">
        <div className="ui huge fluid input">
          <form onSubmit={handleClick} >
            <input onChange={handleChange} value={props.searchTerm} type="text" placeholder="Search Youtube..."/>
            <input type="submit" className="ui red button" value="Search"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
