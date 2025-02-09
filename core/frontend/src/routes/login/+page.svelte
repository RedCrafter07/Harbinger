<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Login | Harbinger</title>
</svelte:head>

<div class="grid min-h-screen w-full place-items-center">
	<div
		class="min-w-1/2 flex flex-col gap-4 rounded-xl border border-white/10 bg-zinc-800 p-8 drop-shadow-xl"
	>
		<div>
			<h1>Welcome!</h1>
			<h3 class="opacity-75">Please log in to access Harbinger.</h3>
		</div>

		<form
			use:enhance
			method="post"
			action="?/login"
			class="flex flex-col gap-4"
		>
			<input
				name="username"
				type="text"
				class="block w-full rounded-xl border border-white/20 bg-zinc-900 px-3 py-2 transition-all duration-150 focus:border-white/40 focus:outline-none"
				placeholder="Username"
				tabindex="0"
			/>
			<input
				name="password"
				type="password"
				class="block w-full rounded-xl border border-white/20 bg-zinc-900 px-3 py-2 transition-all duration-150 focus:border-white/40 focus:outline-none"
				placeholder="Password"
			/>

			<button
				class="cursor-pointer rounded-xl border-2 border-lime-600 bg-transparent p-3 font-bold text-lime-600 transition-all duration-150 hover:bg-lime-600 hover:text-white active:scale-95"
			>
				Log in
			</button>
		</form>
	</div>
</div>
