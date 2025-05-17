import type { PathParams, ROUTES } from '@/shared/model/routes'
import { useParams } from 'react-router-dom'

function BoardPage() {
	const params = useParams<PathParams[typeof ROUTES.BOARD]>()
	return (
		<div>
			<h3>BoardPage</h3>
			<p>{params.boardId}</p>
		</div>
	)
}

export const Component = BoardPage
