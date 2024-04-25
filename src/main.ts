import VConsole from "vconsole";

new VConsole();

console.log(1);
const supportsRequestStreams = (() => {
	let duplexAccessed = false;
	let hasContentType = false;
	const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
	const supportsRequest = typeof globalThis.Request === 'function';

	if (supportsReadableStream && supportsRequest) {
		hasContentType = new globalThis.Request('https://empty.invalid', {
			body: new globalThis.ReadableStream(),
			method: 'POST',
			// @ts-expect-error - Types are outdated.
			get duplex() {
				duplexAccessed = true;
				return 'half';
			},
		}).headers.has('Content-Type');
	}

	return duplexAccessed && !hasContentType;
})();

console.log(supportsRequestStreams);
