import { connect } from 'react-redux';
import { PureComponent } from 'react';

import Input from "../Input";
import Button from "../../../Button"
import { addCurrenty } from '../../../../actionCreators';

class Add extends PureComponent {
  state = {
    Cur_Abbreviation: '',
    Cur_OfficialRate: '',
    Date: ''
  };

  handleClick = () => {
    const { addCurrenty } = this.props;
    const { Cur_Abbreviation, Cur_OfficialRate, Date } = this.state;
    const currentys = {
      Cur_Abbreviation,
      Cur_OfficialRate,
      Date,
    };
    addCurrenty(currentys);
  }

  handleChangeCur_Abbreviation = (e) => {
    const currenty = this.props;
    // currenty.currenty.map((item)=>{
    //  if (item.Cur_Abbreviation[0] === e.target.value.toUpperCase())
    //  {console.log (item.Cur_Abbreviation)}
    // })
    this.setState({ Cur_Abbreviation: e.target.value })
  };

  handleChangeDate = (e) => {
    this.setState({ Date: e.target.value })
  };

  handleChangeCur_OfficialRate = (e) => {
    this.setState({ Cur_OfficialRate: e.target.value })
  };

  render() {
    const { Cur_Abbreviation, Cur_OfficialRate, Date } = this.state;
    const currenty = this.props;
    return (
      <div>
        <Input placeholder="Буквенный код" onChange={this.handleChangeCur_Abbreviation} value={Cur_Abbreviation} />

        <input name="" list="code"  onChange={this.handleChangeCur_Abbreviation}/>
        <datalist id="code">
                <option value={currenty.currenty.Cur_Abbreviation}/>;
            {currenty.currenty.map((item)=>{
              if (item.Cur_Abbreviation[0] === Cur_Abbreviation.toUpperCase())
                {
              console.log(item.Cur_Abbreviation);
                <option value={item.Cur_Abbreviation}/>
          }})}
          </datalist>

        <Input placeholder="Дата" onChange={this.handleChangeDate} value={Date} />
        <Input placeholder="Текущий курс валют" onChange={this.handleChangeCur_OfficialRate} value={Cur_OfficialRate} />
        <Button text="добавить" onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = ({ currentys, currenty }) => ({
  currentys: currentys,
  currenty: currenty.currenty,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrenty: (currentys) => dispatch(addCurrenty(currentys)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
