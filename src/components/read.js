import React from 'react';
import {Movies} from './movies';    
import axios from 'axios';
{/*imported Movies component*/}
{/*imported axios library, allows us to make some asynchronous operations*/}

{/* state object to store property values that belongs to the component, in this case movies info*/}
export class Read extends React.Component {
    
    state ={
        
        movies: [ ]
            
    };
    
    componentDidMount(){ {/* function that takes json file from the api and returns a promise*/}
        axios.get('http://localhost:4000/api/movies') //takes data from our new api 
        .then(resposne=>{
            this.setState({movies:resposne.data.mymovies});

        })
        .catch((error)=>{ {/*error handling if it won't work*/}

            console.log(error);
        });
    }

    render() {


        return (
            <div>
                <h3>Hello from Read Component</h3>
                <Movies mymovies={this.state.movies}></Movies>
            </div>
        );
    }

}