import React from 'react';
import { DropDownContainer, DropDownMenu } from './DropDown.styled';

export class DropDown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <DropDownContainer>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && <DropDownMenu>Выпадающее меню</DropDownMenu>}
      </DropDownContainer>
    );
  }
}
