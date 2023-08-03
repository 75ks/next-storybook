## VSCode環境を共有して開発を行う方法
※Git、Docker、VSCodeがインストールされている前提

#### プロジェクトをクローン
```bash
# ホームディレクトリに移動
cd

# プロジェクトをクローン
git clone https://github.com/75ks/next-dev.git

# プロジェクトディレクトリに移動
cd next-dev

# クローンしたプロジェクトをVSCodeで開く
code .
```

#### VSCodeからコンテナに接続
- 左サイドバーの拡張機能で「Remote Development」を検索し、インストール
- 左下「><」アイコンをクリックして、「コンテナを再度開く」を選択

#### プロジェクトにアクセス
- [localhost:3000](http://localhost:3000/)