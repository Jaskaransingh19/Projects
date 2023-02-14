// Post Data
const post = document.querySelector(".PostForm");
const blogTitle = document.querySelector(".blog-title");
const blogDescription = document.querySelector(".blog-description");
const blogFile = document.querySelector(".blog-file");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) =>{
    e.preventDefault();
    db.collection("PostForm").doc().set({
        blogTitle: blogTitle.value,
        blogDescription: blogDescription.value,
        blogFile: blogFile.img,
    }).then(() =>{
        post.rest();
    })
});