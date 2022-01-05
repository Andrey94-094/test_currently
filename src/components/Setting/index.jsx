import { PureComponent } from 'react';
import Add from "./components/Add";
import Button from "../Button";
import { withRouter } from 'react-router-dom';
import Delete from "./components/Delete/";
import Sort from './components/Sort';
import './Setting.scss'



class Setting extends PureComponent {

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Setting">
        <div className="Setting__text">Добавление или удаление информации</div>
        <div className="Setting__block">
          <Add />
          <Delete />
          <Sort />
        </div>
        <div>
          <Button text="на главную" onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default withRouter(Setting);

