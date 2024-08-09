import { Button } from '@/shared/ui/button'
import { LucideMenu } from 'lucide-react'

const ToggleSidebar = () => {
	return (
		<Button
			size={'icon'}
			variant={'default'}
			className='p-1.5 block md:hidden'
		>
			<LucideMenu />
		</Button>
	)
}

export default ToggleSidebar
