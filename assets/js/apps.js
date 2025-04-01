/**
 * ==============================
 * Student Links App List Example
 * ==============================
 * 
 * This file defines an array called `apps`, which contains a list of web-based
 * applications used in a school setting.
 * 
 * Each app is represented as an object with the following properties:
 * 
 * - name:        (string) Display name of the application
 * - url:         (string) Link to open when the app is clicked
 * - logo:        (string) Path to the logo image displayed on the app card
 * - description: (string) Short text describing the app's purpose
 * - tags:        (array of strings) Categories the app belongs to. Valid tags:
 *                   - "Student"
 *                   - "Staff"
 *                   - "Admin"
 * - loginType:   (string) Indicates the type of login required. Possible values:
 *                   - "edupass" → Requires an eduPass account
 *                   - "school"  → Requires a school-based account
 *                   - "other"   → Requires some other type of login (e.g. class code)
 *                   - "none"    → No login required
 * 
 * This array is used by the JavaScript UI to dynamically generate app cards,
 * filter them by tags or search, and show login tooltips.
 */

const apps = [
  {
    name: "App One",
    url: "#",
    logo: "https://dummyimage.com/100x100/607d8b/ffffff&text=App+1",
    description: "Description for App One.",
    tags: ["Staff", "Admin"],
    loginType: "edupass"
  },
  {
    name: "App Two",
    url: "#",
    logo: "https://dummyimage.com/100x100/8bc34a/ffffff&text=App+2",
    description: "Description for App Two.",
    tags: ["Staff"],
    loginType: "edupass"
  },
  {
    name: "Learning Hub",
    url: "#",
    logo: "https://dummyimage.com/100x100/ff9800/ffffff&text=Learn",
    description: "Access learning content and tools.",
    tags: ["Staff", "Student"],
    loginType: "school"
  },
  {
    name: "Email Portal",
    url: "#",
    logo: "https://dummyimage.com/100x100/3f51b5/ffffff&text=Email",
    description: "Check your email messages.",
    tags: ["Staff", "Student"],
    loginType: "school"
  },
  {
    name: "File Drive",
    url: "#",
    logo: "https://dummyimage.com/100x100/009688/ffffff&text=Drive",
    description: "Store and manage your files online.",
    tags: ["Staff", "Student", "Admin"],
    loginType: "school"
  },
  {
    name: "Survey Tool",
    url: "#",
    logo: "https://dummyimage.com/100x100/e91e63/ffffff&text=Survey",
    description: "Submit your feedback and opinions.",
    tags: ["Student"],
    loginType: "other"
  },
  {
    name: "Video Meeting",
    url: "#",
    logo: "https://dummyimage.com/100x100/9c27b0/ffffff&text=Meet",
    description: "Join and host video calls.",
    tags: ["Staff"],
    loginType: "school"
  },
  {
    name: "Admin Console",
    url: "#",
    logo: "https://dummyimage.com/100x100/795548/ffffff&text=Admin",
    description: "Manage admin settings and users.",
    tags: ["Admin"],
    loginType: "school"
  },
  {
    name: "Digital Notebook",
    url: "#",
    logo: "https://dummyimage.com/100x100/00bcd4/ffffff&text=Notes",
    description: "Take and organize digital notes.",
    tags: ["Staff", "Student"],
    loginType: "school"
  },
  {
    name: "Task Board",
    url: "#",
    logo: "https://dummyimage.com/100x100/cddc39/000000&text=Tasks",
    description: "Plan and manage your projects.",
    tags: ["Admin"],
    loginType: "other"
  }
];
