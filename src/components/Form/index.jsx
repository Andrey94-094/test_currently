import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Form.scss"
import { dataRetrievals } from '../../actionCreators'
import Button from '../Button'

class Form extends PureComponent {
  state = {
    dataRetrieval: [],
    isShowMore: false,
    value:1
  };

  handleClick = async () => {
    this.setState({ isShowMore: true});
    try {
      const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
      const dataset = await response.json();
      const { dataRetrievals } = this.props;
      dataRetrievals(dataset);
    } catch (err) {
    }
  }
  handleChangeCur_Value = (e) => {
    this.setState({ value: e.target.value })
  };
  // handleClickOff = (e) => {
  //   this.setState({ isShowMore: false })
  // };

  render() {
    const { dataRetrieval } = this.props;
    const { isShowMore } = this.state;
    const {value} = this.state;
    return (
      <section className="form">
        <Link to="/setting">Настройки</Link>
        <br></br>        
        <Button text={isShowMore ? "Обновить" : "Показать"} onClick={this.handleClick} />
        <table border="1" className="dataset">
          <tr>
            <th>Дата</th>
            <th>Буквенный код валюты</th>
            <th>Текущий курс валют</th>
            <th>Копировать в буффер обмена</th>
            <th><input onChange={this.handleChangeCur_Value} value={value}></input></th>
          </tr>
          {dataRetrieval.map((item) => (
            <tr>
              <td>{item.Date}</td>
              <td>{item.Cur_Abbreviation}</td>
              <td>{item.Cur_OfficialRate}</td>
              <button className='form__unc' onClick={() => navigator.clipboard.writeText(item.Cur_OfficialRate)}>{item.Cur_Abbreviation}</button>
              <td>{Math.round(item.Cur_OfficialRate*value*100)/100}</td>
            </tr>
          ))}
        </table>
      </section>
    )
  }
}
const mapStateToProps = ({ dataRetrieval }) => ({
  dataRetrieval: dataRetrieval.dataRetrieval,
});
const mapDispatchToProps = (dispatch) => ({
  dataRetrievals: (dataset) => dispatch(dataRetrievals(dataset)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
