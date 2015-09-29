var _data = [];

chrome.commands.onCommand.addListener(function(command) {
	console.log('onCommand event received for message: ', command);
	//alert('sdf');
	//alert(command);
	//chrome.tabs.executeScript({file: 'jquery.js'});
	//chrome.tabs.executeScript({file: 'copy.js'});
	//chrome.tabs.executeScript({code: 'alert("selected: " + window.getSelection())'});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {test:"test"}, function(response) {
			//alert("selected: " + response);
			//alert("selected: " + response.selected);
			console.log(response);
			_data.push(response.selected);
			
// Create a simple text notification:
var notification = webkitNotifications.createNotification(
  '',  // icon url - can be relative
  'Added to Clipboard',  // notification title
  response.selected  // notification body text
);

// Or create an HTML notification:
//var notification = webkitNotifications.createHTMLNotification(
//  'notification.html'  // html url - can be relative
//);

// Then show the notification.
notification.show();
			
		});
	});
	return true;
});