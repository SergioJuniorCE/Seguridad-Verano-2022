<script lang="ts">
	import { decrypt, encrypt } from '$lib/encryption';
	import { capitalize } from '$lib/utils';

	let text: string;
	let transformedText: string | '';

	let toggle: string = 'encrypt';

	function handleToggle(value: string) {
		toggle = value;
		handleCrypt();
	}

	function handleCrypt(e?: any) {
		if (e && e.charCode == 13) {
			if (toggle == 'encrypt') {
				transformedText = encrypt(text);
			} else if (toggle == 'decrypt') {
				transformedText = decrypt(text);
			}
		}
	}

	function handleCopy() {
		navigator.clipboard.writeText(transformedText);
		alert('Copied the text: ' + transformedText);
	}
</script>

<div>
	<div class="form-check">
		<input
			class="form-check-input"
			type="radio"
			name="flexRadioDefault"
			checked
			on:change={() => handleToggle('encrypt')}
		/>
		<label class="form-check-label" for="flexRadioDefault2"> Encrypt </label>
	</div>
	<div class="form-check">
		<input
			class="form-check-input"
			type="radio"
			name="flexRadioDefault"
			on:change={() => handleToggle('decrypt')}
		/>
		<label class="form-check-label" for="flexRadioDefault1"> Decrypt </label>
	</div>
</div>
<br />
<div class="mb-3">
	<label for="" class="form-label">Text</label>
	<input
		type="text"
		class="form-control"
		name=""
		id=""
		aria-describedby="helpId"
		placeholder=""
		bind:value={text}
		on:keypress={handleCrypt}
	/>
</div>
<div class="mb-3">
	<label for="" class="form-label">{capitalize(toggle)}ed text</label>
	<textarea
		disabled
		class="form-control"
		id="transformedText"
		rows="3"
		bind:value={transformedText}
	/>
</div>
<div class="d-grid gap-2">
	<button type="button" class="btn btn-primary" on:click={handleCopy}>Copy to clipboard</button>
</div>
