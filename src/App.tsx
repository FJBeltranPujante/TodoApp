import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {

  const todos = [
    new Todo('Learn React'),
    new Todo('Learn this weird stuff'),
    new Todo('Hacerme una paja a la crema'),
    new Todo('AJJAJAJAJA sidra'),
  ];
  return (
  <div>
    <Todos items={todos}/>

  </div>
  );
}

export default App;
