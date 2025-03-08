import * as React from 'react';
import StoreLogo from '../storelogo';
import { useSelector } from 'react-redux';
import { Responsive, ButtonCircle } from 'upkit';
import { Link } from 'react-router-dom';
import FaUser from '@meronex/icons/fa/FaUser';

export default function TopBar() {
    let auth = useSelector(state => state.auth);
    return (
        <Responsive desktop={1} justify="between" items="center">
            <div>
                <StoreLogo />
            </div>

            <div className="mr-2 inline-block text-red-600 font-bold">
                <Link to={auth?.user ? '/account' : '/login'}>
                    {auth?.user?.full_name}
                </Link>
                <ButtonCircle icon={<FaUser />} />
            </div>
        </Responsive>
    );
}