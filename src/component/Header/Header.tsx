import React from 'react';
import { Link, NavLink } from "react-router-dom";
import CartDrawer from '../Drawer/CartDrawer';
import { Drawer, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCart } from '../../redux/slices/CartSlice';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { exit, selectUser } from '../../redux/slices/UserSlices';
import { useAppDispatch } from '../../redux/store';


const Header = () => {
	const dispatch = useAppDispatch()
	const deleteUser = () => {
		dispatch(exit())
	}
	const { items } = useSelector(selectCart)
	const { userToken } = useSelector(selectUser)
	const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)
	const style = {
		fontSize: 30,
		color: 'grey',
		cursor: 'pointer',
	}
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
	const close = () => setIsDrawerOpen(false)
	const setActive = ({ isActive }: any) => isActive ? 'active-menu' : ''
	const [navbar, setNavbar] = React.useState(false)
	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	window.addEventListener('scroll', changeBackground)
	return (
		<header>
			<div className="container-menu-desktop">
				<div className="top-bar">
					<div className="content-topbar flex-sb-m h-full container">
						<div className="left-top-bar">
							Free shipping for standard order over $100
						</div>

						<div className="right-top-bar flex-w h-full">
							{userToken ? <Link to='/login' onClick={deleteUser} className="flex-c-m trans-04 p-lr-25">
								Exit
							</Link> : <Link to='/login' className="flex-c-m trans-04 p-lr-25">
								Login
							</Link>}
						</div>
					</div>
				</div>
				<div className={navbar ? 'wrap-menu-desktop active' : 'wrap-menu-desktop'}>
					<nav className="limiter-menu-desktop container">
						<Link to='/' className="logo">
							<img src="images/icons/logo-01.png" alt="IMG-LOGO" />
						</Link>
						<div className="menu-desktop">
							<ul className="main-menu">
								<li>
									<NavLink className={setActive} to='/' end>Home</NavLink>
								</li>

								<li>
									<NavLink className={setActive} to='/product'>Shop</NavLink>
								</li>

								<li className="label1" data-label1="hot">
									<NavLink className={setActive} to='/shop'>Features</NavLink>
								</li>

								<li>
									<NavLink className={setActive} to='/about'>About</NavLink>
								</li>

								<li>
									<NavLink className={setActive} to='/contact'>Contact</NavLink>
								</li>
								{
									userToken && <li>
										<NavLink className={setActive} to='/user'>Users</NavLink>
									</li>
								}
							</ul>
						</div>
						<div className="wrap-icon-header flex-w flex-r-m">
							<Badge badgeContent={totalCount} color="primary">
								<ShoppingCartIcon sx={style} onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
							</Badge>
							<Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
								<Box p={2} width='380px' textAlign='center' role='presentation'>
									<CartDrawer close={close} />
								</Box>
							</Drawer>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;