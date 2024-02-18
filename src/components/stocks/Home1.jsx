
import React from 'react'

const Logout = ()=> {
    localStorage.clear()
            setTimeout(() => {
                    window.location.reload()
            }, 1500);
}

const Home1 = () => {
  return (
 <button className=' text-black' onClick={Logout}>ออกจากระบบ</button>
)
}

export default Home1


