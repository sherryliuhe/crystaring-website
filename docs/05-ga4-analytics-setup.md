# GA4 Analytics Setup

## GA4 Setup

Google Analytics 4 was added to the Crystaring website after launch.

Measurement ID:

G-043WB64Q7G

The official Google tag was installed in the head of public HTML pages.

## Pages Tagged

The GA4 tag was added across public pages, including:

- Homepage
- Products page
- Product category pages
- Product detail pages
- About
- OEM/ODM
- Catalogue
- Contact
- 404 page

## Events Added

Safe B2B conversion events were added:

- catalogue_request_submit
- rfq_form_submit
- catalogue_cta_click
- rfq_cta_click
- email_click
- whatsapp_click
- phone_click

## No PII Rule

GA4 events must not send personal information.

Do not send:

- names
- customer emails
- phone numbers
- company names
- message text
- form field values

Allowed event parameters:

- page_path
- link_location
- link_text for generic CTA text only
- cta_type

## Form Submission Tracking

Catalogue and RFQ forms continue to submit through FormSubmit to:

https://formsubmit.co/info@crystaring.com

Form events are sent after the FormSubmit request is attempted. Form field values are not passed to GA4.

## Email Click Reliability

Original pending issue:

The Contact page email was visible as text in the Direct Contact section and email_click tracking needed to be more reliable for mailto links.

Post-GA4 QA fix:

- Contact page Direct Contact email was changed to a mailto link.
- Customer-facing info@crystaring.com instances in Contact and Catalogue notes were linked.
- All mailto links now trigger email_click.
- WhatsApp and phone links trigger whatsapp_click and phone_click.
- Tracking uses safe parameters only.

## Realtime Test Status

GA4 Realtime should be used to confirm:

- email_click
- whatsapp_click
- phone_click
- catalogue_request_submit
- rfq_form_submit

If events do not show immediately, wait several minutes and test from a clean browser session.

