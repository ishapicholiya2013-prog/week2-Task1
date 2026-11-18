# Design decisions

The studio identity uses dark green, soft neutral backgrounds and generous space. A shared header and footer make navigation predictable. The homepage pairs an introduction with an optimized, locally served WebP studio image. Cards use CSS Grid and collapse to one column below 760 px. A mobile menu exposes its state through aria-expanded.

Every form control has a label. Native email and length checks are combined with trimmed-text validation. Feedback is announced in a status region. The form intentionally says it is a demonstration rather than pretending to send email.

The company and its operating roles are illustrative. No customer statistics, testimonials or commercial results are invented. The envelope link is a demonstration social/contact icon; there are no fictional real social accounts.

## Wireframes

Desktop home: header → two-column hero → three feature cards → split call to action → footer.
About: header → introduction → story and principles columns → team grid → footer.
Services: header → introduction → six-card grid → contact call to action → footer.
Contact: header → introduction → guidance and form columns → footer.
Mobile: header with menu → all content stacked → footer links wrap.

## Manual checks

Use keyboard Tab and Shift+Tab through navigation and forms. Open the mobile menu and check the current-page link. Try an invalid email, a short message and whitespace-only name. Evidence covers 390, 768 and 1440 px viewports.
