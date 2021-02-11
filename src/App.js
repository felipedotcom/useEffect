import React, { useState, useEffect } from 'react';

function App() {
  const [resource, setData] = useState('posts');
  const [items, setItems] = useState([]) 

  fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(response => response.json())
    .then(json => setItems(json))

    //fetch faz o loop pq altera o estado gera um efeito colateral executando o componentes vezes e vezes
    //temos que impedir esse comportamento

   /* useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resource]); 
 */
  return (

    <div>
       <button onClick={() => setData('posts')}>Posts</button>
      <button onClick={() => setData('users')}>Users</button>
      <button onClick={() => setData('comments')}>Comments</button>
      <h1>{resource}</h1>
      {
        items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })
      } 
     
    </div>
  )

}
export default App;