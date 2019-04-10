from django.urls import path, include


from .views import(
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
    UpdateAPIView,
    DestroyAPIView
)

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('create/', ArticleCreateView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
    path('<pk>/update/', ArticleDetailView.as_view()),
    path('<pk>/delete/', ArticleDetailView.as_view()),

]
