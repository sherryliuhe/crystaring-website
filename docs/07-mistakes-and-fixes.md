# Mistakes And Fixes

## sales@ vs info@

Issue:

The site previously showed both sales@crystaring.com and info@crystaring.com or treated sales@ as a public contact path.

Fix:

info@crystaring.com became the main public email. sales@crystaring.com should not appear publicly for now.

## WWW vs Non-WWW

Issue:

There was confusion around which domain version should be primary.

Fix:

The canonical domain is non-www:

https://crystaring.com/

www.crystaring.com should redirect to crystaring.com.

## Borosilicate vs Pyrex-Style

Issue:

The word borosilicate was risky because product material/category details were not fully confirmed.

Fix:

Use Pyrex-style glass components unless Crystaring confirms a more specific material term.

## Finished-Light Risk Cleanup

Issue:

Some images and copy suggested finished-light or electrical testing capability.

Fix:

Finished-light and electrical testing references were removed. Quality-control messaging now focuses on glass inspection before packing.

## Capabilities Page Removal

Issue:

A standalone Capabilities page risked becoming a thin or duplicated page.

Fix:

Capabilities content was merged into About. /capabilities/ should not be promoted in navigation or sitemap.

## Search Console Sitemap Fetch Issue

Issue:

Google Search Console initially had a sitemap fetch issue.

Fix:

The sitemap later showed successful status. Continue using:

https://crystaring.com/sitemap.xml

## Contact Page Email Link Issue

Issue:

The Contact page Direct Contact email appeared as plain text, not a clickable mailto link.

Fix:

The public email was changed to:

<a href="mailto:info@crystaring.com">info@crystaring.com</a>

Email click tracking was also improved for mailto links.

## Form Submission Feedback Issue

Issue:

FormSubmit emails were received, but the page showed an error message because the browser could not read a normal success response from the no-cors request.

Fix:

The form logic was adjusted so successful attempted submission can show the success message without exposing or sending form values to GA4.

