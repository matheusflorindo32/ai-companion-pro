# Security Policy

Never commit real `.env` files, API keys, access tokens, passwords, database credentials, private keys, or service-role credentials.

Use environment variables or the deployment platform's secret manager. Browser-exposed variables such as `VITE_*`, `NEXT_PUBLIC_*`, and `REACT_APP_*` must be treated as public and must never contain privileged secrets.

Before committing locally:

```bash
pip install pre-commit
pre-commit install
pre-commit run --all-files
```

GitHub Actions also runs Gitleaks on pushes and pull requests.

If a credential is exposed, revoke or rotate it immediately, remove it from the code and history where needed, and inspect CI logs, artifacts, releases, and frontend bundles for copies.
