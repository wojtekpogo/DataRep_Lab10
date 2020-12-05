import React from 'react';
import { MovieItem } from './movieItem'; {/*importing movieItem component*/}

export class Movies extends React.Component {

    render() {

    {/*using map function to distract movie objects from array */}
        return this.props.mymovies.map((movie)=>{
            //passing the reload data method to the grandchild
            return <MovieItem mymovie={movie} key={movie._id} ReloadData={this.props.ReloadData}></MovieItem>
        });
    }
}