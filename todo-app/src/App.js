import { MainContainer } from "./App.style";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Status from "./components/Status/Status";

function App() {
  return (
    <MainContainer>
      <Header />
      <Status />
      <AddTask />
    </MainContainer>
  );
}

export default App;
