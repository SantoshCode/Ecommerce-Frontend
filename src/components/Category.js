import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import grocery from '../assets/svgs/grocery.svg'
import meat from '../assets/svgs/meat.svg'
import snacks from '../assets/svgs/snacks.svg'
import dairy from '../assets/svgs/dairy.svg'
import beverage from '../assets/svgs/beverage.svg'
const useStyles = makeStyles(theme => ({
	root: {
		height: '93vh',
		width: '100%',
		maxWidth: 240,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	rootListItem: {
		color: theme.palette.common.blue,
		'&:hover': {
			color: theme.palette.common.green,
			background: 'transparent',
		},
		'&:focus': {
			color: theme.palette.common.green,
		},
	},
}))

let newCats = [
	{
		id: 'grocery',
		name: 'Fruits & Vegetables',
		icon: grocery,
		items: ['Fruits', 'vegetabels'],
	},
	{
		id: 'meat',
		name: 'Meats & Fish',
		icon: meat,
		items: ['Fresh Fish', 'Meat'],
	},
	{
		id: 'snacks',
		name: 'Snacks',
		icon: snacks,
		items: ['Biscuits', 'Chocolates', 'Crisps', 'Noodles'],
	},
	{
		id: 'dairy',
		name: 'Dairy',
		icon: dairy,
		items: ['Butter', 'Egg', 'Milk', 'Powder Milk', 'Yogurt'],
	},
	{
		id: 'beverage',
		name: 'Beverage',
		icon: beverage,
		items: ['Coffe', 'Energy Drinks', 'Juice', 'Tea'],
	},
]

export default function Category() {
	const classes = useStyles()
	const [state, setState] = useState({
		grocery: false,
		snacks: false,
		dairy: false,
		beverage: false,
	})

	const handleClick = id => {
		setState(prevState => ({ ...prevState, [id]: !prevState[id] }))
	}
	return (
		<List className={classes.root}>
			{newCats.map(cat => (
				<React.Fragment key={`sidecat_${cat.name}`}>
					<ListItem
						classes={{ root: classes.rootListItem }}
						button
						onClick={() => handleClick(cat.id)}
					>
						<ListItemIcon>
							<img src={cat.icon} alt={cat.name} />
						</ListItemIcon>
						<ListItemText primary={cat.name} />
						{state[cat.id] ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					{cat.items.map((item, i) => (
						<Collapse
							key={`sidecatitem_${i}`}
							in={state[cat.id]}
							timeout="auto"
							unmountOnExit
						>
							<List component="div" disablePadding>
								<ListItem
									button
									className={classes.nested}
									classes={{ root: classes.rootListItem }}
								>
									<ListItemText primary={item} />
								</ListItem>
							</List>
						</Collapse>
					))}
				</React.Fragment>
			))}
		</List>
	)
}
