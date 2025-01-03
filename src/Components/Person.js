import React from 'react'

function Person({person}) {
    // const person_list = person.map(
    //     person => (
    //     <div><h2>id: {person.id}, 
    //     name: {person.name}, 
    //     age: {person.age}, 
    //     skill: {person.skill}
    //     </h2></div>
    //     ))
  return (
    <div>
      <div><h2>id: {person.id}, 
        name: {person.name}, 
        age: {person.age}, 
        skill: {person.skill}
        </h2></div>
    </div>
  )
}

export default Person

