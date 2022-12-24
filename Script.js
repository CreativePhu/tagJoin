
function clickTag(){
    var tags = document.querySelectorAll('.tag')
    var contents = document.querySelectorAll('.content')
    var tagSelect = document.querySelector('.opacityText')
    var crossbar = document.querySelector('.crossbar')
    crossbar.style.left = tagSelect.offsetLeft + 'px'
    tags.forEach(function(tag, index){
        tag.onclick = function(){
            var tagList = document.querySelector('.tagList')
            var hideText = tagList.querySelector('.opacityText')
            hideText.classList.remove('opacityText')


            var textTag = this.querySelector('.textTag')
            textTag.classList.add('opacityText')
            crossbar.style.left = tag.offsetLeft + 'px'


            var contentRM = document.querySelector('.hideContent')
            contentRM.classList.remove('hideContent')
            contents[index].classList.add('hideContent')
        }
    })
}

clickTag()