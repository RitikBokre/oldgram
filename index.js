import { postsData } from './postsData.js'

const mainContent = document.getElementById('main-content')
let postContent = "";

for (let postData of postsData) {
    const { name, username, location, avatar, post, comment, likes } = postData;
    postContent += `
    <section>
        <div class="post-info-header">
            <img src=${avatar}>
            <div>
                <h4>${name}</h4>
                <span>${location}</span>
            </div>
			</div>
            <img src=${post} class="post-img">
            <div class="post-info">
                <div class="intractive-icons">
                    <img src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </div>
                <p class="likes-count bold">${likes} likes</p>
                <p class="caption"><span class="bold">${username}</span> ${comment}</p>
			</div>
		</section>`
}

mainContent.innerHTML = postContent;

let count = 0;
const h1El = document.getElementById('count')

function hello() {
    count++;
    h1El.textContent = count;
}