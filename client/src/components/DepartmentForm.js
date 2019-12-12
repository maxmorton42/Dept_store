import React from "react";
import axios from "axios";
import { Header, Form, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  defaultValues = { name: "", };
  state = { ...this.defaultValues, };

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/departments", { ...this.state, })
      .then( res => {
        this.props.history.push("/departments");
      })
    this.setState({ ...this.defaultValues, });
  };

  render() {
 
    return (
      <div>
        <Header as="h1">New Department</Header>
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
  
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  };
};

export default DepartmentForm;
