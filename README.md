# syl-lit-library

Build a Web Component Library using Storybook and Lit

## Github Actions

Security > Secrets and variables > Actions > Secrets tab
Add Chromatic project token : secrets.CHROMATIC_PROJECT_TOKEN

## AWS

### S3

Dans "Autorisations"

- "Bloquer tous les accès publics" : Désactivé

- "Partage des ressources entre origines (CORS)" :

```
[
    {
        "AllowedHeaders": [],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```
