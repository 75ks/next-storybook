# ベースとなるDockerイメージの指定
FROM node:16.14.2

# コンテナ内に作業ディレクトリを作成
WORKDIR /app

# 依存関係のファイルをコピー
COPY package*.json ./

# 依存関係のインストール(上記ファイルに変更があった場合のみ実行される)
RUN npm install

# プロジェクトのソースファイルをコピー
COPY . .

# プロジェクトを実行
CMD ["npm", "run", "dev"]