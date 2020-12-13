import React from 'react'
import ProductContainer from '../components/ProductContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, useMediaQuery, useTheme } from '@material-ui/core'
import Category from '../components/Category'

const useStyles = makeStyles(theme => ({
	productSectionContainer: {
		maxWidth: '100%',
	},
}))

export default function ProductSection() {
	const classes = useStyles()
	const theme = useTheme()
	const mdMatches = useMediaQuery(theme.breakpoints.down('md'))
	return (
		<div className={classes.productSectionContainer}>
			<Grid
				container
				justify={mdMatches ? 'center' : 'flex-start'}
				alignItems="center"
			>
				{mdMatches ? null : (
					<Grid item>
						<Category />
					</Grid>
				)}
				<Grid item>
					<ProductContainer />
				</Grid>
			</Grid>
		</div>
	)
}
