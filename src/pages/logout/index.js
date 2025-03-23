import * as React from 'react';
import { useHistory} from 'react-router-dom';
import { LayoutOne } from 'upkit';
import {useDispatch} from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { userLogout } from '../../features/auth/actions';
import { logout } from '../../api/auth';
export default function Logout(){
    let history = useHistory();
    let dispatch = useDispatch();

    React.useEffect(() => {
        logout()
            .then(() => dispatch(userLogout()) )
            .then(() => history.push('/') )
    }, [history, logout])

    return (
        <LayoutOne>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <BounceLoader color="#e67e22" />
                <br/>
                Logging Out
            </div>
        </LayoutOne>
    )
}