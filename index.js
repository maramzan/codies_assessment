// Problem No 1
// first solution using reverse function
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
// second solution using for Loop
const reverseString2 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// Problem No 2
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  accelerate() {}
  brake() {}
}

// Problem No 3
const fetchUserData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Problem No 4
document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Username: ${data.username}</p>
      <p>Email: ${data.email}</p>
  `;
  } catch (error) {
    console.error("Error:", error);
  }
});

// Problem No 5
// test("reverseString function exists", () => {
//   expect(reverseString).toBeDefined();
// });

// test("String reverses", () => {
//   expect(reverseString("abcd")).toEqual("dcba");
// });

// test("String reverses with uppercase", () => {
//   expect(reverseString("ABCD")).toEqual("DCBA");
// });

// Problem No 6
const mergeArrays = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  // or we can use spread operator
  // const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
};

// Problem No 7
const filterUnique = (arr) => {
  return arr.filter((element, index) => arr.indexOf(element) === index);
};

// Problem No 8
const fetchUserDataWithErrorHandling = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/dfasdf"
    );
    console.log("response", response);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: error || "Failed to fetch user Data" };
  }
};

fetchUserDataWithErrorHandling().then((data) => {
  console.log("Question no 8 result", data);
});

// Problem No 9
const searchGoogleBooks = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message };
  }
};

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (query) {
    const data = await searchGoogleBooks(query);
    const resultsHtml = data.items
      .map((book) => {
        return `
        <h2>${book.volumeInfo.title}</h2>
        <p>Authors: ${book.volumeInfo.authors.join(", ")}</p>
        <p>Publisher: ${book.volumeInfo.publisher}</p>
      `;
      })
      .join("");
    searchResults.innerHTML = resultsHtml;
  } else {
    searchResults.innerHTML = "Please enter a search query";
  }
});

// Problem No 10
const optimizedFilterUnique = (arr) => {
  return [...new Set(arr)];
};
