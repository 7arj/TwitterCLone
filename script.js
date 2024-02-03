let posts = [];

      function addPost() {
        var postText = document.getElementById("postText").value;
        var postContainer = document.getElementById("feedSection");
        var post = document.createElement("div");
        post.className = "post";
        post.innerHTML = postText;
        postContainer.appendChild(post);

        posts.push(postText);
        document.getElementById("postText").value = "";
        var likeCommentContainer = document.createElement("div");
        likeCommentContainer.className = "like-comment-container";

        var likeButton = document.createElement("img");
        likeButton.src =
          "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
        likeButton.className = "like-button";
        likeButton.onclick = function () {
          if (
            likeButton.src ===
            "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"
          ) {
            likeButton.src =
              "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
          } else {
            likeButton.src =
              "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
          }
        };

        
        var commentButton = document.createElement("img");
        commentButton.src =
          "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"; 
        commentButton.className = "comment-button";
        commentButton.onclick = function () {
          commentForm.style.display = "block";
        };

        
        var editButton = document.createElement("img");
        editButton.src =
          "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661"; 
        editButton.onclick = function () {
          editForm.style.display = "block";
          editText.value = postText;
        };

        var deleteButton = document.createElement("img");
        deleteButton.src =
          "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643"; 
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
          postContainer.removeChild(post);
          postContainer.removeChild(likeCommentContainer);
          postContainer.removeChild(commentForm);
          postContainer.removeChild(editForm);
          postContainer.removeChild(commentsContainer);
        };

        var commentForm = document.createElement("form");
        commentForm.className = "comment-form";
        commentForm.style.display = "none";
        commentForm.onsubmit = function (event) {
          event.preventDefault();
          var comment = commentInput.value;
          if (comment) {
            var commentElement = document.createElement("div");
            commentElement.className = "comment";
            commentElement.innerHTML = comment;
            commentsContainer.appendChild(commentElement);
            commentForm.style.display = "none";
            commentInput.value = "";
          }
        };

        var commentInput = document.createElement("input");
        commentInput.type = "text";
        commentInput.placeholder = "Type your comment here...";

        
        var submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.innerHTML = "Submit";

        commentForm.appendChild(commentInput);
        commentForm.appendChild(submitButton);

      
        var editForm = document.createElement("form");
        editForm.className = "edit-form";
        editForm.style.display = "none";
        editForm.onsubmit = function (event) {
          event.preventDefault();
          var newText = editText.value;
          if (newText) {
            post.innerHTML = newText;
            postText = newText;
            editForm.style.display = "none";
          }
        };
        var editText = document.createElement("input");
        editText.type = "text";
        editText.placeholder = "Edit your post here...";
        var editButton = document.createElement("button");
        editButton.type = "submit";
        editButton.innerHTML = "Edit";
        editForm.appendChild(editText);
        editForm.appendChild(editButton);
        var commentsContainer = document.createElement("div");
        commentsContainer.className = "comments-container";
        likeCommentContainer.appendChild(likeButton);
        likeCommentContainer.appendChild(commentButton);
        likeCommentContainer.appendChild(editButton);
        likeCommentContainer.appendChild(deleteButton);
        postContainer.appendChild(post);
        postContainer.appendChild(likeCommentContainer);
        postContainer.appendChild(commentForm);
        postContainer.appendChild(editForm);
        postContainer.appendChild(commentsContainer);
        posts.push({ text: postText, comments: [] }); 
        console.log(posts);
        document.getElementById("postText").value = ""; 
      }
  
