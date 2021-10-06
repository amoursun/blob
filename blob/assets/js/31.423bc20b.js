(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{489:function(s,a,t){"use strict";t.r(a);var n=t(31),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用-nextcloud-搭建私人云盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-nextcloud-搭建私人云盘"}},[s._v("#")]),s._v(" 使用 Nextcloud 搭建私人云盘")]),s._v(" "),t("p",[s._v("先前很多次都有想过搭建一个私人的云盘，却又因为感觉没有必要的矛盾心理而放弃了。这一次终于有机会可以接触到这个步骤了！")]),s._v(" "),t("p",[s._v("由于先前了解过这方面的内容，所以我一个想到了一个开源的应用程序——Nextcloud，大概可以理解为 OwnCloud 的升级版。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/11/15/VE9OkwWLDlxPfQ6.jpg",alt:""}})]),s._v(" "),t("p",[s._v("最开始我还以为它是一个线上的云盘服务，后来发现它其实是一个能够自己部署的开源程序。大概可以理解为它直接给你提供了一个一站式的云盘服务，包括前端和后端，这样你就不需要再去自己写程序管理了！"),t("em",[s._v("其实大概类似于把百度云部署到了自己的服务器上的感觉（错乱）。")])]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("在开始搭建之前，你需要准备一些东西，大概有这么几种")]),s._v(" "),t("ul",[t("li",[s._v("一台完全被你掌握的 VPS\n"),t("ul",[t("li",[s._v("硬盘要够大！否则就失去了意义。")]),s._v(" "),t("li",[t("strong",[s._v("本文中使用 Ubuntu 18.04 进行演示，其它系统操作应该类似。")])])])]),s._v(" "),t("li",[s._v("Apache / Nginx、PHP "),t("strong",[s._v(">=7.2")]),s._v(" 和 MySQL 支持\n"),t("ul",[t("li",[s._v("建议全部使用最新版本")])])])]),s._v(" "),t("p",[s._v("在满足了这些必须条件以后，就可以开始着手搭建了。")]),s._v(" "),t("h2",{attrs:{id:"搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[s._v("#")]),s._v(" 搭建")]),s._v(" "),t("h3",{attrs:{id:"准备工作-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-2"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("首先我们需要 Nextcloud 的软件包，也就是本体。网页在这里 "),t("a",{attrs:{href:"https://nextcloud.com/install/#instructions-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nextcloud.com/install/#instructions-server"),t("OutboundLink")],1),s._v("。不过其实你并不需要亲自去，在这里我们会跟随着步骤逐步引入。")]),s._v(" "),t("p",[s._v("Nextcloud 安装有两种方式，一种是传统的软件包解压，另一种是使用官方发布的 "),t("code",[s._v("php")]),s._v(" 文件按步骤一键安装。不过本文所探讨的仅限于前者，对于后者来说，笔者的服务器上并不能成功运行。考虑到国内部分特殊情况，我本人更倾向于前者。")]),s._v(" "),t("p",[s._v("那么现在开始"),t("strong",[s._v("下载")]),s._v("吧。点击"),t("a",{attrs:{href:"https://download.nextcloud.com/server/releases/nextcloud-17.0.1.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("打开 Nextcloud 17.0.1 的官网下载链接。"),t("strong",[s._v("该版本截至 2019 年 11 月 15 日为最新。")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[t("strong",[s._v("⚠️ Warning")])]),s._v(" "),t("p",[s._v("Not friendly to mainland network.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为什么不用 curl 呢")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://download.nextcloud.com/server/releases/nextcloud-17.0.1.zip -o nextcloud-17.0.1.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("下载完毕后解压到要部署网站的位置。需要注意的是解压出来的并不是一大堆文件，而是一个 "),t("code",[s._v("nextcloud")]),s._v(" 文件夹，里面包含的才是你想要的文件。因此如果你真的想要把它部署到某个目录，别忘了将 "),t("code",[s._v("nextcloud")]),s._v(" 文件夹里的文件移动出来（"),t("code",[s._v("mv nextcloud/* <document-root>")]),s._v("）。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[t("strong",[s._v("提示 ❓")])]),s._v(" "),t("p",[s._v("下文中使用 "),t("code",[s._v("<document-root>")]),s._v(" 代替你所部署网页的位置，即所有网页文件的存放点和 Webserver 的根目录。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有可以 sudo apt-get install unzip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" nextcloud-17.0.1.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这样一来准备工作就完成了。这个时候虽然你可以看到目录底下出现了 "),t("code",[s._v("index.php")]),s._v("，但是当你访问的时候你会发现事情并没有你想象的那么简单 🤔。")]),s._v(" "),t("h3",{attrs:{id:"依赖和数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖和数据库"}},[s._v("#")]),s._v(" 依赖和数据库")]),s._v(" "),t("p",[s._v("首先需要确保将 Webserver 的根目录设置为你所解压 Nextcloud 并包含其所有文件的地方，这一步应该不需要多提了。")]),s._v(" "),t("p",[s._v("Nextcloud 所部署的环境应保证"),t("strong",[s._v("越新越好")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("操作系统应使用较新的 LTS 发行版；")]),s._v(" "),t("li",[s._v("PHP 必须满足 >=7.1，但是强烈推荐 "),t("strong",[s._v(">=7.2")])]),s._v(" "),t("li",[s._v("MySQL 必须满足 >=5.5，支持 MariaDB")])]),s._v(" "),t("p",[s._v("确保上面的刚性条件具备了以后，我们需要给 php 安装拓展。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这些都是必要的拓展。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.2-gd php7.2-json php7.2-curl php7.2-mbstring php7.2-mysql php7.2-intl php-imagick php7.2-xml php7.2-zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来，为了安装能够顺利进行，我们必须给予 Web 服务器目录的权限：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是 nginx 那么这里的用户会有所不同。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R www-data:www-data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("document-root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来设置数据库。为了方面，这里就不一一解释各个配置的含义。仅需将以下内容粘贴到 "),t("code",[s._v("/etc/mysql/my.cnf")]),s._v(" 中即可。")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[server]\nskip-name-resolve\ninnodb_buffer_pool_size = 128M\ninnodb_buffer_pool_instances = 1\ninnodb_flush_log_at_trx_commit = 2\ninnodb_log_buffer_size = 32M\ninnodb_max_dirty_pages_pct = 90\nquery_cache_type = 1\nquery_cache_limit = 2M\nquery_cache_min_res_unit = 2k\nquery_cache_size = 64M\ntmp_table_size= 64M\nmax_heap_table_size= 64M\nslow-query-log = 1\nslow-query-log-file = /var/log/mysql/slow.log\nlong_query_time = 1\n\n[client-server]\n!includedir /etc/mysql/conf.d/\n!includedir /etc/mysql/mariadb.conf.d/\n\n[client]\ndefault-character-set = utf8mb4\n\n[mysqld]\ncharacter-set-server = utf8mb4\ncollation-server = utf8mb4_general_ci\ntransaction_isolation = READ-COMMITTED\nbinlog_format = ROW\ninnodb_large_prefix=on\ninnodb_file_format=barracuda\ninnodb_file_per_table=1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",[t("strong",[s._v("注意内容分节")])]),s._v(" "),t("p",[s._v("在编辑 "),t("code",[s._v("my.cnf")]),s._v(" 的时候，预设情况下可能已经出现了 "),t("code",[s._v("[mysqld]")]),s._v(" 等小结，这个时候就不要直接暴力粘贴，而是选择性的将那些原先没有的配置粘贴到相应的位置，没有的就直接全部复制。")])]),s._v(" "),t("p",[s._v("最后记得重启。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("接下来修改 PHP 的 mysql 拓展的配置。通常情况下这个配置文件应该处于 "),t("code",[s._v("/etc/php7/conf.d/mysql.ini")]),s._v("，但是也许是因为系统差异，笔者的配置文件处于 "),t("code",[s._v("/etc/php/7.2/apache2/conf.d/20-pdo_mysql.ini")]),s._v("。各位可以根据自己的实际情况结合上述内容判断该配置文件的位置。")]),s._v(" "),t("p",[s._v("验证是否为所要更改的配置文件的依据是看开头是否有")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# configuration for PHP MySQL module\nextension=pdo_mysql.so\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来将如下内容粘贴")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[mysql]\nmysql.allow_local_infile=On\nmysql.allow_persistent=On\nmysql.cache_size=2000\nmysql.max_persistent=-1\nmysql.max_links=-1\nmysql.default_port=\nmysql.default_socket=/var/lib/mysql/mysql.sock  # Debian squeeze: /var/run/mysqld/mysqld.sock\nmysql.default_host=\nmysql.default_user=\nmysql.default_password=\nmysql.connect_timeout=60\nmysql.trace_mode=Off\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("重启 Webserver，这里用的是 Apache。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart apache2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("那么数据库的配置工作就已经完成了！接下来我们创建 Nextcloud 所需要的数据库。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入数据库")]),s._v("\n\nmysql -u root -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后我们先单独创建一个 Nextcloud 专用账号")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nextcloud'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再创建 Nextcloud 所需的数据库")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 在这里使用了 utf8mb4 编码以支持 Emoji 表情")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" nextcloud "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8mb4 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8mb4_general_ci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后给予我们之前创建的那个账户对此数据库的完全访问：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEMPORARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" nextcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nextcloud'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后就可以退出了。")]),s._v(" "),t("h3",{attrs:{id:"正式安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式安装"}},[s._v("#")]),s._v(" 正式安装")]),s._v(" "),t("p",[s._v("没错！这才是正式安装的时刻。实际上只需要一行指令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("document-root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -u www-data php occ maintenance:install --database "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v(" --database-name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nextcloud"')]),s._v(" --database-user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nextcloud"')]),s._v(" --database-pass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码"')]),s._v(" --admin-user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"自定义"')]),s._v(" --admin-pass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"自定义"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("上述指令较容易出错，只要有一个参数有问题均会导致无法安装。其中标有自定义（密码）的地方代表需要你自己配置填写。")]),s._v(" "),t("p",[s._v("如果最后显示")]),s._v(" "),t("div",{staticClass:"language-output line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Nextcloud was successfully installed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("代表安装成功了。这个时候打开你的网站，应该就可以看到正常页面了！")])])}),[],!1,null,null,null);a.default=e.exports}}]);