# aws-ses-node-with-file-sample

Amazon SES でメールにファイルを添付して送信するサンプルです。

## Usage

### 1. IAM ユーザの作成

AmazonSESFullAccess Policy をアタッチした IAM ユーザを作成する。

### 2. .envファイルの作成

下記コマンドで .env ファイルを作成する。

```bash
cp .env.example .env
```

.env の `AWS_ACCESS_KEY_ID=` `AWS_SECRET_ACCESS_KEY=` にそれぞれ上で作成した IAM ユーザの値をセットする。

### 3. 実行

```bash
yarn install
yarn start
```

## Blog
