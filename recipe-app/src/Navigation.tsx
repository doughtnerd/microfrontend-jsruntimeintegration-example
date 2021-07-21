import { Link } from 'react-router-dom'
import React from 'react'

const style = { border: '1px solid #000', padding: 12 }

const Navigation = (): JSX.Element => (
  <div style={style}>
    <Link to='/'>Home</Link> - <Link to='/add-recipe'>Add Recipe</Link>
  </div>
)

export default Navigation;
