import './App.css';
import NotFound from './components/NotFound';
import './index.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import GamesData from './GamesData'
import SongsData from './SongsData'
import MoviesData from './MoviesData'
import Games from './components/Games'
import Movies from './components/Movies'
import Songs from './components/Songs'

function App() {
  return (
    <div className='w-full h-full bg-sky-400'>

      <nav className='p-4 items-center bg-black text-white'>
        <ul className='flex flex-row justify-center gap-10 mx-auto'>
          <li className='hover:text-lg hover:font-semibold transition-all duration-200'>
            <NavLink to="/">Games</NavLink>
          </li>

          <li className='hover:text-lg hover:font-semibold transition-all duration-200'>
            <NavLink to="/Movies">Movies</NavLink>
          </li>

          <li className='hover:text-lg hover:font-semibold transition-all duration-200'>
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
