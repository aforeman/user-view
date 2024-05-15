import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { ListZellerCustomers } from './queries';
import awsconfig from './aws-exports';

import ViewUsers from './ViewUsers';
import User from './types/User';

import './App.css';

Amplify.configure({
  API: {
    GraphQL: {
      "endpoint": "https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql",
      "region": "ap-southeast-2",
      "defaultAuthMode": "apiKey",
      "apiKey": "da2-6y6arb7mwvgrnmds2jignrgr2u",
    }
  }
  });

async function fetchData() {
  const client = generateClient();

  const result = await client.graphql({
    query: ListZellerCustomers
  }) as any;

  return result;
}

function App() {
  const client = generateClient();
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    fetchData().then(result => setUsers(result));
  }, []);

  return (
    <div className="App">
      <div>
        <ViewUsers users={users?.data.listZellerCustomers.items as User[]} />
      </div>
    </div>
  );
}

export default App;
