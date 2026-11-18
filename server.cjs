const http = require("node:http"),
  fs = require("node:fs"),
  path = require("node:path");
const publicDir = path.join(__dirname, "public");
function json(res, status, data, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers,
  });
  res.end(JSON.stringify(data));
}
async function body(req) {
  let s = "";
  for await (const c of req) {
    s += c;
    if (Buffer.byteLength(s) > 16384)
      throw Object.assign(new Error("Request too large"), { status: 413 });
  }
  try {
    return JSON.parse(s || "{}");
  } catch {
    throw Object.assign(new Error("Invalid JSON"), { status: 400 });
  }
}
function fail(message, status = 400) {
  throw Object.assign(new Error(message), { status });
}
function staticFile(req, res, url) {
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return json(res, 400, { error: "Invalid URL" });
  }
  const file = path.resolve(
    publicDir,
    "." + (pathname === "/" ? "/index.html" : pathname),
  );
  if (!file.startsWith(publicDir + path.sep))
    return json(res, 403, { error: "Forbidden" });
  if (!["GET", "HEAD"].includes(req.method))
    return json(res, 405, { error: "Method not allowed" });
  fs.readFile(file, (e, data) => {
    if (e) return json(res, 404, { error: "Not found" });
    res.writeHead(200, {
      "Content-Type":
        {
          ".html": "text/html; charset=utf-8",
          ".css": "text/css",
          ".js": "text/javascript",
          ".svg": "image/svg+xml",
          ".webp": "image/webp",
        }[path.extname(file)] || "application/octet-stream",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  });
}
function headers(res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "same-origin");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
  );
}
function sameOrigin(req) {
  if (
    req.headers.origin &&
    req.headers.origin !== new URL("http://" + req.headers.host).origin &&
    req.headers.origin !== new URL("https://" + req.headers.host).origin
  )
    fail("Cross-origin request blocked", 403);
  if (req.headers["sec-fetch-site"] === "cross-site")
    fail("Cross-site request blocked", 403);
}
http
  .createServer((req, res) => {
    headers(res);
    staticFile(req, res, new URL(req.url, "http://localhost"));
  })
  .listen(process.env.PORT || 3001, "127.0.0.1", () =>
    console.log("Website: http://localhost:" + (process.env.PORT || 3001)),
  );
