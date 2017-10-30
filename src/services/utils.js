const loadScript = (src, id, onLoad ) => {
  var js;
  var scriptTag = document.getElementsByTagName('script')[0];
  js = document.createElement('script');
  js.id = id;
  js.src = src;
  js.onload = onLoad;

  scriptTag.parentNode.insertBefore(js, scriptTag);
}

export default loadScript;