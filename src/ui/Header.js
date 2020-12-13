import React, { useState } from 'react'
import {
	AppBar,
	Button,
	makeStyles,
	Toolbar,
	Popover,
	Grid,
	Hidden,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
	useTheme,
	IconButton,
	Paper,
} from '@material-ui/core'

import logo from '../assets/PickBazar.png'
import book from '../assets/svgs/book.svg'
import clothing from '../assets/svgs/clothing.svg'
import furniture from '../assets/svgs/furniture.svg'
import grocery from '../assets/svgs/grocery.svg'
import makeup from '../assets/svgs/makeup.svg'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import HelpIcon from '@material-ui/icons/Help'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
	appbar: {
		backgroundColor: theme.palette.common.white,
	},
	logoContainer: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	logo: {
		height: '1.25em',
	},
	drawerIconContainer: {
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	drawerIcon: {
		height: '30px',
		width: '30px',
	},
	formControl: {
		margin: theme.spacing(2),
		minWidth: 120,
	},
	catMenuButton: {
		border: '1px solid #E5E5E5',
		fontWeight: 'bold',
		marginLeft: '2em',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	catMenuItemButton: {
		display: 'flex',
		justifyContent: 'flex-start',
		color: theme.palette.common.blue,
		textTransform: 'none',
		fontWeight: 'bold',
		fontSize: '0.8em',
		padding: '0.5em 3em',
		'&:hover': {
			backgroundColor: 'transparent',
			color: theme.palette.common.green,
		},
	},
	catMenuItemIcon: {
		marginRight: '20px',
	},
	contactSection: {
		marginLeft: 'auto',
	},
	contactSectionItem: {
		...theme.typography.appbarItem,
		color: theme.palette.common.blue,
		fontSize: '15px',
		minWidth: 20,
		'&. Button': {
			color: 'white',
		},
	},
	drawer: {
		width: '17em',
		backgroundColor: theme.palette.common.white,
	},
	paper: {
		backgroundColor: 'rgb(230, 230, 230)',
		padding: '45px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	drawerCollectionContainer: {
		...theme.typography.appbarItem,
		padding: '40px 20px',
	},
	drawerMenuItem: {
		cursor: 'pointer',
		color: theme.palette.common.blue,
		fontSize: '0.86rem',
		'&:hover': {
			backgroundColor: 'transparent',
			color: theme.palette.common.green,
		},
	},
	drawerCloseIcon: {
		cursor: 'pointer',
		color: 'grey',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
}))

const cats = [
	{ name: 'Grocery', icon: grocery },
	{ name: 'Makeup', icon: makeup },
	{ name: 'Clothing', icon: clothing },
	{ name: 'Furniture', icon: furniture },
	{ name: 'Book', icon: book },
]

const drawerMenuItems = [
	'Home',
	'Profile',
	'Checkout',
	'Your Order',
	'Order Invoice',
	'Terms and Services',
	'Need Help',
	'Offer',
]

export default function Header() {
	const theme = useTheme()
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState(null)
	const [openDrawer, setOpenDrawer] = useState(false)

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const matches = useMediaQuery(theme.breakpoints.down('sm'))

	const handleCatMenuClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleCatMenuClose = () => {
		setAnchorEl(null)
	}

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				elevation={0}
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<List disablePadding>
					<ListItem>
						<Button
							size="small"
							disableRipple
							className={classes.drawerCloseIcon}
						>
							<CloseIcon onClick={() => setOpenDrawer(false)} />
						</Button>
					</ListItem>
					<ListItem className={classes.paper}>
						<Paper elevation={0}>
							<Button
								size="small"
								variant="contained"
								color="primary"
								disableRipple
								disableElevation
							>
								Join
							</Button>
						</Paper>
					</ListItem>
					<div className={classes.drawerCollectionContainer}>
						{drawerMenuItems.map(item => (
							<ListItem
								key={`drawerlist-${item}`}
								className={classes.drawerMenuItem}
							>
								<ListItemText disableTypography>
									{item}
								</ListItemText>
							</ListItem>
						))}
					</div>
				</List>
			</SwipeableDrawer>
		</React.Fragment>
	)

	return (
		<React.Fragment>
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar
					className={classes.toolbarContainer}
					disableGutters={matches ? true : false}
				>
					<div className={classes.logoSection}>
						{matches ? (
							<IconButton
								className={classes.drawerIconContainer}
								onClick={() => setOpenDrawer(!openDrawer)}
								disableRipple
							>
								<MenuIcon className={classes.drawerIcon} />
							</IconButton>
						) : null}
						<Button disableRipple className={classes.logoContainer}>
							<img
								src={logo}
								alt="company logo"
								className={classes.logo}
							/>
						</Button>
						<Hidden xsDown>
							<Button
								disableRipple
								color="primary"
								startIcon={
									<img
										src={cats[0].icon}
										alt={cats[0].name}
									/>
								}
								aria-describedby={
									anchorEl ? 'simple-popover' : undefined
								}
								onClick={handleCatMenuClick}
								className={classes.catMenuButton}
							>
								<span className={classes.catMenuItemIcon}>
									{cats[0].name}
								</span>
								{Boolean(anchorEl) ? (
									<ExpandLess />
								) : (
									<ExpandMore />
								)}
							</Button>
						</Hidden>
						<Popover
							disableScrollLock
							open={Boolean(anchorEl)}
							anchorEl={anchorEl}
							onClose={handleCatMenuClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
						>
							<br />
							{cats.map(cat => (
								<React.Fragment key={`cat--${cat.name}`}>
									<Button
										disableRipple
										key={`cat-${cat.name}`}
										className={classes.catMenuItemButton}
									>
										<span
											className={classes.catMenuItemIcon}
										>
											<img
												src={cat.icon}
												alt={cat.name}
											/>
										</span>
										{cat.name}
									</Button>
								</React.Fragment>
							))}
						</Popover>
					</div>
					<div className={classes.appbarSearch}></div>
					<Hidden smDown>
						<div className={classes.contactSection}>
							<Grid
								container
								justify="space-between"
								alignItems="center"
								spacing={5}
							>
								<Grid item>
									<span
										className={classes.contactSectionItem}
									>
										Offer
									</span>
								</Grid>
								<Grid item>
									<span
										className={classes.contactSectionItem}
									>
										<HelpIcon />
										Need Help
									</span>
								</Grid>
								<Grid item>
									<Button
										size="small"
										variant="contained"
										color="primary"
										disableElevation
										disableRipple
									>
										Join
									</Button>
								</Grid>
							</Grid>
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
			{matches ? drawer : null}
		</React.Fragment>
	)
}
