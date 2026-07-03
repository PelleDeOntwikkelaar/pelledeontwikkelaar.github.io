// Privacy-first analytics (Plausible) — no cookie consent banner required.
// Renders nothing until VITE_PLAUSIBLE_DOMAIN is set, so this is safe to ship
// ahead of the actual Plausible account/site ID (still TBD).
export function Analytics() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined
  if (!domain) return null

  return (
    <script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  )
}
