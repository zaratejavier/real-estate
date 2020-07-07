

import React,{useState, useEffect} from "react"
import AvailableTable from "./AvailableTable";

export default function Available() {
  const [agents, setAgents] = useState([])
  
  useEffect(() => {
    //TODO: setup axios call

  setAgents([
      {
        agent_id: "1",
        first_name: "John",
        last_name: "",
        properties: [
          {
            id: 1,
            price: "12341234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",


          },
          {
            id: 1,
            price: "12341234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
        ],
      },
      {
        agent_id: "1",
        first_name: "John",
        last_name: "",
        properties: [
          {
            id: 3,
            price: "12asfd341234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
          {
            id: 4,
            price: "sdf41234",
            beds: 2,
            baths: 3,
            sq_ft: 2334,
            street: "131233",
            city: "131df233",
            zip: "131df233",
          },
        ],
      },
    ]);
  },[]);

  return (
    <div>
      {agents.map(agent => (
        <div>
          <h1>{agent.first_name}</h1>
          <AvailableTable properties={agent.properties} />
          <hr/>
        </div>
      ))}
    </div>
  )
}
