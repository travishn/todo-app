export const allTodos = (state) => {
  return Object.keys(state.todos).map( (id) => {
    const num_id = parseInt(id);
    return state.todos[num_id]; }
  );
}; 
