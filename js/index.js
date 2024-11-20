var first = document.getElementById('num1')
var second = document.getElementById('num2')
var third = document.getElementById('num3')
var fourd = document.getElementById('num4')



window.onscroll = (() => {
    if (document.documentElement.scrollTop >= 1700 && document.documentElement.scrollTop<=1800) {


        var counter = 0
        var count = setInterval(() => {
            counter++

            if (counter == 120) {
                clearInterval(count)
            }
            first.innerText = counter + '+'
            second.innerText = counter + 22 + '+'
            third.innerText = counter + 50 + '+'
            fourd.innerText = counter + 120 + '+'
        }, 15)
    }
    
})
