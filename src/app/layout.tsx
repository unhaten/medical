import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProveder'
import { Toaster } from '@/shared/ui/sonner'
import Header from '@/widgets/layout/Header'
import type { Metadata } from 'next'
// import { Inter as FontSans } from 'next/font/google'
import Sidebar from '@/widgets/layout/Sidebar'
import localFont from 'next/font/local'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// const fontSans = FontSans({
// 	subsets: ['latin'],
// 	variable: '--font-sans'
// })

const localMontserrat = localFont({
	variable: '--font-localMontserrat',
	src: [
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-300.woff2',
			weight: '300'
		},
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-regular.woff2',
			weight: '400'
		},
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-500.woff2',
			weight: '500'
		},
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-600.woff2',
			weight: '600'
		},
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-700.woff2',
			weight: '700'
		},
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-800.woff2',
			weight: '800'
		},
		{
			path: '../lib/fonts/montserrat-v26-cyrillic_latin-900.woff2',
			weight: '900'
		}
	]
})

export const metadata: Metadata = {
	title: 'Medux',
	description: 'Your helping hand in medical support'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background antialiased relative',
					localMontserrat.className
				)}
			>
				<div className='p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 mx-auto'>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						<div className='grid grid-cols-7 gap-10 mt-10'>
							<Sidebar />
							<main className='col-span-7 md:col-span-5'>
								{children}
							</main>
						</div>
						<Toaster />
					</ThemeProvider>
				</div>
			</body>
		</html>
	)
}
