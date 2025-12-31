import { db } from '$lib/server/db';
import { passkey } from '@better-auth/passkey';
import { sso } from '@better-auth/sso';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { twoFactor } from 'better-auth/plugins';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	emailAndPassword: {
		enabled: true
	},
	plugins: [passkey(), sso(), twoFactor()]
});
