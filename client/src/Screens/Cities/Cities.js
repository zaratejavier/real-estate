import React from "react";
import { Form, TableHeader, TableBody, Table } from "semantic-ui-react";

export default class Cities extends React.Component {

  state = {
    properties: [
      {
        price: 123234.0,
        street: "123456 maywood",
        beds: 12,
        baths: 3,
        sq_ft: 1232,
      },
      {
        price: 1233234.0,
        street: "123456 lynwood",
        beds: 3,
        baths: 5,
        sq_ft: 1200,
      },
    ],
  };
  
  render() {
    const { properties } = this.state;
    return (
      <div>
        {/* select Input */}
        <Form.Select />
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