import { connect } from 'react-redux'
import PrivateRoute from './component'
import isAuthenticated from '../../selectors/authentication/isAuthenticated'

const stateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(stateToProps, null)(PrivateRoute)
