import {BrowserRouter,Route,Routes} from "react-router-dom"
import Homepage from './pages/Homepage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/budget-tracker/" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App