import { PureComponent } from 'react';
import Item from "../Item";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { dellCurently } from "../../../../actionCreators"
import "./Delete.scss"

class Delete extends PureComponent {
  onItemRemove = Cur_Abbreviation => {
    const { dellCurently } = this.props;
    dellCurently(Cur_Abbreviation);
  };

  render() {
    const { dataRetrieval } = this.props;
    return (
      <div className='delete'>
        {dataRetrieval.map(item => (
          <Item
            Cur_Abbreviation={item.Cur_Abbreviation}
            text={item.Cur_Abbreviation}
            onRemove={this.onItemRemove}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = ({ dataRetrieval }) => ({
  dataRetrieval: dataRetrieval.dataRetrieval,
});
const mapDispatchToProps = (dispatch) => ({
  dellCurently: (Cur_Abbreviation) => dispatch(dellCurently(Cur_Abbreviation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Delete));