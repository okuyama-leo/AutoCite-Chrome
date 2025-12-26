# AutoCite Chrome Extension Setup Guide

![Autocite カバー画像](Autocite_cover.png)

Chrome拡張機能「AutoCite」のセットアップ手順です。

## セットアップ手順

0. **AutoCite-Chromeをダウンロードして，PC内の適当な場所に保存する**

1. **拡張機能の管理ページを開く**
   - Google ChromeのURLバーに `chrome://extensions/` と入力してEnterキーを押します。

2. **デベロッパーモードを有効にする**
   - 画面右上の「デベロッパーモード (Developer mode)」のスイッチをオンにします。

3. **パッケージ化されていない拡張機能を読み込む**
   - 画面左上の「パッケージ化されていない拡張機能を読み込む (Load unpacked)」ボタンをクリックします。
   - ファイル選択ダイアログで、このプロジェクトのディレクトリを選択します:

4. **インストールの確認**
   - 一覧に「AutoCite」が表示されていればインストール完了です。

## 使い方

1. 引用したいWebページを開きます。
2. ブラウザのツールバーにある拡張機能アイコン（パズルピースのアイコン内にある場合もあります）をクリックし、「AutoCite」アイコンをクリックします。
3. 画面に「Citation copied!」というアラートが表示され、クリップボードに引用テキストがコピーされます。
4. メモ帳やWordなどに貼り付けて確認してください。

## 形式について

以下の形式でクリップボードにコピーされます：
`著者名(YYYY). 「記事名」 URL (YYYY年MM月DD日参照).`

例：`OKUYAMA Leo(2025). 「プロフィール・ブログサイトを作成しました | okuyamaleo.com」 https://okuyamaleo.com/posts/create-blog/ (参照：2025年12月19日)`

- 著者名が特定できない場合は「Unknown Author」となります。
- 公開年が特定できない場合は「(N/A)」となります。
