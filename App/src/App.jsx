import Axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setDate] = useState([])

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("Geting from ::::", res.data)
                setDate(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const arr = data.map((data, index) => {
        return (
            <tr>
                <td>  {data.id}  </td>
                <td>  {data.title}  </td>
                <td>  {data.body}  </td>

            </tr>
        )
    })

    return (
        <div className="App">
            <h1>Usando Axios com React Js</h1>
            <h2>E consumindo Api</h2>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {arr}
            </table>

        </div>
    );
}

export default App;