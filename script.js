// Generate Prefix
function genPrefix(firstName) {
  if (firstName.length > 10) {
    return "The Mighty";
  } else if (firstName.length > 7) {
    return "The Great";
  } else if (firstName.length > 5) {
    return "The Noble";
  } else if (firstName.length < 5 && firstName.length > 3) {
    return "King";
  } else if (firstName.length <= 3) {
    return "Master";
  } else {
    return "Champion";
  }
}

// Generate First Name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  switch (firstLetter) {
    case "a":
      return "Jeff";
    case "b":
      return "Pablo";
    case "c":
      return "Mia";
    case "d":
      return "Liam";
    case "e":
      return "Emma";
    case "f":
      return "Finn";
    case "g":
      return "Grace";
    case "h":
      return "Hannah";
    case "i":
      return "Ivy";
    default:
      return "Julian";
  }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road" || roadType === "avenue") {
    return `${favoriteColor}ridge`;
  } else if (roadType === "circle") {
    return `${favoriteColor}bell`;
  } else if (roadType === "street") {
    return `${favoriteColor}son`;
  } else if (roadType === "boulevard") {
    return `${favoriteColor}gate`;
  } else if (roadType === "way") {
    return `${favoriteColor}trail`;
  } else {
    return `${favoriteColor}stone`;
  }
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a" && lastName.length > 4) {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Storm";
  } else if (lastLetter === "i") {
    return "Blaze";
  } else if (lastLetter === "o") {
    return "Thorn";
  } else if (lastLetter === "u") {
    return "Frost";
  } else if (lastLetter === "y") {
    return "Sky";
  } else {
    return "Moon";
  }
}

// Generate Suffix
function genSuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal} clan`;
}

// Function to check if all form fields have input
function checkFormFields() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value.trim();
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  if (
    !firstName ||
    !lastName ||
    !roadType ||
    roadType === "Select Road Type" ||
    !favoriteColor ||
    !favoriteAnimal
  ) {
    alert("Please fill in all the fields.");
    return false;
  }
  return true;
}

// Master Name Building Function
function genFullName(event) {
  event.preventDefault();

  if (!checkFormFields()) {
    return;
  }

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  const capitalizedPrefix = capitalize(prefix);
  const capitalizedFirstName = capitalize(newFirstName);
  const capitalizedMiddleName = capitalize(middleName);
  const capitalizedLastName = capitalize(newLastName);

  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;

  document.getElementById("result").textContent = fullName;
}

// Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

document.getElementById("fantasyForm").addEventListener("submit", genFullName);