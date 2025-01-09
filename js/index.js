const loadPost = async () => {
    const rec = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await rec.json();
    const posts = data.posts;
    // console.log(posts);
    displayPost(posts);
}


const displayPost = (posts) => {
    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        // console.log(post);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-normal bg-[#F3F3F5] rounded-2xl gap-x-12 py-10 pl-10 pr-16 mt-12 items-center">
            <div>
                <div id="green" class="h-3 w-3 bg-green-700 rounded-full relative top-2 left-[160px] hidden"></div>

                <div id="red" class="h-3 w-3 bg-red-700 rounded-full relative top-0 left-[160px] hidden"></div>

                <img class="h-44 w-40 rounded-xl" src="${post.image}" alt="">
            </div>

            <div>
                <div class="flex justify-normal space-x-4">
                    <p class="text-gray-800 font-inter text-sm font-medium"># ${post.category}</p>
                    <p class="text-gray-800 font-inter text-sm font-medium">Author : ${post.author.name}</p>
                </div>

                <div class="w-full">
                <h1 class="text-[#12132D] font-mulish text-xl font-bold mt-3">${post.title}</h1>

                <p class="text-gray-600 font-inter text-base font-normal mt-4">${post.description}</p>
                </div>

                <hr class="mt-5">

                <div class="flex justify-between mt-5">
                 <div class="flex justify-between space-x-14 items-center">
                        <p><i class="fa-regular fa-message"></i> <span class="text-gray-600 font-inter text-base font-normal">${post.comment_count}</span></p>
                        <p><i class="fa-regular fa-eye"></i> <span class="text-gray-600 font-inter text-base font-normal">${post.view_count}</span></p>
                        <p><i class="fa-regular fa-clock"></i> <span class="text-gray-600 font-inter text-base font-normal">${post.posted_time}</span></p>
                 </div>
                 <div class="">
                    <button class="btn"><img src="images/email 1.svg" alt=""></button>
                 </div>
                </div>
            </div>
        </div>
        `
        postContainer.appendChild(div);


    });
}



const loadLatestPost = async () => {
    const rec = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await rec.json();
    // console.log(data);
    displayLatestPost(data)
}

const displayLatestPost = (latestPosts) =>{
    const latestPostsContainer = document.getElementById('latest-posts-container');

    latestPosts.forEach((latestPost)=>{
        console.log(latestPost);
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="bg-white rounded-3xl border-[1px] border-gray-200 p-6">
                        <img class="rounded-2xl" src="${latestPost.cover_image}" alt="">
                        <p class="text-gray-400 text-base font-normal mt-4"><i class="fa-regularfa-calendar-minus"></i> ${latestPost.author?.posted_date?? "Unknown"}</p>
                        <h1 class="text-[#12132D] font-mulish text-lg font-extrabold mt-4">${latestPost.title}</h1>
                        <p class="text-gray-500 font-mulish text-base font-normal mt-4">${latestPost.description}</p>

                        <div class="flex justify-normal space-x-2 mt-4">
                            <img class="h-12 w-12 rounded-full" src="${latestPost.profile_image}" alt="">
                            <div>
                                <h1 class="text-[#12132D] font-mulish text-base font-bold">${latestPost.author.name}</h1>
                                <p class="text-gray-500 text-sm font-normal">${latestPost.author?.designation?? "Unknown"}</p>
                            </div>
                        </div>
                    </div>
        `
        latestPostsContainer.appendChild(div);
    })
}




loadLatestPost();
loadPost();