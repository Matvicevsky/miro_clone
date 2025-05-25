import { ROUTES } from '@/shared/model/routes'
import { Link } from 'react-router-dom'
import { AuthLayout } from './auth-layout'
import { LoginForm } from './login-form'

function LoaginPage() {
	return (
		<AuthLayout
			title='Вход в систему'
			description='Для входа введите email и пароль'
			footerText={
				<>
					Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
				</>
			}
			form={<LoginForm />}
		/>
	)
}

export const Component = LoaginPage
