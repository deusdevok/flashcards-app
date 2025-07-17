from django.db import models

class Flashcard(models.Model):
    term = models.CharField(max_length=200)
    definition = models.TextField()
    category = models.CharField(max_length=150, null=True)

    def __str__(self):
        return self.term