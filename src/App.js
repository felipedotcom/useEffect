import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://api.github.com/users/felipedotcom/repos',
    );
    console.log(result)
    setData(result.data);
  }, []);

  return (
    <ul>

      {

        data.map((repo) => (
          <div>
            <a
              href={repo.html_url}
              key={repo.id}
            >
              <span>{repo.name}</span>
              <span>Stars: {repo.stargazers_count}</span>
              <span>Forks: {repo.forks}</span>
              <span>Issues: {repo.open_issues}</span>
            </a>
          </div>
        ))
      }
    </ul>
  )
}
export default App;