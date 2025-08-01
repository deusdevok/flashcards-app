## Run locally with *uv*

- cd into the current folder
- Initialize uv project: `uv init .`
- Install requirements: `uv add -r requirements.txt`
- Run `uv sync`
- Initialize server: `uv run manage.py runserver`
- Run unittests: `uv run manage.py test`
- To update *requirements.txt* file (from the *pyproject.toml*): `uv pip freeze > requirements.txt`

## Swagger docs

Docs are in the url: `/api/schema/swagger-ui/`

## Coverage

1. Run all Django tests and collect coverage data in .coverage
`uv run coverage run manage.py test`
2.
```
uv run coverage xml
uv run genbadge coverage -o coverage-badge.svg
```