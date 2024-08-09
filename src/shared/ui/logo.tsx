import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex gap-1 items-center'>
			<div className='relative w-6 h-6 sm:w-8 sm:h-8'>
				<Image src={'/icon.png'} alt={'logo'} fill />
			</div>
			<div className='relative h-6 w-16 sm:h-8 sm:w-24'>
				<Image src={'/logo.png'} alt={'logo'} fill />
			</div>
		</div>
	)
}

export default Logo
