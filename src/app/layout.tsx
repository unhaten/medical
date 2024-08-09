import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProveder'
import { Toaster } from '@/shared/ui/sonner'
import Header from '@/widgets/layout/Header'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
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
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
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
						<main>{children}</main>
						<Toaster />
					</ThemeProvider>
				</div>
			</body>
		</html>
	)
}
