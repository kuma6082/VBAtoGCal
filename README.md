
# VBAtoGCal

## 環境
* windows11
* office365　outlook　excel　等
* GAS

## 概要
VBAよりhttpリクエストでwebアプリ化したGASからCalenderAPIを叩いて、設定したタイトル・説明・日付で、終日イベントを作成する

## 導入方法
### GAS
* Apps Scriptで新しいプロジェクトを作成する(https://script.google.com/home)
* GoogleClenderAPIを追加する

  <img width="200" alt="image" src="https://github.com/kuma6082/VBAtoGCal/assets/89393398/767779ca-23b7-4466-ad32-654fcd16c81a">

* コードをコピーしてデプロイする
  
  <img width="200" alt="image" src="https://github.com/kuma6082/VBAtoGCal/assets/89393398/810919e5-d77b-48cd-812e-8eaedb2b8830">

* webアプリのURLをコピーをクリックする
  
  <img width="200" alt="image" src="https://github.com/kuma6082/VBAtoGCal/assets/89393398/88c91803-83a5-4aef-87b9-c2e210395c42">

### VBA

* outlookからVBEを開き、VBAtoGCAL.basをインポートする
* ソースに書いてある参照設定をチャックをいれる
* scriptUrl = に先ほどコピーしたwebアプリのURLを記入する
* Sub sample()を起動すればカレンダーに今日の予定が追加される




