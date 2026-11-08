-- Run this migration against the Neon development database before enabling DB-backed catalogue reads.
CREATE TABLE IF NOT EXISTS beats (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  bpm INTEGER NOT NULL CHECK (bpm BETWEEN 40 AND 240),
  mood TEXT NOT NULL DEFAULT 'Unspecified',
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  description TEXT NOT NULL DEFAULT '',
  preview_url TEXT,
  artwork_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS beats_published_created_idx
  ON beats (is_published, created_at DESC);
