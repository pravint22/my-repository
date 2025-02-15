import UserGreeting from "./userGreeting"
import List from "./List"
import Button from "./Button"
// import Info from "./info"
import ProfilePic from "./profilePic"
import MyComponent from './myComponent.jsx';
import Counter from './counter.jsx'
import From from "./onchange_pra.jsx";
import ColorPicker from "./colorPicker.jsx";
import CarList from "./carFab.jsx"

const fruits = [
  {id: 1,name: "apple", calories:95} , 
  {id: 2,name: "banana", calories:45} , 
  {id: 3,name: "orange", calories:105} , 
  {id: 4,name: "grape", calories:165} , 
  {id: 5,name: "mango", calories:37} , 
  {id: 6,name: "pineapple", calories:45} , 
  {id: 7,name: "strawberry", calories:78} 
]

const vegetables = [
  {id: 8, name: "carrot", calories:25},
  {id: 9, name: "broccoli", calories:55},
  {id: 10, name: "spinach", calories:23},
  {id: 11, name: "potato", calories:77},
  {id: 12, name: "tomato", calories:18},
  {id: 13, name: "cucumber", calories:16},
  {id: 14, name: "bell pepper", calories:20}
]

function App() { 
  return(
    <>
      <UserGreeting 
        isLoggedIn={true}
        userName={"Pravin"}
         />
      {fruits.length > 0 && <List 
        item={fruits}
        category="Fruits" 
      />}
      {vegetables.length > 0 && <List 
        item={vegetables} 
        category="Vegetables" 
      />}
      <Button />
      <ProfilePic />
      {/* <Info /> */}
      <MyComponent />
      <Counter />
      <From />
      <ColorPicker />
      {/* <CarList /> */}
    </>
  )
}

export default App
