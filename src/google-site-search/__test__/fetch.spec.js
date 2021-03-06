// import casual from "casual";

import { GoogleConnector } from "../fetch";

// test("`connect` should fail without any env vars", async (t) => {
//   const SS = await connect(casual.url);
//   t.falsy(SS);
// });

// test("`connect` should fail without all env vars", async (t) => {
//   process.env.SEARCH_URL = casual.url;
//   process.env.SEARCH_KEY = casual.word;

//   const SS = await connect(casual.url);
//   t.falsy(SS);
// });

// test("`connect` should return true if proper env vars", async (t) => {
//   process.env.SEARCH_URL = casual.url;
//   process.env.SEARCH_KEY = casual.word;
//   process.env.SEARCH_CX = casual.word;

//   const SS = await connect(casual.url);
//   t.truthy(SS);
// });

it("should expose get function", async () => {
  const testFetcher = new GoogleConnector();
  expect(testFetcher.get).toBeTruthy();
});
