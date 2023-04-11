// ASSIGNMENT 02
// Please check assignments one by one by uncommenting it.

//     no. 1
// let userNum = +prompt("Enter your number to be added in 5");
// function add(num1) {
//     return function (num2) {
//         alert("5 + " + userNum + " = " + (num1 + num2));
//     }
// }
// let anonymousFunc = add(5);
// anonymousFunc(userNum);

// no. 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 150];
// let val = +prompt("Enter your number");
// function searchInArr(arr, val) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === val) {
//         return true;
//     } else {
//         return searchInArr(arr.slice(1), val)
//     }
// }
// alert(searchInArr(arr, val));

// no. 3
// let str = prompt("Enter some text to be written in the para");
// function addHtmlElement(str) {
//     let newElement = document.createElement("p");
//     newElement.innerText = str;
//     document.body.appendChild(newElement);
//     // newElement.append(newElementText);
// }
// addHtmlElement(str);

// no. 4
// let listText = prompt("Enter some text to be written in the list");
// function addListItem(listText) {
//     let ul = document.createElement("ul");
//     document.body.appendChild(ul);
//     let li = document.createElement("li");
//     li.innerText = listText;
//     ul.appendChild(li);
// }
// addListItem(listText);

// no. 5
// let elem = prompt("Enter name of the Element: \nType only p for paragraph, \nh1 for big heading,\nbutton to get Button ")
// let bgColor = prompt("Enter the background color for that element")
// let color = prompt("Enter the text color for that element")
// function elemBgColor(elem, bgColor, color) {
//     let userElem = document.createElement(elem);
//     userElem.innerText = "Done"
//     userElem.style.backgroundColor = bgColor;
//     userElem.style.color = color;
//     document.body.appendChild(userElem);
// }
// elemBgColor(elem, bgColor, color);

// no. 6
// function saveObj(key, item) {
//     let stringify = JSON.stringify(item);
//     localStorage.setItem(key, stringify);
//     // console.log(item);
// };
// saveObj("myObj-01", {
//     name: "anas",
//     age: 19,
//     isCompDeveloper: false
// }
// );

// no. 7
// let key = prompt("Enter name of the key", "myObj-01");
// function retrieveObj(key) {
//     let getObj = localStorage.getItem(key);
//     let a = JSON.parse(getObj);
//     return a;
// };
// console.log(retrieveObj(key));

// no. 8
// let userInfo = {
//     name: prompt("Enter name"),
//     age: +prompt("Enter age"),
//     isCompDeveloper: prompt("Are you a complete developer ?")
// }
// function saveEachProperty(userInfo) {
//     let objKeys = Object.keys(userInfo);
//     let objValues = Object.values(userInfo);
//     for (i = 0; i < objKeys.length && i < objValues.length; i++) {
//         localStorage.setItem(objKeys[i], objValues[i]);
//     }
//     // console.log(userInfo);
// }
// saveEachProperty(userInfo);