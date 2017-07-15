const generateElements = (emojiInput) => {
  const clickLink = (event) => {
    emojiInput.value = emojiInput.value + event.target.innerHTML
    emojiPicker.style.display = 'none';
  }

  emojiInput.style = `width: 100%`

  const emojiContainer = document.createElement('div')
  emojiContainer.style = `position: relative;`

  const parent = emojiInput.parentNode;
  parent.replaceChild(emojiContainer, emojiInput)
  emojiContainer.appendChild(emojiInput)

  const emojiPicker = document.createElement('div')
  emojiPicker.style = `position: absolute;
    right: 0;
    z-index: 999;
    display: none;
    width: 225px;
    padding: 5px 2px 5px 5px;
    margin-top: 5px;
    overflow: hidden;
    background: #fff;
    border: 1px #dfdfdf solid;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);`

  const emojiTrigger = document.createElement('a')
  emojiTrigger.style = `position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;`
  emojiTrigger.setAttribute('href', "#")
  emojiTrigger.innerHTML = ":)"
  emojiTrigger.onclick = () => {
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
  }

  emojiContainer.appendChild(emojiTrigger)

  const emojiList = document.createElement('ul')
  emojiList.style = `padding: 0;
    list-style: none;`
  const emojis = [0x1F601, 0x1F604, 0x1F60D];

  emojis.map((item) => {
      const emojiLi = document.createElement('li')
      emojiLi.style = `display: inline-block;
        margin: 5px;`

      const emojiLink = document.createElement('a')
      emojiLink.style = `text-decoration: none;
        font-size: 24px;`
      emojiLink.setAttribute('href', "#")
      emojiLink.innerHTML = String.fromCodePoint(item)
      emojiLink.onclick = clickLink

      emojiList.appendChild(emojiLink)
  })

  emojiPicker.appendChild(emojiList)
  emojiContainer.appendChild(emojiPicker)
}

window.EmojiPicker = {
  init: () => {
    const emojiInputs = document.querySelectorAll('[data-emoji="true"]');

    emojiInputs.forEach((element) => {
      generateElements(element)
    })
  }
}
