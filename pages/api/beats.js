import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(503).json({
      ok: false,
      code: "DATABASE_NOT_CONFIGURED",
      error: "The development database connection is not configured."
    });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT
        id,
        title,
        genre,
        bpm,
        mood,
        price_cents AS "priceCents",
        description,
        preview_url AS "previewUrl",
        artwork_url AS "artworkUrl"
      FROM beats
      WHERE is_published = TRUE
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return res.status(200).json({ ok: true, beats: rows });
  } catch (error) {
    // Keep connection details and SQL diagnostics out of public responses.
    console.error("Catalogue query failed:", error?.message || "Unknown database error");
    return res.status(503).json({
      ok: false,
      code: "CATALOGUE_UNAVAILABLE",
      error: "The beat catalogue is temporarily unavailable."
    });
  }
}
