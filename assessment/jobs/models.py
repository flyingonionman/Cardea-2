from django.db import models


class Lists(models.Model):
    Name = models.CharField(max_length=100)
    Description = models.TextField()
    Image= models.TextField()
    Curator = models.TextField()

    def __str__(self):
        return self.example

class Job(models.Model):
    JobTitle = models.TextField(max_length=100)
    Company = models.TextField()
    Location = models.TextField()
    Lists = models.TextField()

    def __str__(self):
        return self.example