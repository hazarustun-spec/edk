// Resolve a /public asset path with Vite's base URL (works in dev + GitHub Pages).
const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

// Light-theme placeholder generator. Replace these with real /images paths when assets are ready.
const ph = (w, h, bg, text, color = '#0a0a0a') =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'>
      <rect width='${w}' height='${h}' fill='${bg}'/>
      <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle'
        fill='${color}' font-family='Helvetica, sans-serif'
        font-size='${Math.round(w / 10)}' font-weight='700' letter-spacing='4'>${text}</text>
    </svg>`
  )}`

export const IMAGES = {
  hero_base: asset('images/hero-base.jpg'),
  hero_hover: asset('images/hero-hover.jpeg'),
  about: ph(800, 1000, '#f0f0f0', 'ABOUT'),
  works: {
    'original-by-nature':           ph(900, 1200, '#f0f0f0', 'ORIGINAL BY NATURE'),
    'magic':                        ph(900, 1200, '#ececec', 'MAGIC'),
    'prompt':                       ph(900, 1200, '#e8e8e8', '/PROMPT'),
    'beauty-of-new-era':            ph(900, 1200, '#f0f0f0', 'BEAUTY OF NEW ERA'),
    'immersive-experience-ddm':     ph(900, 1200, '#ececec', 'IMMERSIVE DDM'),
    '3-as-1':                       ph(900, 1200, '#e8e8e8', '3 AS 1'),
    'human-at-incheon-foundation':  ph(900, 1200, '#f0f0f0', 'HUMAN AT INCHEON'),
    'stressed-of-the-whole-world':  ph(900, 1200, '#ececec', 'STRESSED'),
    'an-odasi':                     ph(900, 1200, '#e8e8e8', 'AN ODASI'),
    'hollow':                       ph(900, 1200, '#f0f0f0', 'HOLLOW'),
    'neospine':                     ph(900, 1200, '#ececec', 'NEOSPINE'),
    'texthibition':                 ph(900, 1200, '#e8e8e8', 'TEXTHIBITION'),
    'datamarket':                   ph(900, 1200, '#f0f0f0', 'DATAMARKET'),
  },
}

export const PROJECTS = [
  { id: 1,  title: 'ORIGINAL BY NATURE x MERCADO', slug: 'original-by-nature',           year: 2022, description: '[PROJECT_DESCRIPTION]' },
  { id: 2,  title: 'MAGIC',                         slug: 'magic',                        year: 2024, description: '[PROJECT_DESCRIPTION]' },
  { id: 3,  title: '/PROMPT',                       slug: 'prompt',                       year: 2024, description: '[PROJECT_DESCRIPTION]' },
  { id: 4,  title: 'BEAUTY OF NEW ERA',             slug: 'beauty-of-new-era',            year: 2023, description: '[PROJECT_DESCRIPTION]' },
  { id: 5,  title: 'IMMERSIVE EXPERIENCE DDM',      slug: 'immersive-experience-ddm',     year: 2024, description: '[PROJECT_DESCRIPTION]' },
  { id: 6,  title: '3 AS 1',                        slug: '3-as-1',                       year: 2022, description: '[PROJECT_DESCRIPTION]' },
  { id: 7,  title: 'HUMAN AT INCHEON FOUNDATION',   slug: 'human-at-incheon-foundation',  year: 2023, description: '[PROJECT_DESCRIPTION]' },
  { id: 8,  title: 'STRESSED OF THE WHOLE WORLD',   slug: 'stressed-of-the-whole-world',  year: 2023, description: '[PROJECT_DESCRIPTION]' },
  { id: 9,  title: 'AN ODASI',                      slug: 'an-odasi',                     year: 2022, description: '[PROJECT_DESCRIPTION]' },
  { id: 10, title: 'HOLLOW',                        slug: 'hollow',                       year: 2024, description: '[PROJECT_DESCRIPTION]' },
  { id: 11, title: 'NEOSPINE',                      slug: 'neospine',                     year: 2023, description: '[PROJECT_DESCRIPTION]' },
  { id: 12, title: 'TEXTHIBITION',                  slug: 'texthibition',                 year: 2024, description: '[PROJECT_DESCRIPTION]' },
  { id: 13, title: 'DATAMARKET',                    slug: 'datamarket',                   year: 2023, description: '[PROJECT_DESCRIPTION]' },
]

export const ABOUT = {
  heading: 'ECEM DİLAN KÖSE',
  subheading: 'Conceptual Artist / Istanbul',
  bio: '[BIO_TEXT]',
}

export const CONTACT = {
  email: '[CONTACT_EMAIL]',
  instagram: 'https://www.instagram.com/ecemdilankose/',
  website: 'https://ecemdilankose.com',
}
