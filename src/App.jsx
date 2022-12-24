import { Component } from 'react';

import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
// import { FaAffiliatetheme, FaAndroid, FaBtc } from 'react-icons/fa';
// import { Text } from 'components/Text/Text.styled';
// import { Button } from 'components/Button/Button';
// import { DropDown } from 'components/DropDown/DropDown';
// import { ColorPicker } from 'components/ColorPicker/ColorPicker';
// import { ColorPickerOptions } from 'components/ColorPicker/ColorPickerOptions';
import TodoList from 'components/TodoList';
import initialTodos from './components/TodoList/initialTodos.json';
import { ProductReviewForm } from 'components/MyForm/MyForm';
import shortid from 'shortid';
import TodoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Box position="relative" as="main" m="4">
        <AppBar />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        {/* <Box display="flex" justifyContent="flex-start" as="section" p="0">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            iusto.
          </Text>
        </Box> */}
        {/* <Box display="flex">
          <Button icon={FaAffiliatetheme}>Search</Button>
          <Button icon={FaAndroid}>Filter</Button>
          <Button icon={FaBtc}>Modal</Button>
          <Button type="submit" disabled>
            LogIn
          </Button>
        </Box> */}
        {/* <Box>
          <DropDown />
        </Box> */}
        {/* <Box>
          <ColorPicker options={ColorPickerOptions} />
        </Box> */}
        <Box>
          <h2>Состояние компонента</h2>
          <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
          </div>

          <TodoEditor onSubmit={this.addTodo} />

          <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Box>
        <Box>
          <ProductReviewForm />
        </Box>
      </Box>
    );
  }
}

export default App;
