const posts = [
    {
        'postid' : "00",
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        'postid' : "01",
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        'postid' : "02",
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById('main-container')

 
let sec = document.createElement('section')
sec.classList.add("post-container")

      
for (let i = 0; i < posts.length; i++){
    let postId = posts[i].postid
    let profileName = posts[i].name
    let userName = posts[i].username
    let location = posts[i].location
    let userAvatar = posts[i].avatar
    let imagePost = posts[i].post
    let comment = posts[i].comment
    let likes = posts[i].likes  

    let sec = document.createElement('section')
    sec.classList.add("post-container")

    let infoSecDiv = postInfoSec(userAvatar, profileName, location)
    let imgDiv = postImage(imagePost)
    let likesDiv = getLikes(likes, postId)
    let userDiv = getUserName(userName, comment)

    sec.appendChild(infoSecDiv)
    sec.appendChild(imgDiv)
    sec.appendChild(getIcons(postId))
    sec.appendChild(likesDiv)
    sec.appendChild(userDiv)
    
    document.body.appendChild(sec)
}
    


function getUserName(userName, comment){
    let userEl = document.createElement('h6')
    userEl.classList.add("username")
    userEl.innerHTML = userName
    
    let commentEl = document.createElement('span')
    commentEl.innerHTML = comment
    
    userEl.appendChild(commentEl)
    
    return userEl
}

function getLikes(likes, postId){
    let divEl = document.createElement('div')
    divEl.classList.add("likes-container")
    
    let likesCounterEl = document.createElement('h5')
    likesCounterEl.classList.add("likes")
    likesCounterEl.setAttribute("id", `${postId}-likes-counter`)
    
    likesCounterEl.innerHTML = likes
    
    let likesElText = document.createElement('p')
    likesElText.classList.add("likes")
    likesElText.classList.add("like-text")
    likesElText.innerText = " likes"
    
    divEl.appendChild(likesCounterEl)
    divEl.appendChild(likesElText)
    
    return divEl
}

function postImage(imagePost){
    let divEl = document.createElement('div')
    divEl.classList.add("image-container")
    
    let imgEl = document.createElement('img')
    imgEl.classList.add("post")
    imgEl.src = imagePost
    
    divEl.appendChild(imgEl)
    
    return divEl
}

function postInfoSec(userAvatar, profileName, location){
    let divEl = document.createElement('div')
    divEl.classList.add("post-info")
    
    let avatarEl = document.createElement('img')
    avatarEl.src = userAvatar
    avatarEl.classList.add("avatar")
    
    let profileNameEl = document.createElement('h5')
    profileNameEl.classList.add("profile-name")
    profileNameEl.innerHTML = profileName
    
    let locationEl = document.createElement('p')
    locationEl.classList.add("location")
    locationEl.innerHTML = location
    
    divEl.appendChild(avatarEl)
    divEl.appendChild(profileNameEl)
    divEl.appendChild(locationEl)
    
    return divEl
}

function getIcons(postId){
    
    let iconDiv = document.createElement('div')
    iconDiv.classList.add("icons")
    
    let heartEl = document.createElement('img')
    let commentEl = document.createElement('img')
    let dmEl = document.createElement('img')
    
    heartEl.classList.add("icon")
    commentEl.classList.add("icon")
    dmEl.classList.add("icon")
    
    heartEl.src = "images/icon-heart.png"
    commentEl.src = "images/icon-comment.png"
    dmEl.src = "images/icon-dm.png"
    
    heartEl.setAttribute("id", `${postId}-heart`)
    let itemLiked = false;
    let itemAlreadyLiked = false;
    heartEl.addEventListener("click", function(){
        
        if (itemLiked == false){
            let counter = document.getElementById(`${postId}-likes-counter`)
            counterVal = Number(counter.innerHTML.valueOf())
            counterVal+=1
            counter.innerText = counterVal
            itemLiked = true
        } else {
            let counter = document.getElementById(`${postId}-likes-counter`)
            counterVal = Number(counter.innerHTML.valueOf())
            counterVal-=1
            counter.innerText = counterVal
            itemLiked = false
        }
            
    })
    
    iconDiv.appendChild(heartEl)
    iconDiv.appendChild(commentEl)
    iconDiv.appendChild(dmEl)

    
    return iconDiv
    
}






