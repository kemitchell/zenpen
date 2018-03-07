// Utility functions
ZenPen = window.ZenPen || {};
ZenPen.util = (function() {

	function supportsHtmlStorage() {
		try {
		    return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
		    return false;
		}
	};

	function getText(el) {
		var ret = " ";
		var length = el.childNodes.length;
		for(var i = 0; i < length; i++) {
		    var node = el.childNodes[i];
		    if(node.nodeType !== Node.COMMENT_NODE) {

			if ( node.nodeType !== Node.ELEMENT_NODE) {
			    // Strip white space.
			    ret += node.nodeValue;
			} else {
			    ret += getText( node );
			}
		    }
		}
		return ZenPen.util.trim(ret);
	};

	function trim(string) { 
		return string.replace(/^\s+|\s+$/g, ''); 
	};

	return {
		trim: trim,
		getText: getText,
		supportsHtmlStorage: supportsHtmlStorage
	}

})()
