// START OF PROBLEM NO 1
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
// END OF PROBLEM NO 1

// START OF PROBLEM NO 2
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  accelerate() {
    //write acceleration code here
  }
  brake() {
    //write brake code here
  }
}
// END OF PROBLEM NO 2

// START OF PROBLEM NO 3
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
// END OF PROBLEM NO 3

// START OF PROBLEM NO 4
document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/3"
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
// END OF PROBLEM NO 4

// START OF PROBLEM NO 5
// As test is not defined in the code, I am assuming that it is a jest test case, that's why it in written as string here
`test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses with uppercase", () => {
  expect(reverseString("ABCD")).toEqual("DCBA");
});`;
// END OF PROBLEM NO 5
console.log("Question no 6");

// START OF PROBLEM NO 6
const mergeArrays = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  // or we can use spread operator
  // const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
};
// END OF PROBLEM NO 6

// START OF PROBLEM NO 7
const filterUnique = (arr) => {
  return arr.filter((element, index) => arr.indexOf(element) === index);
};
// END OF PROBLEM NO 7

// START OF PROBLEM NO 8
const fetchUserDataWithErrorHandling = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
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
  // here we can use the data
});
// END OF PROBLEM NO 8

// START OF PROBLEM NO 9
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
    return { error: error?.message || error || "Failed to fetch data" };
  }
};

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

console.log("SearchButton", searchButton);

searchButton.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (query) {
    const data = await searchGoogleBooks(query);
    console.log("Question no 9 result", !data?.error, data);
    if (!data?.error) {
      const resultsHtml =
        data.totalItems > 0
          ? data?.items
              .map((book) => {
                return `
          <h2>${book?.volumeInfo?.title}</h2>
          <p>Authors: ${book.volumeInfo?.authors?.join(", ")}</p>
          <p>Publisher: ${book?.volumeInfo?.publisher}</p>
        `;
              })
              .join("")
          : "No results found";
      searchResults.innerHTML = resultsHtml;
    } else {
      searchResults.innerHTML = data.error;
    }
  } else {
    searchResults.innerHTML = "Please enter a search query";
  }
});
// END OF PROBLEM NO 9

// START OF PROBLEM NO 10
const optimizedFilterUnique = (arr) => {
  return [...new Set(arr)];
};
// END OF PROBLEM NO 10
