import React, { useState, useEffect } from "react";
import AvailableTable from "./AvailableTable";
import axios from "axios";

export default function Available() {
  const [agents, setAgents] = useState([]);

  function formatData(data) {
    const agents = [];
    const agentsEmails = data.map((d) => d.email);

    const agentsUniqueEmails = [...new Set(agentsEmails)];
    agentsUniqueEmails.forEach((agentEmail) => {
      const properties = data.filter((d) => d.email == agentEmail);
      const { first_name, last_name, email } = properties[0];

      const aProperties = properties.map((p) => {
        const { id, price, sold, beds, baths, sq_ft, city, zip, street } = p;
        return { id, price, sold, beds, baths, sq_ft, city, zip, street };
      });

      agents.push({ first_name, last_name, email, properties: aProperties });
      // properties is one array with many properties but, the agent info is the same
    });

    return agents;
  }

  async function getAgentData() {
    let res = await axios.get("/api/properties");

    const agents = formatData(res.data);
    setAgents(agents);
  }

  useEffect(() => {
    //TODO: setup axios call

    getAgentData();
  }, []);

  return (
    <div>
      {agents.map((agent) => (
        <div>
          <h1>
            {agent.first_name} {agent.last_name}
          </h1>
          <p>{agent.email}</p>
          <AvailableTable properties={agent.properties} />
          <hr />
        </div>
      ))}
    </div>
  );
}