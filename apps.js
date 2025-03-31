const apps = [
    // Student only (10)
    {
      name: "Google Docs",
      url: "https://docs.google.com",
      logo: "https://dummyimage.com/150x150/4285F4/fff&text=Docs",
      description: "Online word processing by Google.",
      tags: ["Student"],
      loginType: "school"
    },
    {
      name: "Google Slides",
      url: "https://slides.google.com",
      logo: "https://dummyimage.com/150x150/EA4335/fff&text=Slides",
      description: "Online presentation tool by Google.",
      tags: ["Student"],
      loginType: "school"
    },
    {
      name: "Tinkercad",
      url: "https://www.tinkercad.com",
      logo: "https://dummyimage.com/150x150/0D47A1/fff&text=Tinkercad",
      description: "3D design and coding tool.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "micro:bit",
      url: "https://microbit.org",
      logo: "https://dummyimage.com/150x150/009688/fff&text=micro:bit",
      description: "Tiny programmable device for learning.",
      tags: ["Student"],
      loginType: "none"
    },
    {
      name: "Scratch",
      url: "https://scratch.mit.edu",
      logo: "https://dummyimage.com/150x150/F44336/fff&text=Scratch",
      description: "Create stories, games, and animations.",
      tags: ["Student"],
      loginType: "none"
    },
    {
      name: "PM eCollection",
      url: "https://pmecollection.com.au",
      logo: "https://dummyimage.com/150x150/673AB7/fff&text=PM+eBooks",
      description: "Digital PM readers and quizzes.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Epic!",
      url: "https://www.getepic.com",
      logo: "https://dummyimage.com/150x150/FF9800/fff&text=Epic!",
      description: "Online library for students.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Sunshine Online",
      url: "https://www.sunshineonline.com.au",
      logo: "https://dummyimage.com/150x150/FFC107/fff&text=Sunshine",
      description: "Online literacy and numeracy.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Prodigy",
      url: "https://www.prodigygame.com",
      logo: "https://dummyimage.com/150x150/8BC34A/fff&text=Prodigy",
      description: "Curriculum-aligned math adventure game.",
      tags: ["Student"],
      loginType: "other"
    },
    {
      name: "Code.org",
      url: "https://code.org",
      logo: "https://dummyimage.com/150x150/3F51B5/fff&text=Code.org",
      description: "Learn computer science and coding.",
      tags: ["Student"],
      loginType: "none"
    },
  
    // Staff only (5)
    {
      name: "Google Forms",
      url: "https://forms.google.com",
      logo: "https://dummyimage.com/150x150/FBBC05/fff&text=Forms",
      description: "Online forms and surveys.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Essential Assessment",
      url: "https://www.essentialassessment.com.au",
      logo: "https://dummyimage.com/150x150/4CAF50/fff&text=Essential",
      description: "Assessment and curriculum tools.",
      tags: ["Staff"],
      loginType: "other"
    },
    {
      name: "ClickView",
      url: "https://www.clickview.com.au",
      logo: "https://dummyimage.com/150x150/FF6F00/fff&text=ClickView",
      description: "Educational videos and resources.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Staff Feedback Tool",
      url: "https://staff-feedback.school.edu.au",
      logo: "https://dummyimage.com/150x150/607D8B/fff&text=Feedback",
      description: "Internal feedback and collaboration.",
      tags: ["Staff"],
      loginType: "school"
    },
    {
      name: "Timetable Manager",
      url: "https://timetable.school.edu.au",
      logo: "https://dummyimage.com/150x150/795548/fff&text=Timetable",
      description: "Staff scheduling system.",
      tags: ["Staff"],
      loginType: "school"
    },
  
    // Student + Staff (8)
    {
      name: "Google Drive",
      url: "https://drive.google.com",
      logo: "https://dummyimage.com/150x150/4285F4/fff&text=Drive",
      description: "Cloud storage service by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Google Mail",
      url: "https://mail.google.com",
      logo: "https://dummyimage.com/150x150/EA4335/fff&text=Gmail",
      description: "Email service by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Google Classroom",
      url: "https://classroom.google.com",
      logo: "https://dummyimage.com/150x150/34A853/fff&text=Classroom",
      description: "Classroom management tool.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Google Meet",
      url: "https://meet.google.com",
      logo: "https://dummyimage.com/150x150/FBBC05/fff&text=Meet",
      description: "Video conferencing by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Google Sheets",
      url: "https://sheets.google.com",
      logo: "https://dummyimage.com/150x150/34A853/fff&text=Sheets",
      description: "Spreadsheets by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Library System",
      url: "https://library.school.edu.au",
      logo: "https://dummyimage.com/150x150/9E9E9E/fff&text=Library",
      description: "Library management and borrowing.",
      tags: ["Student", "Staff"],
      loginType: "other"
    },
    {
      name: "Seesaw",
      url: "https://web.seesaw.me",
      logo: "https://dummyimage.com/150x150/FF4081/fff&text=Seesaw",
      description: "Digital portfolios and communication.",
      tags: ["Student", "Staff"],
      loginType: "other"
    },
    {
      name: "Learning Portal",
      url: "https://learn.school.edu.au",
      logo: "https://dummyimage.com/150x150/00BCD4/fff&text=Learn",
      description: "Online learning hub.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
  
    // Admin only (3)
    {
      name: "Admin Dashboard",
      url: "https://admin.school.edu.au",
      logo: "https://dummyimage.com/150x150/3E2723/fff&text=Admin",
      description: "Administration and reporting tools.",
      tags: ["Admin"],
      loginType: "edupass"
    },
    {
      name: "ACER Testing",
      url: "https://oars.acer.edu.au",
      logo: "https://dummyimage.com/150x150/9C27B0/fff&text=ACER",
      description: "Online assessment platform.",
      tags: ["Admin"],
      loginType: "other"
    },
    {
      name: "Policy Hub",
      url: "https://policies.school.edu.au",
      logo: "https://dummyimage.com/150x150/C2185B/fff&text=Policies",
      description: "Access and manage school policies.",
      tags: ["Admin"],
      loginType: "school"
    }
  ];
  