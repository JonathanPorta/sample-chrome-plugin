function listview() {
//alert("listview");
	chrome.runtime.getBackgroundPage(function(bg){
		//alert("ggghjjgkhjkhggjhkjhgjhgkjkgjkgh");
		var items = bg._data;
		if (items.length > 0)
		{
			//alert("addding");
			$.each(items, function(i){
				$("#listview").append("<li>" + items[i] + "</li>");
			});
		}
		//alert("no add");
	});
	
}

window.onload = listview;
//alert("popup.js");