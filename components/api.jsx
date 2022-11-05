import axios from 'axios';

function Getapi() {
    axios
        .delete("https://crudserver2.herokuapp.com/pratos/45", {
            nome: "Romulo",
            sobrenome: "Sousa"
        })
        .then((resposta) => console.log(resposta.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    return (
        console.log('aa')
    )
}

export default Getapi