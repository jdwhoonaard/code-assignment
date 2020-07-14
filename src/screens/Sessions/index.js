import { connect } from 'react-redux'
import Sessions from './component'
import fetchSessions from '../../actions/sessions/fetchSessions'
import getSessionsData from '../../selectors/sessions/getSessionsData'
import getSessionsErrors from '../../selectors/sessions/getSessionsErrors'
import isSessionsLoading from '../../selectors/sessions/isSessionsLoading'
import getSessionsMeta from '../../selectors/sessions/getSessionsMeta'

const stateToProps = (state) => ({
  sessions: getSessionsData(state),
  sessionsMeta: getSessionsMeta(state),
  sessionsErrors: getSessionsErrors(state),
  isSessionsLoading: isSessionsLoading(state),
})

const dispatchToProps = {
  fetchSessions,
}

export default connect(stateToProps, dispatchToProps)(Sessions)
