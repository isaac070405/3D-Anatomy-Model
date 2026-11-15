# Accessibility

The goal is a model that can be explored with a keyboard, a screen reader and a phone. This page lists what exists today and what is missing.

## What works

- Every control in the sidebar is a native button, checkbox, range input or select, so Tab, Space and Enter work.
- Controls carry `aria-label` text, and toggle buttons report `aria-pressed`.
- A `role="status"` live region announces the structure under the pointer or selection.
- Keyboard shortcuts: Space resets the view, 1, 2 and 3 set the cross-section axis, X toggles X-ray, H hides the selected part, U undoes.
- Focus rings use a 2 px outline on buttons, inputs and summaries.
- Below 900 px width the sidebar becomes a drawer opened from a bottom dock.
- Traditional Chinese names appear next to English names and are tagged `lang="zh-Hant"`.

## Known gaps

- The 3D scene is a canvas. Rotating and zooming need a pointer or touch, and there is no keyboard camera control yet.
- Part colours carry meaning (arteries red, veins blue, lobes by colour), and the legend repeats them as text only in the cross-section panel.
- Text size follows the browser zoom, but the panel layout is tuned for 100% to 200%.
- No audited contrast ratio has been recorded for the atlas and X-ray colour modes.

## Report a problem

Open an issue with the browser, the device and the control that failed. Use the accessibility template if one exists, otherwise the bug template.
