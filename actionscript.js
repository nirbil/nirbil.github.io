(function (jsonConfig){
  for (var i=1;i<jsonConfig.children.length;i++) AddChildRow();
  document.getElementById('cmdAdd').disabled=false;
  document.getElementById('txtMisparZehutHore').value=jsonConfig.parentId;
  document.getElementById('txtShemPratiHore').value=jsonConfig.parentName;
  var children = document.getElementsByClassName('child-row');
  for (var i=0;i<jsonConfig.children.length;i++){
    children[i].getElementsByClassName('mispar-zehut-yeled')[0].value=jsonConfig.children[i].childId;
    children[i].getElementsByClassName('shem-prati-yeled')[0].value=jsonConfig.children[i].childName;
    children[i].getElementsByClassName('form-check-input')[0].checked=true;
  }
});
