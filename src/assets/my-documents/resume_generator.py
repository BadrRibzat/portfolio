#!/usr/bin/env python3
import pdfkit
from datetime import datetime

# UPDATED RESUME DATA WITH ATS OPTIMIZATION
resume_data = {
    "name": "Badr Ribzat",
    "title": "Full Stack Developer | API Specialist | DevOps Enthusiast",
    "contact": {
        "address": "Route de Larache Zahrae 2 Bloc 11 NR 07, Ksar El Kebir, Morocco",
        "phone": "+212 627-764176 (WhatsApp)",
        "alt_phone": "+212 622-200190",
        "email": "badrribzat@gmail.com",
        "github": "github.com/BadrRibzat",
        "linkedin": "linkedin.com/in/badr-ribzat14121990",
        "portfolio": "badrribzat.github.io/portfolio"  # NEW
    },
    
    "summary": """
    Passionate software engineer with 3+ years of hands-on experience in full-stack development,
    API design, and system architecture. Strong foundation in Python, JavaScript, and cloud technologies.
    Proven ability to deliver scalable solutions with expertise in Flask, FastAPI, Docker, and CI/CD pipelines.
    Excellent problem-solving skills combined with multilingual communication abilities.
    """,
    
    "technical_skills": {
        "Programming Languages": ["Python", "JavaScript", "SQL", "HTML5/CSS3", "C", "Bash"],
        "Frameworks & Libraries": ["Flask", "FastAPI", "Django", "React", "Tailwind CSS"],
        "DevOps & Cloud": ["Docker", "AWS", "CI/CD Pipelines", "Linux Administration"],
        "Databases": ["MySQL", "MongoDB", "Redis"],
        "Tools & Platforms": ["Git/GitHub", "Postman", "JIRA", "VS Code"],
        "Methodologies": ["RESTful APIs", "Microservices", "TDD", "Agile/Scrum"]
    },
    
    "projects": [
        {
            "name": "IT Learning Platform API",
            "description": "Developed a comprehensive educational API with JWT authentication and documentation",
            "technologies": ["Python", "FastAPI", "MongoDB", "Docker"],
            "achievements": [
                "Implemented Swagger UI documentation achieving 100% API endpoint coverage",
                "Designed scalable architecture handling 100+ concurrent users",
                "Integrated CI/CD pipeline reducing deployment time by 40%"
            ],
            "url": "https://it-learn-backend.onrender.com"
        },
        {
            "name": "Chatbot Assistant",
            "description": "Created an AI-powered educational chatbot with natural language processing",
            "technologies": ["Python", "NLTK", "Flask", "JavaScript"],
            "achievements": [
                "Achieved 85% accuracy in intent recognition",
                "Reduced response time to under 2 seconds through optimization"
            ],
            "url": "https://github.com/BadrRibzat/Chatbot-Assistant"
        }
    ],
    
    "education": [
        {
            "degree": "Software Engineering Foundations",
            "institution": "ALX Program",
            "date": "2024",
            "details": ["Validated with distinction (Score: 106.76%)"]
        },
        {
            "degree": "Diploma in Pharmacy Technician",
            "institution": "Professional Training Institute",
            "date": "Awarded"
        }
    ],
    
    "certifications": [
        "Python Programming Certifications (Beginner to Advanced) - 2022-2023",
        "JavaScript Programming (Intermediate) - 2023",
        "SQL Certification - 2023",
        "Web Development Fundamentals - 2022",
        "Google Certified Digital Marketing - 2020"
    ],
    
    "languages": [
        {"language": "Arabic", "proficiency": "Native"},
        {"language": "French", "proficiency": "Professional Working Proficiency"},
        {"language": "English", "proficiency": "Professional Working Proficiency"},
        {"language": "Spanish", "proficiency": "Beginner (Currently Learning)"}
    ],
    
    "additional_experience": [
        "Digital Marketing Consultant (Freelance) - 2020-2022",
        "Hospitality Management - 2015-2019 (Developed transferable customer service and teamwork skills)"
    ]
}

# GENERATE ATS-OPTIMIZED HTML RESUME
html_template = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{resume_data['name']} - Professional Resume</title>
    <meta charset="UTF-8">
    <style>
        body {{ 
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            color: #333;
        }}
        h1 {{ 
            color: #2c3e50;
            margin-bottom: 5px;
            font-size: 28px;
        }}
        h2 {{
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
            margin-top: 25px;
            font-size: 20px;
        }}
        h3 {{
            margin-bottom: 5px;
            font-size: 18px;
        }}
        .contact-info {{
            margin-bottom: 20px;
            font-size: 15px;
        }}
        .section {{ 
            margin-bottom: 20px;
        }}
        ul {{
            margin-top: 5px;
            padding-left: 20px;
        }}
        li {{
            margin-bottom: 5px;
        }}
        .skills-container {{
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }}
        .skill-category {{
            flex: 1;
            min-width: 200px;
        }}
        .project {{
            margin-bottom: 15px;
        }}
        .date {{
            float: right;
            font-weight: normal;
        }}
        .two-column {{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }}
        .column {{
            width: 48%;
        }}
    </style>
</head>
<body>
    <h1>{resume_data['name']}</h1>
    <p><strong>{resume_data['title']}</strong></p>
    
    <div class="contact-info">
        {resume_data['contact']['address']} | 
        {resume_data['contact']['phone']} | 
        {resume_data['contact']['alt_phone']}<br>
        {resume_data['contact']['email']} | 
        Portfolio: {resume_data['contact']['portfolio']}<br>
        GitHub: {resume_data['contact']['github']} | 
        LinkedIn: {resume_data['contact']['linkedin']}
    </div>
    
    <div class="section">
        <h2>Professional Summary</h2>
        <p>{resume_data['summary']}</p>
    </div>
    
    <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-container">
            {''.join(
                f'<div class="skill-category"><strong>{category}:</strong><ul>'
                + ''.join(f'<li>{skill}</li>' for skill in skills)
                + '</ul></div>'
                for category, skills in resume_data['technical_skills'].items()
            )}
        </div>
    </div>
    
    <div class="section">
        <h2>Projects</h2>
        {''.join(
            f'<div class="project">'
            f'<h3>{project["name"]} <span class="date">{project.get("date", "")}</span></h3>'
            f'<p><em>{project["description"]}</em></p>'
            f'<p><strong>Technologies:</strong> {", ".join(project["technologies"])}</p>'
            f'<ul>'
            + ''.join(f'<li>{achievement}</li>' for achievement in project["achievements"])
            + f'</ul>'
            f'<p><strong>URL:</strong> {project["url"]}</p>'
            f'</div>'
            for project in resume_data['projects']
        )}
    </div>
    
    <div class="section">
        <h2>Education</h2>
        {''.join(
            f'<h3>{edu["degree"]} <span class="date">{edu["date"]}</span></h3>'
            f'<p>{edu["institution"]}</p>'
            + (f'<ul>{"".join(f"<li>{detail}</li>" for detail in edu["details"])}</ul>' if "details" in edu else "")
            for edu in resume_data['education']
        )}
    </div>
    
    <div class="two-column">
        <div class="column">
            <div class="section">
                <h2>Certifications</h2>
                <ul>
                    {"".join(f"<li>{cert}</li>" for cert in resume_data['certifications'])}
                </ul>
            </div>
        </div>
        
        <div class="column">
            <div class="section">
                <h2>Languages</h2>
                <ul>
                    {"".join(f"<li>{lang['language']} ({lang['proficiency']})</li>" for lang in resume_data['languages'])}
                </ul>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>Additional Experience</h2>
        <ul>
            {"".join(f"<li>{exp}</li>" for exp in resume_data['additional_experience'])}
        </ul>
    </div>
</body>
</html>
"""

# GENERATE FILES
timestamp = datetime.now().strftime("%Y%m%d")
html_filename = f"Badr_Ribzat_Resume_{timestamp}.html"
pdf_filename = f"Badr_Ribzat_Resume_{timestamp}.pdf"

with open(html_filename, "w") as f:
    f.write(html_template)

# CONVERT TO PDF
pdfkit.from_file(html_filename, pdf_filename)

print(f"""
Resume successfully generated:
- HTML Version: {html_filename}
- PDF Version: {pdf_filename}

Next Steps:
1. Review the resume formatting
2. Tailor for specific jobs by adjusting keywords
3. Save multiple versions for different roles
""")

# Add to the end of the script:
print("\nUpdating portfolio resume copy...")
import shutil
shutil.copy2(pdf_filename, "/home/badr/badr-portfolio/src/assets/my-documents/BadrRibzat.pdf")

