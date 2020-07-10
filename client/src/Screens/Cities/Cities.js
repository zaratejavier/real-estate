import React from "react";
import { Form, TableHeader, TableBody, Table } from "semantic-ui-react";
import Axios from "axios";

export default class Cities extends React.Component {
  state = {
    city: "",
    cities: [],
    properties: [],
  };

  // #TODO:: axios call and format data
  async componentDidMount() {
    let res = await Axios.get("/api/distinct_cities");
    this.setState({ cities: res.data, city: res.data[0].city }, () => {
      this.getProperties();
    });
  }
  handleChange = (e, { value }) => {
    console.log(e);
    console.log(value);
    // maybe api call or set state
    this.setState({ city: value, properties: [] }, () => {
      this.getProperties();
    });
  };

  getOptions() {
    return this.state.cities.map((c) => {
      return { key: c.city, text: c.city, value: c.city };
    });
  }
  getProperties() {
    const { city } = this.state;
    console.log(city);
    Axios.get(`/api/cities/${city}`)
      .then((res) => {
        console.log(res);
        this.setState({ properties: res.data });
      })
      .catch((e) => {
        //TODO handle error
      });
  }
  render() {
    const { properties } = this.state;
    return (
      <div>
        {/* select Input */}
        <Form.Select
          value={this.state.city}
          options={this.getOptions()}
          onChange={this.handleChange}
        />
        {/* Table */}
        <Table>
          <TableHeader>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Beds</Table.HeaderCell>
            <Table.HeaderCell>Bath</Table.HeaderCell>
            <Table.HeaderCell>Square Feet</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
          </TableHeader>
          <TableBody>
            {properties.map((p) => (
              <Table.Row>
                <Table.Cell>{p.price}</Table.Cell>
                <Table.Cell>{p.beds}</Table.Cell>
                <Table.Cell>{p.baths}</Table.Cell>
                <Table.Cell>{p.sq_ft}</Table.Cell>
                <Table.Cell>{p.street}</Table.Cell>
              </Table.Row>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}