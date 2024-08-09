import { ToggleTheme } from '@/features/ToggleTheme'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Separator } from '@/shared/ui/separator'
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
					{/* <LucideSearch /> */}
					<Input placeholder='Search patients or doctors' />
				</div>
				<div className='flex gap-4 items-center basis-2/5 md:basis-full justify-end sm:order-3'>
					<Button variant={'outline'} size={'icon'}>
						<LucideBell size={'18px'} />
					</Button>
					<ToggleTheme />
					<div className='flex items-center gap-5'>
						<Avatar>
							<AvatarImage src='#' />
							<AvatarFallback>AV</AvatarFallback>
						</Avatar>
						<div className='hidden md:[display:block]'>
							<p className=''>Nicolas Doyle</p>
							<Separator className='my-0.5' />
							<span className='text-xs uppercase text-muted-foreground'>
								Surgeon
							</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
