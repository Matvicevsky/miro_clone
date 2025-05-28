import { AuthLayout } from './ui/auth-layout'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/model/routes'
import { RegistrationForm } from './ui/registration-form'

function RegisterPage() {
	return (
		<AuthLayout
			title='Зарегистрироваться'
			description='Для регистрации введите email и пароль'
			footerText={
				<>
					Есть аккаунт? <Link to={ROUTES.LOGIN}>Войти в систему</Link>
				</>
			}
			form={<RegistrationForm />}
		/>
	)
}

export const Component = RegisterPage
