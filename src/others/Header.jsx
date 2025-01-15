import React from 'react'


const Header = (props) => {
    // const { firstname } = props.data;
    const logOut = () => {
        localStorage.setItem("loggedInUSer", JSON.stringify({ role: "" }))
        // window.location.reload();
        props.changeUSer("");
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold'>{props.data.firstname} &#128075;</span></h1>
                <button onClick={logOut} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
            </div>
        </div>
    )
}

export default Header