import React from 'react';
import propTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './tarefas.css';

export default function TarefasList({ ...props }) {
  return (
    <ul className="tarefas">
      {props.tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => props.handleEdit(e, index)}
            />
            <FaWindowClose
              className="delete"
              onClick={(e) => props.handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

TarefasList.propTypes = {
  handleEdit: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
  tarefas: propTypes.array.isRequired,
};
