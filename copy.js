(function($){

	//document.body.style.backgroundColor="red";
	
	//alert("clicked");

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		//alert("Received a message from BG");
		console.log(sender.tab ?
		"from a content script:" + sender.tab.url :
		"from the extension");

		//alert(window.getSelection());

		sendResponse({"selected" : ""+window.getSelection()});
	});
	
})(jQuery)