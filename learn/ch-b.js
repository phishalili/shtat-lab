// Static chapters, modules 5 to 8. See ch-a.js for the format.
window.STATIC = window.STATIC || {};
Object.assign(window.STATIC, {

'm5-0': {ch: `A candle burns at about 1900 K, a household bulb at about 2700 K, noon sun at about 5600 K, and blue sky shade can go past 8000 K. Your camera only knows what you tell it.

[[PHOTO:Firelight|Low Kelvin: candles and fire read deep orange.]]

[[PHOTO:Blue hour|High Kelvin: blue hour and shade read cool.]]

## What it is
Colour temperature, measured in Kelvin (K), describes how warm or cool a white light is. Low numbers are orange, high numbers are blue.

## Reference values
- Candle: about 1900 K
- Tungsten household bulb: 2700 K
- Film tungsten lamp: 3200 K
- Noon sun: 5000 to 5600 K
- Overcast: 6500 K
- Shade under blue sky: 7000 to 10000 K

## How the camera sees it
White balance tells the camera which Kelvin is white. Set 3200 K and a 3200 K lamp looks white, while daylight looks blue. Set 5600 K and daylight is white, while tungsten looks orange.

## On the R6 Mark II
1. Never shoot Auto White Balance for video: it drifts during the shot.
2. Set Kelvin manually (WB: K). Common: 5600 K daylight, 3200 K tungsten, 4300 K for mixed.
3. In C-Log 3 you can fix small errors in grading, but big errors cost colour quality.

> Choose one Kelvin for the whole scene and lock it. Change the lights, not the camera.

## Common mistakes
- Different WB between cameras in a two-camera shoot.
- LED panels set to 5600 K while the room bulbs are 2700 K, with no plan.`,
quiz: [
 ['A household bulb is around…', ['2700 K', '5600 K', '9000 K'], 0, 'Warm tungsten.'],
 ['Camera set to 3200 K, daylight window in frame. The window looks…', ['Blue', 'Orange', 'White'], 0, 'Higher Kelvin than WB reads blue.'],
 ['Why avoid Auto WB for video?', ['It can drift mid-shot', 'It is not available', 'It adds noise'], 0, 'Lock it.'],
 ['Noon sunlight is about…', ['5600 K', '1900 K', '12000 K'], 0, 'Daylight standard.'],
 ['Two cameras, one look. What must match?', ['White balance in Kelvin', 'Battery type', 'Card size'], 0, 'Same Kelvin on both.']],
chal: 'Shoot the same shot of a person by a window with a lamp on, at WB 3200 K, 4300 K and 5600 K. Upload all three and say which you would choose for a hotel ad.',
check: ['White balance set manually', 'Same exposure in all three', 'You can name each source temperature', 'Choice explained']},

'm5-1': {ch: `Warm practicals inside, cool blue window outside: mixed colour temperatures are one of the most cinematic tools you have, if you choose them on purpose.

[[PHOTO:Colour contrast|Warm and cool in one frame: depth and mood from colour.]]

## What it is
Having light sources of different Kelvin in the same frame: tungsten lamps with daylight, LED with sodium streetlight, screen glow with candles.

## Why it works
Warm and cool sit opposite each other, so they separate the subject from the background and add depth. Warm reads as safe, home, intimate; cool reads as night, distance, tech.

## Set it up
1. Pick the white balance for the subject's key (often 3200 to 4300 K).
2. Decide which other source will read warmer or cooler. Keep it 1500 to 2500 K away for a clear but tasteful split.
3. Control the amount: the off-colour light usually sits 1 to 2 stops under the key.
4. Keep skin in the "correct" colour. Push the colour into the background, edges and practicals.

> Skin first. Let the colour contrast live in the background and edges.

## Common mistakes
- Faces half orange, half blue by accident.
- Too strong a gap (2000 K lamp at 6500 K WB) without intention.

## Budget version
Window at blue hour plus warm table lamps, camera on 3800 to 4300 K.`,
quiz: [
 ['Mixed temperatures work best when…', ['They are chosen on purpose', 'They happen by chance', 'Faces get both colours equally'], 0, 'Intent is everything.'],
 ['Where should strong colour contrast usually live?', ['Background and edges', 'On the skin', 'Only on the floor'], 0, 'Keep skin natural.'],
 ['Good camera WB for a lamp-and-window scene?', ['3800 to 4300 K', '10000 K', '2000 K'], 0, 'Splits the difference.'],
 ['Warm light usually reads as…', ['Intimate and safe', 'Cold and distant', 'Clinical'], 0, 'Fire, home, lamps.'],
 ['The off-colour source usually sits…', ['1 to 2 stops under the key', '3 stops over', 'Equal'], 0, 'Accent, not key.']],
chal: 'At blue hour, shoot a person indoors by a window with warm lamps on. Face natural, window blue. Upload the frame and your WB value.',
check: ['Skin looks natural', 'Clear warm and cool separation', 'Window not clipped', 'WB noted']},

'm5-2': {ch: `Gels are coloured filters you put in front of a light. Two kinds matter most: correction gels that change Kelvin, and green and magenta gels that fix tint.

[[PHOTO:Neon light|Strong colour is easy. Correction gels are about matching sources.]]

## Correction gels
- **CTO (Colour Temperature Orange):** turns daylight into tungsten. Full CTO: about 5600 K to 3200 K. Half and quarter for smaller shifts.
- **CTB (Colour Temperature Blue):** turns tungsten into daylight. Full CTB: about 3200 K to 5600 K. It costs a lot of light (around 1.5 to 2 stops).
- **Plus green / minus green:** fix the green tint of fluorescents and cheap LEDs, or match them.

## Why it matters
Different sources have different colour. Gels let you make them match, or push them apart on purpose.

## Set it up
1. Measure or guess each source. Decide the target Kelvin.
2. Gel the light, not the window, when you can. For big windows, gel rolls of CTO or ND exist.
3. With bi-colour or RGB LEDs, set the Kelvin and tint on the fixture instead of gelling.
4. Check skin on a monitor. Green tint makes people look ill.

> CTO on daylight, CTB on tungsten. Minus green fixes fluorescent faces.

## Common mistakes
- Using CTB on a weak tungsten light: not enough output left.
- Forgetting tint (green or magenta), only fixing Kelvin.`,
quiz: [
 ['Full CTO on a daylight source gives about…', ['3200 K', '5600 K', '8000 K'], 0, 'Orange gel warms it.'],
 ['Which gel costs the most light?', ['Full CTB', 'Quarter CTO', 'Clear'], 0, 'Blue gel absorbs a lot.'],
 ['Office fluorescents make skin green. Fix on your light?', ['Minus green', 'Plus green on the face light, minus green on the fluorescents', 'CTB'], 1, 'Match or remove the tint consistently.'],
 ['Modern alternative to gels?', ['Bi-colour or RGB LED settings', 'Higher ISO', 'Shorter shutter'], 0, 'Dial Kelvin and tint.'],
 ['What do tints fix?', ['Green and magenta shifts', 'Exposure', 'Focus'], 0, 'Tint is the other axis.']],
chal: 'Light a face with one daylight LED and one tungsten lamp. Make them match with a gel or fixture setting, then shoot. Upload before and after.',
check: ['Both sources match on skin', 'No green tint', 'Light loss accounted for', 'Before and after shown']},

'm5-3': {ch: `Music videos for The Weeknd and Euphoria made deep RGB colour mainstream. RGB LEDs can make any colour, which makes taste more important than ever.

[[PHOTO:Monochrome red|One strong saturated colour can carry the whole frame.]]

## What it is
RGB (or RGBWW) fixtures mix red, green, blue and white LEDs to produce any colour. You control it as HSI: hue (which colour), saturation (how strong), intensity (how bright).

## Why it works
Colour sets emotion instantly: red for danger and passion, blue for night and calm, magenta for nightlife, cyan for tech. RGB lets you change it in seconds.

## Set it up
1. Pick a palette of one or two hues before the shoot.
2. Use HSI mode. Start saturation at 60 to 80 percent: 100 percent often clips one colour channel and looks cheap.
3. Keep skin from a near-white key when you can; use saturated colour on edges and background.
4. Expose carefully: saturated red and blue clip a single channel before the waveform shows it. Pull exposure down a third to a half stop.
5. On the R6 II, shoot C-Log 3 at 10-bit so the colour survives the grade.

> Saturated colour clips easily. Underexpose slightly and keep skin clean.

## Common mistakes
- Every light a different colour: a rainbow with no story.
- Fully saturated red on skin: skin loses all detail.`,
quiz: [
 ['HSI means…', ['Hue, saturation, intensity', 'High speed imaging', 'Half stop increment'], 0, 'Colour control model.'],
 ['Why not always 100 percent saturation?', ['It clips colour channels and looks cheap', 'It is too dim', 'It flickers'], 0, 'Leave some headroom.'],
 ['Where should strong colour usually go?', ['Edges and background', 'The key on the face', 'Nowhere'], 0, 'Keep skin readable.'],
 ['Red usually reads as…', ['Danger or passion', 'Calm', 'Sterile'], 0, 'Emotional colour.'],
 ['Best R6 II setting for heavy colour grades?', ['10-bit C-Log 3', '8-bit Standard', 'JPEG'], 0, 'More colour data.']],
chal: 'Make a music-video style portrait with two hues only (for example magenta edge and cyan background). Keep the face clean. Upload the frame and the HSI values used.',
check: ['Only two hues', 'Skin has detail', 'No clipped colour blobs', 'HSI values noted']},

'm5-4': {ch: `Teal and orange is the most used palette in modern blockbusters because skin is orange and its opposite on the colour wheel is teal.

[[PHOTO:Teal & orange|Skin warm, shadows and background cool: complementary contrast.]]

[[PHOTO:Colour contrast|Colour contrast separates subject from background.]]

## What it is
Using colour relationships on purpose: complementary (opposites like orange and teal), analogous (neighbours like orange, red, yellow), or monochrome (one hue, many shades).

## Why it works
Complementary colours make the subject pop. Analogous colours feel harmonious and calm. A limited palette makes a brand look premium.

## How to build one
1. Start from the brand or location: hotel woods and brass suggest warm analogous, a perfume bottle may be the hero colour.
2. Choose wardrobe, props and set colour with the director. Light alone cannot fix a wrong set.
3. Light to support it: warm key on skin, cooler ambient or background.
4. Finish in the grade, but get 80 percent in camera.

> Palette starts with production design, not with the grade.

## Common mistakes
- Pushing teal and orange so far that skin turns orange and whites turn cyan.
- Ignoring wardrobe: a red jacket fights your blue night palette.`,
quiz: [
 ['Why is teal and orange popular?', ['Skin is orange and teal is its opposite', 'It is cheap', 'Cameras prefer it'], 0, 'Complementary contrast.'],
 ['Analogous colours are…', ['Neighbours on the colour wheel', 'Opposites', 'Black and white'], 0, 'Harmonious.'],
 ['Where does a palette start?', ['Production design and wardrobe', 'Only in the grade', 'In the camera menu'], 0, 'In front of the lens.'],
 ['Over-pushed teal and orange causes…', ['Orange skin and cyan whites', 'Better skin', 'More sharpness'], 0, 'Keep it subtle.'],
 ['A premium brand look often uses…', ['A limited palette', 'Every colour', 'Neon only'], 0, 'Restraint reads premium.']],
chal: 'Plan a 3-colour palette for a hotel promo (write the hex codes or names), then shoot one frame where the set, wardrobe and light follow it.',
check: ['Palette written down', 'Wardrobe and set support it', 'Skin stays natural', 'Frame matches palette']},

'm6-0': {ch: `Moonlight is about 400,000 times dimmer than sunlight. On film we fake it with big, soft-edged, slightly cool sources from high up.

[[PHOTO:Moonlight|Cool, directional, low-level light that still shows shape.]]

## What it is
Light that reads as the moon: a single high source, cool, low exposure, with deep shadows and a few practicals.

## Why it works
Real moonlight is too dark for cameras and, to the human eye, looks blue because of how we see in low light. Film convention matches that: cool, low, and with edge.

## Set it up
1. One big source high and far away (on a lift or roof) so the light falls evenly over a large area. Smaller sets: a daylight LED on a high stand 6 to 10 m away.
2. Colour: camera at 3200 to 4300 K with a daylight source, so it reads blue. Do not go too saturated.
3. Use it mainly as backlight or side light. Front moonlight looks flat.
4. Add practicals (windows, streetlights) for warmth and depth.
5. Faces: a small soft fill or eye light so we can see the eyes.

> Moonlight is backlight. Keep the source high, far, and behind.

## Common mistakes
- Saturated blue everywhere: looks like a 90s TV show.
- Several moon shadows from multiple lights.

## Budget version
One daylight LED high and behind, camera WB at 3800 K, and whatever streetlights exist.`,
quiz: [
 ['Moonlight on film is usually used as…', ['Backlight or side light', 'Flat front light', 'Under light'], 0, 'Edge and shape.'],
 ['Why place the moon source high and far?', ['Even light over a big area, one shadow', 'To make it warmer', 'To save power'], 0, 'Like the real moon.'],
 ['How do you make daylight LED read as cool moon?', ['Set camera WB to about 3200 to 4300 K', 'Set WB to 8000 K', 'Use CTO'], 0, 'Lower WB makes daylight blue.'],
 ['Biggest moonlight mistake?', ['Multiple moon shadows', 'Using one source', 'Low exposure'], 0, 'One moon only.'],
 ['What keeps faces readable?', ['A small eye light or soft fill', 'More saturation', 'A faster shutter'], 0, 'See the eyes.']],
chal: 'Shoot a person outside at night with one LED as moonlight from high behind, plus any practical. Upload the frame and a BTS photo.',
check: ['Single moon shadow', 'Cool but not cartoon blue', 'Eyes visible', 'Practicals add depth']},

'm6-1': {ch: `Old sodium vapour streetlights glow deep orange-yellow and are almost one wavelength. Many cities now switch to cool white LEDs, which changes the look of night.

[[PHOTO:Practical light|Streetlights motivate pools of light and colour at night.]]

## What it is
Using streetlights, or faking them, as the main motivated source for night exteriors. Sodium is about 2000 K with a strong green-orange spike; new LED street lamps are often 4000 K.

## Why it works
Streetlights are what night looks like in a city. Pools of light with dark gaps between them give depth and rhythm.

## Set it up
1. Scout at night. Note which lamps are sodium (orange) and which are LED (white).
2. Place talent in or at the edge of a pool, not in the dark gaps.
3. Add your own light from the same direction: an LED with CTO and plus green, or an RGB set to sodium orange, high on a stand.
4. Camera WB around 3200 to 4000 K. Sodium stays orange, LED street lamps go slightly blue.
5. Add a soft fill near camera at low level for eyes.

> Walk the actors through the pools of light. The dark gaps are part of the look.

## Common mistakes
- Fixing sodium completely in grading: skin turns grey-green. Let it stay warm.
- Talent between lamps where only ambient hits them.`,
quiz: [
 ['Sodium vapour light is about…', ['2000 K orange', '5600 K white', '9000 K blue'], 0, 'Deep orange.'],
 ['Where should talent stand at night?', ['In or at the edge of a pool of light', 'In the dark gap', 'Under no light'], 0, 'Use the motivated source.'],
 ['To fake sodium with a white LED, add…', ['CTO and plus green', 'CTB', 'Minus green only'], 0, 'Warm with green spike.'],
 ['Modern LED street lamps are often…', ['4000 K', '1900 K', '12000 K'], 0, 'Cooler white.'],
 ['Why scout at night?', ['To see what the lamps really are', 'It is cheaper', 'Cameras need it'], 0, 'Colour and positions.']],
chal: 'Shoot a walk-and-talk under streetlights. Mark the pools of light, block the actor to stop in them, add one matching light. Upload a frame.',
check: ['Talent stops in light pools', 'Added light matches direction and colour', 'Skin is not grey', 'Depth from lamps in background']},

'm6-2': {ch: `Day for night means shooting in daylight and making it look like night. Mad Max: Fury Road did it for its night chase scenes.

[[PHOTO:Moonlight|The goal: dark sky, cool tone, shape from a single hard backlight.]]

## What it is
Shooting a night scene during the day, underexposed and graded cool, so it reads as moonlight.

## Why it works
You get detail in the landscape that a real night cannot give, and no huge lighting rig. The trick is that the sun becomes the moon.

## Set it up
1. Shoot with the sun behind or to the side of the talent (backlit). Never front lit.
2. Keep the sky out of frame, or use a strong grad ND or polariser to darken it.
3. Underexpose 2 to 3 stops below normal.
4. WB around 3200 K for a blue base, or neutral and grade cool later.
5. Avoid shadows that read as daylight: keep it to the hard backlight, no fill.
6. In the grade: lower saturation, crush the blacks slightly, add windows or practicals in post if needed.

> Backlight the sun and hide the sky. A bright sky breaks the illusion every time.

## Common mistakes
- Sky in the frame bright and white.
- Front light: the scene looks like a dark day, not night.`,
quiz: [
 ['Key rule for day for night?', ['Backlight with the sun, hide the sky', 'Shoot at noon facing the sun', 'Overexpose'], 0, 'Sun as moon.'],
 ['Underexpose by about…', ['2 to 3 stops', '0 stops', '6 stops over'], 0, 'Dark but detailed.'],
 ['What breaks the illusion most?', ['A bright sky in frame', 'Shadows', 'Cool colour'], 0, 'Night skies are dark.'],
 ['Saturation in the grade should usually be…', ['Lowered', 'Raised', 'Unchanged'], 0, 'Night has little colour.'],
 ['A film known for day-for-night scenes?', ['Mad Max: Fury Road', 'Toy Story', 'La La Land'], 0, 'Its night chase.']],
chal: 'Shoot a 10 second day-for-night shot: talent backlit by the sun, sky out of frame, underexposed 2 stops. Grade it and upload the before and after.',
check: ['Sun behind the talent', 'Sky dark or out of frame', 'Underexposed 2 to 3 stops', 'Grade reads as night']},

'm6-3': {ch: `Michael Mann's Collateral shot most of its car scenes at night with digital cameras and tiny lights, so the city glow outside could be seen.

[[PHOTO:Passing light|Moving light across faces sells driving at night.]]

[[PHOTO:Screen glow|Dashboard and screen glow motivate soft fill inside the car.]]

## What it is
Lighting people inside a car at night: dashboard glow, streetlights passing, the city outside the windows.

## Why it works
The car is a small dark box. Small motivated sources plus moving passing lights make it feel alive and real.

## Set it up
1. Base: a small soft LED panel (on a suction mount or the dashboard) dimmed low, colour of the dashboard (cool or warm).
2. Passing lights: an LED (or several) outside the car, swept or switched on and off by hand to imitate streetlights. Orange for sodium, white for LED lamps.
3. Edge: a tube light on the back seat or roof giving a rim from behind.
4. Camera at ISO 1600 to 6400 on the R6 II, lens wide open (f/1.8 to f/2.8). Keep the city visible in the windows.
5. Process trailer or low-loader for safety on real roads. Never have the actor drive while acting a hard scene.

> Passing light is rhythm. Vary the timing so it never looks like a metronome.

## Common mistakes
- Glass reflections of your lights. Angle them, or use flags.
- Even passing lights every two seconds: looks fake.

## Budget version
A parked car, one dimmed LED on the dashboard and a friend walking past with a torch.`,
quiz: [
 ['Main sources inside a night car?', ['Dashboard glow and passing streetlights', 'One big HMI', 'Ring light'], 0, 'Motivated small sources.'],
 ['How do you fake passing streetlights?', ['Sweep or flicker lights outside the car', 'Turn on the headlights', 'Raise ISO'], 0, 'Moving light.'],
 ['Problem with lights in a car?', ['Reflections in the glass', 'Too much space', 'They are too warm'], 0, 'Angle and flag.'],
 ['Passing light timing should be…', ['Irregular', 'Exactly every 2 seconds', 'Constant'], 0, 'Real roads are random.'],
 ['Safest way to film driving scenes?', ['Process trailer or parked with fake movement', 'Actor drives fast while acting', 'Handheld on a highway'], 0, 'Safety first.']],
chal: 'In a parked car at night, light a driver with a dashboard LED and fake passing streetlights by hand. Upload a 10 second clip or a frame.',
check: ['Dashboard light motivated', 'Passing light timing irregular', 'No reflections of lights in glass', 'City or background visible']},

'm6-4': {ch: `Most night exteriors on small budgets are made from practicals, one or two lights, and a camera that sees in the dark. The R6 Mark II is that camera.

[[PHOTO:Low key|Night on a budget: light the faces, let the city do the rest.]]

## What it is
Shooting night exteriors with almost no lighting kit by choosing locations with light already in them.

## How to do it
1. Location is lighting: shop windows, streetlights, signs, petrol stations, car parks. Scout at night.
2. Place talent where the existing light lights them from the side or back.
3. Add one battery LED with a softbox for faces, dimmed to match the area.
4. Optional: wet the ground (if permitted) so lights reflect and the frame doubles its highlights.
5. Camera: R6 II at ISO 3200 to 12800 is still usable. Lenses wide open: RF 50mm f/1.8, Samyang primes at f/1.4 to f/2.
6. Use C-Log 3 and expose so the face is not too dark; noise in shadows grows quickly in the grade.

> Shoot where the light already is. One small light for faces does the rest.

## Common mistakes
- Underexposing then lifting in post: noise.
- Background dead black: always have some lit depth.`,
quiz: [
 ['Biggest budget night trick?', ['Choose locations with existing light', 'Rent a generator', 'Shoot at noon'], 0, 'Location is lighting.'],
 ['Why wet the ground?', ['Reflections add highlights and depth', 'To cool the actors', 'For sound'], 0, 'Doubles the lights.'],
 ['Fast lenses for night on your kit?', ['RF 50mm f/1.8 and Samyang primes wide open', 'Kit zoom at f/8', 'Pinhole'], 0, 'More light in.'],
 ['Underexposing then lifting in post causes…', ['Noise', 'Sharper images', 'Better colour'], 0, 'Expose properly.'],
 ['Background at night should…', ['Have some lit depth', 'Be pure black always', 'Be overexposed'], 0, 'Depth sells night.']],
chal: 'Find a street location with existing light. Shoot a short night portrait with one battery LED. Upload a frame and your ISO and aperture.',
check: ['Existing light used as key or edge', 'Face exposed properly', 'Background has depth', 'Settings noted']},

'm7-0': {ch: `Glass is invisible unless you light its edges. Product photographers use two classic tricks: dark field and bright field.

[[PHOTO:Back light / rim light|Light from behind shows the outline of transparent objects.]]

## What it is
- **Bright field:** a bright background behind the glass. The glass edges appear as dark lines.
- **Dark field:** a dark background with light coming from behind and around the glass. The edges appear as bright lines.

## Bright field setup
1. A large evenly lit white surface behind the glass (softbox or a light through diffusion).
2. Glass in front, camera in front.
3. Black cards to the left and right just out of frame: they create the dark edges.
4. Move the cards closer for thicker lines.

## Dark field setup
1. A softbox or lit white board behind the glass.
2. A black card in the middle of the white, just larger than the glass, so the glass sits in front of black.
3. The light around the black card wraps the edges as bright lines.
4. Long lens (85 to 135mm Samyang) and distance so the background stays clean.

> Glass shows what surrounds it. Light the surroundings, not the glass.

## Common mistakes
- Fingerprints and dust: clean with gloves and a blower.
- Reflections of the camera and room: black out the area around the camera.`,
quiz: [
 ['Dark field gives…', ['Bright edges on a dark background', 'Dark edges on white', 'No edges'], 0, 'Light wraps the edges.'],
 ['Bright field gives…', ['Dark edges on a bright background', 'Bright edges on black', 'Colour'], 0, 'Black cards create the lines.'],
 ['How do you make edges thicker in bright field?', ['Move the black cards closer', 'Raise ISO', 'Open the aperture'], 0, 'More black reflected.'],
 ['Best lens for clean glass shots?', ['85 to 135mm', '10mm', '14mm fisheye'], 0, 'Compresses and isolates.'],
 ['Main rule of lighting glass?', ['Light the surroundings, not the glass', 'Hit it with a hard front light', 'Use on-camera flash'], 0, 'It reflects its environment.']],
chal: 'Shoot a wine glass or perfume bottle in both dark field and bright field. Upload both frames.',
check: ['Clean outlines in both', 'No room reflections', 'No fingerprints', 'Edges even on both sides']},

'm7-1': {ch: `Every beer ad uses the same trick: light from behind makes the liquid glow like it is lit from inside.

[[PHOTO:Back light / rim light|Backlight through liquid makes it glow.]]

## What it is
Lighting drinks so the liquid glows: light passes through the liquid from behind toward the camera.

## Set it up
1. Background: soft light behind the glass (a softbox or a light through diffusion).
2. Behind the drink: a small card cut to the glass shape, white, silver or gold, hidden behind it. It bounces light through the liquid only.
3. Edges: two strip lights left and right behind for rim lines on the glass.
4. Top: a small soft light for the foam or ice.
5. Condensation: spray a mix of glycerine and water for drops that do not evaporate.
6. Slow motion pours: 100 or 120 fps on the R6 II (in FHD), shutter 1/250 or faster, lots of light.

> A hidden card behind the drink is the secret of every glowing liquid shot.

## Common mistakes
- Light hitting the front of the glass: reflections kill the glow.
- Real ice melting: use acrylic ice for long setups.`,
quiz: [
 ['What makes a drink glow?', ['Light passing through it from behind', 'Front flash', 'High ISO'], 0, 'Transmitted light.'],
 ['Hidden card behind the drink does…', ['Bounces light through the liquid only', 'Blocks all light', 'Adds sound'], 0, 'Shape-cut reflector.'],
 ['Long-lasting condensation?', ['Glycerine and water spray', 'Ice cubes', 'Hair spray'], 0, 'Does not evaporate.'],
 ['Shutter for sharp slow-motion pours?', ['1/250 or faster', '1/25', '1/50'], 0, 'Freezes drops.'],
 ['Acrylic ice is used because…', ['It does not melt', 'It is colder', 'It is cheaper'], 0, 'Stable over takes.']],
chal: 'Shoot a glowing drink (juice, beer, cocktail) with a backlight and a hidden card. Add condensation. Upload the frame.',
check: ['Liquid glows from within', 'Clean rim lines', 'Condensation looks fresh', 'No front reflections']},

'm7-2': {ch: `Shiny products are mirrors. You do not light the product; you decide what it reflects.

[[PHOTO:Soft light|Large soft sources become clean gradients on metal and gloss.]]

## What it is
Lighting metal, gloss plastic, watches, phones, cars and lacquer. They reflect the world, so you design that world.

## Set it up
1. Large diffusion panels around the product: their reflections become smooth white gradients.
2. Black cards or flags for the dark parts: metal needs black to show shape.
3. Use graded light: a softbox with a hot centre and falloff, or light only part of a diffusion panel, to get a gradient instead of a flat white reflection.
4. Long lens, camera far back, black cloth around the camera to hide it from reflections.
5. Use a polariser to control reflections on non-metal gloss (it does not work on bare metal).

> Shiny surfaces show white where you put white and black where you put black.

## Common mistakes
- Small hard sources: tiny hot spots instead of clean lines.
- Forgetting black: all white makes metal look grey and flat.`,
quiz: [
 ['How do you light a shiny product?', ['Design what it reflects', 'Hit it with a hard light', 'Use flat ambient only'], 0, 'It is a mirror.'],
 ['Why does metal need black cards?', ['To show shape through dark reflections', 'To warm it', 'To reduce noise'], 0, 'Contrast in reflections.'],
 ['Polariser works on…', ['Gloss paint and plastic, not bare metal', 'Bare metal only', 'Nothing'], 0, 'Metal reflections stay polarised differently.'],
 ['Small hard sources on gloss create…', ['Tiny hot spots', 'Smooth gradients', 'Softer shadows'], 0, 'Use large sources.'],
 ['Gradient reflection comes from…', ['A source with falloff', 'An even flat panel', 'A ring light'], 0, 'Graded light.']],
chal: 'Shoot a watch, phone or metal bottle. Use one large diffusion for a gradient and black cards for shape. Upload the frame and BTS.',
check: ['Smooth gradient highlights', 'Black areas define shape', 'Camera not reflected', 'No dust or fingerprints']},

'm7-3': {ch: `Perfume and luxury ads live on highlights: a single bright line along a bottle edge can make a product look expensive.

[[PHOTO:Back light / rim light|Hero highlights trace the shape of a product.]]

## What it is
Hero highlights are clean, controlled reflections that trace the product edges. Cards are small white, silver or black boards placed just out of frame to add or remove those reflections.

## Set it up
1. Start with the background and the backlight.
2. Add strip lights (or a softbox masked to a thin slit) to the sides for vertical edge lines.
3. Use white cards to add small fill reflections in specific spots; black cards to cut unwanted ones.
4. Move cards a centimetre at a time while watching the monitor.
5. For motion, plan highlight sweeps: a light moving across the product during the shot.

> Every highlight is a decision. If it does not describe the shape, remove it.

## Common mistakes
- Too many highlights: product looks cheap and busy.
- Uneven left and right lines on symmetrical bottles.

## Budget version
A small LED behind a piece of diffusion with black tape making a slit. White and black foam cards cut to size.`,
quiz: [
 ['A hero highlight should…', ['Describe the product shape', 'Be as big as possible', 'Be random'], 0, 'Shape first.'],
 ['Strip lights make…', ['Vertical edge lines', 'Round hot spots', 'Coloured shadows'], 0, 'Long thin sources.'],
 ['Black card removes…', ['Unwanted reflections', 'Exposure', 'Colour'], 0, 'Subtractive control.'],
 ['Too many highlights look…', ['Cheap and busy', 'Premium', 'Natural'], 0, 'Restraint.'],
 ['Moving light across a product during the shot is…', ['A highlight sweep', 'A rack focus', 'A dolly zoom'], 0, 'Adds motion.']],
chal: 'Shoot a perfume bottle with exactly two vertical edge highlights, symmetrical, on a dark background. Upload the frame.',
check: ['Two clean, even edge lines', 'Label readable', 'Background clean', 'No stray reflections']},

'm7-4': {ch: `Food and product commercials often use motion control rigs and probe lenses. With a slider and a macro lens you can get most of that look.

[[PHOTO:Dappled light|Texture and small-scale light shapes make tabletop frames feel real.]]

## What it is
Shooting small products or food up close, with camera or product movement: slides, push-ins, rotations, pours, splashes.

## Set it up
1. Lens: a macro or close-focus prime. Samyang 100mm macro if you have it, or extension tubes on the 50mm.
2. Depth of field is tiny up close. Use f/5.6 to f/11 and plenty of light.
3. Light from the back and side for texture. Top soft light as base.
4. Movement: slider or turntable, slow and smooth. Repeatable moves help match takes.
5. Frame rate: 50 fps for a smooth 2x slow motion, 100 or 120 fps for pours.
6. Keep everything clean: crumbs and dust are huge at macro.

> At macro distance, depth of field is millimetres. Close the lens and add light.

## Common mistakes
- Shooting wide open at macro: only a sliver is sharp.
- Flat front light: food looks plastic.`,
quiz: [
 ['Depth of field at macro distance is…', ['Very shallow', 'Very deep', 'Unchanged'], 0, 'Millimetres.'],
 ['Typical aperture for tabletop macro?', ['f/5.6 to f/11', 'f/1.2', 'f/32 always'], 0, 'More depth, still sharp.'],
 ['Best light for food texture?', ['Back and side light', 'Flat front light', 'Under light'], 0, 'Shows texture.'],
 ['Why use a turntable or slider?', ['Smooth, repeatable movement', 'For sound', 'To save batteries'], 0, 'Clean motion.'],
 ['Frame rate for pours?', ['100 to 120 fps', '24 fps', '12 fps'], 0, 'Slow motion.']],
chal: 'Make a 5 second tabletop shot of food or a product with a slow slider move and backlight. Upload a frame.',
check: ['Sharp where it matters', 'Backlight shows texture', 'Movement smooth', 'Surface clean']},

'm8-0': {ch: `The classic hotel shot problem: a beautiful view out of the window that is 6 stops brighter than the room.

[[PHOTO:Window light|Balanced exposure shows the room and the view at the same time.]]

## What it is
Making the inside and the outside both visible in one exposure, by bringing up the inside or bringing down the outside.

## Methods
1. **Add light inside:** big soft LED bounced into the ceiling or through diffusion to lift the room. Daylight balanced.
2. **Cut the outside:** ND gel rolls (ND 0.6 or 0.9) on the windows. Expensive but clean.
3. **Timing:** shoot when outside and inside are closer: morning, late afternoon, blue hour.
4. **Exposure:** let the window be 1 to 2 stops over the room so it still feels like daylight.
5. **Grade or HDR:** C-Log 3 holds a lot of dynamic range. Protect highlights in camera.

> Aim for the window 1 to 2 stops over the room. Fully balanced looks fake.

## On the R6 II
- Use zebras at 95 to 100 percent on the window to see what clips.
- C-Log 3 at ISO 800 or higher gives the most highlight room.

## Common mistakes
- Lifting the room so much it looks lit by a flash.
- Mixed colour: room bulbs at 2700 K with daylight windows. Swap bulbs or turn them off.`,
quiz: [
 ['Ideal window to room difference?', ['Window 1 to 2 stops over', 'Equal', '6 stops over'], 0, 'Still feels like day.'],
 ['ND gel on windows does…', ['Darkens the outside', 'Brightens the room', 'Changes WB only'], 0, 'Cuts exterior light.'],
 ['Best time to balance windows?', ['Morning, late afternoon, blue hour', 'Noon in direct sun', 'Midnight'], 0, 'Smaller difference.'],
 ['R6 II tool to see clipping?', ['Zebras', 'Peaking', 'Grid'], 0, 'Highlights warning.'],
 ['Room bulbs at 2700 K with daylight windows. Fix?', ['Swap or turn off bulbs', 'Ignore', 'Use CTB on the window'], 0, 'Consistent colour.']],
chal: 'Shoot a hotel room with a view. One frame exposed for the room, one balanced with added light so the view shows. Upload both.',
check: ['View visible in the balanced frame', 'Room looks natural', 'Colour temperatures consistent', 'Highlights protected']},

'm8-1': {ch: `Hotel rooms are designed around their lamps. Use them, and the frame already looks like the brochure.

[[PHOTO:Practical light|Hotel lamps, sconces and coves give warmth and depth.]]

## What it is
Using a hotel's own lamps, sconces, coves and LED strips as part of your lighting design, and adjusting them so they look good on camera.

## Set it up
1. Turn everything on and look through the camera. Then turn off what does not help.
2. Swap bulbs for dimmable warm LEDs of the same colour where lamps are too bright or mismatched.
3. Dim lamp shades so they glow but hold detail: about 1 to 2 stops over the room.
4. Add a hidden light to "extend" a lamp onto a face or the bed.
5. Ceiling downlights often make ugly hot spots on walls. Turn them off and use lamps instead.

> Practicals sell the room. Your lights just help them.

## Common mistakes
- Every light on: flat and busy.
- Different bulb colours in the same room.

## Budget version
A pack of warm dimmable LED bulbs and two dimmer plugs, always in the kit for hotel jobs.`,
quiz: [
 ['First step in a hotel room?', ['Turn everything on and look through camera', 'Set up your own lights first', 'Close the curtains'], 0, 'See what exists.'],
 ['Lamp shades should be about…', ['1 to 2 stops over the room', '5 stops over', 'Darker than the room'], 0, 'Glowing, detailed.'],
 ['Ceiling downlights often cause…', ['Hot spots on walls', 'Soft light', 'Colour accuracy'], 0, 'Turn them off.'],
 ['Different bulb colours in one room?', ['Swap to match', 'Ignore', 'Add more'], 0, 'Consistency.'],
 ['Hidden light near a lamp is used to…', ['Extend the lamp onto faces or bed', 'Replace the lamp', 'Light the ceiling'], 0, 'Motivated key.']],
chal: 'Shoot a hotel room (or a bedroom) using only its own lamps plus one hidden light. Upload the frame and a BTS photo.',
check: ['Only useful practicals on', 'Shades hold detail', 'Bulbs match in colour', 'Hidden light invisible']},

'm8-2': {ch: `Blue hour is the 20 to 40 minutes after sunset when the sky is deep blue and buildings light up. It is the most valuable time for hotel exteriors.

[[PHOTO:Blue hour|Sky and building lights in balance: the hotel brochure moment.]]

## What it is
Shooting exteriors when the ambient sky light is about equal to the artificial lights. Both read, and colours look rich.

## Set it up
1. Use the Sun tool to find blue hour for the date and place.
2. Set up and frame before sunset. You only get one or two good takes.
3. Turn on every light in the building: rooms, pool, signs, gardens. Ask the hotel in advance.
4. WB around 4300 to 5000 K: the sky goes blue, the windows stay warm.
5. Expose so windows hold detail. Shoot a few frames as the light drops and pick the moment of balance.
6. Tripod, low ISO (800 in C-Log 3), and slow moves with a gimbal or slider.

> The perfect blue hour moment lasts minutes. Be ready before the sun goes down.

## Common mistakes
- Arriving at sunset to set up.
- Hotel lights off or half on.`,
quiz: [
 ['Blue hour happens…', ['Just after sunset or before sunrise', 'At noon', 'Midnight'], 0, 'Sun below the horizon.'],
 ['What should you ask the hotel?', ['Turn on all exterior and room lights', 'Turn off all lights', 'Close the pool'], 0, 'Lights sell the shot.'],
 ['WB for blue sky and warm windows?', ['4300 to 5000 K', '2700 K', '10000 K'], 0, 'Splits colours.'],
 ['How long is the good part?', ['A few minutes to around half an hour', 'Three hours', 'All night'], 0, 'Short window.'],
 ['When should you be ready?', ['Before sunset', 'One hour after sunset', 'Next morning'], 0, 'Plan ahead.']],
chal: 'Plan a blue hour shot of a building with the Sun tool. Shoot a frame every few minutes and pick the best balance. Upload the sequence.',
check: ['Set up before sunset', 'Building lights on', 'Sky blue, windows warm', 'Best frame chosen']},

'm8-3': {ch: `Food shoots in restaurants have two clients: the chef, who wants the food to look perfect, and the owner, who wants the place to look full of life.

[[PHOTO:Bounce light|Soft side light and a bounce make food look fresh.]]

## Food light
1. Backlight or side-back light (from 10 or 2 o'clock behind the plate) for texture and steam.
2. Large soft source: a softbox through a diffusion frame.
3. White card in front for fill, small black cards to add contrast.
4. Shoot quickly: food dies in minutes. Use stand-in plates for setup.
5. Lens: 50mm or 85mm for plates, 100mm macro for details. f/2.8 to f/5.6.

## Restaurant atmosphere
1. Use practicals and candles. Dim overheads.
2. A soft key on people from the table direction.
3. Background with depth: bar lights, kitchen glow.
4. Shoot people and plates in the same light style so the edit cuts together.

> Food is lit from behind. Faces are lit from the front side. Plan both.

## Common mistakes
- Flat on-camera light on food: it looks plastic.
- Waiting too long: sauces skin and greens wilt.`,
quiz: [
 ['Best direction for food light?', ['From behind or side-back', 'From the camera', 'From below'], 0, 'Texture and steam.'],
 ['Why use a stand-in plate?', ['Set up light before the real food dies', 'It looks better', 'For the chef'], 0, 'Food lasts minutes.'],
 ['White card in front does…', ['Adds fill', 'Removes light', 'Changes colour'], 0, 'Opens shadows.'],
 ['For atmosphere, overheads should be…', ['Dimmed', 'Full brightness', 'Replaced with fluorescents'], 0, 'Practicals and candles carry mood.'],
 ['Lens for plate shots?', ['50 to 85mm', '10mm', '14mm'], 0, 'Natural perspective.']],
chal: 'Shoot one plate and one table of guests in a restaurant in the same light style. Upload both.',
check: ['Food backlit', 'Steam or texture visible', 'People lit naturally', 'Same mood in both']},

'm8-4': {ch: `Hotel walkthroughs and real-estate videos sell space. The camera glides, the rooms feel bright and big, and the light never jumps.

[[PHOTO:Window light|Bright, natural interiors with windows that hold detail.]]

## What it is
Smooth moving shots through rooms, usually on a gimbal, showing a property at its best.

## Set it up
1. Lens: RF 10-18mm or Samyang 14mm/24mm. Wide, but keep verticals straight (camera level, not tilted).
2. All lights on, curtains open, beds made, clutter gone. Styling is half the job.
3. Exposure: lock it. Set it for the brightest room on the route, then add light to darker rooms.
4. Hidden LEDs in dark corridors, bounced into ceilings.
5. Gimbal: slow walk, 50 fps for smooth 2x slow motion, shutter 1/100.
6. WB: one fixed value, daylight 5000 to 5600 K. Swap bulbs that look too orange.

> Move slow, keep verticals straight, lock exposure and white balance.

## Common mistakes
- Auto exposure pumping between rooms.
- Tilting a wide lens: walls lean.`,
quiz: [
 ['Why keep the camera level with wide lenses?', ['So verticals stay straight', 'For focus', 'For sound'], 0, 'Leaning walls look cheap.'],
 ['Exposure in a walkthrough should be…', ['Locked', 'Auto', 'Changed every room'], 0, 'No pumping.'],
 ['Frame rate for smooth gimbal walks?', ['50 fps slowed to 25', '12 fps', '24 fps sped up'], 0, 'Smooth motion.'],
 ['Half of a good walkthrough is…', ['Styling the rooms', 'Lens flares', 'Music'], 0, 'Clean, ready spaces.'],
 ['Dark corridors fix?', ['Hidden LEDs bounced into the ceiling', 'Raise ISO in post', 'Skip them'], 0, 'Even exposure.']],
chal: 'Shoot a 20 second gimbal walkthrough of a room or apartment with locked exposure and WB. Upload a frame from the brightest and darkest moment.',
check: ['Verticals straight', 'No exposure jumps', 'Rooms styled', 'Dark areas lifted']}

});
