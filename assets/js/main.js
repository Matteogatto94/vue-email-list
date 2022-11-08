/*Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

const { createApp } = Vue

createApp({
    data(){
        return{
            emailUser: null,
        }
    },
    mounted(){
        for (let index = 0; index < 10; index++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
        console.log(response.data.response);
    })
            
    }
    }
}).mount('#app')