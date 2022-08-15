function myFunction() {
  let d = new LINEClient();
  d.ACCESS_TOKEN = "HOGEHOGE";
  let mo = d.createMessageObject(MessageObject.TYPE_PUSH);
  mo.pushNode(
    (new MessageNode(MessageNode.MESSAGE_TYPE_TEXT))
    .setTextMessage("Hello World1")
    .getNode()
  );
  mo.pushNode(
    (new MessageNode(MessageNode.MESSAGE_TYPE_TEXT))
    .setTextMessage("Hello World2")
    .getNode()
  );
  mo.useXLineRetryKey = false;
  mo.setPushUser("HUGAHUGA");
  mo.push();
}
