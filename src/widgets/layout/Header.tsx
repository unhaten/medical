import Notifications from '@/features/Notifications'
import Profile from '@/features/Profile'
import { ToggleTheme } from '@/features/ToggleTheme'
import { Input } from '@/shared/ui/input'
import Logo from '@/shared/ui/logo'

const Header = () => {
	return (
		<header>
			<div className='flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap'>
				<Logo />
				<div className='order-3 w-full'>
					{/* <LucideSearch /> */}
					<Input placeholder='Search patients or doctors' />
				</div>
				<div className='flex gap-4 items-center basis-2/5 md:basis-full justify-end sm:order-3'>
					<Notifications />
					<ToggleTheme />
					<Profile />
				</div>
			</div>
		</header>
	)
}

export default Header
