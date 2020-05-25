import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

class FormMovies extends Component {

constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
}
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
  e.preventDefault();
   const url='https://post-a-form.herokuapp.com/api/movies/'
   axios.post(url, this.state)
  .then(res => res.data)
  .then(res => {
    alert(`film ajouté ${res.id}`);
  })
  .catch(e => {
    console.error(e);
    alert(`Erreur lors de l'ajout du film : ${e.message}`);
  })
  }

  render(){
return (
  <div className="FormMovies">
  <h1>Saisie d'un Film</h1>

  <form onSubmit={this.submitForm} className="form-display">
    <fieldset>
      <legend>Informations</legend>
      <div className="form-data">
        <label htmlFor="title">Nom du film</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="poster">Url du film</label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment" >commentaires</label>
        <textArea className='TextArea'
          type="text"
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
          placeholder="pourquoi aimes-tu ce film?"
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Envoyer" />
      </div>
    </fieldset>
  </form>
</div>
)}}

export default FormMovies;