import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Spinner,
  Table,
} from 'reactstrap';
import moment from 'moment'
import { parse } from 'qs'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import PagePagination from '../../components/PagePagination'

function Sessions({
  fetchSessions, sessions, sessionsMeta, sessionsErrors, isSessionsLoading, location: { search: queryString },
}) {
  useEffect(() => {
    const { page } = parse(queryString, { ignoreQueryPrefix: true })
    fetchSessions(page)
  }, [fetchSessions, queryString])
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Header
        search={search}
        onSearch={setSearch}
        searchPlaceholder="Search for user or customer..."
        subNavigation={[
          {
            key: 'sessions',
            children: 'Sessions',
            to: '/sessions',
            exact: true,
          },
        ]}
      >
        Sessions
      </Header>
      <Table responsive>
        <thead>
        <tr>
          <th>Crutomser</th>
          <th>User ID</th>
          <th>User</th>
          <th>User Role</th>
          <th>Created at</th>
        </tr>
        </thead>
        <tbody>
        {isSessionsLoading && (
          <tr>
            <td colSpan="6">
              <Spinner />
              {' '}
              Fetching new data...
            </td>
          </tr>
        )}
        {sessionsErrors && (
          sessionsErrors.map((error) => (
            <tr key={error.title}>
              <td colSpan="6" className="bg-danger text-light">
                {error.title || 'An unknown error occurred.'}
              </td>
            </tr>
          ))
        )}
        {sessions && sessions
        .sort((a, b) => {
          if (moment(a.created_at).isBefore(moment(b.created_at))) {
            return 1
          }
          if (moment(a.created_at).isAfter(moment(b.created_at))) {
            return -1
          }

          return 0
        })
        .map((session) => {
          return (
            <tr key={session.id}>
              <th className="align-middle">{session.customer.name}</th>
              <th className="align-middle">{session.user.id}</th>
              <td className="align-middle">{session.user.name}</td>
              <td className="align-middle">{session.user.role}</td>
              <td className="align-middle">{moment(session.created_at).format('D MMM Y [at] HH:mm')}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <PagePagination {...sessionsMeta} />
    </Layout>
  )
}

Sessions.propTypes = {
  fetchSessions: PropTypes.func.isRequired,
  sessions: PropTypes.arrayOf(PropTypes.shape({})),
  sessionsErrors: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
  sessionsMeta: PropTypes.shape({
    page: PropTypes.number,
    pages: PropTypes.number,
    total: PropTypes.number,
    limit: PropTypes.number,
  }),
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  isSessionsLoading: PropTypes.bool,
}

Sessions.defaultProps = {
  sessions: null,
  sessionsErrors: null,
  sessionsMeta: null,
  isSessionsLoading: false,
}

export default Sessions
