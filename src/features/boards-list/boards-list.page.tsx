import { CONFIG } from '@/shared/model/config'
import { ROUTES } from '@/shared/model/routes'
import { Link, href } from 'react-router-dom'

function BoardsListPage() {
	return (
		<div>
			<h4>Boadrs List {CONFIG.API_BASE_URL}</h4>
			<Link to={href(ROUTES.BOARD, { boardId: '1' })}>Board id: 1</Link>
		</div>
	)
}

export const Component = BoardsListPage
