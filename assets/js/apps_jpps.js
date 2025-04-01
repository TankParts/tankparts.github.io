const apps = [
    {
      name: "Sentral",
      url: "https://jellsparkps.sentral.com.au/",
      logo: "assets/images/app_logos/sentral.png",
      description: "School management system.",
      tags: ["Staff", "Admin"],
      loginType: "edupass"
    },
    {
      name: "Outlook",
      url: "https://outlook.com/owa/education.vic.gov.au",
      logo: "assets/images/app_logos/microsoft-outlook.svg",
      description: "Staff @education email account.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "eduPay",
      url: "https://edupay.eduweb.vic.gov.au/",
      logo: "assets/images/app_logos/edupay.png",
      description: "Staff payroll and HR system.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "Department of Education",
      url: "https://www.vic.gov.au/education/",
      logo: "assets/images/app_logos/edumail.png",
      description: "Government education resources and information.",
      tags: ["Staff"],
      loginType: "none"
    },
    {
      name: "Policy and Advisory Library",
      url: "https://www2.education.vic.gov.au/pal",
      logo: "assets/images/app_logos/edumail.png",
      description: "Find operational policies and guidance for schools.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "Arc",
      url: "https://arc.educationapps.vic.gov.au/",
      logo: "assets/images/app_logos/arc.png",
      description: "Resources, professional learning, events and software.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "DE Services Portal",
      url: "https://services.educationapps.vic.gov.au/",
      logo: "assets/images/app_logos/servicenow.png",
      description: "Department of Education services portal.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "Jells Park Primary School",
      url: "https://www.jpps.vic.edu.au/",
      logo: "assets/images/app_logos/jpps.png",
      description: "Access the school website.",
      tags: ["Staff"],
      loginType: "none"
    },
    {
      name: "IT Support Help Desk",
      url: "https://jellsparkps.sentral.com.au/taskpad/tasks/itsupport/add",
      logo: "assets/images/app_logos/sentral.png",
      description: "Create a new IT support request.",
      tags: ["Staff", "Admin"],
      loginType: "edupass"
    },
    {
      name: "Google Classroom",
      url: "https://classroom.google.com",
      logo: "assets/images/app_logos/classroom.png",
      description: "Manage classrooms online.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Google Mail",
      url: "https://mail.google.com",
      logo: "assets/images/app_logos/gmail.png",
      description: "Student @schools email account.",
      tags: ["Student"],
      loginType: "edupass"
    },
    {
      name: "Google Drive",
      url: "https://drive.google.com/",
      logo: "assets/images/app_logos/drive.png",
      description: "Cloud storage by Google.",
      tags: ["Staff", "Student", "Admin"],
      loginType: "edupass"
    },
    {
      name: "Google Calendar",
      url: "https://calendar.google.com",
      logo: "assets/images/app_logos/calendar.png",
      description: "Calendar and scheduling.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Google Docs",
      url: "https://docs.google.com",
      logo: "assets/images/app_logos/gdocs.png",
      description: "Word processing.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Google Slides",
      url: "https://slides.google.com",
      logo: "assets/images/app_logos/gslides.png",
      description: "Presentation tool.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Google Sheets",
      url: "https://sheets.google.com",
      logo: "assets/images/app_logos/sheets.png",
      description: "Spreadsheets by Google.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Google Forms",
      url: "https://forms.google.com",
      logo: "assets/images/app_logos/forms.png",
      description: "Create forms and quizzes.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Google Meet",
      url: "https://meet.google.com",
      logo: "assets/images/app_logos/google-meet.svg",
      description: "Video conferencing.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "Clickview",
      url: "https://clickview.com.au",
      logo: "assets/images/app_logos/clickview.png",
      description: "Educational video platform.",
      tags: ["Staff", "Student"],
      loginType: "edupass"
    },
    {
      name: "Essential Assessment",
      url: "https://app.essentialassessment.com.au/login/",
      logo: "assets/images/app_logos/essentialassessment.png",
      description: "Educator login page.",
      tags: ["Staff"],
      loginType: "other"
    },
    {
      name: "Essential Assessment",
      url: "https://app.essentialassessment.com.au/student/",
      logo: "assets/images/app_logos/essentialassessment.png",
      description: "Student login page.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Google Workspace Admin Console",
      url: "https://admin.google.com/",
      logo: "assets/images/app_logos/google.png",
      description: "Administer Google accounts.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "PaperCut",
      url: "http://papercut:9191/user",
      logo: "assets/images/app_logos/papercut.png",
      description: "Check your papercut balance.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "PaperCut Admin Portal",
      url: "http://papercut:9191/admin",
      logo: "assets/images/app_logos/papercut.png",
      description: "Admin printing dashboard.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "Zabbix",
      url: "#",
      logo: "assets/images/app_logos/zabbix.png",
      description: "Network status and dashboard.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "Apple School Manager",
      url: "https://school.apple.com/",
      logo: "assets/images/app_logos/asm.png",
      description: "Manage Apple devices.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "PFSense",
      url: "#",
      logo: "assets/images/app_logos/pfsense.png",
      description: "Manage firewall & routing. **URL TBA**",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "eduPass Admin Portal",
      url: "https://edupassadminportal.education.vic.gov.au/IdentityManagement/default.aspx",
      logo: "assets/images/app_logos/edupass.png",
      description: "Manage staff and student eduPass accounts.",
      tags: ["Admin"],
      loginType: "edupass"
    },
    {
      name: "eduSTAR MC",
      url: "https://apps.edustar.vic.edu.au/edustarmc/",
      logo: "assets/images/app_logos/edustar.png",
      description: "eduSTAR Management Centre.",
      tags: ["Admin"],
      loginType: "edupass"
    },
  ];
  