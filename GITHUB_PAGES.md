# GitHub Pages Setup

This folder is ready to publish as a static GitHub Pages site.

## Create the GitHub repository

1. Open https://github.com/new
2. Repository name suggestion: `787-np-training-aide`
3. Visibility: `Public`
4. Do not add a README, `.gitignore`, or license.
5. Create the repository.

## Push from this local repo

After creating the empty repository, add the GitHub remote and push:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/787-np-training-aide.git
git push -u origin main
```

## Enable GitHub Pages

1. In the GitHub repo, open Settings.
2. Open Pages.
3. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
4. Save.

Your URL should be:

```text
https://YOUR-USERNAME.github.io/787-np-training-aide/
```
