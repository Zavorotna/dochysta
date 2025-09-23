document.addEventListener("DOMContentLoaded", function () {

    //burger
    if (document.querySelector(".burger")) {
        const burger = document.querySelector(".burger"),
            menu = document.querySelector(".nav"),
            cancel = document.querySelector(".cancel"),
            listItem = menu.querySelectorAll("a"),
            dark = document.querySelector(".dark")

        burger.addEventListener("click", function () {
            menu.style.right = "0";
            dark.style.display = "block"
        })
        
        function cancelBurger() {
            menu.style.right = "-100%";
            dark.style.display = "none"
        }
        listItem.forEach(item => {
            if(!item.classList.contains("toggle")) {
                // console.log(item);
                item.addEventListener("click", cancelBurger)
            }
            if(window.innerWidth < 1200) {
                item.addEventListener("click", function() {
                    item.classList.toggle("hover_a")
                })
            }
        })
        cancel.addEventListener("click", function (e) {
            e.preventDefault()
            cancelBurger()
        })
        dark.addEventListener("click", cancelBurger)
    }

    // випадаючі блоки з інформацією
    function toggleVisibility(buttons, visibleClass, activeClass) {
        buttons.forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault()
                const descriptionMore = item.nextElementSibling
                descriptionMore.classList.toggle(visibleClass)
                item.classList.toggle(activeClass)
            })
        })
    }

    const btnReadMore = document.querySelectorAll(".readmore")

    toggleVisibility(btnReadMore, "visible", "readmore-active")


    if(document.querySelector(".menu") && window.innerWidth < 1200) {
        const menuItem = document.querySelector(".toggle"),
            submenu = document.querySelector(".submenu")
        
        menuItem.addEventListener("click", function(e) {
            e.preventDefault()
            submenu.classList.toggle("d-block")
        })
    }
})