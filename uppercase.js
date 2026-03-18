let fullName = "ada nsaluoku";

let words = fullName.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized =
        word.charAt(0).toUpperCase() + word.slice(1);

    result += capitalized + " ";
}

console.log(result.trim());