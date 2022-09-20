import React from 'react'
import './Filter.css';
const Filter = ({ sex, setSex }) => {

  const handleChange = (newSex) => {
      setSex(newSex);
  }

  return (
    <div className='Filter'>
      <label htmlFor="all">
        <input
          type="radio"
          name="sex"
          id="all"
          value=""
          onChange={(e) => handleChange(e.target.value)}
          checked={sex === ""} />  Tous
      </label>
      <label htmlFor="Female">
        <input
          type="radio"
          name="sex"
          id="Female"
          value="f"
          onChange={(e) => handleChange(e.target.value)}
          checked={sex === "f"} /> Femmes
      </label>
      <label htmlFor="Male">
        
        <input
          type="radio"
          name="sex"
          id="Male"
          value="m"
          onChange={(e) => handleChange(e.target.value)}
          checked={sex === "m"} /> Hommes
      </label> 
    </div>
  )
}

export default Filter