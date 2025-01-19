var posts=["配置/google/","配置/hexo-github/","Linux/git/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };