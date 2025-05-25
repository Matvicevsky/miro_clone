import { Button } from '@/shared/ui/kit/button'
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRegister } from './use-register'

const registrationSchema = z
	.object({
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
		confirmPassword: z.string().optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Пароли не совпадают',
	})

export function RegistrationForm() {
	const form = useForm({
		resolver: zodResolver(registrationSchema),
	})

	const { errorMessage, isPending, register } = useRegister()

	const handleSubmit = form.handleSubmit(register)
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
				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Повторите пароль</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Введите пароль еще раз'
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
					Зарегистрироваться
				</Button>
			</form>
		</Form>
	)
}
