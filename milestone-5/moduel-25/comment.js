document.getElementById('btn-post').addEventListener('click',function(){
    const commentField = document.getElementById('text-area');
    const commentText = commentField.value;
   const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = commentText;
    commentContainer.appendChild(p);
    commentField.value = ''

})