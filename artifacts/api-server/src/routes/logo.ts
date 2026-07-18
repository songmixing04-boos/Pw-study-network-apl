import { Router } from "express";

const router = Router();

// Proxy logo/favicon from official domains so the browser never hits external DNS
router.get("/logo", async (req, res) => {
  const domain = (req.query.domain as string)?.trim();
  if (!domain || !/^[a-zA-Z0-9.-]+$/.test(domain)) {
    res.status(400).end();
    return;
  }

  // Try high-quality Clearbit logo first, fallback to favicon.ico
  const urls = [
    `https://logo.clearbit.com/${domain}`,
    `https://${domain}/favicon.ico`,
    `https://${domain}/favicon.png`,
  ];

  for (const url of urls) {
    try {
      const upstream = await fetch(url, {
        signal: AbortSignal.timeout(4000),
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      if (!upstream.ok) continue;
      const ct = upstream.headers.get("content-type") ?? "image/x-icon";
      if (!ct.startsWith("image")) continue;
      const buf = await upstream.arrayBuffer();
      res.setHeader("Content-Type", ct);
      res.setHeader("Cache-Control", "public, max-age=86400");
      res.end(Buffer.from(buf));
      return;
    } catch {
      // try next
    }
  }

  res.status(404).end();
});

export default router;
