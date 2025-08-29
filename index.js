let coinCount = 100;
let heartCount= 0;
let copyCount = 0;
const copyDisplay = document.getElementById("copyCount");
const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount"); // Make sure this exists in your navbar
const callBtn = document.getElementById("call-btn");
const clearBtn = document.getElementById("clearBtn");
const historyList = document.getElementById("historyList");

copyDisplay.innerText = copyCount;
heartDisplay.innerText = heartCount;

const heartList = document.querySelectorAll(".heart-btn");
heartList.forEach((card) => {
    card.addEventListener("click", function () {
        heartCount++;
        heartDisplay.innerText = heartCount;
    });
});
const cardList = document.querySelectorAll(".copy-btn");

for (const card of cardList) {
    card.addEventListener("click", function () {
        copyCount++;
        copyDisplay.innerText = copyCount;

        let number = card.parentElement.parentElement.children[0].children[3].children[0].innerText;
        navigator.clipboard
            .writeText(number)
            .then(() => {
                alert(`You Have Successfully Copied ${number}`);
            })
            
    });
}

const callButtons = document.querySelectorAll(".call-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest("article");
    const name = card.querySelector("#name").textContent;
    const number = card.querySelector("#number").textContent;
    const historyList = document.getElementById("historyList");

    if (coinCount < 20) {
      alert("❌Not enough coins to make a call.");
      return;
    }

    alert(`📞 Calling ${name} at ${number}`);
    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    const time = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-[#fafafa] gap-3 p-2 mb-2 rounded-lg";

    div.innerHTML = `
      <div class="flex flex-col">
        <h1 class="font-semibold text-sm">${name}</h1>
        <p class="font-semibold">${number}</p>
      </div>
      <p class="text-sm text-gray-400 font-medium whitespace-nowrap">${time}</p>
    `;

    historyList.appendChild(div);
  });
}

clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";

})
