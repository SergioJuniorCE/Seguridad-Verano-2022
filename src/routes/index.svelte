<script lang="ts">
	import { session } from '$app/stores';
	import EncryptionTextarea from '$lib/components/EncryptionTextarea.svelte';
	import LoginForm from '$lib/components/LoginForm.svelte';
</script>

{#if $session}
	<EncryptionTextarea />
{:else}
	<LoginForm />
{/if}
