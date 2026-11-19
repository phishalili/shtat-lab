// Static chapters for the Learn tab, so every lesson works offline and on GitHub Pages.
// Format: id: {ch: markdown, quiz: [[question, [options], correctIndex, why]], chal: brief, check: [self-check lines]}
// [[PHOTO:Name|caption]] shows a real photo from VPH. Modules 2 to 4.
window.STATIC = window.STATIC || {};
Object.assign(window.STATIC, {

'm2-0': {ch: `Rembrandt painted his own face lit from one high window for forty years. Film lighting borrowed his name for one small detail: a triangle of light on the shadow-side cheek.

[[PHOTO:Rembrandt|Find the small triangle of light under the eye on the dark side of the face.]]

## What it is
One key light, high and to the side, so the nose shadow joins the cheek shadow. What is left on the shadow cheek is a lit triangle, no wider than the eye and no longer than the nose.

## Why it works
The face gets real shape: one side lit, one side in shadow, with that triangle stopping the dark side from going dead. It reads as serious, honest and a little dramatic, which is why it sits in so many interviews, portraits and dramas.

## Set it up
1. Key 45 degrees off the camera axis, about 30 to 45 degrees above the eyes.
2. Start 1.5 to 2 m from the face with a soft source (a 90 cm octa or a 4x4 frame of diffusion).
3. Have the talent turn their head slowly toward or away from the key until the triangle appears and closes.
4. Fill from near the camera at 1 to 2 stops under the key, or no fill for drama.
5. Add a small backlight if the hair falls into the background.

> The triangle must touch the eye. If there is no light in the shadow-side eye, the key is too far round.

## When to use it
Founder interviews, hotel staff portraits, documentary, moody brand films. For beauty and cosmetics it is usually too hard on skin; go to butterfly or loop.

## Common mistakes
- Key too high: the eye sockets go black.
- Triangle too big: it turns into loop and loses the drama.
- Fill too strong: the triangle disappears into flat light.

## Budget version
One window on a sunny side of the room, talent 1 m away, turned until the triangle appears. A black jacket on the far side as negative fill.`,
quiz: [
 ['Where does the key light sit for Rembrandt?', ['On the camera axis, at eye height', 'About 45 degrees to the side and above the eyes', 'Directly behind the subject'], 1, 'Side and above, so the nose shadow meets the cheek shadow.'],
 ['What defines the triangle on the shadow cheek?', ['The nose shadow joining the cheek shadow', 'A second light from the floor', 'A reflector from the front'], 0, 'The triangle is the gap left when nose and cheek shadows connect.'],
 ['The shadow-side eye is completely dark. What do you change?', ['Raise the fill by 3 stops', 'Bring the key closer to the camera or lower it', 'Add a backlight'], 1, 'The key is too far round or too high; the triangle should reach the eye.'],
 ['A typical fill level for Rembrandt in an interview is…', ['1 to 2 stops under the key', 'Equal to the key', '5 stops over the key'], 0, 'Enough to hold detail without killing the triangle.'],
 ['Which job is Rembrandt least suited to?', ['Moody founder interview', 'Bright beauty close-up for a cosmetics brand', 'Portrait of a chef'], 1, 'Beauty wants even, flattering light on skin.']],
chal: 'A hotel wants a portrait of its head chef for its Instagram. Light them Rembrandt with one source and no fill, then the same frame with fill 1.5 stops under. Shoot both on the RF 50mm at f/2.8 and compare.',
check: ['The triangle reaches the shadow-side eye', 'Both eyes have a catchlight', 'The triangle is no wider than the eye', 'Shadow side still has some detail']},

'm2-1': {ch: `Loop is the light most headshot photographers fall back on. It is Rembrandt with the key pulled a little toward the camera.

[[PHOTO:Loop|The nose shadow is a small loop pointing down toward the corner of the mouth.]]

## What it is
The key sits 30 to 45 degrees off axis and slightly above the eyes. The nose shadow becomes a small loop that points down at the corner of the mouth and does not touch the cheek shadow.

## Why it works
It gives shape without drama. Both eyes stay lit, the skin looks clean, and it suits almost every face. That is why it is the safe default for corporate, hotel staff and lifestyle work.

## Set it up
1. Big soft key (90 to 120 cm octa, or 4x4 diffusion) 30 to 40 degrees off axis.
2. Height: just above the eye line so the loop falls down and to the side.
3. Distance 1 to 1.5 m for soft wrap.
4. Fill from near the camera 1 to 1.5 stops under, or a white bounce on the shadow side.
5. Rim or hair light from behind on the key side or opposite side.

> Loop shadow points down and stays apart from the cheek shadow. If it connects, you have Rembrandt.

## Variations
- Short loop: talent turned so you see the shadow side bigger (slimming, moodier).
- Broad loop: the lit side faces the camera (brighter, wider face).

## Common mistakes
- Key at eye height: no loop, the face flattens.
- Hard bare source close up: crunchy skin. Diffuse it.

## Budget version
A softbox or an LED panel through a shower curtain, 1 m away, with a white foam board on the other side.`,
quiz: [
 ['How is loop different from Rembrandt?', ['The nose shadow does not connect to the cheek shadow', 'It uses two key lights', 'The key is behind the subject'], 0, 'Loop keeps the nose shadow separate.'],
 ['Where should the loop shadow point?', ['Up toward the eye', 'Down toward the corner of the mouth', 'Straight sideways to the ear'], 1, 'A slightly high key throws the shadow down.'],
 ['Best quick fill for loop in a small room?', ['White foam board on the shadow side', 'A second hard light from above', 'A blue gel'], 0, 'Bounce fill is soft and matches direction.'],
 ['Which is the safe default for most corporate portraits?', ['Split', 'Loop', 'Under light'], 1, 'It flatters most faces with little risk.'],
 ['Short lighting means…', ['Lighting the side of the face turned away from camera', 'Using a short light stand', 'A key placed under the chin'], 0, 'Short lighting slims and adds mood.']],
chal: 'Shoot three staff portraits for a hotel website, all in loop light, matching each other. Same key distance and height, fill 1 stop under. Upload the three frames side by side.',
check: ['Loop shadow is separate from cheek shadow', 'Same look in all three portraits', 'Catchlight at 10 or 2 o\'clock', 'Background separated from hair']},

'm2-2': {ch: `Hollywood studios lit stars like Marlene Dietrich from straight above the lens. The small shadow under the nose looked like a butterfly, and the name stayed.

[[PHOTO:Butterfly / Paramount|Key above the lens: symmetrical face and a small shadow under the nose.]]

[[PHOTO:Clamshell|Clamshell: butterfly plus a fill from below, the beauty standard.]]

## What it is
The key sits on the camera axis, high above the lens, pointing down at about 30 to 45 degrees. It makes a short, centred shadow under the nose and sculpts the cheekbones.

## Why it works
It is symmetrical and glamorous. Cheekbones lift, the jaw gets a clean shadow, skin looks smooth. It is the base light of beauty, cosmetics and perfume work.

## Set it up
1. Beauty dish or 60 to 90 cm octa directly above the camera, 0.8 to 1.2 m from the face.
2. Tilt down until the nose shadow is a small butterfly just above the lip.
3. For clamshell, add a white bounce or a second soft light below the face, angled up, 1 to 2 stops under.
4. Two strip lights or rims behind for edges on the hair and shoulders.

> If the nose shadow touches the lip, lift the fill or lower the key.

## When to use it
Beauty, cosmetics, perfume close-ups, fashion, female and male talent with strong cheekbones.

## Common mistakes
- Key too high: deep eye sockets.
- No fill on deep-set eyes: raccoon look.
- Heavy round faces: butterfly widens them. Use loop instead.

## Budget version
Softbox over the lens, silver or white reflector in the talent's hands at chest height.`,
quiz: [
 ['Where is the key for butterfly lighting?', ['Above the lens, on the camera axis', 'At 90 degrees to the side', 'Below the chin'], 0, 'On axis and high.'],
 ['Clamshell adds…', ['A fill from below', 'A hard backlight only', 'A coloured kicker'], 0, 'The lower fill opens eyes and under-chin.'],
 ['Best modifier for a classic beauty look?', ['Bare Fresnel', 'Beauty dish or small octa', 'A 20x20 silk'], 1, 'Beauty dishes give crisp yet soft wrap.'],
 ['Which subject is butterfly least kind to?', ['Strong cheekbones', 'A round face', 'A model in a perfume ad'], 1, 'Frontal light widens round faces.'],
 ['The talent\'s eye sockets go dark. Fix?', ['Lower the key or add bottom fill', 'Turn off the backlight', 'Close the aperture'], 0, 'Bring light back into the eyes.']],
chal: 'Shoot a perfume-ad style close-up of a person holding a bottle near the face, in clamshell. Key above the lens, white board below. Upload the frame and a phone photo of your setup.',
check: ['Small symmetrical shadow under the nose', 'Light in both eyes', 'No raccoon eyes', 'Edges on the hair separate it from the background']},

'm2-3': {ch: `Split lighting cuts the face exactly in half. The Godfather and countless music videos used it to say: this person has a dark side.

[[PHOTO:Split|One side lit, one side in shadow, divided down the nose.]]

## What it is
The key sits at 90 degrees to the side, at eye height or slightly above. One half of the face is lit; the other half falls into shadow.

## Why it works
It is the most dramatic of the classic patterns. It hides half the face, which feels mysterious, tense or strong. In commercials it gives sports and fashion an edge.

## Set it up
1. Key at 90 degrees to the face, level with the eyes, 1 to 2 m away.
2. Hard source for drama (bare LED, Fresnel) or soft for a gentler split.
3. No fill, or very little (3 stops or more under).
4. Flag the light off the background so the dark side merges into black.
5. Optional rim from behind on the dark side to keep the head shape.

> Split is about the line down the nose. Turn the head a few degrees at a time until the line is clean.

## When to use it
Sports brands, music videos, fashion, villains, strong founders, B&W portraits.

## Common mistakes
- Background as bright as the face: no separation, no drama.
- Talent turns toward the light: it becomes loop.

## Budget version
A single bare LED or a sunlit doorway at 90 degrees, black background, no reflector.`,
quiz: [
 ['Where is the key for split light?', ['At 90 degrees to the face', 'On the lens axis', 'Behind the talent'], 0, 'Full side light divides the face.'],
 ['Typical fill for split?', ['None or 3 or more stops under', 'Equal to key', '1 stop over key'], 0, 'Fill weakens the effect.'],
 ['Which mood fits split best?', ['Soft romantic', 'Tension and strength', 'Bright corporate'], 1, 'It is the most dramatic pattern.'],
 ['Talent turns slightly toward the key. What happens?', ['It becomes loop or Rembrandt', 'Nothing changes', 'The background brightens'], 0, 'Turning in brings light across the nose.'],
 ['How do you keep the dark side from merging with a dark background?', ['A rim light on the dark side', 'More fill from the front', 'A brighter key'], 0, 'A rim keeps the outline.']],
chal: 'Make a sports-brand portrait: talent in a dark hoodie, split light from one hard source, black background, rim on the dark side. Shoot on the 50mm at f/2.',
check: ['Clean light line down the nose', 'Dark side holds a little detail or a rim', 'Background darker than the face', 'Hard edge looks intended']},

'm2-4': {ch: `Gordon Willis lit Marlon Brando from straight above in The Godfather so his eyes fell into shadow. The studio hated it; it became one of the most copied looks in film.

[[PHOTO:Chiaroscuro|Strong overhead light with deep shadows: the eyes hidden, the mood heavy.]]

## What it is
The main light comes from directly above the subject. It lights the top of the head, forehead, nose and cheekbones, and drops the eyes into shadow.

## Why it works
We cannot read hidden eyes, so the character feels mysterious or powerful. Overhead light is also how most real rooms are lit (ceiling fixtures, bar pendants), so it feels natural.

## Set it up
1. Source above the subject, 1 to 2 m above the head.
2. Soft top light: a 4x4 or 6x6 of diffusion, or a skirted spacelight, for a gentle top.
3. Hard top light: a bare source or pendant practical for drama.
4. Control eyes with a small bounce on the table or at chest height. Remove it for the Willis look.
5. Black the floor or use negative fill around if spill opens the shadows too much.

> Decide on purpose: eyes visible (add bounce) or eyes hidden (no bounce). Never in between.

## When to use it
Bars, restaurants, boardroom drama, poker table looks, product hero shots on a table, dark perfume ads.

## Common mistakes
- Bald or shiny heads: huge hot spot. Use powder and diffuse the source.
- Talent leans back: face falls out of the pool of light. Block the actor first.

## Budget version
A paper lantern or a bare bulb in a shade hung over the table. A white menu or napkin on the table becomes the eye bounce.`,
quiz: [
 ['Classic film known for top light on its lead?', ['The Godfather', 'Mamma Mia', 'The Grand Budapest Hotel'], 0, 'Gordon Willis, 1972.'],
 ['What does pure top light do to the eyes?', ['Fills them evenly', 'Puts them in shadow', 'Turns them blue'], 1, 'The brow blocks the light.'],
 ['Quick way to get light back into the eyes?', ['A white bounce on the table', 'Raise the light higher', 'Use a harder source'], 0, 'Bounce from below opens the sockets.'],
 ['Top light feels natural in real locations because…', ['Most rooms have ceiling lights', 'The sun is always overhead', 'Cameras prefer it'], 0, 'It matches practical sources.'],
 ['Biggest risk with top light on a bald head?', ['Hot spot on the scalp', 'Green cast', 'Lens flare'], 0, 'Diffuse the source and powder the skin.']],
chal: 'Light a restaurant table scene with a single top source (pendant or lantern). Shoot two versions: eyes hidden, and eyes opened with a white napkin bounce.',
check: ['Pool of light is centred on the action', 'Choice on eyes is clear', 'Background falls off', 'No hot spot on skin']},

'm2-5': {ch: `Under light is the campfire, horror-story light. Side light is its serious cousin: it shows every texture on a face or a product.

[[PHOTO:Under light|Light from below: unnatural, uneasy, often used for fear or tension.]]

## What it is
- **Under light:** the source sits below the face pointing up. Shadows go upward, which never happens in nature, so the face looks wrong.
- **Side light:** the source sits low and at 90 degrees, raking across a surface so texture stands out.

## Why it works
Our brain expects light from above. Flip it and we feel unease. Side light at a low angle makes tiny bumps cast long shadows, so it shows texture: skin, fabric, stone, food crust.

## Set it up
1. Under light: small soft source on the floor or table, 0.5 to 1 m from the face, pointing up. Motivate it with a phone screen, a candle, a fire, a laptop.
2. Keep it subtle (2 to 3 stops under the key) as a fill from below, or as the only source for horror.
3. Side light for texture: a hard source at table height, 90 degrees to the subject, grazing across it.
4. Flag the light off the lens to avoid flares.

> Under light needs a reason in the frame. Without a motivated source it looks like a mistake.

## When to use it
Screen glow scenes, campfires, horror, music videos. Side light for food texture, leather goods, watch dials, stone in hotel lobbies.

## Common mistakes
- Under light as key with no motivation: amateur look.
- Side light on older skin: shows every line. Soften it or move it toward the front.

## Budget version
A phone flashlight under a white card for screen glow. A torch raking across a table for texture.`,
quiz: [
 ['Why does under light feel unsettling?', ['Light from below never happens naturally', 'It is always blue', 'It is too bright'], 0, 'We expect light from above.'],
 ['What makes under light believable?', ['A motivated source like a screen or fire', 'A bigger softbox', 'A faster shutter'], 0, 'Motivation sells it.'],
 ['Best angle to show bread crust texture?', ['Low side light at 90 degrees', 'On-axis flat front light', 'Big soft overhead'], 0, 'Raking light makes texture cast shadows.'],
 ['Side light on mature skin will…', ['Hide lines', 'Show every line', 'Remove colour'], 1, 'Texture is what side light reveals.'],
 ['Under light as a subtle fill should sit about…', ['2 to 3 stops under the key', 'Equal to the key', '2 stops over the key'], 0, 'Keep it a hint.']],
chal: 'Make two frames: a person lit only by a laptop screen in a dark room, and a close-up of a leather bag lit by a low hard side light that shows the grain.',
check: ['The under light has a visible or obvious source', 'Texture clearly visible in the side light frame', 'No flare from the side light', 'Exposure protects the highlights']},

'm3-0': {ch: `Vermeer painted almost every interior with the same north-facing window on the left. Window light is still the most beautiful key you will ever get for free.

[[PHOTO:Window light|A big window as a soft key, falling off across the room.]]

## What it is
Daylight through a window used as the key light. A large window with no direct sun is a huge soft source; with direct sun it is a hard source with patterns.

## Why it works
It is big, soft and directional, and everyone recognises it as real. Faces near a window wrap beautifully; the falloff into the room gives depth for free.

## Set it up
1. Put the talent 1 to 2 m from the window, at 45 to 90 degrees to it. Closer is softer and brighter.
2. Shoot from the room side looking toward the talent, not from the window side, so you see shadow side shape.
3. Control contrast: white bounce on the shadow side for 1 to 2 stops of fill, or black for drama.
4. Direct sun? Hang a diffusion (Full Grid, 1/2 Grid, or a white bedsheet) over the window.
5. Expose for the face; let the window clip only if it is out of frame or you want the glow.

> Distance to the window is your dimmer. Each doubling of distance loses about 2 stops.

## Variations
- Backlit by the window: talent in front of it, bounce from the front, airy lifestyle look.
- Sun through blinds: hard stripes for drama.

## Common mistakes
- Talent facing the window straight on: flat light.
- Ignoring the clouds: exposure jumps. Watch it and ride the ISO or ND.

## Budget version
Any window and a white bedsheet. That is a full lighting kit.`,
quiz: [
 ['Window light becomes softer when…', ['Talent moves closer to the window', 'Talent moves farther away', 'You close the aperture'], 0, 'The source gets bigger relative to the face.'],
 ['Doubling the distance from the window costs about…', ['2 stops', '1/3 stop', '6 stops'], 0, 'Inverse square law.'],
 ['Best camera position for shape?', ['From the room side, seeing the shadow side', 'From the window, flat on', 'Directly above'], 0, 'Shadow side gives depth.'],
 ['Direct sun comes through the window. Quick fix?', ['Hang diffusion or a white sheet over it', 'Turn on every lamp', 'Raise ISO'], 0, 'Turns it back into a soft source.'],
 ['Who is famous for painting window light?', ['Vermeer', 'Picasso', 'Pollock'], 0, 'Girl with a Pearl Earring and more.']],
chal: 'Shoot a hotel guest reading by a window: one take with a white bounce, one with black negative fill on the shadow side. Same exposure on the face.',
check: ['Talent at 45 to 90 degrees to the window', 'Shadow side has shape', 'Window does not blow out the face', 'Contrast choice is intended']},

'm3-1': {ch: `In Barry Lyndon, Kubrick lit whole scenes with candles and a lens made for NASA. Practicals are lights you can see in the frame, and they do half your lighting.

[[PHOTO:Practical light|Lamps in frame give the scene its colour, depth and motivation.]]

## What it is
A practical is a real light in the shot: table lamp, pendant, neon, candle, TV, fridge, car dashboard. It sells the world and motivates your hidden lights.

## Why it works
The eye reads the practical as the source, so the light on faces feels real. Practicals also give depth: points of light in the background separate planes and add colour.

## Set it up
1. Choose practicals first, then place your hidden lights to match their direction and colour.
2. Swap bulbs for dimmable ones (or smart bulbs). Aim for warm 2700 to 3200 K.
3. Exposure: the practical shade should be about 1 to 2 stops over your key, not clipping hard.
4. Hide a small LED near the practical (off-frame side) to light the face as if from the lamp.
5. Dim practicals in the background so they glow, not blind.

> Expose for the face, then dim each practical until its shade just holds detail.

## When to use it
Every hotel room, restaurant, bar, night interior and lifestyle scene.

## Common mistakes
- Bare bulbs in frame clipping to a white blob. Use dimmers or lower wattage bulbs.
- Hidden key coming from a different direction than the lamp.

## Budget version
Buy 2 to 3 smart bulbs and a dimmer plug. Adjust brightness from your phone on set.`,
quiz: [
 ['What is a practical?', ['A light visible in the frame', 'A light on a C-stand', 'A reflector'], 0, 'It is part of the set.'],
 ['A practical shade should usually be…', ['1 to 2 stops over the key', '5 stops over', 'Darker than the face'], 0, 'Bright but not a blown blob.'],
 ['How do you light a face "from the lamp"?', ['Hide a small light near the lamp, same direction', 'Put a light behind the camera', 'Use the on-camera flash'], 0, 'Match direction and colour.'],
 ['Typical colour of tungsten practicals?', ['2700 to 3200 K', '5600 K', '10000 K'], 0, 'Warm household bulbs.'],
 ['Why do practicals help depth?', ['Points of light separate planes', 'They make the lens sharper', 'They remove noise'], 0, 'Background highlights add layers.']],
chal: 'Light a hotel room scene using only two practicals in frame plus one hidden LED that matches a lamp. Show the frame and a wide BTS phone photo.',
check: ['Practicals hold detail in the shade', 'Hidden light matches lamp direction', 'Colour temperatures feel consistent', 'Background has depth']},

'm3-2': {ch: `Most day interiors in films are not lit by the windows you see. Big lights outside pretend to be the sun so the look holds for twelve hours.

[[PHOTO:Motivated light|Light that seems to come from the window, controlled by the crew.]]

## What it is
Lighting an interior in daytime so it looks natural: light comes from windows, the room has a soft ambient level, and faces are lit from a believable direction.

## Why it works
Viewers know what a room at 11:00 looks like. Keep the direction from the window, the soft fill from walls and ceiling, and the brighter world outside, and it feels real.

## Set it up
1. Pick the window that is your source. All key light comes from that side.
2. Outside the window: a big daylight LED or HMI through diffusion to keep the light constant even when clouds pass.
3. Inside: bounce for ambient (a light into the ceiling or a white wall).
4. Exposure outside: 1 to 2 stops over the room so the window reads bright but holds detail. Use ND gel on windows if it blows out.
5. Shoot wide first, then match close-ups with a small soft source from the window side.

> Exterior 1 to 2 stops over the interior keeps a window looking bright and real.

## Common mistakes
- Shadows going the wrong way between wide and close.
- Mixed daylight and tungsten room bulbs: decide which you want (often turn room bulbs off).

## Budget version
Shoot when the sun is on the other side of the building. Use window light, a white bounce and a black flag. Done.`,
quiz: [
 ['Why do crews put lights outside windows?', ['To keep the light constant all day', 'Because windows are dark', 'To make shadows hard'], 0, 'Real sun moves and clouds pass.'],
 ['Good ratio of window to interior?', ['Window 1 to 2 stops over', 'Window 6 stops over', 'Window darker'], 0, 'Bright, still holds detail.'],
 ['Fast way to add room ambience?', ['Bounce a light into the ceiling', 'Point a hard light at the lens', 'Use a ring light'], 0, 'Soft fill everywhere.'],
 ['What breaks a day interior most?', ['Shadows in different directions between shots', 'Too much detail in the window', 'A soft key'], 0, 'Continuity of direction.'],
 ['Without big lights, best timing?', ['When direct sun is on the other side', 'Noon with sun in the window', 'Night'], 0, 'Indirect daylight is soft.']],
chal: 'Shoot a day interior in a café or apartment: a wide and a close-up, both lit from the same window direction. Upload both frames.',
check: ['Key direction matches in wide and close', 'Window holds detail', 'Room has soft ambient fill', 'No mixed colour temperatures by accident']},

'm3-3': {ch: `Night interiors are about darkness. The craft is not adding light; it is deciding where the dark goes.

[[PHOTO:Low key|Pools of light, deep shadows, motivated by lamps.]]

## What it is
An interior at night lit by practicals and moonlight from windows. Most of the frame is dark; light sits in pools around lamps and faces.

## Why it works
At night our eyes see contrast: warm lamps, dark corners, maybe a cool window. Recreate that and the scene feels intimate or tense.

## Set it up
1. Turn on the practicals and look at the room through the camera at your shooting ISO (800 to 3200 on the R6 II).
2. Key each face from a practical's direction with a small soft LED (dimmed, warm 3000 K).
3. Add a cool edge from the window side (4300 to 5600 K at low level) for moonlight.
4. Keep the ambient level low. Flag spill off walls.
5. Expose so faces sit about 1 stop under normal skin exposure. Shadows can go to black.

> Light the faces, then let the rest of the room fall where the practicals put it.

## Common mistakes
- Bringing up the ambient until it looks like day.
- Pure black faces: night still needs eye light. Add a small eye light near the lens.

## Budget version
Practicals plus one small LED with a softbox and a dimmer. On the R6 II, ISO 3200 still looks clean.`,
quiz: [
 ['Night interior priority?', ['Deciding where the dark goes', 'Making everything evenly lit', 'Using the brightest light you own'], 0, 'Contrast is the look.'],
 ['Typical colour of a moonlight edge?', ['Cool 4300 to 5600 K', 'Warm 2700 K', 'Green'], 0, 'Moonlight reads blue against warm lamps.'],
 ['Faces at night are often exposed…', ['About 1 stop under normal', '3 stops over', 'Exactly like day'], 0, 'Slightly dark keeps the night mood.'],
 ['How do you keep the eyes alive in a dark scene?', ['A small eye light near the lens', 'Raise the ambient', 'Add haze'], 0, 'Catchlights matter.'],
 ['Biggest night interior mistake?', ['Lifting the ambient until it looks like day', 'Using practicals', 'Flagging spill'], 0, 'Kills the night.']],
chal: 'Shoot a two-person dialogue at night in a living room lit by lamps, with a cool edge from a window. Faces readable, corners dark.',
check: ['Faces lit from practical directions', 'Corners fall to dark', 'Warm and cool contrast present', 'Catchlights in the eyes']},

'm3-4': {ch: `An overcast sky is the biggest softbox on earth. Fashion shooters wait for it on purpose.

[[PHOTO:Flat light|Overcast light: soft, even, low contrast, no sun direction.]]

## What it is
Light on a cloudy day. The whole sky is the source, so shadows are soft and contrast is low.

## Why it works
Skin looks smooth and colours are saturated. But it can be flat and boring because light comes from everywhere and mostly from above.

## Set it up
1. Add direction with negative fill: a black flag or 4x4 floppy on one side of the face. Instant shape.
2. Put the talent under a tree edge, a doorway or a porch to block the top light and get light from the side.
3. Small white bounce under the face to clear the eyes.
4. Add a backlight or rim (a daylight LED behind) to separate from a grey background.
5. Shoot with a slightly warm white balance (5800 to 6500 K setting) to remove the blue.

> On overcast days you subtract light to create shape. Negative fill is your key.

## Common mistakes
- Accepting the flat look. Add negative fill.
- White sky in frame: it blows out. Frame it out or use a grad.

## Budget version
A black jacket or a car door as negative fill. A doorway as a natural flag.`,
quiz: [
 ['Overcast light is…', ['Soft and low contrast', 'Hard with sharp shadows', 'Always warm'], 0, 'The sky is a giant diffuser.'],
 ['Fastest way to add shape on overcast days?', ['Negative fill on one side', 'More fill from the front', 'Higher ISO'], 0, 'Removing light creates direction.'],
 ['Why stand talent in a doorway?', ['It blocks top light and gives side direction', 'It is warmer', 'It adds noise'], 0, 'The opening becomes a soft key.'],
 ['Grey cast fix?', ['Set the white balance slightly warmer', 'Use a blue gel', 'Underexpose 3 stops'], 0, 'Warms skin.'],
 ['Overcast is great for…', ['Smooth skin and saturated colour', 'Hard noir shadows', 'Silhouettes'], 0, 'Soft light flatters.']],
chal: 'On a cloudy day, shoot the same person twice: open flat light, then with a black flag on one side. Upload both and point out the difference.',
check: ['Flag version shows clear shape', 'Eyes have light', 'Sky not clipping in frame', 'White balance not blue']},

'm3-5': {ch: `Terrence Malick shot most of Days of Heaven in the hour around sunset. The sun is the most powerful light you will ever use, and you have to shape it.

[[PHOTO:Golden hour|Low warm sun: long shadows, golden rim on hair and skin.]]

[[PHOTO:Hard light|Midday sun: hard edges, short shadows, high contrast.]]

## What it is
Using the sun as key, backlight or rim, and controlling it with diffusion, bounce and timing. Golden hour is roughly the last hour before sunset and the first after sunrise.

## Why it works
Low sun is warm, directional and makes long shadows. Backlit hair glows. High noon sun is hard and comes from above, which is unflattering, so you shape it.

## Set it up
1. Plan with the Sun tool in Shtat Lab: note golden hour and where the sun will be.
2. Backlight the talent with the sun, then bounce it back into the face with a white or silver reflector.
3. At midday: put a 6x6 or 8x8 silk over the talent to soften the sun, then use the sun on the background.
4. Expose for the face; let the background go slightly hot.
5. Use ND (variable or fixed) to keep f/1.8 to f/2.8 in bright sun with 1/50 shutter.

> Backlight with the sun, bounce into the face. It works almost every time.

## Common mistakes
- Talent facing the sun: squinting and flat light.
- Running out of light: golden hour lasts about 30 to 40 good minutes in summer in Skopje or Prishtina. Be set up early.

## Budget version
One 5-in-1 reflector and an ND filter. That is a full sun kit.`,
quiz: [
 ['Easiest way to use the sun for portraits?', ['Backlight it and bounce into the face', 'Face talent into the sun', 'Shoot at noon'], 0, 'Glowing hair and soft face.'],
 ['Midday sun fix?', ['A silk over the talent', 'More fill from below only', 'Shorter shutter'], 0, 'Turns hard sun soft.'],
 ['Golden hour is roughly…', ['The hour before sunset and after sunrise', 'Midday', 'Any time it is warm'], 0, 'Low sun angle.'],
 ['To keep f/2 in sun at 1/50 you need…', ['ND filter', 'Higher ISO', 'Bigger reflector'], 0, 'ND cuts light.'],
 ['Which tool in this app plans the sun?', ['Sun tool', 'Storage tool', 'Timecode tool'], 0, 'It shows golden and blue hour.']],
chal: 'Plan a golden-hour shoot with the Sun tool, then shoot a person backlit by the sun with a bounce in the face. Upload the frame and the plan time.',
check: ['Sun behind or to the side', 'Face filled with bounce', 'Highlights in hair, not on skin', 'Shot within the golden window']},

'm4-0': {ch: `Book light got its name because the two sides open like a book: a light bounces into one white surface, and the bounce then passes through a sheet of diffusion.

[[PHOTO:Book light|Book light: extremely soft, wrap-around light with almost no hot spot.]]

## What it is
A light hits a bounce board (the first page), and the bounced light passes through a frame of diffusion (the second page) before reaching the subject. Two layers make it super soft and even.

## Why it works
Bouncing removes the hot spot; diffusion spreads it further. The result is a large, very soft source that wraps around faces. Many commercial DPs use it as their default interview key.

## Set it up
1. Bounce: a 4x4 or 6x6 white board or Ultrabounce, angled toward the talent.
2. Light (a 300 to 600 W LED) aimed into the bounce, not at the talent.
3. Diffusion frame (Full Grid Cloth or 1/2 Grid) in front of the bounce, forming the second page.
4. Position the whole book at 30 to 45 degrees, 1 to 1.5 m from the face.
5. Add negative fill on the other side, a hair light, and a background light.

> Book light loses about 2 to 3 stops compared to direct light. Bring a powerful source.

## Common mistakes
- Light spilling around the frames: flag the edges.
- Placing it too far: a book only stays soft when big relative to the face.

## Budget version
A white foam core bounced into a shower curtain on a stand. A 100 W LED is enough for a close interview.`,
quiz: [
 ['Book light means…', ['Bounce then diffusion', 'Two hard lights', 'A light behind a book'], 0, 'Two pages: bounce and diffusion.'],
 ['Main advantage of book light?', ['Very soft and even, no hot spot', 'Very hard edges', 'No power needed'], 0, 'Two layers spread the light.'],
 ['Light loss with book light is about…', ['2 to 3 stops', '0 stops', '8 stops'], 0, 'Bounce and diffusion each cost light.'],
 ['Distance from the face?', ['About 1 to 1.5 m', '10 m', 'Touching the face'], 0, 'Close keeps it big.'],
 ['Spill around the frames. Fix?', ['Flag the edges', 'Remove diffusion', 'Raise ISO'], 0, 'Control the spill.']],
chal: 'Build a book light for an interview with what you have (foam core plus diffusion or a sheet). Shoot a 20 second interview test and upload a frame plus the setup photo.',
check: ['No hot spot visible on skin', 'Soft wrap on the shadow side', 'Spill flagged', 'Negative fill adds shape']},

'm4-1': {ch: `Light bouncing off a wall becomes a new light source as big as the lit part of the wall.

[[PHOTO:Bounce light|Light bounced into a surface becomes a large soft source.]]

## What it is
Instead of aiming a light at the subject, you aim it at a surface: a wall, a ceiling, a white board, a silver reflector. The surface becomes the source.

## Why it works
A larger source makes softer light. Bounce gives you a big source without a big modifier. It also adds the colour of the bounce surface, which you can use (gold for warm skin) or must watch (a green wall).

## Set it up
1. Pick a bounce: white (soft, neutral), silver (harder, stronger), gold (warm), Ultrabounce or Muslin (very soft).
2. Point the light so the bounce surface fills; the bigger the patch, the softer the light.
3. Place the bounce where you want the key direction to come from.
4. Use a flag between light and subject so only the bounced light hits them.
5. For ceiling bounce, lower ceilings give softer top light. High ceilings lose a lot of light.

> The bounce surface is your light. Its size, distance and colour decide everything.

## Common mistakes
- Bouncing off coloured walls: skin goes green or pink.
- Not enough power: bounce loses 1 to 3 stops depending on the surface.

## Budget version
A white wall and one LED. Or a 5-in-1 reflector held by a friend.`,
quiz: [
 ['When you bounce a light, the source becomes…', ['The surface you bounce into', 'The light itself', 'The camera'], 0, 'The bounce is the new source.'],
 ['Which bounce is the hardest and brightest?', ['Silver', 'Muslin', 'Ultrabounce'], 0, 'Specular surface.'],
 ['Why avoid a green wall?', ['It colours the skin', 'It is too soft', 'It flickers'], 0, 'Bounce carries the colour.'],
 ['A larger bounce patch gives…', ['Softer light', 'Harder light', 'Colder light'], 0, 'Bigger source.'],
 ['Gold bounce adds…', ['Warmth', 'Blue', 'Contrast only'], 0, 'Warm skin tones.']],
chal: 'Light a portrait using only bounce: one light into a wall or board. Shoot with white, then silver bounce. Compare the look.',
check: ['Bounce placed at key direction', 'Light flagged off the subject', 'No colour cast from surfaces', 'Difference between white and silver visible']},

'm4-2': {ch: `On big commercial exteriors you will see huge frames of fabric over the actors: 12x12, 20x20, sometimes 40x40. They take control of the sun.

[[PHOTO:Soft light|Overhead silk turns hard sun into soft, even light.]]

## What it is
An overhead is a large frame (12x12 ft is about 3.6 m) with fabric: silk or grid cloth to soften, solid black to block, or a net to reduce. It sits above the action on stands.

## Why it works
It turns hard sun into soft sky light and gives consistency for hours. With a solid, you remove top light and create direction with bounces.

## Set it up
1. Fabric choices: Full Silk (about 2 stops), 1/2 Silk (about 1 stop), Full Grid Cloth (about 2 stops, wider spread), Solid (blocks all), Double net (about 1 stop).
2. Rig on high-roller stands or combo stands with sandbags. Wind is the main danger. Keep a grip on each corner.
3. Position the frame between the sun and the talent.
4. Expose the face under the silk; the background will be brighter, which feels natural.
5. Add a bounce or a daylight light for the key direction if you want shape.

> Never put up a 12x12 or bigger frame in wind without trained grips and sandbags.

## Common mistakes
- Frame too small for a walking shot.
- Background too bright: add ND or reframe.

## Budget version
A 6x6 or 2x3 m piece of diffusion fabric on two stands, or a pop-up scrim held by assistants.`,
quiz: [
 ['A 12x12 is roughly…', ['3.6 x 3.6 m', '1.2 x 1.2 m', '12 x 12 m'], 0, '12 feet is about 3.6 m.'],
 ['Full silk cuts about…', ['2 stops', '6 stops', '0 stops'], 0, 'Approximate loss.'],
 ['Biggest safety risk with overheads?', ['Wind', 'Rain', 'Colour shift'], 0, 'Frames act like sails.'],
 ['Under the silk the background will…', ['Be brighter than the face', 'Be darker', 'Turn blue'], 0, 'The sun still hits it.'],
 ['Solid black overhead is used to…', ['Remove top light and create direction', 'Add light', 'Make the sky blue'], 0, 'Negative fill from above.']],
chal: 'Shoot a sunny outdoor portrait twice: in open sun, and under a diffusion frame or pop-up scrim. Compare skin and contrast.',
check: ['Silk fully covers the face', 'Exposure set for the face', 'Background not clipping badly', 'Stands safe and weighted']},

'm4-3': {ch: `Many big hotel and stage scenes are lit by a ceiling of soft lights hanging above the set. That is spacelights and coves.

[[PHOTO:High key|Soft, even ambient across the whole set.]]

## What it is
- **Spacelight:** a cylinder of fabric with lamps inside, hung overhead, giving soft top ambient.
- **Cove:** lights hidden in a ledge or behind a wall edge, bouncing into the ceiling or wall to make a soft glow.
- **Ambient soft:** any big, soft, general light that sets the base level of a room.

## Why it works
It gives a base level everywhere, so actors and camera can move freely. Then you add keys and accents on top.

## Set it up
1. Rig soft overhead units (spacelights, LED panels in skirts, or chimeras) evenly above the set.
2. Use skirts or black wrap to stop spill on walls if you want a darker background.
3. Set the ambient level 2 to 3 stops under your key for drama, 1 stop under for commercial bright looks.
4. In hotels, hide LED strips in coves or behind furniture to glow up the walls.
5. Add keys for faces and accents for product.

> Ambient is the floor of your exposure. Set it first, then build on top.

## Common mistakes
- Too much ambient: flat, no contrast.
- Overheads in the shot: plan the camera angles.

## Budget version
Bounce two LEDs into a white ceiling. Instant soft ambient.`,
quiz: [
 ['What does a spacelight give?', ['Soft top ambient', 'Hard spot', 'Coloured edge'], 0, 'It is a soft overhead.'],
 ['Cove lighting is…', ['Lights hidden in a ledge bouncing into a ceiling or wall', 'A lamp in frame', 'A follow spot'], 0, 'Hidden indirect light.'],
 ['For drama, ambient sits about…', ['2 to 3 stops under the key', 'Equal to key', 'Over the key'], 0, 'Keeps contrast.'],
 ['Why set ambient first?', ['It is the base exposure', 'It is cheaper', 'It is always warm'], 0, 'Build on top.'],
 ['Cheapest ambient trick?', ['Bounce LEDs into a white ceiling', 'Buy a spacelight', 'Use the sun'], 0, 'Ceiling becomes a source.']],
chal: 'Light a room scene with ambient first (bounced ceiling light), then add one key and one accent. Shoot the frame at each stage.',
check: ['Ambient is soft and even', 'Key adds clear direction', 'Accent separates subject', 'No fixtures in frame']},

'm4-4': {ch: `A china ball (paper lantern) costs a few euros and is in the kit of DPs who shoot features. It is soft, omnidirectional, and fits anywhere.

[[PHOTO:Soft light|A round soft source lights faces and spreads into the room.]]

## What it is
A paper or fabric sphere with a bulb or LED inside. It throws soft light in every direction. Film versions (lantern softboxes) have skirts to control spill.

## Why it works
It acts like a big soft practical. On a boom pole it can follow actors around a table or through a room. It is also how many DPs light dinner tables and car interiors.

## Set it up
1. Bulb: a dimmable LED (60 to 150 W equivalent) or a lantern softbox on a COB light.
2. Hang it over a table or on a boom just out of frame, 0.5 to 1 m above the faces.
3. Skirt it with black fabric on the side facing the wall to keep spill off backgrounds.
4. Dim it so it is fill or soft key, depending on the scene.
5. Use it as an in-frame practical too (paper lanterns look great in restaurants).

> A lantern on a boom pole is the fastest moving soft key on set.

## Common mistakes
- Too close to the ceiling: hot spot on the ceiling.
- Lantern too bright in frame: dim it or add a second layer of paper.

## Budget version
An IKEA paper lantern with an LED bulb and a dimmer cable. Under 20 euros.`,
quiz: [
 ['A china ball gives…', ['Soft light in all directions', 'A hard spot', 'Only coloured light'], 0, 'Omnidirectional and soft.'],
 ['Why skirt a lantern?', ['To keep spill off walls', 'To make it brighter', 'To change colour'], 0, 'Control spill.'],
 ['Lantern on a boom pole is great for…', ['Following actors as soft key', 'Hard backlight', 'Lighting the sky'], 0, 'Mobile soft source.'],
 ['Hot spot on the ceiling? Fix?', ['Lower it or skirt the top', 'Raise ISO', 'Add a gel'], 0, 'Move it away from the ceiling.'],
 ['Typical height over a dinner table?', ['0.5 to 1 m above the faces', '5 m', 'On the floor'], 0, 'Close and soft.']],
chal: 'Light a dinner table scene for a restaurant with one paper lantern over the table and nothing else. Expose for the faces and upload.',
check: ['Faces evenly lit by the lantern', 'Walls not hit by spill', 'Lantern not clipping if in frame', 'Mood feels warm and intimate']}

});
