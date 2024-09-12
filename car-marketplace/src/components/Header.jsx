import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user, isSignedIn} = useUser();
  return (
    <div className=' flex justify-between items-center shadow-sm p-3'>
        <div className=' w-[230px] flex justify-center'>
            <img src="Logo.png" className=' '/>
        </div>
        

        <ul className=' hidden md:flex gap-16'>
            <li className=' font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className=' font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className=' font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className=' font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Used</li>
        </ul>

        {
            isSignedIn? 
                <div className=' flex items-center gap-5'>
                    <UserButton/>
                    <Link to={"/profile"}>
                        <Button>Submit Listing</Button>
                    </Link>
                    


                </div>    
                : 
                <Button>Submit Listing</Button>
        }

       

    </div>

  )
}

export default Header