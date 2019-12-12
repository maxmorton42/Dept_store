import React from 'react'
import { Segment, Header} from 'semantic-ui-react'

const Item = ({name, description, price }) => (


<Segment>
<Header> { name }</Header>
<span> {price} </span>
<span> {description} </span>
</Segment>
)

export default Item