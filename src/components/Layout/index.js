import { connect } from 'react-redux'
import Layout from './component'
import signOut from '../../actions/authentication/signOut'

const dispatchToProps = {
  signOut,
}

export default connect(null, dispatchToProps)(Layout)
