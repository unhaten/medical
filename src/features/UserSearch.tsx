import { Input } from '@/shared/ui/input'

const UserSearch = () => {
	return (
		<>
			{/* <LucideSearch /> */}
			<Input
				width={12}
				placeholder='Search patients or doctors'
				className='text-xs sm:text-sm'
			/>
		</>
	)
}

export default UserSearch
