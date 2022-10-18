import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { LOGIN_ROUTE } from '../../utils/const';
import { selectUser } from '../../redux/slices/UserSlices';



const AppRouter = () => {
    const { userToken } = useSelector(selectUser)
    return userToken ?
        (
            <Routes >
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
            </Routes>
        )
};

export default AppRouter;