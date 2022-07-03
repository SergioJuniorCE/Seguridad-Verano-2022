<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { supabase } from '$lib/database';

	if (browser) {
		$session = supabase.auth.session();
		supabase.auth.onAuthStateChange((event, ses) => {
			$session = ses;
		});
	}
</script>

<Navbar />
<br />
<div class="container">
	<slot />
</div>
