import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons:[]
    }

    instance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/users',
    });

   componentDidMount() {
       this.instance.get()
       .then(res => {
           console.log(res);
           this.setState({ persons: res.data });
       });
   }

   render() {
       return (
           <ul>
               {this.state.persons.map(person => 
                <li key={person.id}>{person.name}</li>
                )}     
           </ul>
       )
   }
    
}