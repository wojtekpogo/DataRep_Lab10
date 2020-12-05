import React from 'react';
import axios from 'axios'; //importing axios


export class Edit extends React.Component {

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

    componentDidMount(){
        console.log("Load "+this.props.match.params.id);
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id) //async operation
        .then(response=>{ //updates the state
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((err)=>{
            console.log(err);
        });
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
                title:this.state.Title,
                year:this.state.Year,
                poster:this.state.Poster
            }

            console.log(this.state._id);
            console.log(newMovie);
            //puts new record
            axios.put('http://localhost:4000/api/movies/'+this.state._id,newMovie)
            .then(res =>console.log(res.data))
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
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>



                </form>
            </div>
        );
    }

}