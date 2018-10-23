import { bindActionCreators } from 'redux';
import * as actions from './store/calculator/calculatorActions';
import { connect } from 'react-redux';
import Calculator from './Calculator';

const mapStateToProps = (state) => ({
  display: state.display
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
