import { Button } from '@/shared/ui/kit/button'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form,
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from './use-login'

const loginSchema = z.object({
	email: z
		.string({
			required_error: 'Email обязательный',
		})
		.email('email не валидный'),
	password: z
		.string({
			required_error: 'Пароль обязательный',
		})
		.min(6, 'Пароль должен быть не меньше 6 символов'),
})

export function LoginForm() {
	const form = useForm({
		resolver: zodResolver(loginSchema),
	})

	const { login, errorMessage, isPending } = useLogin()

	const handleSubmit = form.handleSubmit(login)
	return (
		<Form {...form}>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type='email' placeholder='exmple@gmail.com' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Введите пароль'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{errorMessage && (
					<p className='text-destructive text-sm '>{errorMessage}</p>
				)}
				<Button disabled={isPending} type='submit'>
					Войти
				</Button>
			</form>
		</Form>
	)
}
