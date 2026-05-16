## Contributing

Community contributions keep KEYDIR accurate and useful.

### 1. Fork the repo

```
https://github.com/SHADOW269/keydir.in/fork
```

### 2. Edit vendor data in `/assets/js/shared.js`

**Standard entry:**
```js
{
  name: "VendorName",
  url: "https://vendor.in/",
  cats: ["Switches", "Keycaps"]
}
```

**Entry with a community warning flag:**
```js
{
  name: "VendorName",
  url: "https://vendor.in/",
  cats: ["Pre-built"],
  warning: true,
  warning_message: "Community-reported concerns about after-sales support."
}
```

### 3. Follow the contribution rules

✅ Vendor operates in India  
✅ URL is live and working  
✅ Categories match `CAT_META` in `shared.js`  
✅ Descriptions are neutral and factual  
❌ No affiliate links  
❌ No sponsored placements  

### 4. Open a pull request

Use descriptive titles:

```
feat: add XYZ vendor (Switches, Keycaps)
fix: update ABC vendor URL
warn: flag DEF vendor — community support concerns
```