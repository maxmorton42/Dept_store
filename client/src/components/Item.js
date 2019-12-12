import React from 'react'
import { Segment, Header} from 'semantic-ui-react'
import styled from 'styled-components';

const Item = ({name, description, price }) => (


<Segment>
<Header> { name }</Header>
<SpanContainer > ${price} </SpanContainer>
<br />
<br />
<SpanContainer> {description} </SpanContainer>
</Segment>
)

const SpanContainer = styled.div`
color: black;
`;

export default Item