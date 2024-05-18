# Flashcards app

Django and React

## Backend

Todos:

* model `Flashcard` should have a unique `id`. Maybe a `uuid`. Is this automatic in Django?

### Migrations

When changing models, migrations need to be correctly run:

* Step 1: `python manage.py makemigrations`
* Step 2: `python manage.py migrate`

Not null constraint erros may appear sometimes. When adding a new column with `default=None`, you need to also include `null=True`.

Another way to solve this problem is to include a default value different than `None`. For example: `default=''`.