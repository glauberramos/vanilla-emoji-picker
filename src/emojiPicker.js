class EmojiPicker {
  constructor() {
    this.initiate();
  }

  initiate() {
    const emojiInputs = document.querySelectorAll('[data-emoji-picker="true"]');

    emojiInputs.forEach(element => {
      this.generateElements(element);
    });
  }

  generateElements(emojiInput) {
    const clickLink = event => {
      var caretPos = emojiInput.selectionStart;
      emojiInput.value =
        emojiInput.value.substring(0, caretPos) + " " + event.target.innerHTML + emojiInput.value.substring(caretPos);
      emojiPicker.style.display = "none";

      //trigger ng-change for angular
      if (typeof angular !== "undefined") {
        angular.element(emojiInput).triggerHandler("change");
      }
    };

    emojiInput.style.width = "100%";

    const emojiContainer = document.createElement("div");
    emojiContainer.style.position = "relative";

    const parent = emojiInput.parentNode;
    parent.replaceChild(emojiContainer, emojiInput);
    emojiContainer.appendChild(emojiInput);

    const emojiPicker = document.createElement("div");
    emojiPicker.tabIndex = 0;

    emojiPicker.addEventListener(
      "blur",
      function(event) {
        emojiPicker.style.display = "none";
      },
      false
    );

    emojiPicker.style.position = "absolute";
    emojiPicker.style.right = "2px";
    emojiPicker.style.outline = "none";
    emojiPicker.style.top = "20px";
    emojiPicker.style.zIndex = "999";
    emojiPicker.style.display = "none";
    emojiPicker.style.width = "180px";
    emojiPicker.style.padding = "7px 7px 7px 7px";
    emojiPicker.style.marginTop = "5px";
    emojiPicker.style.overflow = "hidden";
    emojiPicker.style.background = "#fff";
    emojiPicker.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    emojiPicker.style.borderRadius = "2px;";

    const emojiTrigger = document.createElement("a");
    emojiTrigger.style.position = "absolute";
    emojiTrigger.style.top = "2px";
    emojiTrigger.style.right = "2px";
    emojiTrigger.style.textDecoration = "none";
    emojiTrigger.setAttribute("href", "javascript:void(0)");
    emojiTrigger.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>';
    emojiTrigger.onclick = () => {
      if (emojiPicker.style.display === "none") {
        emojiPicker.style.display = "block";
      }
      emojiPicker.focus();
    };

    emojiContainer.appendChild(emojiTrigger);

    const emojiList = document.createElement("ul");
    emojiList.style.padding = "0";
    emojiList.style.margin = "0";
    emojiList.style.listStyle = "none";

    const emojis = [
      0x1f601,
      0x1f621,
      0x1f602,
      0x1f609,
      0x1f60a,
      0x1f648,
      0x1f62c,
      0x1f61d,
      0x1f618,
      0x1f49b,
      0x1f60d,
      0x1f638,
      0x1f44d,
      0x1f614,
      0x1f62d,
      0x1f48b,
      0x1f612,
      0x1f633,
      0x1f61c,
      0x1f603,
      0x1f622,
      0x1f631,
      0x1f60f,
      0x1f61e,
      0x1f605,
      0x1f61a,
      0x1f64a,
      0x1f60c,
      0x1f600,
      0x1f61d,
    ];

    emojis.map(item => {
      const emojiLi = document.createElement("li");
      emojiLi.style.display = "inline-block";
      emojiLi.style.margin = "5px";

      const emojiLink = document.createElement("a");
      emojiLink.style.textDecoration = "none";
      emojiLink.style.margin = "5px";
      emojiLink.style.position = "initial";
      emojiLink.style.fontSize = "24px";
      emojiLink.setAttribute("href", "javascript:void(0)");
      emojiLink.innerHTML = String.fromCodePoint(item);
      emojiLink.onmousedown = clickLink;

      emojiList.appendChild(emojiLink);
    });

    emojiPicker.appendChild(emojiList);
    emojiContainer.appendChild(emojiPicker);
  }
}

module.exports = EmojiPicker;
