<script lang="ts">
	import EncryptionTextarea from '$lib/components/EncryptionTextarea.svelte';

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
	<EncryptionTextarea />
{/if}
