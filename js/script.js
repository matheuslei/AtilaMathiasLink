function alterarImagem(avatar) {
  let id = document.getElementById('avatar');
  if ((avatar = id)) {
    document.getElementById('avatar').src =
      'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://atilamathiaslink.vercel.app/';
    document.getElementById('avatar').id = 'qrcode';
  } else {
    document.getElementById('qrcode').src = 'img/AtilaAvatar.png';
    document.getElementById('qrcode').id = 'avatar';
  }
}
