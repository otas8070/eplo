# eplo
[master]git pull
#最新のプロジェクトを取ってくる

[master]git checkout -b TESTBRANCH
#ローカルでブランチを作り、そのブランチに移動する

[testbranch]ファイルを編集
#編集作業する（普通にエディタとかで。）

[testbranch]git add .
#gitに編集内容を登録するおまじない（１）

[testbranch]git commit -m "テストの編集"
#gitに編集内容を登録するおまじない（２）

[testbranch]git push origin testbranch 
#リモート環境にtestbranchというブランチを作り、そこに編集内容をプッシュ

(github.com)緑の"compare & pull request"ボタンを押す(画像参照)
#リモートのtestbeanchのデータをリモートのmasterにマージしてほしいというリクエストを作る（１）

(github.com)緑の"create pull request"ボタンを押す(画像参照)
#リモートのtestbeanchのデータをリモートのmasterにマージしてほしいというリクエストを作る（２）

[testbranch]git checkout master
#ローカルのmasterブランチに移動

[master] git pull
#リモートのmasterからローカルのmasterにプル（次の作業のため）
#ちなみに"git pull origin master"の略。

[master]git branch -d testbranch
#testbranchを削除（次の作業のため）


 ※originというのは、リモートブランチの事
