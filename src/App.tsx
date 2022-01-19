import { GlobalStyles } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

const App = () => {

  return (
    <>
     <GlobalStyles />
     <Router>
       <Routes />
     </Router>
    </>
   
  )
}

export default App;
