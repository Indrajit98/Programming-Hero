import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import { AuthContext } from '../Contexts/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;