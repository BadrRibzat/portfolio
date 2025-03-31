#!/usr/bin/env python3
from datetime import datetime
import pdfkit

# Resume Data
resume_data = {
    "name": "Badr Ribzat",
    "address": "Route de Larache Zahrae 2 Bloc 11 NR 07, Ksar El Kebir, Morocco",
    "phone": "+212 627-764176",
    "email": "badrribzat@gmail.com",
    "dob": "December 14, 1990",
    "languages": ["Arabic (Native)", "French (Proficient)", "English (Professional Working Proficiency)"],
    
    "education": [
        {"name": "Diploma in Pharmacy Technician", "date": "Awarded"},
        {"name": "Diploma in Hospitality Management", "date": "Awarded"}
    ],
    
    "certifications": [
        "Python Programming (Multiple Certifications) - 2022-2023",
        "JavaScript Programming (Intermediate) - 2022-2023",
        "SQL Certification - 2023",
        "Web Development Fundamentals - 2022",
        "Digital Marketing (Google Certified) - 2020",
        "Social Media Marketing - 2022",
        "Professional English - Multiple Specializations (2020-2023)",
        "Cariste Authorization (Forklift Operation) - 2023",
        "Cancer Studies Certification - 2022",
        "Nutrition Science - 2020",
        "Culinary Arts Certification - 2021"
    ],
    
    "technical_skills": [
        "Programming: Python, JavaScript, SQL, HTML/CSS",
        "Frameworks: Flask, Django",
        "Databases: MySQL, MongoDB",
        "DevOps: Linux System Administration, Shell Scripting",
        "Web Development: REST APIs, Microservices",
        "Tools: Git, GitHub, Docker",
        "Digital Marketing: SEO, Social Media Management",
        "Languages: Arabic, French, English"
    ],
    
    "projects": {
        "Learning Projects": [
            "AirBnB Clone (Full Stack Development)",
            "System Engineering & DevOps Projects",
            "API Development Projects",
            "Low-Level Programming (C)",
            "Backend Storage Solutions"
        ],
        "Personal Projects": [
            "English Learning Platform",
            "Tech Learning Repository",
            "Presentation Systems",
            "Educational API Development"
        ]
    },
    
    "github": {
        "profile": "https://github.com/BadrRibzat",
        "learning": [
            "https://github.com/BadrRibzat/binary_trees",
            "https://github.com/BadrRibzat/alx-low_level_programming",
            "https://github.com/BadrRibzat/AirBnB_clone_v2",
            "https://github.com/BadrRibzat/alx-system_engineering-devops"
        ],
        "personal": [
            "https://github.com/BadrRibzat/Tech-Learn",
            "https://github.com/BadrRibzat/English-Learning-App",
            "https://github.com/BadrRibzat/project_api"
        ]
    }
}

# Generate HTML Resume
html_template = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{resume_data['name']} - Resume</title>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; }}
        h1 {{ color: #2c3e50; }}
        h2 {{ color: #34495e; border-bottom: 2px solid #3498db; }}
        .section {{ margin-bottom: 25px; }}
        .certification-list {{ columns: 2; }}
    </style>
</head>
<body>
    <h1>{resume_data['name']}</h1>
    <p>{resume_data['address']}<br>
    {resume_data['phone']} | {resume_data['email']}<br>
    Date of Birth: {resume_data['dob']}</p>

    <div class="section">
        <h2>Technical Skills</h2>
        <ul>
            {"".join(f"<li>{skill}</li>" for skill in resume_data['technical_skills'])}
        </ul>
    </div>

    <div class="section">
        <h2>Certifications</h2>
        <div class="certification-list">
            <ul>
                {"".join(f"<li>{cert}</li>" for cert in resume_data['certifications'])}
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Projects</h2>
        <h3>Learning Projects</h3>
        <ul>
            {"".join(f"<li>{proj}</li>" for proj in resume_data['projects']['Learning Projects'])}
        </ul>
        
        <h3>Personal Projects</h3>
        <ul>
            {"".join(f"<li>{proj}</li>" for proj in resume_data['projects']['Personal Projects'])}
        </ul>
    </div>

    <div class="section">
        <h2>Education</h2>
        <ul>
            {"".join(f"<li>{edu['name']} - {edu['date']}</li>" for edu in resume_data['education'])}
        </ul>
    </div>

    <div class="section">
        <h2>Languages</h2>
        <p>{", ".join(resume_data['languages'])}</p>
    </div>

    <div class="section">
        <h2>GitHub Portfolio</h2>
        <p>Profile: <a href="{resume_data['github']['profile']}">{resume_data['github']['profile']}</a></p>
        <h3>Learning Repositories</h3>
        <ul>
            {"".join(f"<li><a href='{repo}'>{repo.split('/')[-1]}</a></li>" for repo in resume_data['github']['learning'])}
        </ul>
        <h3>Personal Repositories</h3>
        <ul>
            {"".join(f"<li><a href='{repo}'>{repo.split('/')[-1]}</a></li>" for repo in resume_data['github']['personal'])}
        </ul>
    </div>
</body>
</html>
"""

# Save and Convert to PDF
with open("Badr_Ribzat_Resume.html", "w") as f:
    f.write(html_template)

pdfkit.from_file("Badr_Ribzat_Resume.html", "Badr_Ribzat_Resume.pdf")

print("Resume generated successfully: Badr_Ribzat_Resume.pdf")

# Job Suggestions
jobs = [
    "Full Stack Developer (Python/JavaScript)",
    "Backend Developer (Python/APIs)",
    "Technical Support Engineer",
    "Digital Marketing Specialist",
    "IT Trainer/Technical Instructor",
    "Software Development Technical Writer",
    "Hospitality IT Systems Manager",
    "Pharmaceutical Software Support",
    "E-learning Platform Developer",
    "International Technical Customer Support",
    "Remote Software Developer",
    "Technical Project Coordinator",
    "DevOps Engineer (Junior Level)",
    "Database Administrator (Junior Level)",
    "Cross-cultural Technical Consultant"
]

print("\nSuggested Job Roles Based on Your Profile:")
for i, job in enumerate(jobs, 1):
    print(f"{i}. {job}")
