var posts=["配置/google/","配置/hexo-github/","Linux/git/","Linux/message-queue/","C/lambda/","C/smart-pointer/","C/thread-threadpool/","C/wrapper-binder/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };