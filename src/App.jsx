import Index from "./Pages/Index.jsx";
import {TodoProvider} from "./Pages/Components/TodoContext.jsx";

function App() {
  return (
    <>
      <TodoProvider>
          <Index />
      </TodoProvider>
    </>
  );
}

export default App;
