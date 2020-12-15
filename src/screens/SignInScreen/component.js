import React, {
  useEffect,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from 'reactstrap'
import infowijsLogo from '../../images/infowijs-primary.svg'

function SignInScreen({
  signIn, isAuthenticationFailed,
}) {
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setSubmitting(false)
  }, [])

  return (
    <Container fluid>
      <Row className="bg-primary min-vh-100 align-items-center justify-content-center">
        <Col lg={4} md={8} xs={10}>
          <div className="bg-light p-5 rounded logo-primary">
            <img src={infowijsLogo} alt="Infowijs" className="w-25 mb-3" />
            <Form
              onSubmit={(ev) => {
                ev.preventDefault()
                signIn(password)
                setSubmitting(true)
              }}
            >
              {isAuthenticationFailed && <Alert color="danger">Sign in failed</Alert>}
              <FormGroup>
                <Label for="password">Fill in your Password to access</Label>
                <Input
                  type="text"
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  disabled={!!submitting}
                />
              </FormGroup>
              <Button disabled={!!submitting}>
                {!!submitting && (<Spinner size="sm" className="mr-2" color="dark" />)}
                Sign in
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

SignInScreen.propTypes = {
  signIn: PropTypes.func.isRequired,
  isAuthenticationFailed: PropTypes.bool,
}

export default SignInScreen
