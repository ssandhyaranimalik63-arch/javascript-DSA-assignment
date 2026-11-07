// 01. Find the Second-Highest Score
function findSecondHighest(arr) {
    let highest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            second = highest;
            highest = arr[i];
        } else if (arr[i] < highest && arr[i] > second) {
            second = arr[i];
        }
    }

    return second === -Infinity ? null : second;
}

// 02. Remove Duplicate Product IDs
function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result[result.length] = arr[i];
        }
    }

    return result;
}

// 03. Count Character Frequency
function countCharacterFrequency(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (frequency[ch] === undefined) {
            frequency[ch] = 1;
        } else {
            frequency[ch]++;
        }
    }

    return frequency;
}

// 04. Reverse a String
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// 05. Find the Missing Roll Number
function findMissingNumber(arr, n) {
    let expected = n * (n + 1) / 2;
    let actual = 0;

    for (let i = 0; i < arr.length; i++) {
        actual += arr[i];
    }

    return expected - actual;
}

// 06. Check Whether Text Is a Palindrome
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// 07. Find the Highest Product Price
function findHighestPrice(prices) {
    let highest = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > highest) {
            highest = prices[i];
        }
    }

    return highest;
}

// 08. Search for a Product ID
function searchProductId(ids, target) {
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] === target) {
            return i;
        }
    }

    return -1;
}

// 09. Move All Zeros to the End
function moveZerosToEnd(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }

    return arr;
}

// 10. Filter Products by Price
function filterProductsByPrice(products, maxPrice) {
    let result = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price < maxPrice) {
            result[result.length] = products[i];
        }
    }

    return result;
}

// Sample Tests
console.log(findSecondHighest([45, 80, 90, 65, 90, 70]));
console.log(removeDuplicates([101, 102, 103, 101, 104, 102]));
console.log(countCharacterFrequency("javascript"));
console.log(reverseString("developer"));
console.log(findMissingNumber([1, 2, 3, 5, 6], 6));
console.log(isPalindrome("madam"));
console.log(findHighestPrice([499, 999, 299, 1499, 799]));
console.log(searchProductId([101, 102, 103, 104, 105], 103));
console.log(moveZerosToEnd([0, 5, 0, 3, 8, 0, 2]));

let products = [
    { id: 1, name: "Keyboard", price: 800 },
    { id: 2, name: "Monitor", price: 5000 }
];

console.log(filterProductsByPrice(products, 1000));
