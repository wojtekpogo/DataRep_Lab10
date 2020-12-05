import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class MovieItem extends React.Component {


    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);

    }

    DeleteMovie(e) {
        e.preventDefault();
        console.log('Delete:'+this.props.mymovie._id);
        axios.delete('http://localhost:4000/api/movies/' + this.props.mymovie._id)
            .then(()=>{
                //calling the reload data method
                this.props.ReloadData();
            })
            .catch();

    }


    render() {

        return (

            <div>
                {/*using Card bootstrap to display movie objects*/}
                <Card>
                    <Card.Header><h2>{this.props.mymovie.title}</h2></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.mymovie.poster} width="200" height="300"></img>

                            <footer className="blockquote-footer">
                                {this.props.mymovie.year}
                            </footer>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                        <Link to={"/edit/"+this.props.mymovie._id} className="btn btn-primary">Edit</Link>

                    </Card.Body>
                </Card>

            </div>
        );
    }
}


