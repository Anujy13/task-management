import React from 'react'



const Header = (props) => {
  console.log(props);

  const logOutUser =() => {
    
    localStorage.setItem('loggedInUser', "")
    // window.location.reload()
    props.changeUser('');


  }

  const userName = props.data?.firstName ? props.data.firstName : 'Admin';


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>{userName}✌️</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-small'> Logout </button>
    </div>
  )
}

export default Header