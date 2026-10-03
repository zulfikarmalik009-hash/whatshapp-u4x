# WhatsApp Account Adda — Website Package

This is a static, mobile-responsive digital marketplace UI.

## Files
- `index.html` — main page
- `style.css` — theme/design
- `script.js` — search, product card, modal and Telegram enquiry
- `products.json` — product data
- `README.md` — setup instructions

## Telegram
The enquiry button opens Telegram for `@Hunterxraj4`.
To change it, edit this line in `script.js`:
`const telegramUsername = "Hunterxraj4";`

## Edit product
Open `products.json` and edit the product fields. For a static site, commit the change to GitHub; Vercel will redeploy automatically if the repository is connected.

## GitHub + Vercel
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Commit the files.
4. In Vercel, import the GitHub repository.
5. Framework preset: Other / no framework.
6. Build command: leave empty.
7. Output directory: leave empty.
8. Deploy.

This package is a generic digital-product marketplace UI and does not implement account/OTP/session credential transfer.
