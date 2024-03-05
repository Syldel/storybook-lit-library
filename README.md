# syl-lit-library

Build a shareable Web Component Library using Storybook and Lit

## Chromatic

Chromatic is a visual testing & review tool that scans every possible UI state across browsers to catch visual and functional bugs.

### Github Actions

Security > Secrets and variables > Actions > Secrets tab
Add Chromatic project token : CHROMATIC_PROJECT_TOKEN

## AWS

### S3

Dans "Autorisations"

- "Bloquer tous les accès publics" : Désactivé

- "Partage des ressources entre origines (CORS)" :

```json
[
  {
    "AllowedHeaders": [],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```
