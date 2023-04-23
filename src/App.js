import './App.css';
import NotFound from './components/NotFound';
import './index.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import Games from './components/Games'
import Songs from './components/Songs'
import Movies from './components/Movies'
import GamesData from './data'
import SongsData from './data'
import MoviesData from './data'

function App() {
  return (
    <div className='w-full h-full'>

      <nav>
        <ul className='flex flex-row justify-center gap-10 mx-auto'>
          <li>
            <NavLink to="/">Games</NavLink>
          </li>

          <li>
            <NavLink to="/Movies">Movies</NavLink>
          </li>

          <li>
            <NavLink to="/Songs">Songs</NavLink>
          </li>

        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<Games GamesData={GamesData}></Games>}/>
        <Route path='/Movies' element={<Movies MoviesData={MoviesData}></Movies>}/>
        <Route path='/Songs' element={<Songs SongsData={SongsData}></Songs>}/>
        <Route path='/*' element={<NotFound></NotFound>}/>
        
      </Routes>
    
     
    </div>
  );
}

export default App;
