<a href="https://coverage-badge.samuelcolvin.workers.dev/redirect/deusdevok/flashcards-app" target="_blank">
    <img src="https://coverage-badge.samuelcolvin.workers.dev/deusdevok/flashcards-app.svg" alt="Coverage">
</a>

# Backend (Django)

## General instructions

Create a `.env` file with your secret key:

```
SECRET_KEY=your-randomly-generated-secret-key
```

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
uv run coverage report
uv run coverage xml
uv run genbadge coverage -o coverage-badge.svg
```

## Migrations

When changing models, migrations need to be correctly run:

* Step 1: `python manage.py makemigrations`
* Step 2: `python manage.py migrate`

Not null constraint erros may appear sometimes. When adding a new column with `default=None`, you need to also include `null=True`.

Another way to solve this problem is to include a default value different than `None`. For example: `default=''`.

## Audit backend requirements

To audit requirements, run:

```
python -m pip_audit -r .\backend\requirements.txt
```