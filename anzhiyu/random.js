var posts=["uncategorized/hello-world/","配置/google/","配置/hexo-github/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };