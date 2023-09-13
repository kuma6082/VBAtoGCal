
# VBAtoGCal

## 環境
* windows11
* office365　outlook　excel　等
* GAS

## 概要
VBAよりhttpリクエストでwebアプリ化したGASからCalenderAPIを叩いて、設定したタイトル・説明・日付で、終日イベントを作成し、EventのIDを取得する。

EventのIDより変更、削除する機能追加

## 導入方法
### GAS
* Apps Scriptで新しいプロジェクトを作成する(https://script.google.com/home)
* GoogleClenderAPIを追加する

  <img width="200" alt="image" src="https://github.com/kuma6082/VBAtoGCal/assets/89393398/6222d70b-d0ea-41a4-bc29-69745e32aad8">

* コードをコピーしてデプロイする
  
  <img width="200" alt="image" src="https://github.com/kuma6082/VBAtoGCal/assets/89393398/d144acac-7840-4564-8920-db81a209b450">

* webアプリのURLをコピーをクリックする

  <img width="200" alt="image" src="https://github.com/kuma6082/VBAtoGCal/assets/89393398/fad16d01-0a0d-4976-8703-5b9d47c6bb93">


### VBA

* outlook等からVBEを開き、VBAtoGCAL.basをインポートする
* ソースに書いてある参照設定をチェックをいれる
* scriptUrl = に先ほどコピーしたwebアプリのURLを記入する
* Sub sample()/Sub OutlookSample()を実行すればカレンダーに今日の予定が追加される




