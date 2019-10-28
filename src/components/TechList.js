import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'NodeJS', 
      'ReactJS',
      'React Native'
    ]
  };

  // Função própria dentro de um componente de classe deve  ser escrita em arrow 
  // function para que tenha acesso ao this, ou seja, acessar outras propriedades
  // ou outras funções da classe
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <h1>{ this.state.newTech }</h1>
        <ul>
          { this.state.techs.map(tech => (
              <TechItem key={ tech } tech={ tech } onDelete={ () => this.handleDelete(tech) } />
            )) 
          }
        </ul>
        <input 
          type="text" 
          onChange={ this.handleInputChange } 
          value={ this.state.newTech } 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;