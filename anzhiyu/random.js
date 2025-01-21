var posts=["配置/google/","配置/hexo-github/","Linux/git/","Linux/message-queue/","cpp/lambda/","cpp/smart-pointer/","cpp/thread-threadpool/","cpp/wrapper-binder/","Linux/thread-linux/","cpp/threadpool-cpp/","Linux/bashshell/","Python/python-base/","QT/qt-base/","QT/qt-signal-slot/","QT/qt-widget/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };