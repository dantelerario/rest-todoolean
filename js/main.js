// Creazione di una todo list con le seguenti funzionalità, attraverso l’uso delle API, AJAX, jQuery e Handlebars
// Lettura di tutti i todo
// Creazione nuovo todo
// Cancellazione todo
$(document).ready( function() {
  // REFS
  var newTodoInput = $('.new__todo__input');
  var newTodoButton = $('.new__todo__button');
  var toDoLists = $('.todos');
  //API
  var api = 'http://157.230.17.132:3006/todos';
  //HANDLEBARS
  var source = $('#todo__template').html();
  var template = Handlebars.compile(source);
  //GETLIST
  printTodos(api, template, toDoLists)

}); /* END DOCUMENT */

//  FUNCTIONS
function printTodos(api, template, toDoLists) {
  toDoLists.empty();
  $.ajax({
    url: api,
    method: 'GET',
    success: (data) => {
      var todos = data;
      for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        var list = {
          todo: todo.text,
          id: todo.id,
        }
        var html = template(list);
        toDoLists.append(html);
      }
    },
    error: () => {
      console.log('ERROR');
    }
  });
}
