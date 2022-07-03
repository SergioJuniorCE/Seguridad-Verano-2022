<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/database';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		goto('/');
	}
</script>

<nav class="navbar navbar-expand-lg bg-light">
	<div class="container">
		<a class="navbar-brand" href="/">Seguridad Informatica</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li> -->
				<!-- <li class="nav-item">
          <a class="nav-link" href="/encryption">Encryption</a>
        </li> -->
			</ul>
			{#if $session}
				<div class="d-flex">
					<button class="btn btn-danger" on:click={signOut}>Sign out</button>
				</div>
			{/if}
		</div>
	</div>
</nav>
