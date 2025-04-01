const apps = [
    {
      name: "Sentral",
      url: "https://wallaranops.sentral.com.au/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Sentral",
      description: "School management system.",
      tags: ["Staff", "Admin"],
      loginType: "edupass"
    },
    {
      name: "Education Mail",
      url: "#",
      logo: "https://dummyimage.com/150x150/0288D1/fff&text=Mail",
      description: "Department email access.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "eduPay",
      url: "#",
      logo: "https://dummyimage.com/150x150/4CAF50/fff&text=eduPay",
      description: "Staff payroll and HR system.",
      tags: ["Staff"],
      loginType: "edupass"
    },
    {
      name: "School Website",
      url: "#",
      logo: "https://dummyimage.com/150x150/455A64/fff&text=Website",
      description: "Access the school website.",
      tags: ["Staff", "Student"],
      loginType: "none"
    },
    {
      name: "Google Drive",
      url: "https://drive.google.com/",
      logo: "https://dummyimage.com/150x150/4285F4/fff&text=Drive",
      description: "Cloud storage by Google.",
      tags: ["Staff", "Student", "Admin"],
      loginType: "school"
    },
    {
      name: "Google Mail",
      url: "https://mail.google.com",
      logo: "https://dummyimage.com/150x150/EA4335/fff&text=Gmail",
      description: "Email by Google.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Classroom",
      url: "https://classroom.google.com",
      logo: "https://dummyimage.com/150x150/34A853/fff&text=Classroom",
      description: "Manage classrooms online.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Calendar",
      url: "https://calendar.google.com",
      logo: "https://dummyimage.com/150x150/FFA000/fff&text=Calendar",
      description: "Calendar and scheduling.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Google Meet",
      url: "https://meet.google.com",
      logo: "https://dummyimage.com/150x150/FBBC05/fff&text=Meet",
      description: "Video conferencing.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Google Docs",
      url: "https://docs.google.com",
      logo: "https://dummyimage.com/150x150/4285F4/fff&text=Docs",
      description: "Word processing.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Slides",
      url: "https://slides.google.com",
      logo: "https://dummyimage.com/150x150/EA4335/fff&text=Slides",
      description: "Presentation tool.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Sheets",
      url: "https://sheets.google.com",
      logo: "https://dummyimage.com/150x150/34A853/fff&text=Sheets",
      description: "Spreadsheets by Google.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Google Forms",
      url: "https://forms.google.com",
      logo: "https://dummyimage.com/150x150/FBBC05/fff&text=Forms",
      description: "Create forms and quizzes.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Clickview",
      url: "https://clickview.com.au",
      logo: "https://dummyimage.com/150x150/FF6F00/fff&text=Clickview",
      description: "Educational video platform.",
      tags: ["Staff", "Student"],
      loginType: "school"
    },
    {
      name: "Epic!",
      url: "https://www.getepic.com",
      logo: "https://dummyimage.com/150x150/FF9800/fff&text=Epic",
      description: "Digital reading library.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Quick Links",
      url: "#",
      logo: "https://dummyimage.com/150x150/9E9E9E/fff&text=Links",
      description: "Access useful links.",
      tags: ["Staff", "Student"],
      loginType: "none"
    },
    {
      name: "SeeSaw",
      url: "https://web.seesaw.me",
      logo: "https://dummyimage.com/150x150/FF4081/fff&text=SeeSaw",
      description: "Digital portfolios.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "PM eCollection",
      url: "https://pmecollection.com.au",
      logo: "https://dummyimage.com/150x150/673AB7/fff&text=PM+eBooks",
      description: "Digital PM readers.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "SunShine Online",
      url: "https://www.sunshineonline.com.au",
      logo: "https://dummyimage.com/150x150/FFC107/fff&text=Sunshine",
      description: "Literacy and numeracy.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Essential Assessment",
      url: "https://www.essentialassessment.com.au",
      logo: "https://dummyimage.com/150x150/4CAF50/fff&text=Essential",
      description: "Online assessments.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "ACER Testing",
      url: "https://oars.acer.edu.au",
      logo: "https://dummyimage.com/150x150/9C27B0/fff&text=ACER",
      description: "Online testing system.",
      tags: ["Staff", "Student"],
      loginType: "other"
    },
    {
      name: "Tinkercad",
      url: "https://www.tinkercad.com",
      logo: "https://dummyimage.com/150x150/0D47A1/fff&text=Tinkercad",
      description: "3D design and coding tool.",
      tags: ["Student"],
      loginType: "school"
    },
    {
      name: "Code.org",
      url: "https://code.org",
      logo: "https://dummyimage.com/150x150/3F51B5/fff&text=Code.org",
      description: "Learn coding basics.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "micro:bit",
      url: "https://microbit.org",
      logo: "https://dummyimage.com/150x150/009688/fff&text=micro:bit",
      description: "Program tiny devices.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Scratch",
      url: "https://scratch.mit.edu",
      logo: "https://dummyimage.com/150x150/F44336/fff&text=Scratch",
      description: "Create interactive projects.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Prodigy",
      url: "https://www.prodigygame.com",
      logo: "https://dummyimage.com/150x150/8BC34A/fff&text=Prodigy",
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
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=eSmart",
      description: "Learn about online safety.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Pivot Wellbeing Survey",
      url: "#",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Pivot",
      description: "Student wellbeing feedback.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "JAMF Cloud",
      url: "https://wallaranops.jamfcloud.com/",
      logo: "https://dummyimage.com/150x150/455A64/fff&text=JAMF",
      description: "Device management.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "Google Workspace Admin Console",
      url: "https://admin.google.com/",
      logo: "https://dummyimage.com/150x150/546E7A/fff&text=GSuite",
      description: "Administer Google accounts.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "PaperCut",
      url: "http://5055prs01:9191/admin",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Print",
      description: "Admin printing dashboard.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "IT Asset Management",
      url: "http://itassets.wallarano-ps.vic.edu.au/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Assets",
      description: "Track school IT equipment.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "Zabbix",
      url: "http://status.wallarano-ps.vic.edu.au/zabbix/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Status",
      description: "Network status and dashboard.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "Apple School Manager",
      url: "https://school.apple.com/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=ASM",
      description: "Manage Apple devices.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "PFSense",
      url: "https://10.131.240.62/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Firewall",
      description: "Manage firewall & routing.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "TechAssist",
      url: "http://techassist.wallarano-ps.vic.edu.au/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Tech",
      description: "IT support tools.",
      tags: ["Admin"],
      loginType: "school"
    },
    {
      name: "eduPass Admin Portal",
      url: "https://edupassadminportal.education.vic.gov.au/IdentityManagement/default.aspx",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=eduPass",
      description: "Manage staff and student eduPass accounts.",
      tags: ["Admin"],
      loginType: "edupass"
    },
    {
      name: "eduSTAR Management Centre",
      url: "https://apps.edustar.vic.edu.au/edustarmc/",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=eduSTAR.MC",
      description: "School Technology Management Centre.",
      tags: ["Admin"],
      loginType: "edupass"
    },
    {
      name: "WeKan",
      url: "http://10.131.240.77/b/R5Wn9DPqCtcYN6cKb/ict-support-team",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=WeKan",
      description: "Project/task boards for admin.",
      tags: ["Admin"],
      loginType: "other"
    }
  ];
  