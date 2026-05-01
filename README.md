# Ecem Dilan Köse — Portfolio

React + Vite, deployed to GitHub Pages.

## Geliştirme

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build       # dist/ üretir
npm run deploy      # gh-pages -d dist
```

`vite.config.js` içinde `base: '/ecemdilankose/'` ayarlı. Repo adı farklıysa burayı güncelle.

## İçerik yönetimi (`src/constants.js`)

Tüm metin ve görsel referansları `src/constants.js` üzerinden yönetilir.

### Görseller

Görseller varsayılan olarak yer-tutucu (placeholder) SVG’lerdir. Gerçek görselleri eklemek için:

1. Görselleri `public/images/` altına koy:
   - `public/images/hero-base.jpg` — Ecem portresi
   - `public/images/hero-hover.jpg` — Hover’da görünecek iş görseli
   - `public/images/about.jpg` — About bölümü görseli
   - `public/images/works/<slug>.jpg` — Her proje için (örn. `hollow.jpg`, `magic.jpg`)
2. `src/constants.js` içindeki `IMAGES` objesinde ilgili alanı dosya yoluna çevir:
   ```js
   export const IMAGES = {
     hero_base: '/images/hero-base.jpg',
     hero_hover: '/images/hero-hover.jpg',
     about: '/images/about.jpg',
     works: {
       hollow: '/images/works/hollow.jpg',
       magic: '/images/works/magic.jpg',
       // ...
     },
   }
   ```
   GitHub Pages’te `base` prefix Vite tarafından otomatik uygulanır; `/images/...` yolu yeterlidir.

### Metinler

- `PROJECTS[*].description` — proje detay metinleri
- `ABOUT.bio` — biyografi
- `CONTACT.email` — iletişim adresi (placeholder `[CONTACT_EMAIL]` yerine gerçek e-posta)

### Yeni proje ekleme

`PROJECTS` listesine yeni satır ekle ve `IMAGES.works` altına aynı `slug` ile görsel yolunu yaz. URL otomatik olarak `/#/works/<slug>` olur.

## Notlar

- HoverMaskReveal: vanilla Three.js ile yeniden yazıldı; Framer bağımlılığı yok.
- Cursor + HoverMaskReveal mobilde otomatik devre dışı.
- Routing: HashRouter (GitHub Pages için).
