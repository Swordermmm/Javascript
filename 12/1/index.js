setTimeout (() => {
    popup()
}, 3000)

const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "discount.svg"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "discount.svg"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "gift.svg"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "gift.svg"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "discount.svg"
    }
   ]

const gift = giftArr[Math.floor(Math.random()*giftArr.length)]

function popup() {
    const wrapper = document.querySelector('.wrapper')
    const giftTitleEl = document.querySelector(".text")
    const imgEl = document.querySelector("img")
    imgEl.src = gift["icon"]
    giftTitleEl.textContent = gift["title"]
    wrapper.style.display = "block"
}

function destroy() {
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
}
