import React from 'react'
import Person from './Person'

function NameList() {
    const Names = ["bruce", "clark", "diana", "f"]
    // const Name_list = Names.map(name => <h2>{name}</h2>)
    const Name_list = Names.map((name, index) => <h2 key={index}>{index}{name}</h2>);
    const persons = [
        {
            id: 1,
            name: "bruce",
            age: 30,
            skill: "react"
        },
        {
            id: 2,
            name: "clark",
            age: 25,
            skill: "angular"
        },
        {
            id: 3,
            name: "diana",
            age: 28,
            skill: "vue"
        }
    ]
    // const person_list = persons.map(
    //     person => (
    //     <div><h2>id: {person.id}, 
    //     name: {person.name}, 
    //     age: {person.age}, 
    //     skill: {person.skill}
    //     </h2></div>
    //     ))
    const person_list = persons.map((person, index) => (<Person key={person.id} person={person}></Person>)) // the key can improve performance by helping react identify which items have changed, are added, or are removed so that the whole list doesn't have to be re-rendered
    

  return (
    <div>
      {/* <h2>{Names[0]}</h2>
      <h2>{Names[1]}</h2>
      <h2>{Names[2]}</h2> */}
        {Name_list}
        {person_list}
    </div>
  )
}

export default NameList
