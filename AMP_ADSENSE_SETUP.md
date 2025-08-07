# Google AdSense Configuration with AMP Auto Ads

## 📋 Summary
Google AdSense configuration with AMP (Accelerated Mobile Pages) Auto Ads support has been implemented according to Google specifications.

## ✅ Implementation Completed

### Step 1: AMP Script in `<head>`
- ✅ Added in `_includes/head-adsense.html`
- ✅ Script: `https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js`
- ✅ Conditional: Only loads if `site.adsense.amp_enabled: true`

### Step 2: `<amp-auto-ads>` Element after `<body>`
- ✅ Implemented via JavaScript for Jekyll/Chirpy compatibility
- ✅ File: `assets/js/amp-auto-ads.js`
- ✅ Configuration: Automatic client ID from `_config.yml`

## 🔧 Configuration in `_config.yml`

```yaml
google_adsense: "ca-pub-7596549899792751"
adsense:
  enabled: true          # General AdSense
  auto_ads: true        # Traditional automatic ads
  amp_enabled: true     # 🆕 AMP Auto Ads (NEW)
  show_in_posts: true
  show_in_pages: false
```

## 📁 Modified/Created Files

1. **`_config.yml`** - Added `amp_enabled: true`
2. **`_includes/head-adsense.html`** - AMP script in head
3. **`_includes/head-custom.html`** - JavaScript configuration
4. **`assets/js/amp-auto-ads.js`** - 🆕 AMP Auto Ads logic
5. **`assets/css/adsense.css`** - AMP styles
6. **`_includes/amp-auto-ads.html`** - 🆕 AMP template (backup)

## 🎯 How It Works

1. **Head**: AMP library and JS configuration loads
2. **Body**: JavaScript inserts `<amp-auto-ads>` at content beginning
3. **Client**: Automatically uses `ca-pub-7596549899792751`

## ⚙️ Functionality Control

To **enable** AMP Auto Ads:
```yaml
adsense:
  amp_enabled: true
```

To **disable** AMP Auto Ads:
```yaml
adsense:
  amp_enabled: false
```

## 📝 Important Notes

- Ads may take **up to 1 hour** to appear
- Compatible with Jekyll + Chirpy theme
- Does not interfere with existing AdSense ads
- Fully responsive for mobile devices

## 🔍 Verification

1. Run: `./tools/run.sh` for local server
2. Inspect element: Look for `<amp-auto-ads>` in DOM
3. Console: Verify no AMP errors
4. Wait up to 1 hour to see ads in production

---
**Implemented**: {{ "now" | date: "%Y-%m-%d %H:%M" }}  
**AdSense Client**: ca-pub-7596549899792751
