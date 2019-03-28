const userInput = document.getElementById("userinput");
const enterButton = document.getElementById("enter_button");
const list = document.getElementById("list");

// Input Length For Adding Items
function inputLength() {
	return userInput.value.length;
};

// Creates List Item Function
function createListItem() {
	var list_body = document.createElement("div");
	list_body.setAttribute("class", "list_body");
	list.appendChild(list_body);
	list_body.addEventListener("click", listItemDone)
	var list_body_text = document.createElement("div");
	list_body_text.appendChild(document.createTextNode(userInput.value))
	list_body_text.setAttribute("class", "list_body_text");
	list_body.appendChild(list_body_text);
	var list_deleteButton = document.createElement("span");
	list_deleteButton.setAttribute("class", "trash list_deleteButton");
	list_deleteButton.appendChild(document.createTextNode("x"));
	list_deleteButton.addEventListener("click", listDelete);
	list_body_text.appendChild(list_deleteButton);
	userInput.value = "";

	// Deleting Items
	function listDelete() {
		list_body.classList.add("delete");
	}

	// List Item Done (Change Color)
	function listItemDone() {
		list_body.classList.toggle("done");
	}
};

// Creating Items With Click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListItem()
	}
};

// Creating Items Pressing Enter
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem()
	}
};

// Activationg Actions
enterButton.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);

// How To Use: Content Dropdown
function dropDown() {
	document.getElementById("howToUseList").classList.toggle("show");
};