from django.db import models

# Create your models here.


class Article(models.Model):
    """Model definition for Article."""
    title = models.CharField(max_length=120)
    content = models.TextField()

    # TODO: Define fields here

    class Meta:
        """Meta definition for Article."""

        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

    def __str__(self):
        """Unicode representation of Article."""
        return self.title
