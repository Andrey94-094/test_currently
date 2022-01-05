import { connect } from 'react-redux';
import { PureComponent } from 'react';

import Button from "../../../Button"
import { sortCurently } from '../../../../actionCreators';

class Sort extends PureComponent {

    handleClick = () => {
        const { sortCurently } = this.props;
        const { currenty } = this.props;
        sortCurently(currenty);
    }

    render() {
        return (
            <div>
                <Button text="Сортировать по возростанию" onClick={this.handleClick} />
            </div>
        );
    }
}

const mapStateToProps = ({ currentys }) => ({
    currentys: currentys,
});

const mapDispatchToProps = (dispatch) => ({
    sortCurently: (currenty) => dispatch(sortCurently(currenty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
