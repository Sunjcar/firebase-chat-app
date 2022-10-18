import React from 'react'
import { RiMessage2Fill } from "react-icons/ri";
import SignOut from './SignOut';
const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 flex flex-col w-16 h-screen text-white bg-gray-900 shadow-lg dark:bg-gray-900 dark:text-white'>
            <SideBarIcon icon={<RiMessage2Fill size='28' />} />
            <Divider />
            <Divider />
            <SignOutIcon icon={<SignOut size="28" />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = '💡' }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

const SignOutIcon = ({ icon, text = 'Sign Out' }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)


const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar