from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateTimeField()
    notes = models.TextField()

    def __str__(self):
        return self.name


