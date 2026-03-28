export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Try to serve static assets from dist/
    let response = await env.ASSETS.fetch(request);

    // If asset not found (404), serve index.html for SPA routing
    if (response.status === 404) {
      const indexUrl = new URL('/', url.origin);
      response = await env.ASSETS.fetch(new Request(indexUrl, request));
    }

    // Clone response to add security headers
    response = new Response(response.body, response);

    // Security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Content-Security-Policy', [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://bhwiqgywmiuoktrwoanf.supabase.co wss://bhwiqgywmiuoktrwoanf.supabase.co",
      "frame-ancestors 'none'",
    ].join('; '));

    return response;
  },
};
