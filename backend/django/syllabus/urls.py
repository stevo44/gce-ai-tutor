from django.urls import path
from . import views

urlpatterns = [
    path('', views.register, name='register'),
    path('home/', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('diagnostic-assessment/', views.diagnostic_assessment, name='diagnostic_assessment'),
    path('learning-insights/', views.learning_insights, name='learning_insights'),
    path('post-register/', views.post_register, name='post_register'),
    path('quiz/', views.quiz, name='quiz'),
    path('student-performance/', views.student_performance, name='student_performance'),
    path('topmastery-breakdown/', views.topmastery_breakdown, name='topmastery_breakdown'),
    path('topics/', views.topics, name='topics'),
    path('ask/', views.ask, name='ask'),
    path('answer/', views.answer, name='answer'),
]
