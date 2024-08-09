import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Separator } from '@/shared/ui/separator'

const Profile = () => {
	return (
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
	)
}

export default Profile
