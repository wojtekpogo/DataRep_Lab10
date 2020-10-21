import React from 'react';
import Card from 'react-bootstrap/Card'; {/*import Card from boostrap to use Cards*/ }

export class MovieItem extends React.Component {

    render() {


        return (

            <div>
                {/*using Card bootstrap to display movie objects*/}
                <Card>
                    <Card.Header><h2>{this.props.mymovie.Title}</h2></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.mymovie.Poster} width="200" height="300"></img>

                            <footer className="blockquote-footer">
                                {this.props.mymovie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}


