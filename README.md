# NPO法人 アニマルレスキュー宇宙（そら）website
この [website](https://animal-rescue-sora.netlify.app/) は有志一同により開発が行われています。

パイロット版は [@ossan_meowwing](https://twitter.com/ossan_meowwwing) が開発を行いました。

## この website で使用しているサービス一覧（2021.11.06.時点）
- [github](https://github.com/Animal-Rescue-Sora)
- [Netlify](https://app.netlify.com/)
- [microCMS](https://app.microcms.io/signin)

### Github
実体ファイルは全てここにあります。`$ npm run build` 実行後 `master` ブランチに `push` すると Netlify 上で `$ npm run release` コマンドが実行され、そのままホスティングされます。

### Netlify
ログインは、Github アカウント連携でログインします。基本的には現状は静的ファイルをホスティングする用に使用しています。

### microCMS
現状 website 更新者が関わるサービスは、原則 microCMS だけです。ここで更新されたコンテンツが API で提供されて、website 上で読み取られて表示する仕組みになっています。

#### microCMS で更新できるブロック
- 里親募集中の動物
- 里親確定の動物（里親募集中の動物と同じ API です。）
- おしらせ
- よくある質問
- ご支援いただいた物資
- Amazon.co.jp 欲しいものリスト

（※現状、上記のブロック以外は、github にある、実体ファイルを更新する必要があります。）

#### フロントエンド側環境
現状はこの website はフロントエンド側のエンジニアリングのみで開発が行われています。
##### 使用しているフレームワーク
- Vue.js

## 更新履歴
- 2021.11.06. パイロット版 website を公開。
