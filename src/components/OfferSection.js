import { Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'

import offer1 from '../assets/offer-1.png'
import offer2 from '../assets/offer-2.png'
import offer3 from '../assets/offer-3.png'

const useStyles = makeStyles(theme => ({
	offerContainer: {
		minWidth: '100%',
		padding: '30px 0px',
		borderBottom: '1px solid rgb(241, 241, 241)',
	},
	offer: {
		width: '25em',
		[theme.breakpoints.down('md')]: {
			width: '19em',
		},
		[theme.breakpoints.down('sm')]: {
			width: '12em',
		},
	},
}))

export default function OfferSection() {
	const classes = useStyles()
	const theme = useTheme()
	const mdMatched = useMediaQuery(theme.breakpoints.down('md'))
	const xsMatched = useMediaQuery(theme.breakpoints.down('xs'))
	return (
		<div className={classes.offerContainer}>
			{!xsMatched ? (
				<Grid container justify="space-evenly" alignItems="center">
					<Grid item>
						<img
							src={offer1}
							alt="offer1"
							className={classes.offer}
						/>
					</Grid>
					<Grid item>
						<img
							src={offer2}
							alt="offer1"
							className={classes.offer}
						/>
					</Grid>
					<Grid item>
						<img
							src={offer3}
							alt="offer1"
							className={classes.offer}
						/>
					</Grid>
					{mdMatched ? null : (
						<Grid item>
							<img
								src={offer3}
								alt="offer1"
								className={classes.offer}
							/>
						</Grid>
					)}
				</Grid>
			) : null}
		</div>
	)
}
