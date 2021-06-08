import React, { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    value: () => value,
    clear: () => setValue(''),
  };
};

export default function AddTodo({ addTodo }) {
  let input = useInput();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (input.value().trim()) {
      addTodo(input.value());
      input.clear('');
    }
  };

  return (
    <form onSubmit={handlerSubmit} style={{ marginBottom: '1rem', marginTop: '.5rem' }}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
}
