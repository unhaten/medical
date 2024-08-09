import { Button } from '@/shared/ui/button'
import { LucideBell } from 'lucide-react'

const Notifications = () => {
	return (
		<Button variant={'outline'} size={'icon'}>
			<LucideBell size={'18px'} />
		</Button>
	)
}

export default Notifications
