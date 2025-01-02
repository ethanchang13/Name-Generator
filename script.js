// Generate Prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return "The Great";
  } else if (firstName.length < 5 && firstName.length > 2) {
    return "King";
  } else {
    return "Master";
  }
}

// Generate First Name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  switch (firstLetter) {
    case 'a':
      return "Jeff";
    case 'b':
      return "Pablo";
    case 'c':
      return "Mia";
    case 'd':
      return "Liam";
    default:
      return "Julian";
  }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road" || roadType === "avenue") {
    return `${favoriteColor}ridge`; // Ex: blueridge
  } else if (roadType === "circle") {
    return `${favoriteColor}bell`; // Ex: bluebell
  } else if (roadType === "street") {
    return `${favoriteColor}son`; // Ex: blueson
  } else {
    return `${favoriteColor}stone`; // Ex: bluestone
  }
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a" && lastName.length > 4) {
    return "Shadow"; // Special last name if last letter is 'a' and name is long
  } else if (lastLetter === "e") {
    return "Storm";
  } else if (lastLetter === "i") {
    return "Blaze";
  } else if (lastLetter === "o") {
    return "Thorn";
  } else if (lastLetter === "u") {
    return "Frost";
  } else {
    return "Moon"; // Default last name for letters not matched
  }
}

// Generate Suffix
function genSuffix(favoriteAnimal) {
  return `of ${favoriteAnimal} clan.`;
}

// Master Name Building Function
function genFullName(event) {
  event.preventDefault();

  // Get the users inputs from HTML elements
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  // Run name generating functions & store them in new variables
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  // Capitalize name variables when needed
  const capitalizedPrefix = capitalize(prefix);
  const capitalizedFirstName = capitalize(newFirstName);
  const capitalizedMiddleName = capitalize(middleName);
  const capitalizedLastName = capitalize(newLastName);

  // Combine all of the name variables in a new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;

  // Display the new name
  document.getElementById('result').textContent = fullName;
}

// Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

// Add Event Listener to the Form
document.getElementById('fantasyForm').addEventListener('submit', genFullName);