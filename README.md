# hasankurt.com — Portfolio

Personal portfolio site built with Next.js 15, deployed on AWS S3 + CloudFront via GitHub Actions.

## Tech

`Next.js 15` `TypeScript` `Tailwind CSS` `AWS S3` `CloudFront` `GitHub Actions`

## Architecture

```
git push → GitHub Actions → npm run build → S3 sync → CloudFront invalidation
```

Static export hosted on S3, served globally via CloudFront CDN. Automated deployment on every push to `main`.

## Local Development

```bash
npm install
npm run dev
```

## Updating Content

All personal content lives in `data/content.ts` — projects, articles, organizations.

## Deployment

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`).

Required GitHub secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Live

[hasankurt.com](https://hasankurt.com)