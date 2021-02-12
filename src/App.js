import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [route, setData] = useState('posts');
  const [items, setItems] = useState([]) 

  fetch(`https://jsonplaceholder.typicode.com/${route}`)
    .then(response => response.json())
    .then(json => setItems(json))

    //fetch faz o loop pq altera o estado gera um efeito colateral executando o componentes vezes e vezes
    //temos que impedir esse comportamento

   /* useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${route}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [route]); 
 */
  return (

    <div className={classes.root}>
       <Button variant="contained" color="primary" onClick={() => setData('posts')}>Posts</Button>
      <Button variant="contained" color="primary" onClick={() => setData('users')}>Usuários</Button>
      <Button variant="contained" color="primary" onClick={() => setData('comments')}>Comentários</Button>
      {
        items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })
      } 
     
    </div>
  )

}
export default App;