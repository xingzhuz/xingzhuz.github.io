var posts=["Linux/bashshell/","Linux/git/","配置/google/","配置/hexo-github/","cpp/lambda/","Linux/message-queue/","Python/python-base/","QT/qt-signal-slot/","QT/qt-base/","QT/qt-widget/","cpp/smart-pointer/","Linux/thread-linux/","cpp/thread-threadpool/","cpp/threadpool-cpp/","cpp/wrapper-binder/","cpp/move-forward/","QT/qt-draw/","cpp/cpp-keywords/","Linux/http/","cpp/cpp-operator/","Linux/http-server/","cpp/jsoncpp/","杂集/math-model/","MySQL/mysql-connect-pool/","配置/mysqlpool-config/","配置/ssh-windows/","网络安全/dvwa-file-inclusion/","MySQL/mysql-sql-1/","配置/ping-windows/","MySQL/mysql-sql-2/","网络安全/upload-12/","网络安全/upload-21/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };