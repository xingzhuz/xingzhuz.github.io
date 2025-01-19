var posts=["配置/google/","uncategorized/hello-world/","配置/hexo-github/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };