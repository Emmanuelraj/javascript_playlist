//object
const todos = [
  {
      id:1,
      text:'Take out trash',
      isComplete: true

  },
  {
      id:2,
      text:'Take out trash1',
      isComplete: true

  },
  {
      id:3,
      text:'Take out trash3',
      isComplete: false

  }

];


//forEach,map, filter
todos.forEach(function(todo)
{
  console.log(todo.isComplete);
})


//map
const todoTest =todos.map(function (todoMap) {

return todoMap.text;
});


console.log(todoTest);



const filter = todos.filter(function (todoFilter) {
   return todoFilter.isComplete == true;
}).map(function (todoFilter)
{
   return todoFilter.text;
})


console.log(filter);


//normal fun
const normNums = function(num1=1,num2=2)
{
  return num1+num2;
}



console.log(normNums(5,3));



//arrow fun
const arrNums = (num1=1,num2=2) =>num1+num2;



console.log("arrow function"+arrNums(5,3));



//constructor function
function Person(firstName, lastName, dob)
{
  this.firstName= firstName;
  this.lastName= lastName;
  this.dob= dob;
}


//instanitae object
const p1 = new Person('first', 'last', '4-3-1990');


console.log(p1);
