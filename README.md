# hasankurt.com — Portfolio

Personal portfolio site built with Next.js 15, deployed on AWS S3 + CloudFront via GitHub Actions CI/CD pipeline.

## Tech

`Next.js 15` `TypeScript` `Tailwind CSS` `AWS S3` `CloudFront` `GitHub Actions`

## Architecture

```
git push origin main
       ↓
GitHub Actions triggered
       ↓
1. npm ci && npm run build   → generates /out folder
2. aws s3 sync               → uploads changed files to S3
3. cloudfront create-invalidation → clears CDN cache
       ↓
~2-3 minutes → live at hasankurt.com
```

Static export hosted on S3, served globally via CloudFront CDN. HTML files are served with `no-cache`, static assets (JS/CSS) with 1-year cache since they are content-hashed on every build.

---

## Local Development

```bash
npm install
npm run dev
```

## Updating Content

All personal content lives in `data/content.ts` — projects, articles, organizations. No other files need to be touched for content updates.

---

## AWS Infrastructure Setup

The infrastructure is manually provisioned (Terraform setup planned). Below are the required AWS services:

### 1. S3 Bucket

- Create a bucket with the same name as your domain (e.g. `your-bucket-name`)
- Block all public access — CloudFront will serve the content via OAC
- Do not enable static website hosting

### 2. CloudFront Distribution

- Origin: S3 bucket (not the static website endpoint)
- Origin Access Control (OAC): enabled — S3 only accepts requests from CloudFront
- Viewer protocol policy: Redirect HTTP to HTTPS
- Alternate domain names: `your-bucket-name` and `www.hasankurt.com`
- Custom SSL certificate: ACM (must be in `us-east-1` for CloudFront)
- Default root object: `index.html`
- Custom error page: 403 → `/index.html` with 200 response (for client-side routing)

### 3. ACM Certificate

- Request in `us-east-1` (required for CloudFront)
- Validation method: DNS
- Add the CNAME records to Route 53 for validation

### 4. Route 53

- A record (apex): alias → CloudFront distribution
- A record (www): alias → same CloudFront distribution

---

## CI/CD Pipeline Setup

### Step 1 — Create IAM Policy

Go to **IAM → Policies → Create policy → JSON** and paste the following. Replace `YOUR_ACCOUNT_ID` and `YOUR_DISTRIBUTION_ID`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

Policy name: `portfolio-github-actions-policy`

> **Note:** Account ID in the ARN must be written without dashes (e.g. `242874195086`, not `2428-7419-5086`).

### Step 2 — Create IAM User

- Go to **IAM → Users → Create user**
- Username: `github-actions-deployer`
- Do not enable AWS Console access — programmatic access only
- Attach the policy created in Step 1 directly
- After creation, go to **Security credentials → Create access key**
- Select "Application running outside AWS"
- Copy and save the Access Key ID and Secret Access Key — they won't be shown again

### Step 3 — Add GitHub Secrets

Go to **GitHub → repo → Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | `us-east-1` |
| `S3_BUCKET_NAME` | `your-bucket-name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID (starts with `E`) |

### Step 4 — Add Workflow File

Create `.github/workflows/deploy.yml` in the repository (already present). Every push to `main` triggers the pipeline automatically.

---

## Deployment

After the setup above, deployment is fully automatic:

```bash
git add .
git commit -m "your message"
git push origin main
# Done — check the Actions tab on GitHub
```

To trigger a manual re-deploy without code changes:

**GitHub → Actions → Deploy to S3 + CloudFront → Run workflow**

---

## Live

[hasankurt.com](https://hasankurt.com)