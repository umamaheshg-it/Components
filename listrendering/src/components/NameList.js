import React from "react";
function NameList() {
  const names=[{name:"Arjun",age:5},{name:"Babu",age:6},{name:"Charan",age:7}]
  const nameList=names.map(person=><h2>Name:{person.name} and Age is:{person.age}</h2>)
  return <div>{nameList}</div>
}


export default NameList
