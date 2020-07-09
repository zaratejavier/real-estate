import React, { useState, useEffect } from "react";
import { Form, List } from "semantic-ui-react";
import axios from "axios";

export default function (props) {
  const [agents, setAgents] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [showBuyers, setShowBuyers] = useState(false);

  async function getAgents() {
    //TODO: axios call here
    try {
      //assuming when api is ready
      let res = await axios.get("/api/agents");
      setAgents(res.data);
      setShowBuyers(true);
    } catch (e) {
      // normally you don't want to do this here, but I am expecting this call to fail
      // setAgents([
      //   { first_name: "agent", last_name: "1", id: 1 },
      //   { first_name: "agent", last_name: "2", id: 2 },
      // ]);
      // setShowBuyers(true);
    }
  }

  useEffect(() => {
    getAgents();
  }, []);
  function getAgentsOptions() {
    return agents.map((agent) => ({
      key: agent.id,
      text: `${agent.first_name} ${agent.last_name}`,
      value: agent.id,
    }));
  }

  function getBuyersOptions() {
    return buyers.map((buyer) => ({
      key: buyer.id,
      text: `${buyer.first_name} ${buyer.last_name}`,
      value: buyer.id,
    }));
  }

  async function getBuyers(e, { value }) {
    console.log(value);
    const agentId = value;
    //TODO axios call using value(ie agent id) to get buyers
    try {
      const res = await axios.get(`/api/agents/${agentId}`);
      setBuyers(res.data);
    } catch (e) {
      // setBuyers([
      //   { first_name: "buyer", last_name: "1", id: 1 },
      //   { first_name: "buyer", last_name: "2", id: 2 },
      // ]);
    }
  }

  async function getBuyersList(e, { value }) {
    console.log(value);
    const buyerId = value
    try {
      const res = await axios.get(`/api/buyers/${buyerId}`)
      setProperties(res.data) // this might not be res.data need to check
    } catch(e){
      setProperties([
        { sq_ft: 12334, city: 'Sandy', price: 12344.00 },
        { sq_ft: 567334, city: 'Draper', price: 17944.00 },
        
      ])
    }
  }

  const getProperties = () => {
    return properties.map(p => {
      return (
        <List key={p.id}>
          <List.Content>
            <List.Header>${p.price} - Square feet: {p.sq_ft}</List.Header>
            <List.Header>{p.city}</List.Header>
          </List.Content>
        </List>
      )
    })
  }

  return (
    <div>
      <h1>Find Home</h1>
      <Form.Select options={getAgentsOptions()} onChange={getBuyers} />
      {showBuyers && (
        <Form.Select options={getBuyersOptions()} onChange={getBuyersList} />
      )}
      {properties.length > 0 && getProperties()}
    </div>
  );
}