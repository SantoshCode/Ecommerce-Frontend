import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogActions } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	dialogWrapper: {
		display: 'flex',
	},
	imgContainer: {
		width: '50%',
		maxWidth: '50%',
		display: ' flex',
		alignItems: ' center',
		justifyContent: ' center',
		position: 'relative',
		padding: '30px 60px',
	},
	descContainer: {
		width: '50%',
		maxWidth: '50%',
		borderLeft: '1px solid rgb(243, 243, 243)',
	},
	desc: {
		padding: '50px',
	},
	descTitle: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginBottom: '10px',
	},
	title: {
		fontFamily: 'Poppins, sans-serif',
		fontSize: '21px',
		fontWeight: ' 600',
		color: 'rgb(13,17, 54)',
		lineHeight: '1.5',
		display: 'flex',
	},
	about: {
		fontFamily: 'Lato, sans-serif',
		fontSize: '15px ',
		fontWeight: 400,
		color: 'rgb(66, 69, 97)',
		lineHeight: 2,
		marginTop: '30px  ',
	},
	descQty: {
		fontFamily: 'Lato, sans-serif',
		fontSize: '13px',
		fontWeight: 400,
		color: 'rgb(119, 121, 140)',
	},
	descPrice: {
		display: 'flex',
		flexDirection: 'row',
		WebkitBoxPack: 'justify',
		justifyContent: 'space-between',
		marginTop: 30,
		marginBottom: 15,
	},
}))

export default function MaxWidthDialog({ openDialog, setOpenDialog, data }) {
	const classes = useStyles()

	const handleClose = () => {
		setOpenDialog(false)
	}

	return (
		<React.Fragment>
			<Dialog
				fullWidth
				maxWidth="md"
				open={openDialog}
				onClose={handleClose}
				aria-labelledby="max-width-dialog-title"
			>
				<div className={classes.dialogWrapper}>
					<div className={classes.imgContainer}>
						<img src={data.src} alt="product" />
					</div>
					<div className={classes.descContainer}>
						<div className={classes.desc}>
							<div className={classes.descTitle}>
								<h1 className={classes.title}>{data.name}</h1>
							</div>
							<div className={classes.descQty}>12pc(s)</div>
							<p
								className={classes.about}
							>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sit amet risus non facilisis. Donec vestibulum, diam sed facilisis fermentum, felis sem faucibus est, et rutrum velit lectus faucibus ligula. Mauris tempus in felis vitae finibus. Suspendisse potenti. Donec lobortis libero in metus tristique placerat. `}</p>
							<div className={classes.descPrice}>
								<Button size="small" color="primary">
									$1.5
								</Button>
								<div className={classes.descPriceCart}>
									<Button
										size="small"
										color="primary"
										variant="contained"
									>
										Cart
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <Grid container>
					<Grid item>
					</Grid>
					<Grid item>
						<img src={data.src} alt="product" />
					</Grid>
				</Grid> */}
				{/* <DialogTitle id="max-width-dialog-title">
					Optional sizes
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You can set my maximum width and whether to adapt or
						not.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Close
					</Button>
				</DialogActions> */}
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	)
}
