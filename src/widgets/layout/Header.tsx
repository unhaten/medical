import Image from 'next/image'

const Header = () => {
	return (
		<header>
			<div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
				<div className='flex gap-1 items-center'>
					<div className='relative w-6 h-6 md:w-8 md:h-8'>
						<Image src={'/icon.png'} alt={'logo'} fill />
					</div>
					<div className='relative h-6 w-16 md:h-8 md:w-24'>
						<Image src={'/logo.png'} alt={'logo'} fill />
					</div>
				</div>
				<div>search</div>
			</div>
		</header>
	)
}

export default Header
