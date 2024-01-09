import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto"> 
        <Link to='/'> <h1 className="text-sm sm:text-xl flex flex-wrap font-bold">
        <span className="text-slate-500">C</span>
        <span className="text-slate-700">Estate</span>
      </h1></Link>
       
      <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input className="focus:outline-none bg-transparent w-32 sm:w-72" type="text" placeholder="Search..."/>
       <FaSearch/>
      </form>
       <ul className='flex gap-4 text-slate-700'>
        <Link to='/'> <li className='hidden sm:inline hover:underline'>Home</li></Link>
       <Link to='/about'> <li className='hidden sm:inline hover:underline'>About</li></Link>
       <Link to='/sign-in'><li className='hover:underline'>Sign In</li></Link> 
       </ul>
      </div>
     
    </header>
  )
}
export default Header
