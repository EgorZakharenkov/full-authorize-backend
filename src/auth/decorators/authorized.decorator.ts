import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from '@prisma/__generated__'

export const Authorized = createParamDecorator(
	(data: keyof User, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest()
		const user = request.user

		return data ? user[data] : user
	}
)
