import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const get = (k) => (env.match(new RegExp(`^${k}=(.*)$`, "m")) || [])[1]?.trim() || "";
const id = get("GOOGLE_OAUTH_CLIENT_ID");
const secret = get("GOOGLE_OAUTH_CLIENT_SECRET");
const redirect = get("GOOGLE_OAUTH_REDIRECT_URI");

console.log(
  JSON.stringify(
    {
      idLen: id.length,
      idSuffix: id.slice(-24),
      secretLen: secret.length,
      secretPrefix: secret.slice(0, 7),
      secretHasQuotes: secret.startsWith('"') || secret.startsWith("'"),
      redirect,
    },
    null,
    2,
  ),
);
