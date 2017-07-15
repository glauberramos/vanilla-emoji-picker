(() => {
  const getAllElementsWithAttribute = (attribute) => {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
      if (allElements[i].getAttribute(attribute) !== null)
      {
        matchingElements.push(allElements[i]);
      }
    }
    return matchingElements;
  }

  const generateElements = (emojiInput) => {
    var parent = emojiInput.parentNode;

    const clickLink = (event) => {
      emojiInput.value = emojiInput.value + event.target.innerHTML
    }

    const emojiContainer = document.createElement('div')
    emojiContainer.setAttribute('class', "emoji-container")

    parent.replaceChild(emojiContainer, emojiInput)
    emojiContainer.appendChild(emojiInput)

    const emojiPicker = document.createElement('div')
    emojiPicker.setAttribute('class', "emoji-picker")

    const emojiList = document.createElement('ul')
    const emojis = [0x1F601, 0x1F604, 0x1F60D];

    emojis.map((item) => {
        const emojiLi = document.createElement('li')
        const emojiLink = document.createElement('a')
        emojiLink.setAttribute('href', "#")
        emojiLink.innerHTML = String.fromCodePoint(item)
        emojiLink.onclick = clickLink

        emojiList.appendChild(emojiLink)
    })

    emojiPicker.appendChild(emojiList)
    emojiContainer.appendChild(emojiPicker)
  }

  const emojiInputs = getAllElementsWithAttribute('data-emoji')

  emojiInputs.forEach((element) => {
    generateElements(element)
  })
})()
