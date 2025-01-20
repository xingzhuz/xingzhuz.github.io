var posts=["配置/google/","配置/hexo-github/","Linux/git/","Linux/message-queue/","cpp/lambda/","cpp/smart-pointer/","cpp/thread-threadpool/","cpp/wrapper-binder/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };