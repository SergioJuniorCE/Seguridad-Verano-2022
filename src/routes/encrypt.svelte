<script lang="ts">
	import EncryptionForm from '$lib/components/EncryptionForm.svelte';

	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(function () {
		if (!$session) {
			goto('/');
		}
	});
</script>

{#if $session}
	<EncryptionForm />
{/if}
