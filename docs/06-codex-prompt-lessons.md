# Codex Prompt Lessons

## Why Strong Constraints Are Needed

Codex can move quickly, but without strong constraints it may over-edit pages, add unrequested content, or interpret a narrow task as permission to redesign broader sections.

Good prompts should state:

- what to change
- what not to change
- which files/pages are in scope
- whether to deploy or not deploy
- whether DNS/email/Vercel settings are off-limits
- final checks required

## Common Codex Risks

Risks seen during this project:

- Reintroducing wrong positioning.
- Making visual changes outside the requested section.
- Treating Crystaring as a finished lighting company.
- Using words like borosilicate before category confirmation.
- Showing customer-facing fields like "Search phrase."
- Creating pages or sections that are too thin for SEO.
- Cropping product images incorrectly.
- Adding claims that sound stronger than verified facts.

## Do Not Invent Specs

Future prompts must clearly say:

Do not invent dimensions, openings, material, MOQ, lead time, packing capability, certification or capacity.

Use confirm-before-quotation language when data is incomplete.

## Do Not Create Thin SEO Pages

Do not create pages only for keywords unless the page has real product evidence, real buyer value and accurate content.

For Crystaring, product pages should be grounded in:

- product image
- model/SKU when available
- category
- finish/color when known
- dimensions/openings only when confirmed
- conservative RFQ language

## Do Not Reintroduce Wrong Positioning

Do not use:

- Glass Lighting Manufacturer
- finished lighting
- electrical testing claims
- retail lighting language

Keep Crystaring positioned as a glass lamp shade and lighting glass component supplier.

## Need For Final Checklists

Every meaningful change should end with a checklist:

- forbidden wording check
- form action check
- sitemap/robots/canonical check if SEO-related
- GA4 ID check if analytics-related
- no personal data in analytics
- no DNS changes unless explicitly requested
- no production deployment unless explicitly requested

