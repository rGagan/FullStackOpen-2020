import React, { useReducer } from 'react';


const Course = ({name, parts}) =>{
    return(
    <div>
      {<Header name={name} />}
      {<Content parts={parts} />} 
      {<Total parts={parts} />}
      </div>
    )
}

const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Total = ({ parts }) => {
    const sum = parts.reduce((acc, curr) => acc+curr.exercises, 0)
    return(
      <h4>Number of exercises {sum}</h4>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part=> <Part key={part.id} part={part} />)}
      </div>
    )
  }

  export default Course