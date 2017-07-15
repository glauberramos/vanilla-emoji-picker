(() => {
  const emojiInput = document.querySelector('.emoji-input')

  const emojiContainer = document.createElement('div')
  emojiContainer.setAttribute('class', "emoji-container")

  const emojiPicker = document.createElement('div')
  emojiPicker.setAttribute('class', "emoji-picker")

  const emojiList = document.createElement('ul')
  const emojis = [0x1F601, 0x1F604, 0x1F60D];

  const clickLink = (event) => {
    document.querySelector('.emoji-input').value = document.querySelector('.emoji-input').value + event.target.innerHTML
  }

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

  emojiInput.parentNode.insertBefore(emojiContainer, emojiInput.nextSibling)

  console.log(emojiList)
})()
