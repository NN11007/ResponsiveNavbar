import React,{useState,useContext} from 'react'
import AuthContext from '../Context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const[extentNavbar,setExtentNavbar]=useState(false)
    const{login,logout,isLoggedin}=useContext(AuthContext)
   // console.log(extentNavbar);
    
  return (
    <div className='text-white bg-gradient-to-r from-slate-900 to-purple-900 h-20'>
        <div className='max-w-7xl mx-auto flex justify-between text-xl items-center h-20 px-6'>
            <h1 className='text-5xl font-semibold'>Logo</h1>
           <div className='flex gap-6'>
           <ul className={`flex flex-col lg:flex-row lg:text-white gap-6 lg:static absolute duration-500 top-24 ${extentNavbar? "left-10" : "left-[-100px]"}`}>
                <li className='curser-pointer hover:text-purple-600'>Home</li>
                        {isLoggedin?(<div className='flex flex-col lg:flex-row gap-6'>
                            <li className='curser-pointer hover:text-purple-600'>About</li>
                            <li className='curser-pointer hover:text-purple-600'>Career</li>
                            <li className='curser-pointer hover:text-purple-600' onClick={logout}>Logout</li>
                            </div>
                       ):(
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <li className='cursor-pointer hover:text-purple-600' onClick={login}>Login</li>
                            <li className='cursor-pointer hover:text-purple-600'>Signup</li>
                        </div>)
                }
                
            </ul>
            <div onClick={()=>{setExtentNavbar(open=>!open)}} className='lg:hidden'>
                {
                    extentNavbar?  <CloseIcon/> :  <MenuIcon/>
                }
               
               
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar