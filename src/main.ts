import VConsole from "vconsole";

new VConsole();

console.log(1);
const request = new Request("https://empty.invalid", {
  body: new ReadableStream(),
  method: "POST",
  // @ts-expect-error - Types are outdated.
  get duplex() {
    return "half";
  },
});

console.log(request);
