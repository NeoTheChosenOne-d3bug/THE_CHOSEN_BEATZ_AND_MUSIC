# Development systems setup

The production storefront remains in demo mode until every system has passed its checks.

## Neon catalogue foundation

1. Confirm the Vercel project has a development `DATABASE_URL` connected to the Neon development branch.
2. In the Neon SQL editor, run `db/migrations/001_create_beats.sql`.
3. Add development beat rows with `is_published = FALSE` first. Set it to `TRUE` only after confirming each listing's rights, licence terms, metadata and preview permission.
4. Deploy the preview branch and check `/api/beats`. It should return `{ "ok": true, "beats": [] }` when the table exists but no beats are published.
5. Do not store master audio files or private download URLs in this table. Store only public preview URLs here; protected masters belong in private object storage.

## Safety and release gates

- Never put service secrets in browser code, commits, screenshots or chat messages.
- Keep checkout disabled. Do not collect real payments from the development storefront.
- Test customer authentication and admin authorization before adding write endpoints.
- Verify order ownership and signed-download authorization on the server before making paid files available.
- Use a responsible adult account holder for merchant/payment onboarding and any billing approvals.
