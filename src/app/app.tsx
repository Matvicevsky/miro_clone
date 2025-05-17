import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader } from '@/features/headers'
import { ROUTES } from '@/shared/model/routes'

export function App() {
	const location = useLocation()

	const isAuthPage =
		location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER
	return (
		<div>
			{!isAuthPage && <AppHeader />}
			<Outlet />
		</div>
	)
}
