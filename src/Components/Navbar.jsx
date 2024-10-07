import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const[extentNavbar,setExtentNavbar]=useState(false)
   // console.log(extentNavbar);
    
  return (
    <div className=' text-white bg-gradient-to-r from-slate-900 to-purple-900 h-20'>
        <div className='max-w-7xl mx-auto flex justify-between text-xl items-center h-20 px-6'>
            <h1 className='text-5xl font-semibold'>Logo</h1>
           <div className='flex gap-6'>
           <ul className={`flex flex-col lg:flex-row lg:text-white gap-6 lg:static text-black absolute duration-500 top-24 ${extentNavbar? "left-10" : "left-[-100px]"}`}>
                <li>Home</li>
                <li>About</li>
                <li>Career</li>
                <li>Login</li>
                <li>Signup</li>
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