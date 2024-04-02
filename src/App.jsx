import List from "./List"
import Button from './Button'
import './index.css'
function App() {
  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pinapple", calories: 37 }];

  const vegetables = [{ id: 6, name: "spinich", calories: 95 },
  { id: 7, name: "cucumber", calories: 45 },
  { id: 8, name: "potato", calories: 105 },
  { id: 9, name: "tomato", calories: 159 },
  { id: 10, name: "onion", calories: 37 }];
  return (
    <>
      <List items={fruits} category='Fruits' />
      <List items={vegetables} category='Vegetables'/>
      <Button />
    </>
  );

}

export default App
