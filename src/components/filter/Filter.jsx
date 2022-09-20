import React from 'react'
import './Filter.css';
const Filter = ({ sex, setSex }) => {

  const handleChange = (newSex) => {
      setSex(newSex);
  }

  return (
    <div>
      <label htmlFor="all">
        Tous
        <input
          type="radio"
          name="sex"
          id="all"
          value=""
          onChange={(e) => handleChange(e.target.value)}
          checked={sex === ""} />
      </label>
      <label htmlFor="Female">
        Femmes
        <input
          type="radio"
          name="sex"
          id="Female"
          value="f"
          onChange={(e) => handleChange(e.target.value)}
          checked={sex === "f"} />
      </label>
      <label htmlFor="Male">
        Hommes
        <input
          type="radio"
          name="sex"
          id="Male"
          value="m"
          onChange={(e) => handleChange(e.target.value)}
          checked={sex === "m"} />
      </label>
    </div>
  )
}

export default Filter