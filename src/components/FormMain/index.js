import React from 'react';
import propTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <div className="div-add-tarefa">
        <input
          type="text"
          onChange={handleChange}
          value={novaTarefa}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </div>
    </form>
  );
}

// caso fosse algo não requerido. poderiamos dar um valor padrão.
// e tirar o isRequired.
/*
Form.defaultProps = {
  novaTarefa: 'Valor padrão',
};
*/

Form.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  novaTarefa: propTypes.string.isRequired,

};
