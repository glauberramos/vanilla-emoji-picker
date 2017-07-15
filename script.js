(() => {
  const emojiInput = document.querySelector('.emoji-input')
  const links = document.querySelectorAll('.emoji-link')
  links.forEach((item) => {
    item.onclick = (event) => {
      document.querySelector('.emoji-input').value = document.querySelector('.emoji-input').value + event.target.innerHTML
    }
  })
})()
