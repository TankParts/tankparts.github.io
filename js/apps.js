const apps = [
    {
      name: "Sentral",
      url: "https://wallaranops.sentral.com.au/",
      logo: "images/app/sentral.png",
      description: "School management system.",
      tags: ["Staff", "Admin"],
      loginType: "edupass"
    },
    {
      name: "Education Mail",
      url: "#",
      logo: "images/app/edumail.png",
      description: "Department email access.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "eduPay",
      url: "#",
      logo: "images/app/edupay.png",
      description: "Staff payroll and HR system.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "Wallarano Primary School",
      url: "#",
      logo: "images/app/wallarano.png",
      description: "Access the school website.",
      tags: ["Staff", "Student"],
      loginType: "none"
    },
    {
      name: "Google Drive",
      url: "https://drive.google.com/",
      logo: "images/app/drive.png",
      description: "Cloud storage by Google.",
      tags: ["Staff", "Student", "Admin"],
      loginType: "school"
    },
    {
      name: "Google Mail",
      url: "https://mail.google.com",
      logo: "images/app/gmail.png",
      description: "Email by Google.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Classroom",
      url: "https://classroom.google.com",
      logo: "images/app/classroom.png",
      description: "Manage classrooms online.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Calendar",
      url: "https://calendar.google.com",
      logo: "images/app/calendar.png",
      description: "Calendar and scheduling.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Google Meet",
      url: "https://meet.google.com",
      logo: "images/app/meet.png",
      description: "Video conferencing.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Google Docs",
      url: "https://docs.google.com",
      logo: "images/app/gdocs.png",
      description: "Word processing.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Slides",
      url: "https://slides.google.com",
      logo: "images/app/gslides.png",
      description: "Presentation tool.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Sheets",
      url: "https://sheets.google.com",
      logo: "images/app/sheets.png",
      description: "Spreadsheets by Google.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Forms",
      url: "https://forms.google.com",
      logo: "images/app/forms.png",
      description: "Create forms and quizzes.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Clickview",
      url: "https://clickview.com.au",
      logo: "images/app/clickview.png",
      description: "Educational video platform.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Epic!",
      url: "https://www.getepic.com",
      logo: "images/app/epic.png",
      description: "Digital reading library.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Quick Links",
      url: "#",
      logo: "images/app/quicklinks.png",
      description: "Access useful links.",
      tags: ["Staff", "Student"],
      loginType: "none"
    },
    {
      name: "SeeSaw",
      url: "https://web.seesaw.me",
      logo: "images/app/seesaw.png",
      description: "Digital portfolios.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "PM eCollection",
      url: "https://pmecollection.com.au",
      logo: "images/app/pmbooks.png",
      description: "Digital PM readers.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "SunShine Online",
      url: "https://www.sunshineonline.com.au",
      logo: "images/app/sunshine.png",
      description: "Literacy and numeracy.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Essential Assessment",
      url: "https://www.essentialassessment.com.au",
      logo: "images/app/essentialassessment.png",
      description: "Online assessments.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "ACER Testing",
      url: "https://oars.acer.edu.au",
      logo: "images/app/acer.png",
      description: "Online testing system.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Tinkercad",
      url: "https://www.tinkercad.com",
      logo: "images/app/tinkercad.png",
      description: "3D design and coding tool.",
      tags: ["Student"],
      loginType: "school"
    },
    {
      name: "Code.org",
      url: "https://code.org",
      logo: "images/app/codeorg.png",
      description: "Learn coding basics.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "micro:bit",
      url: "https://microbit.org",
      logo: "images/app/microbit.png",
      description: "Program tiny devices.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Scratch",
      url: "https://scratch.mit.edu",
      logo: "images/app/scratch.png",
      description: "Create interactive projects.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Prodigy",
      url: "https://www.prodigygame.com",
      logo: "images/app/prodigy.png",
      description: "Math game adventure.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "School Survey",
      url: "#",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Survey",
      description: "Give feedback on learning.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "eSmart Digital License",
      url: "#",
      logo: "images/app/esmart.png",
      description: "Learn about online safety.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Pivot Wellbeing Survey",
      url: "#",
      logo: "images/app/pivot.png",
      description: "Student wellbeing feedback.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "JAMF Cloud",
      url: "https://wallaranops.jamfcloud.com/",
      logo: "images/app/jamf.png",
      description: "Device management.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "Google Workspace Admin Console",
      url: "https://admin.google.com/",
      logo: "images/app/google.png",
      description: "Administer Google accounts.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "PaperCut",
      url: "http://5055prs01:9191/admin",
      logo: "images/app/papercut.png",
      description: "Admin printing dashboard.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "IT Asset Management",
      url: "http://itassets.wallarano-ps.vic.edu.au/",
      logo: "images/app/itassets.png",
      description: "Track school IT equipment.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "Zabbix",
      url: "http://status.wallarano-ps.vic.edu.au/zabbix/",
      logo: "images/app/zabbix.png",
      description: "Network status and dashboard.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "Apple School Manager",
      url: "https://school.apple.com/",
      logo: "images/app/asm.png",
      description: "Manage Apple devices.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "PFSense",
      url: "https://10.131.240.62/",
      logo: "images/app/pfsense.png",
      description: "Manage firewall & routing.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "TechAssist",
      url: "http://techassist.wallarano-ps.vic.edu.au/",
      logo: "images/app/wallarano.png",
      description: "IT support tools.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "eduPass Admin Portal",
      url: "https://edupassadminportal.education.vic.gov.au/IdentityManagement/default.aspx",
      logo: "images/app/edupass.png",
      description: "Manage staff and student eduPass accounts.",
      tags: ["Admin"],
      loginType: "edupass"
    },
    {
      name: "eduSTAR Management Centre",
      url: "https://apps.edustar.vic.edu.au/edustarmc/",
      logo: "images/app/edustar.png",
      description: "School Technology Management Centre.",
      tags: ["Admin"],
      loginType: "edupass"
    },
    {
      name: "WeKan",
      url: "http://10.131.240.77/b/R5Wn9DPqCtcYN6cKb/ict-support-team",
      logo: "images/app/wekan.png",
      description: "Project/task boards for admin.",
      tags: ["Admin"],
      loginType: "other"
    }
  ];
  