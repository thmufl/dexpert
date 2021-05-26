import React, { useCallback, useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Profile = (props: any) => {
  const agent = props.agent
  const [count, setCount] = useState()
  const [state, setState] = useState({ firstName: "", lastName: "" })

  const refreshCounter = useCallback(async () => {
    const res: any = await agent.getValue()
    setCount(res.toString())
  }, [])

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = useCallback(async () => {
    await agent.increment()
    refreshCounter()
  }, [agent])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    console.log("value:", value)
    setState({ ...state, [name]: value })
  }

  return (
    <>
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>Profile</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Count is: {count}
          </Card.Text>
          <Button variant="primary" onClick={onIncrementClick}>
            Increment
          </Button>
        </Card.Body>
      </Card>

      <Form id="contact">
        <Form.Group as={Row} className="my-2" controlId="newEntryFirstName">
          <Form.Label column sm="2">
            First name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-2" controlId="newEntryLastName">
          <Form.Label column sm="2">
            Last name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </>
  )
}
export default Profile
