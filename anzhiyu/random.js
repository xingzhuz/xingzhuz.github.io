var posts=["Linux/bashshell/","Linux/git/","配置/google/","配置/hexo-github/","cpp/lambda/","Linux/message-queue/","Python/python-base/","QT/qt-signal-slot/","QT/qt-base/","QT/qt-widget/","cpp/smart-pointer/","Linux/thread-linux/","cpp/thread-threadpool/","cpp/threadpool-cpp/","cpp/wrapper-binder/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };