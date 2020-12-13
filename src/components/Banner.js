import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import banner from '../assets/grocery.png'
import {
	Button,
	Hidden,
	InputBase,
	Paper,
	Typography,
	useMediaQuery,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
	bannerContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		[theme.breakpoints.down('sm')]: {
			height: '600px',
		},
	},
	banner: {
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0px',
		left: '0px',
		backgroundImage: `url(${banner})`,
		backgroundPosition: 'center center',
		backgroundRepeact: 'no-repeat',
		[theme.breakpoints.down('sm')]: {
			height: '600px',
		},
	},
	bannerTitleFont: {
		fontFamily: 'Poppins',
		fontWeight: 'bold',
	},
	bannerItems: {
		...theme.typography.banner,
		fontSize: '14px',
		zIndex: 2,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bannerDesc: {
		color: 'rgb(119, 121, 140)',
		display: 'block',
		fontWeight: 400,
		lineHeight: 1.5,
		textAlign: 'center',
	},
	bannerCatBtn: {
		backgroundColor: '#F7F7F7',
		color: theme.palette.common.green,
		fontWeight: 'bold',
		textTransform: 'none',
	},
	bannerInput: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	bannerXsmInput: {
		marginTop: '4em',
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		boxShadow: 'rgba(0, 0, 0, 0.05) 0px 21px 36px',
		width: '100%',
	},
	formRoot: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '43em',
		boxShadow: 'rgba(0, 0, 0, 0.05) 0px 21px 36px',
	},
	searchButton: {
		backgroundColor: theme.palette.common.green,
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: theme.palette.common.green,
		},
	},
}))

export default function Banner() {
	const classes = useStyles()
	const theme = useTheme()
	const xsMatches = useMediaQuery(theme.breakpoints.down('xs'))
	return (
		<>
			<Hidden xsDown>
				<div className={classes.bannerContainer}>
					<div className={classes.banner} />
					<div className={classes.bannerItems}>
						<Typography
							variant="h3"
							align="center"
							color="secondary"
							classes={{ h3: classes.bannerTitleFont }}
						>
							Groceries Delivered in 90 Minute
						</Typography>
						<p className={classes.bannerDesc}>
							Get your healthy foods & snacks delivered at your
							doorsteps all day everyday
						</p>
						<Paper
							component="form"
							className={classes.formRoot}
							elevation={0}
						>
							<Button
								className={classes.bannerCatBtn}
								elevation={0}
							>
								Grocery
							</Button>
							<InputBase
								className={classes.bannerInput}
								placeholder="Search your products from here"
								inputProps={{
									'aria-label':
										'search your products from here',
								}}
							/>
							<Button className={classes.searchButton}>
								<SearchIcon />
								Search
							</Button>
						</Paper>
					</div>
				</div>
			</Hidden>
			{xsMatches ? (
				<Paper
					component="form"
					className={classes.bannerXsmInput}
					elevation={0}
				>
					<Button className={classes.bannerCatBtn} elevation={0}>
						Grocery
					</Button>
					<InputBase
						className={classes.bannerInput}
						placeholder={
							xsMatches ? '' : 'Search your products from here'
						}
						inputProps={{
							'aria-label': 'search your products from here',
						}}
					/>
					<Button className={classes.searchButton}>
						<SearchIcon />
						Search
					</Button>
				</Paper>
			) : null}
		</>
	)
}
