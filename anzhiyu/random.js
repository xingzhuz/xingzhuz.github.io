var posts=["配置/google/","配置/hexo-github/","uncategorized/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };