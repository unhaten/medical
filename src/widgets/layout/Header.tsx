import { ToggleTheme } from '@/features/ToggleTheme'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { LucideBell } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
	return (
		<header>
			<div className='flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap'>
				<div className='flex gap-1 items-center'>
					<div className='relative w-6 h-6 sm:w-8 sm:h-8'>
						<Image src={'/icon.png'} alt={'logo'} fill />
					</div>
					<div className='relative h-6 w-16 sm:h-8 sm:w-24'>
						<Image src={'/logo.png'} alt={'logo'} fill />
					</div>
				</div>
				<div className='order-3 w-full'>
					<Input />
				</div>
				<div className='flex gap-4 items-center basis-1/3 justify-end sm:order-3'>
					<Button variant={'outline'} size={'icon'}>
						<LucideBell size={'20px'} />
					</Button>
					<ToggleTheme />
					<Avatar>
						<AvatarImage src='#' />
						<AvatarFallback>AV</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	)
}

export default Header
