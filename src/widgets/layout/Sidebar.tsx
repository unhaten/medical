import { Button } from '@/shared/ui/button'
import {
	LucideCalendar,
	LucideLayoutDashboard,
	LucideMic,
	MessageSquareText,
	Microscope,
	StarIcon,
	UsersRound,
	Wallet2
} from 'lucide-react'

const Sidebar = () => {
	const options = [
		{
			text: 'Dashboard',
			icon: <LucideLayoutDashboard />
		},
		{
			text: 'Appointments',
			icon: <LucideCalendar />
		},
		{
			text: 'Patients',
			icon: <UsersRound />
		},
		{
			text: 'Test results',
			icon: <Microscope />
		},
		{
			text: 'Messages',
			icon: <MessageSquareText />
		},
		{
			text: 'Reviews',
			icon: <StarIcon />
		},
		{
			text: 'Finances',
			icon: <Wallet2 />
		}
	]

	return (
		<aside className='col-span-2 hidden md:block'>
			<div className='flex items-center gap-4'>
				<Button size='icon' className='shrink-0'>
					<LucideMic size={16} />
				</Button>
				<p className='font-semibold'>Emergency help</p>
			</div>
			<nav className='mt-10'>
				<ul className='flex flex-col gap-4'>
					{options.map((item, index) => {
						return (
							<li key={index}>
								<Button
									variant={'underlined'}
									className='gap-2 pl-0 justify-start w-40'
								>
									{item.icon}
									<p>{item.text}</p>
								</Button>
							</li>
						)
					})}
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
