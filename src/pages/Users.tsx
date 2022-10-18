import React from 'react';
import { useSelector } from 'react-redux';
import UsersItem from '../component/UsersItem/UsersItem';
import { fetchUser, selectUsers } from '../redux/slices/UsersSlice';
import { useAppDispatch } from '../redux/store';
import Grid from '@mui/material/Grid'
import Spinner from 'react-spinner-material';

const Users = () => {
    const { users, loading } = useSelector(selectUsers)
    const dispatch = useAppDispatch()
    const getUsers = () => {
        dispatch(fetchUser())
    }
    const user =
        users.map((u: any) => <UsersItem {...u} key={u.id} />)
    React.useEffect(() => {
        window.scrollTo(0, 0)
        getUsers()
    }, [])
    return (
        <div style={{ margin: '100px', textAlign: 'center' }}>
            <h1>USERS</h1>
            <Grid sx={{marginTop: '50px'}} container spacing={2}>
                {loading && <Spinner style={{margin: '100px auto'}} size={120} visible={true} /> }
                {user}
            </Grid>
        </div>
    );
};

export default Users;