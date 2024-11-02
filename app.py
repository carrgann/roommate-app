# app.py
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory storage for profiles
profiles = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_profile', methods=['POST'])
def add_profile():
    name = request.form['name']
    cleanliness = request.form['cleanliness']
    sleep_schedule = request.form['sleep_schedule']
    lifestyle = request.form['lifestyle']

    # Store profile
    profile = {
        'name': name,
        'cleanliness': cleanliness,
        'sleep_schedule': sleep_schedule,
        'lifestyle': lifestyle
    }
    profiles.append(profile)
    return redirect(url_for('index'))

@app.route('/match')
def match():
    # Simple matching logic: just returns all profiles for simplicity
    return render_template('index.html', profiles=profiles)

if __name__ == '__main__':
    app.run(debug=True)
