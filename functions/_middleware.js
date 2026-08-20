const LOCALE_COOKIE = "autumnkyoto_locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

function readCookie(request, name) {
  const value = request.headers.get("Cookie") || "";
  const match = value.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function preferredLocale(request) {
  const saved = readCookie(request, LOCALE_COOKIE);
  if (saved === "ko" || saved === "en") return saved;
  return request.cf?.country === "KR" ? "ko" : "en";
}

function localeCookie(locale) {
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`;
}

function redirect(url, locale) {
  const headers = new Headers({
    Location: url.toString(),
    "Cache-Control": "private, no-store"
  });
  if (locale) headers.set("Set-Cookie", localeCookie(locale));
  return new Response(null, {
    status: 302,
    headers
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const requested = url.searchParams.get("lang");

  if (requested === "ko" || requested === "en") {
    url.searchParams.delete("lang");
    return redirect(url, requested);
  }

  if (url.pathname === "/" || url.pathname === "/index.html") {
    if (preferredLocale(context.request) === "en") {
      url.pathname = "/index-en.html";
      return redirect(url);
    }
  }

  return context.next();
}
