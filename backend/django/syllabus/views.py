from django.shortcuts import render

def home(request):
    return render(request, 'syllabus/home.html')

def topics(request):
    return render(request, 'syllabus/topics.html')

def chatbot(request):
    return render(request, 'syllabus/chatbot.html')

def diagnostic_assessment(request):
    return render(request, 'syllabus/diagnostic-assessment.html')

def learning_insights(request):
    return render(request, 'syllabus/learning-insights.html')

def login(request):
    return render(request, 'syllabus/login.html')

def post_register(request):
    return render(request, 'syllabus/post-register.html')

def quiz(request):
    return render(request, 'syllabus/quiz.html')

def register(request):
    return render(request, 'syllabus/register.html')

def student_performance(request):
    return render(request, 'syllabus/student-performance.html')

def topmastery_breakdown(request):
    return render(request, 'syllabus/topmastery-breakdown.html')

def ask(request):
    if request.method == 'POST':
        question = request.POST.get('question')
        topic_id = request.POST.get('topic_id')
        answer = "This is a placeholder answer from the AI." 
        return render(request, 'syllabus/answer.html', {'answer': answer})
    
    topic_id = request.GET.get('topic_id', '')
    return render(request, 'syllabus/ask.html', {'topic_id': topic_id})

def answer(request):
    return render(request, 'syllabus/answer.html')
