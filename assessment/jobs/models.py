from django.db import models


class Example(models.Model):
    example = models.TextField()

    def __str__(self):
        return self.example