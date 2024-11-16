# recipe/views.py
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from .models import Recipe
from .forms import RecipeForm
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate, login

from django.contrib.auth.forms import AuthenticationForm
from django.urls import reverse

def home(request):
    query = request.GET.get('q', '')  # Get the query from the request
    if query:
        recipes = Recipe.objects.filter(name__icontains=query)  # Search by recipe name
    else:
        recipes = Recipe.objects.all()  # Show all recipes if no query

    return render(request, 'recipe/home.html', {'recipes': recipes, 'query': query})



def add_recipe(request):
    if request.method == 'POST':
        form = RecipeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = RecipeForm()
    return render(request, 'recipe/add_recipe.html', {'form': form})

def login_view(request):
    # Handle login logic here
    return render(request, 'recipe/login.html')


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Log in the user automatically after registration
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'recipe/register.html', {'form': form})



def recipe_detail(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    return render(request, 'recipe/recipe_detail.html', {'recipe': recipe})

def edit_recipe(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    
    if request.method == "POST":
        form = RecipeForm(request.POST, request.FILES, instance=recipe)
        if form.is_valid():
            form.save()
            

            return redirect(reverse('recipe_detail', args=[recipe.id]))
    else:
        form = RecipeForm(instance=recipe)
    
    return render(request, 'recipe/edit_recipe.html', {'form': form, 'recipe': recipe})





def validate_image(image):
    if not image.name.endswith(('jpg', 'jpeg', 'png')):
        raise ValidationError("Only JPG, JPEG, and PNG files are allowed.")
    return image
