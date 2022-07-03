import CryptoJS from "crypto-js";

const key = import.meta.env.VITE_ENCRYPTION_KEY;

export function encrypt(data: string) {
	let result: string;
	try {
		result = CryptoJS.AES.encrypt(data, key).toString();
	} catch (error) {
		result = '';
	}
	return result;
}

export function decrypt(data: string): string {
	let result: string;
	try {
		const bytes = CryptoJS.AES.decrypt(data, key);
		result = bytes.toString(CryptoJS.enc.Utf8);
	} catch (error) {
		result = '';
	}
	return result;
}

export function hash(data: string): string {
	return CryptoJS.SHA256(data).toString(CryptoJS.enc.Base64);
}
