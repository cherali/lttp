import { Spinner } from 'react-bootstrap'

function Spinners({ className }) {
  return (
    <div className={className}>
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  )
}

export default Spinners;
