import Axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setDate] = useState([])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')


    // Get Api
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("Getting from ", res.data)
                setDate(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // Post a new 'info' for api
    const postData = (e) => {
        e.preventDefault();
        Axios.post('https://crudserver2.herokuapp.com/pratos', {
            title, body, setTitle, setBody, setDescricao, setNome, descricao, nome
        })
            .then(res => console.log('Posting data', res))
            .catch(err => console.log(err))
    }

    //  Delete an id's api
    const postDelete = (id, e) => {
        e.preventDefault();
        Axios.delete(`https://crudserver2.herokuapp.com/pratos/${id} `)
            .then(res => console.log('Deleting data', res))
            .catch(err => console.log(err))
    }

    // Patch what u want for the choosen api
    const postPatch = (id, e) => {
        e.preventDefault();
        Axios.patch(`https://crudserver2.herokuapp.com/pratos/${id}`, {
            title, body, setTitle, setBody, setDescricao, setNome, descricao, nome
        })
            .then(res => console.log('Patching data', res))
            .catch(err => console.log(err))
    }

    const arr = data.map((data, index) => {
        return (
            <tr>
                <td style={{ border: '1px solid black' }}>  {data.id}  </td>
                <td style={{ border: '1px solid black' }}>  {data.title}  </td>
                <td style={{ border: '1px solid black' }}>  {data.body}  </td>
                <td style={{ border: '1px solid #235355' }}>  {data.userId}  </td>
                <td style={{ border: '1px solid #235355' }}> <button onClick={(e) => postDelete(data.id, e)} >Delete</button> </td>
                <td style={{ border: '1px solid #235355' }}> <button onClick={(e) => postPatch(data.id, e)} >Patch</button> </td>
            </tr>
        )
    })

    return (
        <div className="App">
            <h1>Usando Axios com React Js</h1>
            <h2>Consumindo Api ( e usando crud ) </h2>

            <form>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <hr />
                <label>Body</label>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <hr />
                <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <hr />
                <label>Descrição</label>
                <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <hr />
                <button onClick={postData}>POST</button>
            </form>
            <table style={{ border: '1px solid black' }}>
                <tr>
                    <th style={{ border: '1px solid black' }}>ID</th>
                    <th style={{ border: '1px solid black' }}>Title</th>
                    <th style={{ border: '1px solid black' }}>Body</th>
                </tr>
                {arr}
            </table>

        </div>
    );
}

export default App;