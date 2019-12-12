import React from 'react';
import axios from "axios";
import Items from "./Items"
import { Link, } from "react-router-dom";
import { Button, Header, Segment,} from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, items: [], }
  
  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res=> {
      this.setState({ department: res.data, })
    })
    axios.get(`/api/departments/${this.props.match.params.id}/items`)
    .then( res => {
      this.setState({ items: res.data, })
    })
  }
  render() {
    return (
      <div>
        <Segment>
      <Header as="h1">{ this.state.department.name }</Header>
      </Segment>
      <br />
      <br />
      <div>
        <Header as="h2">Items</Header>
        <Button 
          as={Link} 
          color="green" 
          to={`/departments/${this.props.match.params.id}/new-item`}
        >
          Add Item
          </Button>
        </div>
      <Items items={this.state.items} />
      <br />
      <br />
      <Button 
        color="black" 
        onClick={this.props.history.goBack}
      >
        Back
      </Button>
      </div>
    )
  }
}
 
export default DepartmentView;

