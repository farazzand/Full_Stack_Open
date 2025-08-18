import { useState } from 'react'

  const StatisticLine = ({text, value, text2}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}{text2}</td>
      </tr>
    )
  }

  const Statistics = ({good, neutral, bad}) => {   
    const total = good + neutral + bad  
      if (total === 0) {
        return(
          <div>
          <p><b>statistics</b></p>
          <div>No feedback given</div>
          </div>
        )
      }
      const average = (good - bad) / total
      const positive = (good / total) * 100
      return(
        <div>
          <p><b>statistics</b></p>
          <table>
            <tbody>
              <StatisticLine text="good: " value={good}/>
              <StatisticLine text="neutral: " value={neutral}/>
              <StatisticLine text="bad: " value={bad}/>
              <StatisticLine text="all: " value={total}/>
              <StatisticLine text="average: " value={average.toFixed(1)}/>
              <StatisticLine text="positive: " value={positive.toFixed(1)} text2="%"/>
            </tbody>
          </table>
        </div>
      )
  }
  const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  console.log('rendering with good value', good)
  const [neutral, setNeutral] = useState(0)
  console.log('rendering with neutral value', neutral)
  const [bad, setBad] = useState(0)
  console.log('rendering with bad value', bad)

  const goodIncrease = () => {
    console.log('increasing good, value before', good)
    setGood(good + 1)
  }

  const neutralIncrease = () => { 
    console.log('increasing neutral, value before', neutral)
    setNeutral(neutral + 1)
  }

  const badIncrease = () => {
    console.log('increasing bad, value before', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <p><b>give feedback</b></p>

      <Button
        onClick={goodIncrease}
        text='good'
      />
      <Button
        onClick={neutralIncrease}
        text='neutral'
      />     
      <Button
        onClick={badIncrease}
        text='bad'
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App