import React, { Component } from 'react';

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

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <h1>{ this.state.newTech }</h1>
        <ul>
          { this.state.techs.map(tech => <li key={ tech }>{ tech }</li>) }
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