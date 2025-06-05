import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { EmailConfirmationModule } from '@/auth/email-confirmation/email-confirmation.module'
import { PasswordRecoveryModule } from '@/auth/password-recovery/password-recovery.module'
import { ProviderModule } from '@/auth/provider/provider.module'
import { TwoFactorAuthModule } from '@/auth/two-factor-auth/two-factor-auth.module'
import { IS_DEV_ENV } from '@/libs/common/utils/is-dev.utils'
import { MailModule } from '@/libs/mail/mail.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: !IS_DEV_ENV
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		ProviderModule,
		MailModule,
		EmailConfirmationModule,
		PasswordRecoveryModule,
		TwoFactorAuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
