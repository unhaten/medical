import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'
import { ChevronDown } from 'lucide-react'

const Profile = () => {
	return (
		<div className='flex items-center gap-5'>
			<Avatar>
				<AvatarImage src='#' />
				<AvatarFallback>AV</AvatarFallback>
			</Avatar>
			<div className='gap-6 lg:gap-10 justify-between items-center hidden sm:flex'>
				<div className=''>
					<p className=''>Nicolas Doyle</p>
					<Separator className='my-0.5' />
					<span className='text-xs uppercase text-muted-foreground'>
						Surgeon
					</span>
				</div>
				<div>
					<Button size={'icon'} variant={'ghost'}>
						<ChevronDown
							className='text-muted-foreground'
							size={20}
						/>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Profile
