(function(){function e(d){var a=window,b=a.devicePixelRatio||1,a=a.document;d=(d||document.documentElement.clientWidth)*b/10;var b=1/b,c=a.querySelector('meta[name="viewport"]');c||(c=a.createElement("meta"),a.head.appendChild(c));c.setAttribute("name","viewport");c.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+b+",maximum-scale="+b+",minimum-scale="+b);a.documentElement.style.fontSize=d+"px"}e();window.onresize=function(){e(document.documentElement.clientWidth/window.devicePixelRatio)}})();