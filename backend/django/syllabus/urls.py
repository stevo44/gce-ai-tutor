from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('topics/', views.topics, name='topics'),
    path('ask/', views.ask, name='ask'),
    path('answer/', views.answer, name='answer'),
]
