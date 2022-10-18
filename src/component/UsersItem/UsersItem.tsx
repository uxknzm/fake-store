import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../redux/store';
import { deleteUser } from '../../redux/slices/UsersSlice';


const UsersItem = ({ id, email, username, password, name, address, phone }: any) => {
    const dispatch = useAppDispatch()
    const deletUser = () => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div className="card">
            <img src="https://sun9-78.userapi.com/impg/6UgLbYz5ATmbcq0KL_jpNu8s_ZZpSoS5eqzA3w/A7DouQ05JXc.jpg?size=929x799&quality=96&sign=df3cd97ed31fb6b7a43a90fef75c9c11&type=album" alt={name.firstname} style={{ width: '100%' }} />
            <div style={{ margin: '20px auto' }}>
                <h3>Name: {name.firstname.toUpperCase()} {name.lastname.toUpperCase()}</h3>
                <p className="title"><span className="lnr lnr-envelope"></span> Email, Username, Password</p>
                <p>{email}, {username}, {password}</p>
            </div>
            <div style={{ margin: '20px auto' }}>
                <p className="title"><span className="lnr lnr-map-marker"></span> Address</p>
                <p>CITY: {address.city.toUpperCase()}, STREET: {address.street.toUpperCase()}, {address.number}, </p>
                ZIPCODE: {address.zipcode}
            </div>
            <div style={{ margin: '20px auto' }}>
                <p className="title"><span className="lnr lnr-phone-handset"></span> Phone</p>
                <p>{phone}</p>
            </div>
            <ButtonGroup sx={{ marginBottom: 2 }} variant="text" aria-label="large button group" fullWidth>
                <Button onClick={deletUser} color="error">Delete</Button>
                <Button color="success">Update</Button>
            </ButtonGroup>
        </div>
    );
};

export default UsersItem;