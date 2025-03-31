window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("googleInput");
    input?.focus();
  
    const toggleBtn = document.getElementById("toggleTags");
    const tagContainer = document.getElementById("tag-container");
  
    // Toggle filters visibility
    toggleBtn.addEventListener("click", () => {
      const isHidden = tagContainer.classList.toggle("hidden");
      toggleBtn.textContent = isHidden ? "▼" : "▲";
    });
  
    // Parse URL parameters
    const { user, search } = getURLParameters();
    setUserFilters(user);
    setSearchFilter(search);
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterApps);
    });
  
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
  
    const tagOrder = ["Staff", "Student", "Admin"];
  
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
      
      const selectedTags = getSelectedTags();
      const filteredTags = selectedTags.length === 0
        ? app.tags
        : app.tags.filter(tag => selectedTags.includes(tag));
      
      const sortedTags = [...filteredTags].sort((a, b) => tagOrder.indexOf(a) - tagOrder.indexOf(b));
      
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
  
  let currentFocus = -1;

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    autocompleteList.innerHTML = "";
    currentFocus = -1;
  
    if (!term) {
      autocompleteList.style.display = "none";
      filterApps();
      return;
    }
  
    const matches = apps
      .filter(app => app.name.toLowerCase().includes(term))
      .slice(0, 5);
  
    if (matches.length > 0) {
      matches.forEach((app, index) => {
        const li = document.createElement("li");
        li.textContent = app.name;
        li.setAttribute("data-index", index);
  
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

  searchInput.addEventListener("keydown", (e) => {
    const items = autocompleteList.querySelectorAll("li");
    if (!items.length) return;
  
    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentFocus++;
      if (currentFocus >= items.length) currentFocus = 0;
      updateActive(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentFocus--;
      if (currentFocus < 0) currentFocus = items.length - 1;
      updateActive(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (currentFocus > -1) {
        items[currentFocus].click();
      }
    }
  });
  
  function updateActive(items) {
    items.forEach((item, index) => {
      item.classList.remove("active");
      if (index === currentFocus) {
        item.classList.add("active");
      }
    });
  }

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
  