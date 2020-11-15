import React from 'react';
import axios from 'axios'; //importing axios


export class Create extends React.Component {

    constructor() {

        super();
        //all events has to be binded
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
//method to input a title
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //method to input a year
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    //method to input a poster url
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        //stops before calling button multiple times
        e.preventDefault();
        //alert
        alert("Movie: " + this.state.Title + " " + this.state.Year +
            " " + this.state.Poster);


            //creating the object
            const newMovie={
                Title:this.state.Title,
                Year:this.state.Year,
                Poster:this.state.Poster
            }

            //posts data to the server
            axios.post('http://localhost:4000/api/movies',newMovie)
            .then(response =>console.log(response.data))
            .catch(error=> console.log(error));

    }
    render() {
        
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    <div className="form-group">
                        <label>Movie Poster URL:</label>
                        <textarea type='text'
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>



                </form>
            </div>
        );
    }

}