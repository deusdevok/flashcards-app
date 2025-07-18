![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# Flashcards app

Create a `.env` file with your secret key:

```
SECRET_KEY=your-randomly-generated-secret-key
```

Django and React. Run with Docker:

```
docker compose up --build
```

## Backend

Todos:

* model `Flashcard` should have a unique `id`. Maybe a `uuid`. Is this automatic in Django?

### Migrations

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

## This section will be removed

This is made for testing a Pull Request