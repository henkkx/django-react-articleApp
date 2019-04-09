from rest_framework import serializers
from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('title', 'content', 'description', 'likes', 'favorites', 'n_comments')
