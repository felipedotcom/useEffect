import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

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

    <Grid
      container
      spacing={0}
      display="flex"
      direction="column"
      alignItems="flex-start"
      justify="center"
    >

      <Grid item xs={6}>
          {
            data.map((repo) => (
              <div>
                <a
                  href={repo.html_url}
                  key={repo.id}
                >
                  <span>{repo.name}</span>
                  <br/>
                  <span>Stars: {repo.stargazers_count}</span>
                  <span>Forks: {repo.forks}</span>
                  <span>Issues: {repo.open_issues}</span>
                </a>
              </div>
            ))
          }
      </Grid>
    </Grid>
    )
}
export default App;