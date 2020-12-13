import { createMuiTheme } from '@material-ui/core'

const eGreen = '#009E7F'
const eBlue = '#0D1136'
const eWhite = '#FAFAFA'

export default createMuiTheme({
	props: {
		// Name of the component
		MuiButtonBase: {
			// The properties to apply
			disableRipple: true, // No more ripple, on the whole application!
		},
	},
	palette: {
		common: {
			green: eGreen,
			blue: eBlue,
			white: eWhite,
		},
		primary: {
			main: eGreen,
		},
		secondary: {
			main: eBlue,
		},
	},
	typography: {
		appbarItem: {
			fontFamily: 'Lato, sans-serif',
			margin: '0px',
			textTransform: 'none',
		},
	},
})
