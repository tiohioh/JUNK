class LINEClient {
  constructor() {
    this.aa = new String();
  }

  set ACCESS_TOKEN(token) {
    return this._TOKEN = "Bearer " + token;
  }
  get ACCESS_TOKEN() {
    return this._TOKEN;
  }


  replyMessages() {
    return new MessageObject(MessageObject.TYPE_REPLY);
  }
  sendMessages() {
    return new MessageObject()
  }

  static func() {
    return true;
  }

  static get MessageObject(){
    return MessageObject;
  }
}

class MessageObject {
  static get TYPE_SEND() {
    return 0;
  }
  static get TYPE_REPLY() {
    return 1;
  }

  static get STATES_CODE() {
    return {
      '200': {'en': 'OK', 'ja': "リクエストが成功しました。"},
      '400': {'en': 'Bad Request', 'ja': "リクエストに問題があります。"},
      '401': {'en': 'Unauthorized', 'ja': "有効なチャンネルアクセストークンが指定されていません。"},
      '403': {'en': 'Forbidden', 'ja': "リソースにアクセスする権限がありません。ご契約中のプランやアカウントに付与されている権限を確認してください。"},
      '404': {'en': 'Not Found', 'ja': "プロフィール情報を取得できませんでした。次のような理由が考えられます。\n・対象のユーザーIDが存在していない\n・ユーザーが対象のLINE公式アカウントを友だち追加していない\n・ユーザーが対象のLINE公式アカウントを友だち追加した後にブロックした\n・ユーザーがプロフィール情報の取得に同意していない\n詳しくは「Messaging APIドキュメント」の「ユーザーのプロフィール情報取得の同意」を参照してください。"},
      '409': {'en': 'Conflict', 'ja': "同じリトライキーを持つAPIろクエストがすでに受理されています。詳しくは、「失敗したAPIリクエストを再試行する」を参照してください。"},
      '413': {'en': 'Payload Too Large', 'ja': 'リクエストのサイズが上限の2MBを超えています。リクエストのサイズを2MB以下にしてリクエストしなおしてください。'},
      '415': {'en': 'Unsupported Media Type', 'ja': 'アップロードしようとしたファイルのメディア形式はサポートされていません。'},
      '429': {'en': 'Too Many requests', 'ja': '・APIコールのレート制限を超過しました。\n・同時処理数の制限を超過しました。\n・その月の配信可能なメッセージ数を超過しました。この上限は、「Line Official Account Manager」で確認できます。'},
      '500': {'en': 'Internal Server Error', 'ja': '内部サーバーのエラーです。'}
    }
  }

  constructor() {
    this.elements = new Array();
  }

  appendNode(elem) {
    this.elements.push(elem);
  }

  reply() {}
  push() {
    return this._sendData();
  }

  static _sendData(url, opt) {
    let response = UrlFetchApp.fetch(url, opt);
    let responseCode = response.getResponseCode;
    let responseText = JSON.parse(response.getContentText);

    if(responseCode == 200){
      return true;
    }else{
      const errorMessage = "";//******************************* */
      throw new Error()
    }
  }
}




class MessageNode {
  constructor(elem){
    this.element = elem;
    this._locationAutoInset = true;
  }

  get MESSAGE_TYPE() {
    return this.element.type;
  }

  static get MESSAGE_TYPE_TEXT() {
    return {
      "type": "text",
      "text": false
    };
  }
  setTextMessage(strings){
    if(this.MESSAGE_TYPE == "text")
      this.element.text = strings;
    return this;
  }

  static get MESSAGE_TYPE_STICKER() {
    return {
      "type": "sticker",
      "packageId": false,
      "stickerId": false
    };
  }
  setPackageId(packageId) {
    if(this.MESSAGE_TYPE == "sticker")
      this.element.packageId = packageId;
    return this;
  }
  setStickerId(stickerId) {
    if(this.MESSAGE_TYPE == "sticker")
      this.element.stickerId = stickerId;
    return this;
  }

  static get MESSAGE_TYPE_IMAGE() {
    return {
      "type": "image",
      "originalContentUrl": false,
      "previewImageUrl": false
    };
  }
  setImageUrl(url) {
    if(this.MESSAGE_TYPE == "image")
      this.element.originalContentUrl = url;
    return this;
  }
  setPreviewImageUrl(url) {
    if(this.MESSAGE_TYPE == "image")
      this.element.previewImageUrl = url;
    return this;
  }

  static get MESSAGE_TYPE_VIDEO() {
    return {
      "type": "video",
      "originalContentUrl": false,
      "previewImageUrl": false
    };
  }
  setVideoUrl(url) {
    if(this.MESSAGE_TYPE == "video")
      thie.element.originalContentUrl = url;
    return this;
  }
  setThumbnailUrl(url) {
    if(this.MESSAGE_TYPE = "video")
      this.element.previewImageUrl;
    return this;
  }
  setTrackingId(trackingId) {
    if(this.MESSAGE_TYPE == "video")
      this.element.trackingId = trackingId;
    return this;
  }

  static get MESSAGE_TYPE_AUDIO(){
    return {
      "type": "audio",
      "originalContentUrl": false,//m4a only
      "duration": false
    };
  }
  setAudioUrl(url) {
    if(this.MESSAGE_TYPE == "audio")
      this.element.originalContentUrl = url;
    return this;
  }
  setAudioDuration(duration) {
    if(this.MESSAGE_TYPE == "audio")
      this.element.duration = duration;
    return this;
  }

  static get MESSAGE_TYPE_LOCATION(){
    return {
      "type": "location",
      "title": false,
      "address": false,
      "latitude": false,
      "longitude": false
    };
  }
  set locationAutoInserter(tf){
    this._locationAutoInset = tf;
  }
  get locationAutoInserter() {
    return this._locationAutoInset;
  }
  setLocationTitle(title) {
    if(this.MESSAGE_TYPE == "location")
      this.element.title = title;
    return this;
  }
  setLocationAddress(address) {
    if(this.MESSAGE_TYPE !== "location")
      return this;
    this.element.address = address;
    if(this._locationAutoInset){
      //住所toLATLNG
    }
    return this
  }
  setLocationLatLon(latlon) {
    let lat = new Number();
    let lon = new Number();
    if(this.MESSAGE_TYPE != "location")
      return this;
    if(!latlon || (latlon.constructor.name == "Array" && latlon.length == 0)){
      this.element.latitude = false;
      this.element.longitude = false;
      return this;
    }
    if(latlon.constructor.name == "String"){
      latlon.replace(" ","");
      latlon = latlon.split(",");
    }else if(latlon.constructor.name == "Array"){
    }else{
      return this;
    }
    lat = this.element.latitude = +latlon[0];
    lon = this.element.longitude = +latlon[1];
    if(!this._locationAutoInset || this.element.address)
      return this;
    if(isNaN(lat) || isNaN(lon)){
      throw new Error("Attribute Error - 引数が不正です")
      return this;
    }
    const requestURL = `https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat=${lat}&lon=${lon}`;
    let responseText = UrlFetchApp.fetch(requestURL,{'method':'get'});
    let address;
    try{
      address = JSON.parse(responseText.getContentText()).results;
      let city = getMUNI(address.muniCd).split(",");
      let town = address.lv01Nm;
      address = city[1] + city[3] + town;
    }catch(e){
      console.warn("座標を住所に変換する処理で失敗しました。(それだけです)" + e);
      return this;
    }
    this.element.address = address;
    return this;
  }
  setLocationAddress(address) {
    if(this.MESSAGE_TYPE != "location")
      return this;
    if(!address)
      address = false;
    this.element.address = address;
    if(!this.locationAutoInserter || (this.element.latitude && this.element.longitude))
      return this;
    const requestURL = `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${encodeURI(address)}`;
    let response = UrlFetchApp.fetch(requestURL,{'method':'get'}).getContentText();
    let latlon = new Array();
    try{
      latlon = JSON.parse(response)[0].geometry.coordinates;
    }catch(e){
      console.warn("住所を座標に変換処理中にエラーが発生しました(ただそれだけです)。");
      return this;
    }
    this.element.latitude = +latlon[0];
    this.element.longitude = +latlon[1];
    return this;
  }
  setLocationLatitude(lat) {
    if(this.MESSAGE_TYPE == "location"){
      this.element.latitude = lat;
    }
  }
  setLocationLongitude(lon) {
    if(this.MESSAGE_TYPE == "location")
      this.element.longitude = lon;
    return this;
  }

  //それ以下のAPIについては複雑なため省略
}

function myFunction() {

let lcm = new LINEClient.MessageObject();


  let ss = new MessageNode(MessageNode.MESSAGE_TYPE_LOCATION);
  ss.locationAutoInserter =false;
  ss.setLocationLatLon([45,130]).setLocationAddress("-");
  console.log(ss)
}
