import CryptoJS from 'crypto-js';

const key = import.meta.env.VITE_ENCRYPTION_KEY;

export function encrypt(data: string): string {
	let result: string;
	try {
		if (data == '' || data == undefined) {
			return '';
		} else {
			result = CryptoJS.AES.encrypt(data, key).toString();
		}
	} catch (error) {
		return '';
	}
	return result;
}

export function decrypt(data: string): string {
	if (data == '' || data == undefined) {
		return '';
	}

	try {
		const bytes = CryptoJS.AES.decrypt(data, key);
		return bytes.toString(CryptoJS.enc.Utf8);
	} catch (error) {
		return '';
	}
}

export function hash(data: string): string {
	return CryptoJS.SHA256(data).toString(CryptoJS.enc.Base64);
}
