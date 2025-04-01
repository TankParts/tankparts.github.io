const apps = [
    {
      name: "Sentral",
      url: "https://wallaranops.sentral.com.au/",
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
      name: "CASES21",
      url: "https://rcases.eduweb.vic.gov.au/RDWeb/Pages/en-US/login.aspx",
      logo: "assets/images/app_logos/cases21.png",
      description: "School administration and finance system.",
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
      name: "Wallarano Primary School",
      url: "https://wallarano-ps.vic.edu.au/",
      logo: "assets/images/app_logos/wallarano.png",
      description: "Access the school website.",
      tags: ["Staff", "Student"],
      loginType: "none"
    },
    {
      name: "Google Drive",
      url: "https://drive.google.com/",
      logo: "assets/images/app_logos/drive.png",
      description: "Cloud storage by Google.",
      tags: ["Staff", "Student", "Admin"],
      loginType: "school"
    },
    {
      name: "Google Mail",
      url: "https://mail.google.com",
      logo: "assets/images/app_logos/gmail.png",
      description: "@wallarano-ps.vic.edu.au email account.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Classroom",
      url: "https://classroom.google.com",
      logo: "assets/images/app_logos/classroom.png",
      description: "Manage classrooms online.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Calendar",
      url: "https://calendar.google.com",
      logo: "assets/images/app_logos/calendar.png",
      description: "Calendar and scheduling.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Google Meet",
      url: "https://meet.google.com",
      logo: "assets/images/app_logos/meet.png",
      description: "Video conferencing.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Google Docs",
      url: "https://docs.google.com",
      logo: "assets/images/app_logos/gdocs.png",
      description: "Word processing.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Slides",
      url: "https://slides.google.com",
      logo: "assets/images/app_logos/gslides.png",
      description: "Presentation tool.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Sheets",
      url: "https://sheets.google.com",
      logo: "assets/images/app_logos/sheets.png",
      description: "Spreadsheets by Google.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Forms",
      url: "https://forms.google.com",
      logo: "assets/images/app_logos/forms.png",
      description: "Create forms and quizzes.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Clickview",
      url: "https://clickview.com.au",
      logo: "assets/images/app_logos/clickview.png",
      description: "Educational video platform.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Epic!",
      url: "https://www.getepic.com",
      logo: "assets/images/app_logos/epic.png",
      description: "Digital reading library.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Quick Links",
      url: "#",
      logo: "assets/images/app_logos/quicklinks.png",
      description: "Access useful links.",
      tags: ["Staff", "Student"],
      loginType: "none"
    },
    {
      name: "SeeSaw",
      url: "https://web.seesaw.me",
      logo: "assets/images/app_logos/seesaw.png",
      description: "Digital portfolios.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "PM eCollection",
      url: "https://pmecollection.com.au",
      logo: "assets/images/app_logos/pmbooks.png",
      description: "Digital PM readers.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "SunShine Online",
      url: "https://www.sunshineonline.com.au",
      logo: "assets/images/app_logos/sunshine.png",
      description: "Literacy and numeracy.",
      tags: ["Staff", "Student"],
      loginType: "other"
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
      name: "ACER Testing",
      url: "https://oars.acer.edu.au",
      logo: "assets/images/app_logos/acer.png",
      description: "Online testing system.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Tinkercad",
      url: "https://www.tinkercad.com/login",
      logo: "assets/images/app_logos/tinkercad.png",
      description: "3D design and coding tool.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Code.org",
      url: "https://code.org",
      logo: "assets/images/app_logos/codeorg.png",
      description: "Learn coding basics.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "micro:bit",
      url: "https://microbit.org",
      logo: "assets/images/app_logos/microbit.png",
      description: "Program tiny devices.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Scratch",
      url: "https://scratch.mit.edu",
      logo: "assets/images/app_logos/scratch.png",
      description: "Create interactive projects.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Prodigy",
      url: "https://www.prodigygame.com",
      logo: "assets/images/app_logos/prodigy.png",
      description: "Math game adventure.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "School Survey",
      url: "https://www.orima.com.au/atoss",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Survey",
      description: "Give feedback on learning.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "eSmart Digital License",
      url: "https://digitallicence.com.au/accounts/login/",
      logo: "assets/images/app_logos/esmart.png",
      description: "Learn about online safety.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Pivot Wellbeing Survey",
      url: "https://survey.pivotpl.com/login/wellbeing/FRXXJ",
      logo: "assets/images/app_logos/pivot.png",
      description: "Student wellbeing feedback.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "JAMF Cloud",
      url: "https://wallaranops.jamfcloud.com/",
      logo: "assets/images/app_logos/jamf.png",
      description: "Device management.",
      tags: ["Admin"],
      loginType: "school"
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
      url: "http://5055prs01:9191/admin",
      logo: "assets/images/app_logos/papercut.png",
      description: "Admin printing dashboard.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "IT Asset Management",
      url: "http://itassets.wallarano-ps.vic.edu.au/",
      logo: "assets/images/app_logos/itassets.png",
      description: "Track school IT equipment.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "Zabbix",
      url: "http://status.wallarano-ps.vic.edu.au/zabbix/",
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
      url: "https://10.131.240.62/",
      logo: "assets/images/app_logos/pfsense.png",
      description: "Manage firewall & routing.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "TechAssist",
      url: "http://techassist.wallarano-ps.vic.edu.au/",
      logo: "assets/images/app_logos/wallarano.png",
      description: "IT support tools.",
      tags: ["Admin"],
      loginType: "school"
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
    {
      name: "WeKan",
      url: "http://10.131.240.77/b/R5Wn9DPqCtcYN6cKb/ict-support-team",
      logo: "assets/images/app_logos/wekan.png",
      description: "Project/task boards for admin.",
      tags: ["Admin"],
      loginType: "other"
    }
  ];
  