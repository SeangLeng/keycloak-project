import Dropdown from 'react-bootstrap/Dropdown';
import DropdownComponent from './Dropdown';
import Login from "~components/login/Login";

export default function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-between align-item-center">
            <div id="logo" className="bg-light px-5 py-2 rounded-3 fw-bold">
                logo
            </div>
            <div className="d-flex justify-content-center align-items-center gap-4">
                <DropdownComponent />
                <button className='px-5 border-0 outline-o active:scale-1 py-2 rounded-3 fw-normal'>Login</button>
                <Login />
            </div>
        </nav>
    )
}