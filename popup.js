const re_protocol = new RegExp('^[A-Za-z]+://');

let addProtocol = (url) => {
  if(!url.match(re_protocol)) {
    return "http://" + url;
  } else return url;
};

let openPop = (link) => {
  let specs = "resizable=yes";
  specs += ',fullscreen=no';
  specs += ',location=no';
  specs += ',menubar=no';
  specs += ',scrollbars=yes';
  specs += ',status=no';
  specs += ',titlebar=no';
  specs += ',toolbar=no';
  open(addProtocol(link), "_blank", specs);
};

let openAndClose = (link) => {
  openPop(link);
  close();
};

document.getElementById('btn-open').onclick = (e) => {
  openAndClose(document.getElementById('txt-link').value);
};

document.getElementById('txt-link').onkeypress = (e) => {
  if(e.which === 13) openAndClose(document.getElementById('txt-link').value);
};

document.getElementById('txt-link').focus();
document.execCommand('paste');
