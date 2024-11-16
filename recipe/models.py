# recipe/models.py
from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    steps = models.TextField()
    image = models.ImageField(upload_to='recipe_images/', blank=True, null=True)  # Image field

    def __str__(self):
        return self.name
