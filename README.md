# syl-lit-library

Build a shareable Web Component Library using Storybook and Lit

## Chromatic

Chromatic is a visual testing & review tool that scans every possible UI state across browsers to catch visual and functional bugs.

### Github Actions

Security > Secrets and variables > Actions > Secrets tab
Add following keys/values :

```
AWS_S3_BUCKET=***-***-***
AWS_S3_REGION=**-****-*
AWS_ACCESS_KEY_ID=**************
AWS_SECRET_ACCESS_KEY=*************************************
AWS_CLOUDFRONT_DISTRIBUTION_ID=**************

CHROMATIC_PROJECT_TOKEN=chpt_***************
```

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

### Cloudfront

"Comportement" > "Politique d'en-têtes de réponse" > "Create response headers policy" > Enable good CORS and Securities
