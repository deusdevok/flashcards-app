# Generated by Django 5.0.6 on 2024-05-18 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flashcards', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='flashcard',
            name='new_column',
            field=models.TextField(default=None, null=True),
        ),
    ]
