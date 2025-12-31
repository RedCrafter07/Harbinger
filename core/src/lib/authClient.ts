import { ssoClient } from '@better-auth/sso/client';
import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	plugins: [ssoClient()]
});
