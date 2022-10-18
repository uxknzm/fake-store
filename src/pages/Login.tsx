import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/slices/UserSlices';
import { useAppDispatch } from '../redux/store';
import { Stack, TextField, Button, Typography } from '@mui/material/'
import { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const Login: React.FC = () => {
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        height: '50px',
        '&:hover': {
            backgroundColor: grey[800],
        },
    }));
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset, formState } = useForm();
    const submitForm = (data: any) => {
        dispatch(userLogin(data))
    }
    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ login: '', password: '' });
            navigate('/')
        }
    }, [formState, reset]);

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <Stack
                sx={{
                    width: '45ch',
                    margin: '300px auto',
                    textAlign: 'center'
                }}
                spacing={2}
            >
                <Typography variant="h4" gutterBottom>
                    Authorization
                </Typography>
                <TextField id="login" label="Login" variant="filled"
                    {...register('login', {
                        required: true
                    })} />
                <TextField id="password" label="Password" type='password' variant="filled"
                    {...register('password', {
                        required: true,
                    })} />
                <ColorButton type="submit" variant="contained">Login</ColorButton>
            </Stack>
        </form>
    );
};
export default Login;