import React from "react";
import { connect } from "react-redux";
import "./Item.scss";

class Item extends React.Component {
  remove = () => {
    const { Cur_Abbreviation, onRemove } = this.props;
    onRemove(Cur_Abbreviation);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="item" >
        <button className="item__button" onClick={this.remove}>Удалить</button>
        <div>{text}</div>
      </div>
    );
  }
}
export default connect()((Item));
