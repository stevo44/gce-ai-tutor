from django.shortcuts import render
# from rest_framework import viewsets # Keeping this for future use if needed

def home(request):
    return render(request, 'syllabus/home.html')

def topics(request):
    return render(request, 'syllabus/topics.html')

def ask(request):
    if request.method == 'POST':
        # Placeholder for processing the question
        question = request.POST.get('question')
        topic_id = request.POST.get('topic_id')
        # Call to inference service would go here
        answer = "This is a placeholder answer from the AI." 
        return render(request, 'syllabus/answer.html', {'answer': answer})
    
    topic_id = request.GET.get('topic_id', '')
    return render(request, 'syllabus/ask.html', {'topic_id': topic_id})

def answer(request):
    # This might not be needed if 'ask' handles the post and renders answer directly, 
    # but keeping it if we want a separate view for results.
    # For now, 'ask' handles the display.
    return render(request, 'syllabus/answer.html')
