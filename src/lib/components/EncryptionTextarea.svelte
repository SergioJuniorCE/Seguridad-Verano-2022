<script lang="ts">
	import { decrypt, encrypt } from '$lib/encryption';

	let text: string;
	let transformedText: string;

	let toggle: string = 'encrypt';

	function handleToggle(value: string) {
		toggle = value;
		handleCrypt();
	}

	function handleCrypt() {
		if (toggle == 'encrypt') {
			transformedText = encrypt(text);
		} else if (toggle == 'decrypt') {
			transformedText = decrypt(text);
		}
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
	<label for="" class="form-label">{toggle}ed text</label>
	<textarea class="form-control" name="" id="" rows="3" bind:value={transformedText} />
</div>
