import React, { Component } from 'react';

import './Main.css';

import Form from './FormMain';
import TarefasList from './TarefasList';
// feito usando class field

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify([...tarefas]));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    // diferente de menos 1 significa não foi passado indice
    // então é criação, se for direferente é alteração.
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    console.log(tarefas.indexOf(novaTarefa));

    const novasTarefas = [...tarefas];
    console.log(novaTarefa);
    if (index === -1 && novaTarefa) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleEdit(e, index) {
    console.log('edit', e, index);
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }
  /*
    for (const tarefa of novasTarefas) {
      console.log(tarefa);
    }
  } */

  handleDelete = (e, index) => {
    // console.log('delete', e, index);
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <TarefasList
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tarefas={tarefas}
        />

      </div>
    );
  }
}

/*  Feito usando Constructor
import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: ' ',
    };
  }

  inputMudou = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>{novaTarefa}</h1>
        <form action="#">
          <input type="text" onChange={this.inputMudou} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

*/
