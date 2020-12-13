import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 245,
		'&:hover': {
			backgroundColor: '#fff',
		},
	},
	cartBtn: {
		fontWeight: 'bold',
		textTransform: 'none',
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.green,
		'&:hover': {
			backgroundColor: theme.palette.common.green,
			color: theme.palette.common.white,
		},
	},
	rootItemName: {
		fontWeight: 'bold',
		color: theme.palette.common.blue,
	},
}))

export default function Product({ name, image, handleClick }) {
	const classes = useStyles()
	return (
		<Card
			classes={{ root: classes.root }}
			elevation={0}
			onClick={handleClick}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image={image}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						classes={{ root: classes.rootItemName }}
					>
						{name}
					</Typography>
					<br />
					<Typography
						variant="body1"
						color="textSecondary"
						component="p"
					>
						1 Kg
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					$1.5
				</Button>
				<Button size="small" className={classes.cartBtn}>
					Cart
				</Button>
			</CardActions>
		</Card>
	)
}
