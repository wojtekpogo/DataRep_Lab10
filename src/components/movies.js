import React from 'react';
import { MovieItem } from './movieItem'; {/*importring movieItem component*/}

export class Movies extends React.Component {

    render() {

    {/*using map function to distract movie objects from array */}
        return this.props.mymovies.map((movie)=>{
            return <MovieItem mymovie={movie}></MovieItem>
        });
    }
}