window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("googleInput");
    input?.focus();
  
    // Parse URL parameters
    const { user, search } = getURLParameters();
  
    // Set filters based on URL parameters
    setUserFilters(user);
    setSearchFilter(search);
  
    // Add the checkbox event listeners
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterApps);
    });
  
    // Trigger initial filtering based on pre-selected filters
    filterApps();
  });
  
  function getURLParameters() {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('user');
    const searchParam = params.get('search');
    return { user: userParam, search: searchParam };
  }
  
  function setUserFilters(userParam) {
    if (userParam) {
      const selectedRoles = userParam.split(',');
      checkboxes.forEach(cb => {
        if (selectedRoles.includes(cb.value)) {
          cb.checked = true;
        }
      });
    }
  }
  
  function setSearchFilter(searchParam) {
    if (searchParam) {
      searchInput.value = searchParam;
      filterApps();
    }
  }
  
  const apps = [
    {
      name: "Google Drive",
      url: "https://drive.google.com",
      logo: "https://dummyimage.com/150x150/4285F4/fff&text=Google+Drive",
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
      description: "Classroom management tool by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Google Meet",
      url: "https://meet.google.com",
      logo: "https://dummyimage.com/150x150/FBBC05/fff&text=Meet",
      description: "Video conferencing service by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
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
      name: "Google Sheets",
      url: "https://sheets.google.com",
      logo: "https://dummyimage.com/150x150/34A853/fff&text=Sheets",
      description: "Spreadsheets by Google.",
      tags: ["Student", "Staff"],
      loginType: "school"
    },
    {
      name: "Google Forms",
      url: "https://forms.google.com",
      logo: "https://dummyimage.com/150x150/FBBC05/fff&text=Forms",
      description: "Online forms and surveys.",
      tags: ["Staff", "Admin"],
      loginType: "school"
    },
    {
      name: "ClickView",
      url: "https://www.clickview.com.au",
      logo: "https://dummyimage.com/150x150/FF6F00/fff&text=ClickView",
      description: "Educational videos and resources.",
      tags: ["Student", "Staff"],
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
      name: "Essential Assessment",
      url: "https://www.essentialassessment.com.au",
      logo: "https://dummyimage.com/150x150/4CAF50/fff&text=Essential",
      description: "Assessment and curriculum tools.",
      tags: ["Student", "Staff"],
      loginType: "other"
    },
    {
      name: "ACER Testing",
      url: "https://oars.acer.edu.au",
      logo: "https://dummyimage.com/150x150/9C27B0/fff&text=ACER",
      description: "Online assessment platform.",
      tags: ["Student", "Admin"],
      loginType: "other"
    },
    {
      name: "Seesaw",
      url: "https://web.seesaw.me",
      logo: "https://dummyimage.com/150x150/FF4081/fff&text=Seesaw",
      description: "Student-driven digital portfolios.",
      tags: ["Student", "Staff", "Admin"],
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
    {
      name: "micro:bit",
      url: "https://microbit.org",
      logo: "https://dummyimage.com/150x150/009688/fff&text=micro:bit",
      description: "Tiny programmable device for learning.",
      tags: ["Student", "None"],
      loginType: "none"
    },
    {
      name: "Scratch",
      url: "https://scratch.mit.edu",
      logo: "https://dummyimage.com/150x150/F44336/fff&text=Scratch",
      description: "Create stories, games, and animations.",
      tags: ["Student", "None"],
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
      tags: ["Student", "None"],
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
      tags: ["Student", "None"],
      loginType: "other"
    }
  ];
  
  const container = document.getElementById("app-container");
  const searchInput = document.getElementById("searchInput");
  const checkboxes = document.querySelectorAll(".tag-checkbox");
  const selectAllBtn = document.getElementById("selectAll");
  const clearAllBtn = document.getElementById("clearAll");
  const autocompleteList = document.getElementById("autocomplete-list");
  
  function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }
  
  function formatLoginType(type) {
    switch (type) {
      case "edupass": return "eduPass Account";
      case "school": return "School Account";
      case "other": return "Other Account";
      case "none": return "None";
      default: return type;
    }
  }
  
  function getTooltipText(app) {
    const appNameBold = `<strong>${app.name}</strong>`;
    switch (app.loginType) {
      case "edupass": return `Login to ${appNameBold} with your <strong>eduPass Account</strong>.`;
      case "school": return `Login to ${appNameBold} with your <strong>School Account</strong>.`;
      case "other": return `Login to ${appNameBold} with the account from your teacher.`;
      case "none": return `${appNameBold} does not require a login.`;
      default: return `Login info not available.`;
    }
  }
  
  function renderApps(appList) {
    container.innerHTML = "";
    if (appList.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 2rem;">
          <img src="https://i.imgur.com/S7YZ3LG.png" alt="No matching apps" style="width: 180px; height: auto; margin-bottom: 1rem;" />
          <p style="font-size: 1.1rem; color: #444;">No apps match your search.</p>
        </div>
      `;
      return;
    }
  
    const tagOrder = ["Staff", "Student", "Admin", "None"];
  
    appList.forEach(app => {
      const card = document.createElement("article");
      card.className = "card";
  
      const tooltip = document.createElement("div");
      tooltip.className = "custom-tooltip";
      tooltip.innerHTML = getTooltipText(app);
      card.appendChild(tooltip);
  
      const link = document.createElement("a");
      link.href = app.url;
      link.target = "_blank";
  
      const content = document.createElement("div");
      content.style.flexGrow = "1";
  
      const img = document.createElement("img");
      img.src = app.logo;
      img.alt = `${app.name} logo`;
      img.className = "app-logo";
  
      const h2 = document.createElement("h2");
      h2.textContent = app.name;
  
      const p = document.createElement("p");
      p.textContent = app.description;
  
      content.appendChild(img);
      content.appendChild(h2);
      content.appendChild(p);
      link.appendChild(content);
  
      const badgeRow = document.createElement("div");
      badgeRow.className = "badge-row";
      const sortedTags = [...app.tags].sort((a, b) => tagOrder.indexOf(a) - tagOrder.indexOf(b));
      sortedTags.forEach(tag => {
        const tagBadge = document.createElement("span");
        tagBadge.className = `category-badge ${tag}`;
        tagBadge.textContent = tag;
        badgeRow.appendChild(tagBadge);
      });
  
      const loginRow = document.createElement("div");
      loginRow.className = "login-row";
  
      const loginBadge = document.createElement("span");
      loginBadge.className = "category-badge";
      loginBadge.id = `login-${app.name.replace(/\s+/g, '-')}`;
      loginBadge.textContent = formatLoginType(app.loginType);
      loginRow.appendChild(loginBadge);
  
      if (app.loginType !== "none") {
        const infoButton = document.createElement("button");
        infoButton.className = "info-button";
        infoButton.innerHTML = "🔑";
        infoButton.addEventListener("mouseenter", () => {
          tooltip.style.display = "block";
        });
        infoButton.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });
        card.appendChild(infoButton);
      }
  
      link.appendChild(badgeRow);
      link.appendChild(loginRow);
      card.appendChild(link);
      container.appendChild(card);
    });
  }
  
  function getSelectedTags() {
    const selected = [];
    checkboxes.forEach(cb => {
      if (cb.checked) selected.push(cb.value);
    });
    return selected;
  }
  
  function filterApps() {
    const term = searchInput.value.toLowerCase();
    const selectedTags = getSelectedTags();
  
    const filtered = apps.filter(app => {
      const matchesText = matchesSearch(app, term);
      const matchesTags = selectedTags.length === 0 || app.tags.some(tag => selectedTags.includes(tag));
      return matchesText && matchesTags;
    });
  
    renderApps(filtered);
  }
  
  function matchesSearch(app, term) {
    const name = app.name.toLowerCase();
    const description = app.description.toLowerCase();
    const words = term.split(/\s+/).filter(Boolean);
    return words.every(word => name.includes(word) || description.includes(word));
  }
  
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    autocompleteList.innerHTML = "";
  
    if (!term) {
      autocompleteList.style.display = "none";
      filterApps();
      return;
    }
  
    const matches = apps
      .filter(app => app.name.toLowerCase().includes(term))
      .slice(0, 5);
  
    if (matches.length > 0) {
      matches.forEach(app => {
        const li = document.createElement("li");
        li.textContent = app.name;
        li.addEventListener("click", () => {
          searchInput.value = app.name;
          autocompleteList.style.display = "none";
          filterApps();
        });
        autocompleteList.appendChild(li);
      });
      autocompleteList.style.display = "block";
    } else {
      autocompleteList.style.display = "none";
    }
  
    filterApps();
  });
  
  document.addEventListener("click", (e) => {
    if (!autocompleteList.contains(e.target) && e.target !== searchInput) {
      autocompleteList.style.display = "none";
    }
  });
  
  selectAllBtn.addEventListener("click", () => {
    checkboxes.forEach(cb => cb.checked = true);
    filterApps();
  });
  
  clearAllBtn.addEventListener("click", () => {
    checkboxes.forEach(cb => cb.checked = false);
    searchInput.value = "";
    filterApps();
  });
  
  renderApps(apps);
  