import React from "react";
import axios from "axios";
import { Header, Form, } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { name: "", description: "", price: "", }

  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/departments/${this.props.match.params.id}/items`, { ...this.state, })
      .then( res => {
        this.props.history.push("/departments")
      })
  };

  render() {
    return (
      <div>
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Input 
              label="Price"
              placeholder="Price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}              
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input 
              label="Description"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}


export default ItemForm;
