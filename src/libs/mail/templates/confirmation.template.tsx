import { Html } from '@react-email/html'
import { Heading, Link, Body, Text, Tailwind } from '@react-email/components'
import * as React from "react"
interface ConfirmationTemplateProps {
	domain: string
	token: string
}

export const ConfirmationTemplate = ({
	domain,
	token
}: ConfirmationTemplateProps) => {
	const confirmLink = `${domain}/auth/new-verification?token=${token}`
	return (
		<Tailwind>
			<Html>
				<Body>
					<Heading>Подтверждение почты</Heading>
					<Text>Привет! Чтобы подтвердить свой адрес электронной
						почты, пожалуйста, перейдите по следующей ссылке:
					</Text>
					<Link href={confirmLink}>Подтвердить почту</Link>
					<Text>
						Эта ссылка действительна в течении часа.
						Если вы не запрашивали подтверждение,
						просто проигноируйте это сообщение.
					</Text>
					<Text>
						Спасибо за использование нашего сервиса
					</Text>
				</Body>
			</Html>
		</Tailwind>
	)
}
