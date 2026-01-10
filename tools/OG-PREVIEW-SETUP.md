# RainaCorp Premium Link Preview System
## Implementation Guide

### ✅ Phase 1-2: COMPLETED
**Foundation + Metadata Stack**
- ✓ Comprehensive Open Graph tags
- ✓ Twitter/X Card optimization
- ✓ Apple Messages/iMessage compatibility
- ✓ WhatsApp, LinkedIn, Slack support
- ✓ Cache control headers
- ✓ Theme colors for mobile browsers
- ✓ Page-specific metadata (Main site + North Star)

---

## 🎨 Creating Your OG Preview Images

### Step 1: Generate the Images

#### Option A: Screenshot Method (Recommended - Easy)
1. Open `og-preview-generator.html` in your browser
2. Set browser zoom to **100%**
3. Screenshot each preview card:
   - **RainaCorp Main**: `rainacorp-og.png` (1200×630)
   - **North Star**: `north-star-og.png` (1200×630)
4. Save screenshots to `images/og/` folder

#### Option B: Automated (Using Puppeteer)
```bash
# Install dependencies
npm install puppeteer

# Run the capture script
node generate-og-images.js
```

---

## 📐 Image Specifications

### RainaCorp Main Site
- **Filename**: `rainacorp-og.png`
- **Size**: 1200 × 630 pixels
- **Format**: PNG
- **Design**:
  - Dark gradient background (#0a0e14 → #1a1f2e)
  - Logo (140px) centered
  - "RainaCorp©" in gold gradient
  - Tagline: "Where Vision Meets Tradition"
  - Footer: "SINCE 2024"

### Project North Star
- **Filename**: `north-star-og.png`
- **Size**: 1200 × 630 pixels
- **Format**: PNG
- **Design**:
  - Purple/blue gradient background
  - Logo (140px) centered
  - "Project North Star" in purple gradient
  - Tagline: "Self-Hosted Library · Production Ready"
  - Footer: "RAINACORP INNOVATION LAB"

---

## 🔍 Testing Your Previews

### After uploading images, test with:

#### Facebook/Meta
https://developers.facebook.com/tools/debug/
- Enter: `https://rainacorp-be1be.web.app/`
- Click "Scrape Again" to refresh cache

#### Twitter/X
https://cards-dev.twitter.com/validator
- Enter your URL
- Preview will show immediately

#### LinkedIn
https://www.linkedin.com/post-inspector/
- Enter your URL
- Check preview rendering

#### iMessage (iOS)
1. Text yourself the link
2. Wait for preview to load
3. Check appearance

---

## 📱 Platform-Specific Optimizations

### Apple iMessage
- ✓ High contrast gold on dark
- ✓ Centered, large text
- ✓ Rounded preview style
- ✓ Site name displayed prominently

### WhatsApp
- ✓ 1200×630 image for best quality
- ✓ Secure HTTPS image URL
- ✓ Clear, readable text

### Slack
- ✓ Unfurls automatically
- ✓ Shows title, description, image
- ✓ Site name included

---

## 🚀 Deployment Checklist

- [ ] Generate OG images (1200×630 PNG)
- [ ] Upload to `images/og/` folder
- [ ] Verify image URLs are accessible
- [ ] Test on Facebook Debugger
- [ ] Test on Twitter Validator
- [ ] Test on LinkedIn Inspector
- [ ] Test in iMessage
- [ ] Clear platform caches if needed

---

## 🔄 Cache Busting

If platforms show old previews:

### Method 1: URL Parameters
Add version to image URL:
```html
<meta property="og:image" content="https://rainacorp-be1be.web.app/images/og/rainacorp-og.png?v=2">
```

### Method 2: Platform-Specific Refresh
- **Facebook**: Use Sharing Debugger "Scrape Again"
- **Twitter**: Validator refreshes automatically
- **LinkedIn**: Post Inspector refreshes on each check

---

## 📊 What's Included

### Homepage (index.html)
```
Title: RainaCorp© | Where Vision Meets Tradition
Description: Orchestrating progress through innovation and legacy...
Image: images/og/rainacorp-og.png
Theme: Gold (#d4ad49)
```

### North Star (north-star.html)
```
Title: Project North Star | Self-Hosted Library Server
Description: Production-ready book server with EPUB & PDF support...
Image: images/og/north-star-og.png
Theme: Purple (#667eea)
```

---

## 🎯 Brand Guidelines

### Preview Copy Style
- **Concise**: Max 140 characters
- **Luxury tone**: Elevated language
- **Editorial**: Not salesy
- **Powerful**: One clear message

### Visual Style
- **Minimal**: No clutter, no UI elements
- **Premium**: Luxury annual report aesthetic
- **Branded**: Always include logo
- **Consistent**: Gold for main, purple for North Star

---

## 🔮 Future Enhancements

### Phase 3: Dynamic Previews
- Auto-generate OG images per project
- Template system for new pages
- API endpoint for custom previews

### Phase 6: Signature Touch
- Gold laurel watermark (5% opacity)
- Rotating quarterly taglines
- "Since 2024" brand marker system

---

## 📝 Notes

- All metadata follows Open Graph 2.0 spec
- Images optimized for all major platforms
- Cache headers set to 7 days
- Fully responsive across devices
- Platform-specific optimizations included

---

**Status**: ✅ Metadata Implementation Complete
**Next Step**: Generate and upload OG preview images
**Estimated Time**: 10 minutes

---

© 2025 RainaCorp | Premium Link Preview System
