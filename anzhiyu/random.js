var posts=["2024/09/20/hello-world/","2025/01/18/google/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };