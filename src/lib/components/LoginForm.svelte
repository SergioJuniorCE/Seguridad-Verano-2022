<script lang="ts">
	import { supabase } from '$lib/database';
		import { goto } from '$app/navigation';

	let email: string;
	let password: string;

	async function handleRegister() {
		const { user, error } = await supabase.auth.signUp({
			email,
			password
		});
		if (error) {
			alert(error);
			return;
		}
		goto('encrypt');
	}

	async function handleLogin() {
		const { user, error } = await supabase.auth.signIn({
			email,
			password
		});
		if (error) {
			alert(error);
			return;
		}
		goto('encrypt');
	}
</script>

<section class="center-h">
	<div class="w-50">
		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input
				type="text"
				class="form-control"
				name="email"
				id="email"
				placeholder="Enter your email"
				bind:value={email}
			/>
		</div>
		<div class="mb-3">
			<label for="password" class="form-label">Password</label>
			<input
				type="password"
				class="form-control"
				name="password"
				id="password"
				placeholder="Enter your password"
				bind:value={password}
			/>
		</div>
		<button type="button" class="btn btn-primary" on:click={handleLogin}>Sign In</button>
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" on:click={handleRegister}> Sign Up </button>
	</div>
</section>

<style>
	.center-h {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
