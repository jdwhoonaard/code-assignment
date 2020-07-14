import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SignInScreen from './component'
import signIn from '../../actions/authentication/signIn'
import mapDispatchWithHistory from '../../modules/mapDispatchWithHistory';
import isAuthenticationFailed from '../../selectors/authentication/isAuthenticationFailed';

const stateToProps = (state) => ({
  isAuthenticationFailed: isAuthenticationFailed(state),
});

const dispatchToProps = mapDispatchWithHistory({
  signIn,
})

export default withRouter(connect(stateToProps, dispatchToProps)(SignInScreen))
