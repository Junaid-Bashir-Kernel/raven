chrome.omnibox.onInputEntered.addListener((cmd) => {
 
 if(cmd=="new")   {
 
 let URL="https://github.com/new"
 chrome.tabs.create({url:URL})
 
 }
 else if(cmd=="list") {
 
 let URL="https://github.com/Junaid-Bashir-Kernel?tab=repositories"
 chrome.tabs.create({url:URL})
 
 }
 else if(cmd=="org") {
 
  let URL="https://github.com/settings/organizations"
  chrome.tabs.create({url:URL})
 
 
 }
 else if(cmd=="set") {
  
 let URL="https://github.com/settings/profile"
 chrome.tabs.create({url:URL})
 
 
 }
 else {
 
  let newURL='https://github.com/Junaid-Bashir-Kernel'+"/"+encodeURI(cmd)
  chrome.tabs.create({ url: newURL });
 
 }
 
 });