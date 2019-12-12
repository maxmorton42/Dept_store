import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, Icon } from "semantic-ui-react";
import styled from 'styled-components';

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get('/api/departments')
    .then( res => {
      this.setState({ departments: res.data})
    })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const { departments, } = this.state;
        this.setState({ departments: departments.filter(t => t.id !== id), })
      })
  }

  renderDepartments = () => {
    const { departments, } = this.state;
    if (departments.length <= 0)
    return <Header>No Departments</Header>
    return departments.map( department => (
      <Card>
    <Card.Content>
      <Card.Header>{ department.name }</Card.Header>
      </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`}>
          View
          </Button>
          <Button
          icon 
      color="red" 
      onClick={() => this.deleteDepartment(department.id)} 
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
          </Button>
        </Card.Content>
      </Card>
  ))
}
render() {
  return (
  <div>
  <HeaderText as="h1">Departments</HeaderText>
    <br />
    <Button as={Link} color="green" to="/departments/new">
     Add Department
     </Button>
        <br />
        <br />
    <Card.Group>
      { this.renderDepartments() }
    </Card.Group>
  </div>

  )
}
}

const HeaderText = styled.h1`
text-align: center;
`;

export default Departments;


