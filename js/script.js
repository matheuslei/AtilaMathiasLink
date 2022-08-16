function alterarImagem(avatar) {
  let id = document.getElementById('avatar');
  if ((avatar = id)) {
    document.getElementById('avatar').src = 'QRCodeRocketCoffee.png';
    document.getElementById('avatar').id = 'qrcode';
  } else {
    document.getElementById('qrcode').src = 'img/AtilaAvatar.png';
    document.getElementById('qrcode').id = 'avatar';
  }
}
