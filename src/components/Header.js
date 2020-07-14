import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  Button,
  Col,
  Input,
  Nav,
  Navbar,
  NavItem,
  NavLink as NavLinkBootstrap,
  Row,
} from 'reactstrap'
import { FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import useEventListener from '../modules/useEventListener'

function Header({
  children,
  search,
  onSearch,
  onSearchSubmit,
  searchPlaceholder,
  subNavigation,
  actions,
}) {
  const [showSearch, setShowSearch] = useState(!!search)

  const onGlobalKeyPress = (ev) => {
    switch (ev.keyCode) {
      case 191: // Forward Slash
        setShowSearch(true)
        break
      case 27: // Escape
        if (!search) {
          // Only close search when search value is empty
          setShowSearch(false)
        }
        break
      default:
        break
    }
  }

  useEventListener('keyup', onGlobalKeyPress)

  return (
    <div className="header">
      <Row className="mb-3">
        <Col sm="auto">
          <h1>{children}</h1>
        </Col>
        <Col className="d-inline-flex align-items-center justify-content-end">
          {actions && actions.map((action) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Button color="primary" {...action} />
          ))}
        </Col>
      </Row>
      {(subNavigation || onSearch) && (
        <Navbar
          className={classNames(
            'header__navigation',
            'p-0',
            'border-bottom',
            'mb-4',
            {
              'justify-content-end': !subNavigation || subNavigation.length < 1,
            },
          )}
        >
          {subNavigation && (
            <Nav>
              {subNavigation.map(({ key, ...navItem }) => (
                <NavItem key={key || navItem.to}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <NavLinkBootstrap tag={NavLink} {...navItem} />
                </NavItem>
              ))}
            </Nav>
          )}
          {onSearch && (
            <div className="d-inline-flex align-items-center justify-content-end">
              {showSearch && (
                <Input
                  type="text"
                  autoFocus
                  size={40}
                  placeholder={searchPlaceholder || 'Search...'}
                  onChange={(ev) => onSearch(ev.target.value)}
                  onKeyUp={(ev) => (ev.keyCode === 13) && onSearchSubmit(ev.target.value)}
                />
              )}
              <Button
                onClick={() => {
                  if (!search) {
                    setShowSearch(!showSearch)
                    return
                  }

                  onSearchSubmit()
                }}
                color="link"
                className="text-dark"
              >
                <FiSearch />
              </Button>
            </div>
          )}
        </Navbar>
      )}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  search: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  onSearch: PropTypes.func,
  onSearchSubmit: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.shape({
    ...Button.propTypes,
    key: PropTypes.string,
  })),
  subNavigation: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    children: PropTypes.any,
    to: PropTypes.string,
    exact: PropTypes.bool,
  })),
}

Header.defaultProps = {
  search: null,
  searchPlaceholder: null,
  subNavigation: null,
  actions: null,
  onSearch: null,
  onSearchSubmit: () => {
  },
}

export default Header
