from django.db import models


class Lists(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.example

class Job(models.Model):
    JobTitle = models.TextField(max_length=100)
    Company = models.TextField()
    Location = models.TextField()
    Lists = models.TextField()

    def __str__(self):
        return self.example