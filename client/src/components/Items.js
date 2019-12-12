import React from 'react'
import Item from './Item'



const Items = ({ items, }) => {
  return items.map( item => (
  <Item key={item.id} {...item} />
  ))
}

export default Items;