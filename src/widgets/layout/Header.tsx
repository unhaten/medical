import Notifications from '@/features/Notifications'
import Profile from '@/features/Profile'
import ToggleSidebar from '@/features/ToggleSidebar'
import { ToggleTheme } from '@/features/ToggleTheme'
import UserSearch from '@/features/UserSearch'
import Logo from '@/shared/ui/logo'

const Header = () => {
	return (
		<header>
			<div className='flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap'>
				<Logo />
				<div className='order-3 w-full md:w-3/5 lg:w-full'>
					<div className='flex gap-2 items-center'>
						<ToggleSidebar />
						<UserSearch />
					</div>
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
