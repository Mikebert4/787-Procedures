# Deploying the 787 NP Training Aide Without GitHub

This folder is a static website. You can deploy it without a GitHub connector.

## Free Option: Cloudflare Pages Direct Upload

1. Go to Cloudflare Dashboard.
2. Open Workers & Pages.
3. Choose Pages, then create a project.
4. Select Direct Upload.
5. Upload `787_np_training_app.zip`.
6. Cloudflare will provide a `*.pages.dev` URL.

Recommended: put Cloudflare Zero Trust Access in front of the Pages URL before sharing, because this aide contains FCOM-derived text and imagery.

## Also Works

- Netlify manual deploy: drag the unzipped folder or zip into Netlify's deploy area.
- Any static host: upload all files in this folder and set `index.html` as the entry page.

## Important

The source FCOM pages are marked proprietary and "DO NOT USE FOR FLIGHT." Treat this as a private training/simulator aide and avoid publishing it openly unless you have permission.
