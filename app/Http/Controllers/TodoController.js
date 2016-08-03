'use strict';

const Todo = use('App/Model/Todo');

class TodoController {

// Defining Generator prototype method in node.js
// The two main things a node controller method cares about are the inbound request and the outbound response.
  * index (request, response){
    yield response.json({ name: 'Niclas', age: 38 });
  }

  * store (request, response){
    let data = request.only('title')
    data.status = 'false'

    let newTodo = yield Todo.create(data);
    yield response.json(newTodo.toJSON());
  }

}

// How exports are handled in node.js
module.exports = TodoController;
