import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({good, bad, neutral}) => {

  if((good+bad+neutral)===0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
  <div>

    <h1>statistics</h1>
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />

        <Statistic text="all" value={good+neutral+bad} />
        <Statistic text="average" value={(good-bad)/(good + bad + neutral)} />
        <Statistic text="positive" value={good/(good + bad + neutral)} />
      </tbody>
    </table>
  </div>
  )
  }

  const Button = props => {
    return(
     <div>
    <button onClick={props.onClick}>
      {props.text}
    </button>
    </div>)
  }


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good+1)
  const neutralClick = () => setNeutral(neutral+1)
  const badClick = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)