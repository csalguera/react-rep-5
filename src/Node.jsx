import Express from "./Express"
import Mongoose from "./Mongoose"

const Node = (props) => {
  return (
    <>
      <h1>Node</h1>
        <div>
          <Express />
        </div>
        <div>
          <Mongoose />
        </div>
    </>
  )
}

export default Node