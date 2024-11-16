# Recipe Book Project

The Recipe Book Application is a user-friendly platform designed to make managing and sharing recipes a seamless experience. It provides a visually appealing and interactive user interface (UI) that enhances the overall user experience.


---

## Features
- **User Authentication:**
  - User registration, login, and logout.
- **Recipe Management:**
  - Add, edit, delete, and view recipes.
  - Each recipe includes a name, image, ingredients, and the user who created it.
- **Responsive Design:**
  - Dark-themed user interface with hover effects and modern styling.
- **Image Upload:**
  - Users can upload images for their recipes.
- **Dynamic Navbar:**
  - Navbar adapts to user authentication status (e.g., shows "Login" or "Logout").
- **Secure Forms:**
  - CSRF protection for all forms.

---

## Installation

### Prerequisites
- Python 3.x
- Django 4.x (or the latest stable version)
- SQLite (default database for Django)
- Git (for version control)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ananyashetty7/receipebook
   cd recipebook
# Project Setup Instructions

### 1. Install `virtualenv` (if not already installed)
To get started, first install `virtualenv`:

```bash
pip install virtualenv
```

### 2. Create a Virtual Environment
Next, create a new virtual environment for the project:

```bash
virtualenv env
```

### 3. Activate the Virtual Environment
To activate the virtual environment, run the following command:

#### On Windows:
```bash
env\Scripts\activate
```

#### On macOS/Linux:
```bash
source envname/bin/activate
```

### 4. Install the Required Packages
After activating the virtual environment, install the dependencies from the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

### 5. Running the Application
To start the development server, use the following command:

```bash
python manage.py runserver
```

⚠ The development server will be started at `http://127.0.0.1:8000/`.

# Usage

### Adding a Recipe
1. Log in or register as a new user.
2. Navigate to "Add Recipe" from the navbar.
3. Fill out the form and submit.

### Editing a Recipe
1. Go to the recipe list on the homepage.
2. Click "Edit Recipe" on any recipe card.
3. Update the details and save changes.

### Viewing Recipes
1. Browse recipes on the homepage.
2. Click "View More" on any recipe card for detailed information.

### Search Recipes
1. Use the search bar on the homepage to search for specific recipes.
2. Type a keyword and press enter to filter the recipes based on the search term.

### Registering a New User
1. Navigate to the "Register" page from the navbar.
2. Fill out the registration form with your details (username, email, password).
3. Submit the form to create a new account.

### Logging In
1. Navigate to the "Login" page from the navbar.
2. Enter your registered username and password.
3. Click "Login" to access your account.


# Built With

- **Django**: Backend framework for rapid development.
- **HTML5 & CSS3**: For responsive and modern UI design.
- **SQLite**: Lightweight and easy-to-use database.
- **Bootstrap (Optional)**: For additional responsive styling (if used).

### Author
- **Anaya G Shetty**


