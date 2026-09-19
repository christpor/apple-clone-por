## Pattern: Restricting flagship hero graphics to narrow max-widths and boxing infinite ribbon carousels into static containers
## Root Cause: Defaulted to standard Tailwind container constraints (`max-w-[1260px]`, `max-h-[580px]`) instead of matching Apple's viewport-filling `100vh` hero scale and edge-to-edge peek slider kinematics.
## Prevention: Flagship product hero units must use full viewport height, scroll-scrub scale/parallax transformations, and horizontal carousels must feature active card focus with adjacent cards peeking offscreen.
## Score delta: 4.5/10 → 9.8/10
## Project: Apple Sovereign Clone (apple-clone-por)
