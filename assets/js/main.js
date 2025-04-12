// ✅ Cleaned version without key icon support
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
  const { user, search, hideRoleTags, hideLoginTags } = getURLParameters();
  setUserFilters(user);
  setSearchFilter(search);

  // Apply initial states to checkboxes
  document.getElementById("hideRoleTags").checked = hideRoleTags;
  document.getElementById("hideLoginTags").checked = hideLoginTags;

  // Event listeners for manual changes
  document.getElementById("hideRoleTags").addEventListener("change", e => {
    toggleRoleTags(e.target.checked);
  });

  document.getElementById("hideLoginTags").addEventListener("change", e => {
    toggleLoginTags(e.target.checked);
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterApps);
  });

  // Render apps and apply visibility
  filterApps();
  toggleRoleTags(hideRoleTags);
  toggleLoginTags(hideLoginTags);
});

function toggleRoleTags(hide) {
  document.querySelectorAll(".badge-row").forEach(row => {
    row.classList.toggle("hidden", hide);
  });
}

function toggleLoginTags(hide) {
  document.querySelectorAll(".login-row").forEach(row => {
    row.classList.toggle("hidden", hide);
  });
}

function getURLParameters() {
  const params = new URLSearchParams(window.location.search);
  return {
    user: params.get('user'),
    search: params.get('search'),
    hideRoleTags: params.get('hideRoleTags') === 'true',
    hideLoginTags: params.get('hideLoginTags') === 'true'
  };
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
    case "edupass": return `${appNameBold} uses your <strong>eduPass account</strong> to log in.`;
    case "school": return `${appNameBold} uses your <strong>school account</strong> to log in.`;
    case "other": return `${appNameBold} uses the account provided by your teacher to log in.`;
    case "none": return `${appNameBold} doesn’t need a login.`;
    default: return `We're not sure how to log in to ${appNameBold} — ask your teacher.`;
  }
}

function renderApps(appList) {
  container.innerHTML = "";

  if (appList.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center text-center p-8">
        <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
          We couldn’t find any apps that match your search — try searching for something else!
        </div>
        <img src="assets/images/no-results.png" alt="No matching apps" class="mt-4 w-64 h-auto" />
      </div>
    `;
    return;
  }

  const tagOrder = ["Staff", "Student", "Admin"];

  appList.forEach(app => {
    const card = document.createElement("article");
    card.className = "bg-white rounded-lg shadow-md p-4 flex flex-col justify-between";

    const tooltip = document.createElement("div");
    tooltip.className = "hidden absolute bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg";
    tooltip.style.top = "100%"; // Position the tooltip below the parent element
    tooltip.style.left = "50%"; // Center the tooltip horizontally
    tooltip.style.transform = "translateX(-50%)"; // Adjust for centering
    tooltip.innerHTML = getTooltipText(app);
    card.appendChild(tooltip);

    const link = document.createElement("a");
    link.href = app.url;
    link.target = "_blank";
    link.className = "flex flex-col items-center";

    const img = document.createElement("img");
    img.src = app.logo;
    img.alt = `${app.name} logo`;
    img.className = "w-16 h-16 object-contain rounded-md bg-gray-100 mb-2";

    const h2 = document.createElement("h2");
    h2.textContent = app.name;
    h2.className = "text-lg font-semibold text-center";

    const p = document.createElement("p");
    p.textContent = app.description;
    p.className = "text-sm text-gray-600 text-center";

    link.appendChild(img);
    link.appendChild(h2);
    link.appendChild(p);

    const badgeRow = document.createElement("div");
    badgeRow.className = "badge-row flex justify-between gap-2 mt-2 w-full"; // Changed "flex-wrap" to "justify-between" to keep all badges on the same row

    const selectedTags = getSelectedTags();
    const filteredTags = selectedTags.length === 0
      ? app.tags
      : app.tags.filter(tag => selectedTags.includes(tag));

    const sortedTags = [...filteredTags].sort((a, b) => tagOrder.indexOf(a) - tagOrder.indexOf(b));

    sortedTags.forEach(tag => {
      const tagBadge = document.createElement("span");
      tagBadge.className = `px-2 py-1 text-xs rounded-full ${getTagBadgeClass(tag)} text-center`; // Added "text-center" to center the text
      tagBadge.style.flex = `1 1 ${100 / sortedTags.length}%`; // Dynamically set width based on the number of tags
      tagBadge.textContent = tag;
      badgeRow.appendChild(tagBadge);
    });

    const loginRow = document.createElement("div");
    loginRow.className = "login-row flex justify-center mt-2 w-full"; // Added "w-full" to make it take up the card's width

    const loginBadge = document.createElement("span");
    loginBadge.className = "px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700 text-center w-full"; // Added "text-center" and "w-full" for full-width alignment
    loginBadge.textContent = formatLoginType(app.loginType);

    loginBadge.addEventListener("mouseenter", () => {
      tooltip.style.display = "block"; // Ensure the tooltip is visible
      tooltip.style.top = `${card.offsetTop - tooltip.offsetHeight - 10}px`; // Position above the entire card with 10px padding
      tooltip.style.left = `${card.offsetLeft + card.offsetWidth / 2}px`; // Center horizontally relative to the card
      tooltip.style.transform = "translateX(-50%)"; // Adjust for centering
    });

    loginBadge.addEventListener("mouseleave", () => {
      tooltip.style.display = "none"; // Hide the tooltip
    });

    loginRow.appendChild(loginBadge);

    card.appendChild(link);
    card.appendChild(badgeRow);
    card.appendChild(loginRow);
    container.appendChild(card);
  });
}

function getTagBadgeClass(tag) {
  switch (tag) {
    case "Staff": return "bg-blue-100 text-blue-800";
    case "Student": return "bg-green-100 text-green-800";
    case "Admin": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
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