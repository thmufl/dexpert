import React, { useCallback, useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Contract = (props: any) => {
  const agent = props.agent
  const [count, setCount] = useState()

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

  return (
    <Card style={{ width: "auto" }}>
      <Card.Body>
        <Card.Title>Contract</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Count is: {count}
        </Card.Text>
        <Button variant="primary" onClick={onIncrementClick}>Increment</Button>
      </Card.Body>
    </Card>
  );
};
export default Contract;