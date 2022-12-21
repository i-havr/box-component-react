import { Component } from 'react';

import { FaAffiliatetheme, FaAndroid, FaBtc } from 'react-icons/fa';
import { Text } from 'components/Text/Text.styled';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box';
import { AppBar } from 'components/AppBar/AppBar';
import { DropDown } from 'components/DropDown/DropDown';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { ColorPickerOptions } from 'components/ColorPicker/ColorPickerOptions';
import TodoList from 'components/TodoList';
import initialTodos from './components/TodoList/initialTodos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  render() {
    const { todos } = this.state;
    return (
      <Box position="relative" as="main" m="4">
        <AppBar />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <Box display="flex" justifyContent="flex-start" as="section" p="0">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            iusto.
          </Text>
        </Box>
        <Box display="flex">
          <Button icon={FaAffiliatetheme}>Search</Button>
          <Button icon={FaAndroid}>Filter</Button>
          <Button icon={FaBtc}>Modal</Button>
          <Button type="submit" disabled>
            LogIn
          </Button>
        </Box>
        <Box>
          <DropDown />
        </Box>
        <Box>
          <ColorPicker options={ColorPickerOptions} />
        </Box>
        <Box>
          <h2>Состояние компонента</h2>
          <TodoList todos={todos} />
        </Box>
      </Box>
    );
  }
}

export default App;
