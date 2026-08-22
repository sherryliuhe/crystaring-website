# DNS and Email Cutover Checklist

Do not change Namecheap nameservers until the new website and email are ready.

## Current state

- Domain registrar: Namecheap account controlled by Crystaring
- Current nameservers: `ns3.applethosting2.com`, `ns4.applethosting2.com`
- Current DNS, hosting, cPanel and email: controlled by old hosting/intermediary

## Before cutover

- Keep old website online.
- Export or copy any useful old product images, PDFs and text.
- Ask old provider for DNS zone records, MX records, TXT records, email accounts and website files.
- Choose new email provider: Google Workspace or Microsoft 365.
- Create target mailboxes such as `sales@crystaring.com`, `info@crystaring.com`, and personal company mailbox.
- Prepare Cloudflare DNS records before changing nameservers.

## Cloudflare DNS records to prepare

- Website `A` or `CNAME` record for root domain.
- `www` CNAME.
- MX records for Google Workspace or Microsoft 365.
- SPF TXT.
- DKIM TXT.
- DMARC TXT, starting with:

```txt
v=DMARC1; p=none; rua=mailto:sales@crystaring.com
```

- Any provider verification TXT records.

## Cutover

- In Namecheap, change nameservers from old hosting nameservers to Cloudflare nameservers.
- Wait for DNS propagation.
- Do not cancel old hosting or email until all tests pass.

## After cutover tests

- `crystaring.com` opens correctly.
- `www.crystaring.com` opens correctly.
- `sales@crystaring.com` receives Gmail messages.
- `sales@crystaring.com` receives LinkedIn verification email.
- Outgoing email lands in Gmail inbox rather than spam.
- SPF passes.
- DKIM passes.
- DMARC passes.
- RFQ form delivers correctly.
- Catalogue request form delivers correctly.
