#!/usr/bin/env bash
if [ -z "$1" ]
then
    echo "需要指定发版repo的branch名，命令格式为 './deploy.sh RELEASE_BRANCH' 例如: ./deploy.sh develop"
    exit 1
fi

# release前端分支
release_branch=$1

if [ -f "./config-base.sh" ]
then
    source ./config-base.sh
else
    echo "config-base.sh 不存在, 请参照 config-base_example.sh 创建一个你的发布配置文件"
    exit 1
fi

if [ -n "$2" -a "$2" != "-t" ]
then
	git_mark_name=$2
	echo "commit: ${git_mark_name}"
fi


if [ "$2" = "-t" -o "$3" = "-t" ]
then
    echo "github deploy 代码打tag, tag_name并且存在"
	echo "tag_name: ${tag_name}"
else
    echo "请确定是否为上线发版, 如果是请结束当前进程, 重新运行命令并且添加-t, 如果不是请继续"
    tag_name=""
    echo "tag_name: ${tag_name}"
fi

echo "PWD=$PWD"
ls -al

if [ -f "./config.sh" ]
then
    source ./config.sh
    echo "Git 路径: " $release_repo_path

    cd $release_repo_path
    git status
    git add .
    git commit -am "deploy ${release_branch}: 评论: ${git_mark_name}"
    # 推送到远端
    git push origin/$release_branch

    # 确保脚本抛出遇到的错误
    set -e

    # 生成静态文件
    yarn docs:build

    # 进入生成的文件夹
    cd dist

    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -am "deploy"

    # 如果发布到 https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

    # 如果发布到 https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

    git push -f git@github.com:$USERNAME/$REPO.git master:gh-page

    cd -

else
    echo "config.sh 不存在, 请参照 config_example.sh 创建一个你的发布配置文件"
fi
