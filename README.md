# Student Links Web Portal

This project is a responsive, filterable web portal designed for primary school students and staff to easily access frequently used educational tools and platforms.

## 🌐 Live Demo

To view the site, open `index.html` in any modern web browser.

---

## 📁 Project Structure

```
.
├── index.html             # Main HTML file
├── assets/
│   ├── css/
│   │   └── main.css       # Styling for the website
│   ├── js/
│   │   ├── apps.js        # List of educational apps as objects
│   │   └── main.js        # JavaScript logic for filtering, rendering, tooltips
│   └── images/
│       ├── app_logos/     # Logos for each web app
│       └── icons/         # Favicons
```

---

## 🚀 Features

- ✅ Tag-based filtering (Staff / Student / Admin)
- ✅ Toggle visibility of role & login requirement badges
- ✅ Search bar with real-time autocomplete suggestions
- ✅ Tooltips showing login instructions for each app
- ✅ Responsive grid layout for clean mobile and desktop display

---

## 🧠 How It Works

### `apps.js`
Contains an array of app objects. Each object includes:
```js
{
  name: "Google Drive",
  url: "https://drive.google.com/",
  logo: "assets/images/app_logos/drive.png",
  description: "Cloud storage by Google.",
  tags: ["Staff", "Student"],
  loginType: "school"
}
```

### `main.js`
- Renders all app cards based on the data from `apps.js`
- Filters apps based on search input or selected tags
- Manages tooltips, autocomplete, and checkbox states
- Parses optional URL parameters for pre-filtering

### `main.css`
Defines a modern, clean interface with responsive design. Includes:
- Card layout and hover animation
- Colored tag badges for each role
- Tooltip styling
- Autocomplete dropdown

---

## 🛠 Customization

To add a new app:
1. Open `assets/js/apps.js`
2. Add a new object to the `apps` array:
```js
{
  name: "New Tool",
  url: "https://newtool.com",
  logo: "assets/images/app_logos/newtool.png",
  description: "A cool new app.",
  tags: ["Student"],
  loginType: "other"
}
```

To change styles, edit `assets/css/main.css`. You can adjust:
- Badge colors (`.category-badge.Student`, etc.)
- Card layout (`.card-grid`)
- Tooltip styling (`.custom-tooltip`)

---

## 🔐 Login Types

Apps include one of four login types, shown as badges and tooltips:
- `edupass` – uses eduPass credentials
- `school` – uses local school account
- `other` – uses credentials provided by teachers
- `none` – does not require login

---

## 🔍 URL Parameters (Optional)

You can pre-filter apps by modifying the URL:

| Parameter       | Example                                     | Description                           |
|----------------|---------------------------------------------|---------------------------------------|
| `user`          | `?user=Student,Staff`                      | Show apps with selected tags          |
| `search`        | `?search=google`                           | Pre-populate the search bar           |
| `hideRoleTags`  | `?hideRoleTags=true`                       | Hide role tag badges                  |
| `hideLoginTags` | `?hideLoginTags=true`                      | Hide login method badges              |

Example:
```
index.html?user=Student&search=drive&hideRoleTags=true
```

---

## 🧪 Development Tips

- Ensure image paths are correct relative to `index.html`
- Use modern browsers (Chrome, Edge, Firefox) for best compatibility
- The app does not require a backend – it's all client-side!

---

## 📝 License

This project is intended for internal educational use at your school. Not for commercial distribution.

---

## 👨‍🏫 Credit

Created and maintained by the IT Support team at Wallarano Primary School (2025) and ChatGPT.