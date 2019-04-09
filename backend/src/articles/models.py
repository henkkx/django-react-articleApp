from django.db import models

# Create your models here.


class Article(models.Model):
    """Model definition for Article."""
    title = models.CharField(max_length=120)
    content = models.TextField()
    description = models.TextField()
    likes = models.IntegerField(default = 0)
    favorites = models.IntegerField(default = 0)
    n_comments = models.IntegerField(default = 0)

    

    class Meta:
        """Meta definition for Article."""

        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

    def __str__(self):
        """Unicode representation of Article."""
        return self.title

class Comment(models.Model):
    """Model definition for Comment."""

    name = models.CharField(max_length=42)
    text = models.TextField()
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        """Meta definition for Comment."""

        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

    def __str__(self):
        """Unicode representation of Comment."""
        self.text
