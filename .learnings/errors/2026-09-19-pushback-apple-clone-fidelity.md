## Pattern: Omitting secondary bento tiles and signature media carousels in flagship homepage clones
## Root Cause: Initial scaffold stopped at 4 bento tiles and skipped the bottom full-bleed Apple TV+ media gallery, assuming 4 tiles and 3 heroes were sufficient.
## Prevention: Always audit the full DOM height of the target homepage down to the footer label. Check for media galleries, carousels, and exact tile counts (e.g. 2x3 = 6 tiles) before considering the homepage layout complete.
## Score delta: 6/10 → 9/10
## Project: Apple Sovereign Clone (apple-clone-por)
