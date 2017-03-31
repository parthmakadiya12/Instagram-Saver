// var app = chrome.runtime.getBackgroundPage();

function hello() {
  var strIn=document.myForm.link.value;
                  index = strIn.indexOf('https=2//'),
                  strOut = strIn.substr(index);
          var res = strOut;
          res = res.replace(/=1/g, ".");
		  res = res.replace(/=2/g, ":");
          res = res.replace("jpg.2", "jpg");
          console.log(res);
          
		  OpenInNewTab(res);
          window.open('res','blank');
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
  
}


         // var strIn = '.0.1.0.2.0.$1250638101358785130.$https=2//instagram=1fbom1-1=1fna=1fbcdn=1net/t51=12885-15/sh0=108/e35/p640x640/13116696_641288272691290_10643986_n=1jpg?ig_cache_key=0MTI1MDYzODEwMTM1ODc4NTEzMA%3D%3D=12.0.2',
          
    
function OpenInNewTab(url) {
          var win = window.open(url, '_blank');
          win.focus();
      }

document.getElementById('clickme').addEventListener('click', hello);
