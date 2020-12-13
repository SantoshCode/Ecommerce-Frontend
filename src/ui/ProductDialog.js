import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogActions, useMediaQuery, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
const useStyles = makeStyles(theme => ({
	dialogRoot: {},
	appBar: {
		position: 'relative',
		backgroundColor: theme.palette.common.white,
	},
	dialogWrapper: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	imgContainer: {
		width: '50%',
		maxWidth: '50%',
		display: ' flex',
		alignItems: ' center',
		justifyContent: ' center',
		position: 'relative',
		padding: '30px 60px',
		[theme.breakpoints.down('sm')]: {
			padding: 0,
		},
	},
	descContainer: {
		width: '50%',
		maxWidth: '50%',
		borderLeft: '1px solid rgb(243, 243, 243)',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			maxWidth: '100%',
		},
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
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})
export default function MaxWidthDialog({ openDialog, setOpenDialog, data }) {
	const classes = useStyles()
	const theme = useTheme()
	const smMatches = useMediaQuery(theme.breakpoints.down('sm'))
	const handleClose = () => {
		setOpenDialog(false)
	}

	return (
		<React.Fragment>
			{smMatches ? (
				<Dialog
					fullScreen
					open={openDialog}
					onClose={handleClose}
					TransitionComponent={Transition}
				>
					<AppBar className={classes.appBar} elevation={0}>
						<Toolbar>
							<IconButton
								edge="start"
								onClick={handleClose}
								aria-label="close"
							>
								<CloseIcon color="primary" />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								Sound
							</Typography>
							<Button
								autoFocus
								color="inherit"
								onClick={handleClose}
							>
								save
							</Button>
						</Toolbar>
					</AppBar>
					<div className={classes.dialogWrapper}>
						<div className={classes.imgContainer}>
							<img src={data.src} alt="product" />
						</div>
						<div className={classes.descContainer}>
							<div className={classes.desc}>
								<div className={classes.descTitle}>
									<h1 className={classes.title}>
										{data.name}
									</h1>
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
				</Dialog>
			) : (
				<Dialog
					classes={{ root: classes.dialogRoot }}
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
									<h1 className={classes.title}>
										{data.name}
									</h1>
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
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</React.Fragment>
	)
}
