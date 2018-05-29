export const getAllTodos = () => (
    $.ajax({
      method: "GET",
      url: "/api/todos"
    })
);
