import { ThemeProvider } from '@material-ui/core'
import theme from './ui/Theme'
import Header from './ui/Header'
import Banner from './components/Banner'
import OfferSection from './components/OfferSection'
import ProductSection from './ui/ProductSection'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Banner />
			<OfferSection />
			<ProductSection />
		</ThemeProvider>
	)
}
