const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");

dice.addEventListener("click", function () {
  const adviceData = async function () {
    try {
      let num = Math.floor(Math.random() * 224);
      const res = await fetch(`https://api.adviceslip.com/advice/${num}`);
      const data = await res.json();
      console.log(data.slip);
      adviceText.style.color = `#cee3e9`;
      adviceNumber.innerHTML = `Advice #${data.slip.id}`;
      adviceText.innerHTML = `${data.slip.advice}`;
    } catch (err) {
      adviceText.style.color = "crimson";
      adviceText.innerHTML = `An error occured, please wait a second and generate another advice or reload the page 😓😓${err}`;
    }
  };
  adviceData();
});
