import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'

function Home() {

    const [{user}] = useStateValue()

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <Link to={!user && "/login"}>
            <div className="login" onClick={handleAuthentication}>
                <h3>{user?`hey ${user?.email} Logout`:'Login'}</h3>
            </div>
            
        </Link>
    )
}

export default Home
