import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVoted = ({mostV, index, anecdotes}) =>{
  return(
<div>
  <p>{anecdotes[index]}</p>
  <p>has {mostV} votes</p>
</div>
  )
}

const App = (props) => {
  const array = new Array(6).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(array)

  const [mostV, setMostV] = useState(0)
  const [index, setIndex] = useState(0)

  const voteSelected = () =>{
    const ar = [...votes]
    ar[selected]+=1
    setVotes(ar)

    if(mostV<ar[selected]){
      setMostV(ar[selected])
      setIndex(selected)
    }
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}

      <p>has {votes[selected]} votes</p> 
      <p>
      <button onClick={voteSelected}>
          vote
        </button>
        <button onClick={()=>setSelected(Math.floor((Math.random()*10)%6))}>
          next anecdote
        </button>
        </p>
      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={props.anecdotes} index={index} mostV={mostV} />
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)