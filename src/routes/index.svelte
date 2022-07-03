<script lang="ts">
	import { onMount } from 'svelte';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	import LoginForm from '$lib/components/LoginForm.svelte';

	onMount(() => {
		if ($session) {
			goto('encrypt');
		}
	});
</script>

<LoginForm />
