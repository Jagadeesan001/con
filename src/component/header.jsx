import logo from '../assect/logo.png'
import toggleimg from '../assect/toggleimg.png'
import { useState } from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
function Header(){
    const [toggle,settoggle]=useState(true)

    const handlechange=()=>{
        settoggle(!toggle)
    }
    return(
        <div className='bg-white p-6  flex justify-between'>
            <div>
                <img src={logo} alt="" className='h-12'/>
            </div>
            <nav>
                {toggle?<img src={toggleimg} alt='' onClick={handlechange} className='h-10' />:
                <div>
                    <img src={toggleimg} alt='' onClick={handlechange} className='h-10' />
                    <nav className='grid py-2'>
                        <BrowserRouter>
                            <Link>Home</Link><br/>
                            <Link>Project</Link><br/>
                            <Link>About</Link><br/>
                            <Link>Contact</Link><br/>
                        </BrowserRouter>
                    </nav>
                </div>
                }
            </nav>
        </div>
    )
}


export default Header