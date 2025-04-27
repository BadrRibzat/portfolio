#!/usr/bin/env python3
import pdfkit
from datetime import datetime
import os
import shutil

# --- CONFIGURATION ---
RESUME_PDF_PATH = "/home/badr/badr-portfolio/src/assets/my-documents/BadrRibzat.pdf"

# --- UPDATED RESUME DATA (ATS-OPTIMIZED) ---
resume_data = {
    "name": "Badr Ribzat",
    "title": "Full Stack Developer | API Specialist | Cloud Enthusiast",
    "contact": {
        "location": "Ksar El Kebir, Morocco",
        "phone": "+212 627-764176 (WhatsApp)",
        "email": "badrribzat@gmail.com",
        "github": "github.com/BadrRibzat",
        "linkedin": "linkedin.com/in/badr-ribzat14121990",
        "portfolio": "badrribzat.github.io/portfolio"
    },
    
    # --- PROJECTS FIRST (Most important for tech roles) ---
    "projects": [
        {
            "name": "IT Learning Platform API",
            "description": "Designed and deployed a scalable educational API with 100+ daily users",
            "technologies": ["Python", "FastAPI", "MongoDB", "Docker", "JWT Auth"],
            "achievements": [
                "Reduced API response time by 30% through query optimization",
                "Implemented CI/CD pipelines cutting deployment time by 40%",
                "Achieved 100% Swagger documentation coverage"
            ],
            "url": "https://it-learn-backend.onrender.com"
        },
        {
            "name": "AI Chatbot Assistant",
            "description": "Built an NLP-powered chatbot for educational Q&A",
            "technologies": ["Python", "NLTK", "Flask", "React"],
            "achievements": [
                "Reached 85% intent recognition accuracy",
                "Optimized to handle 50+ concurrent users"
            ],
            "url": "https://chatbot-assistant-frontend.vercel.app"
        }
    ],
    
    # --- TECHNICAL SKILLS (Keywords for ATS) ---
    "technical_skills": {
        "Languages": ["Python", "JavaScript", "SQL", "HTML/CSS", "Bash"],
        "Backend": ["Flask", "FastAPI", "REST APIs", "Microservices"],
        "DevOps": ["Docker", "AWS", "CI/CD", "Linux"],
        "Frontend": ["React", "Tailwind CSS"],
        "Tools": ["Git", "Postman", "JIRA"]
    },
    
    # --- EDUCATION & CERTIFICATIONS ---
    "education": [
        {
            "degree": "Software Engineering Foundations",
            "institution": "ALX Program",
            "date": "2024",
            "details": ["Top performer (Score: 106.76%)"]
        }
    ],
    
    "certifications": [
        "Python Programming Certifications (Beginner to Advanced)",
        "JavaScript Intermediate Certification",
        "SQL Database Design",
        "Web Development Fundamentals",
        "Nutrition Science (Arabic)"
    ],
    
    # --- TRANSFERABLE SKILLS SECTION ---
    "additional_skills": [
        {
            "category": "Languages",
            "items": [
                "Arabic (Native)",
                "French (Professional)",
                "English (Professional)",
                "Spanish (Beginner - Learning)"
            ]
        },
        {
            "category": "Other Qualifications",
            "items": [
                "Driver’s License (Car & Forklift)",
                "Healthcare/Nutrition Background",
                "Digital Marketing Experience"
            ]
        }
    ],
    
    # --- WORK EXPERIENCE (Highlight transferable skills) ---
    "experience": [
        {
            "role": "Digital Marketing Consultant",
            "type": "Freelance",
            "date": "2020-2022",
            "details": [
                "Managed social media campaigns with 10K+ reach",
                "Improved client engagement by 35% through analytics"
            ]
        },
        {
            "role": "Hospitality Manager",
            "type": "Full-time",
            "date": "2015-2019",
            "details": [
                "Led teams of 5+ staff members",
                "Developed conflict resolution and customer service skills"
            ]
        }
    ]
}

# --- GENERATE HTML RESUME ---
html_template = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{resume_data['name']} - Resume</title>
    <meta charset="UTF-8">
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; margin: 0 auto; max-width: 800px; padding: 20px; }}
        h1 {{ color: #2c3e50; margin-bottom: 5px; }}
        h2 {{ color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px; }}
        .contact {{ margin-bottom: 15px; }}
        .section {{ margin-bottom: 20px; }}
        .project, .job {{ margin-bottom: 15px; }}
        .skills-container {{ display: flex; flex-wrap: wrap; gap: 15px; }}
        .skill-category {{ flex: 1; min-width: 200px; }}
        .date {{ float: right; color: #666; }}
        ul {{ padding-left: 20px; }}
    </style>
</head>
<body>
    <h1>{resume_data['name']}</h1>
    <p><strong>{resume_data['title']}</strong></p>
    
    <div class="contact">
        {resume_data['contact']['location']} | 
        {resume_data['contact']['phone']} | 
        {resume_data['contact']['email']}<br>
        GitHub: {resume_data['contact']['github']} | 
        Portfolio: {resume_data['contact']['portfolio']}
    </div>
    
    <!-- PROJECTS FIRST -->
    <div class="section">
        <h2>Technical Projects</h2>
        {''.join(
            f'<div class="project">'
            f'<h3>{p["name"]}</h3>'
            f'<p><em>{p["description"]}</em></p>'
            f'<p><strong>Tech:</strong> {", ".join(p["technologies"])}</p>'
            f'<ul>{"".join(f"<li>{a}</li>" for a in p["achievements"])}</ul>'
            f'<p><strong>Link:</strong> {p["url"]}</p>'
            f'</div>'
            for p in resume_data['projects']
        )}
    </div>
    
    <!-- TECHNICAL SKILLS -->
    <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-container">
            {''.join(
                f'<div class="skill-category"><strong>{cat}:</strong><ul>'
                + ''.join(f'<li>{skill}</li>' for skill in skills)
                + '</ul></div>'
                for cat, skills in resume_data['technical_skills'].items()
            )}
        </div>
    </div>
    
    <!-- EDUCATION & CERTS -->
    <div class="section">
        <h2>Education & Certifications</h2>
        {''.join(
            f'<h3>{e["degree"]} <span class="date">{e["date"]}</span></h3>'
            f'<p>{e["institution"]}</p>'
            + (f'<ul>{"".join(f"<li>{d}</li>" for d in e["details"])}</ul>' if "details" in e else "")
            for e in resume_data['education']
        )}
        <h3>Certifications</h3>
        <ul>
            {"".join(f"<li>{c}</li>" for c in resume_data['certifications'])}
        </ul>
    </div>
    
    <!-- TRANSFERABLE SKILLS -->
    <div class="section">
        <h2>Additional Skills</h2>
        <div class="skills-container">
            {''.join(
                f'<div class="skill-category"><strong>{s["category"]}:</strong><ul>'
                + ''.join(f'<li>{i}</li>' for i in s["items"])
                + '</ul></div>'
                for s in resume_data['additional_skills']
            )}
        </div>
    </div>
    
    <!-- WORK EXPERIENCE -->
    <div class="section">
        <h2>Professional Experience</h2>
        {''.join(
            f'<div class="job">'
            f'<h3>{j["role"]} <span class="date">{j["date"]}</span></h3>'
            f'<p><em>{j["type"]}</em></p>'
            f'<ul>{"".join(f"<li>{d}</li>" for d in j["details"])}</ul>'
            f'</div>'
            for j in resume_data['experience']
        )}
    </div>
</body>
</html>
"""

# --- GENERATE FILES ---
def generate_resume():
    timestamp = datetime.now().strftime("%Y%m%d")
    html_file = f"Badr_Ribzat_Resume_{timestamp}.html"
    pdf_file = f"Badr_Ribzat_Resume_{timestamp}.pdf"
    
    # Save HTML
    with open(html_file, "w") as f:
        f.write(html_template)
    
    # Convert to PDF
    pdfkit.from_file(html_file, pdf_file)
    
    # Update portfolio copy
    if os.path.exists(RESUME_PDF_PATH):
        os.remove(RESUME_PDF_PATH)
    shutil.copy2(pdf_file, RESUME_PDF_PATH)
    
    print(f"""
✅ Resume generated successfully:
- HTML: {html_file}
- PDF: {pdf_file}
- Portfolio copy updated at: {RESUME_PDF_PATH}

Next steps:
1. Tailor this for specific jobs by adding keywords from job descriptions
2. Share on LinkedIn with a post about your projects
3. Apply to 10+ jobs/week using this resume
""")

if __name__ == "__main__":
    generate_resume()
