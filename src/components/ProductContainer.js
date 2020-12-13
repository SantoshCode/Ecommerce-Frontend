import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Product from './Product'
import ProductDialog from '../ui/ProductDialog'
import productsData from '../data'

const useStyles = makeStyles(theme => ({
	productContainer: {
		marginLeft: '10px',
		height: '93vh',
		width: '84vw',
		[theme.breakpoints.down('lg')]: {
			width: '76vw',
		},
		[theme.breakpoints.down('md')]: {
			width: '82vw',
		},
	},
	prodContainer: {
		// margin: '10px 30px',
		display: 'grid',
		gap: '1rem',
		gridTemplateColumns: 'repeat(auto-fit, minmax(193px, 1fr))',
		[theme.breakpoints.down('lg')]: {
			gap: '0.6rem',
			gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
		},
	},
}))

export default function ProductContainer() {
	const classes = useStyles()
	const [openDialog, setOpenDialog] = useState(false)
	const [data, setData] = useState({})
	const handleOpenDialog = item => {
		console.log('clicked')
		setOpenDialog(true)
		setData(item)
	}
	return (
		<div className={classes.productContainer}>
			<div className={classes.prodContainer}>
				{productsData.map(item => (
					<Product
						key={`product__${item.name}`}
						name={item.name}
						image={item.src}
						handleClick={() => handleOpenDialog(item)}
					/>
				))}
			</div>
			<ProductDialog
				openDialog={openDialog}
				setOpenDialog={setOpenDialog}
				data={data}
			/>
		</div>
	)
}
