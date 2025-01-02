// Function to retrieve input values and validate them
function getInputValues() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const customInput = document.getElementById("customInput").value.trim();
  const dropdown = document.getElementById("dropdown").value;

  // Ensure all fields are filled
  if (!firstName || !lastName || !favoriteColor || !customInput || !dropdown) {
    alert("Please fill out all fields.");
    return null;
  }

  return { firstName, lastName, favoriteColor, customInput, dropdown };
}

// Helper function to generate the prefix
function generatePrefix(firstName, customInput) {
  const firstLetter = firstName.charAt(0).toLowerCase();

  if ("aeiou".includes(firstLetter)) {
    return "The Great";
  } else if ("dragon".includes(customInput.toLowerCase())) {
    return "Lord";
  } else {
    return "Master";
  }
}

// Helper function to generate the first name
function generateFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toUpperCase();

  if (firstName.length > 5) {
    return firstName.slice(0, 3);
  } else if (["A", "B", "C"].includes(firstLetter)) {
    return firstName + "aria";
  } else {
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  }
}

// Helper function to generate the middle name
function generateMiddleName(favoriteColor, dropdown) {
  switch (dropdown) {
    case "Road":
      return `${favoriteColor} Path`;
    case "Street":
      return `${favoriteColor} Lane`;
    case "Avenue":
      return "Mystic";
    default:
      return "of the Unknown";
  }
}

// Helper function to generate the last name
function generateLastName(lastName) {
  const firstLetter = lastName.charAt(0).toLowerCase();

  if (firstLetter === "m") {
    return "Moonshadow";
  } else if (lastName.length > 5) {
    return lastName + "thorn";
  } else {
    return lastName.split("").reverse().join("");
  }
}

// Helper function to generate the suffix
function generateSuffix(favoriteColor, customInput) {
  if (favoriteColor.toLowerCase() === "blue") {
    return "of the Endless Sky";
  } else if (customInput.toLowerCase() === "cat") {
    return "Whiskers of Destiny";
  } else {
    return "of the Forgotten Realm";
  }
}

// Main function to generate the fantasy name
function generateFantasyName(event) {
  event.preventDefault();  // Prevent the form from submitting and reloading the page
  
  const inputs = getInputValues();

  if (!inputs) return;

  const prefix = generatePrefix(inputs.firstName, inputs.customInput);
  const firstName = generateFirstName(inputs.firstName);
  const middleName = generateMiddleName(inputs.favoriteColor, inputs.dropdown);
  const lastName = generateLastName(inputs.lastName);
  const suffix = generateSuffix(inputs.favoriteColor, inputs.customInput);

  const fantasyName = `${prefix} ${firstName} ${middleName} ${lastName} ${suffix}`;
  document.getElementById("result").textContent = fantasyName;
}

// Add event listener for the form submit (instead of the button click)
document.getElementById("fantasyForm").addEventListener("submit", generateFantasyName);
