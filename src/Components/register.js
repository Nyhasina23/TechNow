import React, { Component } from 'react';
import NavLinks from './NavLinks';
import './SmallStyle.css'
import './form.css'
import axios from 'axios'
class register extends Component {

    constructor(props){
        super(props)
        this.state = {
            nom : '',
            prenom : '',
            sexe : '',
            email : '',
            password : ''
        }

    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost/registration.php',{
            nom : this.state.nom,
            prenom : this.state.prenom,
            sexe : this.state.sexe,
            email : this.state.email,
            password : this.state.password
        })

    }

    render(){
        return (
            <div className="flexBox">
                <NavLinks />
                <form method="POST" onSubmit={this.onSubmit} className="formComponent">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" value={this.state.nom} placeholder="ex : Rakoto..."  onChange={this.onChange}/>
                    <label for="prenom">Prénoms</label>
                    <input type="text" id="prenom" name="prenom" value={this.state.prenom} placeholder="ex : Rabe..." onChange={this.onChange}/>
                    <label for="sexe">Sexe</label>
                    <input type="text" id="sexe" name="sexe" value={this.state.sexe} placeholder="ex : Homme" onChange={this.onChange}/>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} placeholder="ex : rakoto@gmail.com" onChange={this.onChange}/>
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <input type="submit" value="S'inscrire" className="btn btn-primary" />
                </form>
            </div>
        );
    }
};

export default register;