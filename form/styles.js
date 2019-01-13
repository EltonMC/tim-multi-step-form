(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\");\n@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css\");\n@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);\n/* You can add global styles to this file, and also import other style files */\n/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\n.board{\n    width: 75%;\n    margin: 60px auto;\n    height: auto;\n    background: #fff;\n    border-radius: 10px;\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\n}\n.board .nav-tabs {\n    position: relative;\n    /* border-bottom: 0; */\n    /* width: 80%; */\n    margin: 40px auto;\n    margin-bottom: 0;\n    box-sizing: border-box;\n\n}\n.board > div.board-inner{\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\n    background-size: 30%;\n}\np.narrow{\n    width: 60%;\n    margin: 10px auto;\n}\n.liner{\n    height: 2px;\n    background: #ddd;\n    position: absolute;\n    width: 80%;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 50%;\n    z-index: 1;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n    color: #555555;\n    cursor: default;\n    /* background-color: #ffffff; */\n    border: 0;\n    border-bottom-color: transparent;\n}\nspan.round-tabs{\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n    display: inline-block;\n    border-radius: 100px;\n    background: white;\n    z-index: 2;\n    position: absolute;\n    left: 0;\n    text-align: center;\n    font-size: 25px;\n}\nspan.round-tabs.one{\n    color: #004691;border: 2px solid #004691;\n}\nli.active span.round-tabs.one{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #004691;\n}\nspan.round-tabs.two{\n    color: #004691;border: 2px solid #004691;\n}\nli.active span.round-tabs.two{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #004691;\n}\nspan.round-tabs.three{\n    color: #004691;border: 2px solid #004691;\n}\nli.active span.round-tabs.three{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #004691;\n}\nspan.round-tabs.four{\n    color: #004691;border: 2px solid #004691;\n}\nli.active span.round-tabs.four{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color:#004691;\n}\nspan.round-tabs.five{\n    color: #999;border: 2px solid #999;\n}\nli.active span.round-tabs.five{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #999;\n}\n.nav-tabs > li.active > a span.round-tabs{\n    background: #fafafa;\n}\n.nav-tabs > li {\n    /*width: 20%;*/\n    width: 25%;\n}\n/*li.active:before {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n    opacity:0;\n    margin: 0 auto;\n    bottom: -2px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    z-index: 1;\n    transition:0.2s ease-in-out;\n}*/\n.nav-tabs > li:after {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n   opacity:0;\n    margin: 0 auto;\n    bottom: 0px;\n    border: 5px solid transparent;\n    border-bottom-color: #ddd;\n    transition:0.1s ease-in-out;\n\n}\n.nav-tabs > li.active:after {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n   opacity:1;\n    margin: 0 auto;\n    bottom: 0px;\n    border: 10px solid transparent;\n    border-bottom-color: #ddd;\n\n}\n.nav-tabs > li a{\n   width: 70px;\n   height: 70px;\n   margin: 20px auto;\n   border-radius: 100%;\n   padding: 0;\n}\n.nav-tabs > li a:hover{\n    background: transparent;\n}\n.tab-content .tab-pane{\n   position: relative;\npadding-top: 50px;\n}\n.tab-content .head{\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 25px;\n    text-transform: uppercase;\n    padding-bottom: 10px;\n}\n.btn-outline-rounded{\n    padding: 10px 40px;\n    margin: 20px 0;\n    border: 2px solid transparent;\n    border-radius: 25px;\n}\n.btn.green{\n    background-color:#5cb85c;\n    /*border: 2px solid #5cb85c;*/\n    color: #ffffff;\n}\n@media( max-width : 585px ){\n\n    .board {\nwidth: 90%;\nheight:auto !important;\n}\n    span.round-tabs {\n        font-size:16px;\nwidth: 50px;\nheight: 50px;\nline-height: 50px;\n    }\n    .tab-content .head{\n        font-size:20px;\n        }\n    .nav-tabs > li a {\nwidth: 50px;\nheight: 50px;\nline-height:50px;\n}\n\n.nav-tabs > li.active:after {\ncontent: \" \";\nposition: absolute;\nleft: 35%;\n}\n\n.btn-outline-rounded {\n    padding:12px 20px;\n    }\n}\n.container {\n  height: 100vh;\n}\n.btn-default {\n    border-color: #ccc;\n}\n.tab-content .choice {\n  text-align: center;\n  cursor: pointer;\n  margin-top: 38px;\n}\n.tab-content .choice i {\n    font-size: 32px;\n    line-height: 55px;\n}\n.btn-radio {\n\twidth: 100%;\n}\n.img-radio {\n\topacity: 0.8;\n\tmargin-bottom: 5px;\n}\n.space-20 {\n    margin-top: 20px;\n}\n/* active buttons */\n#status-buttons a.active span.round-tabs.one {\n    background: #004691;\n    color: #fff;\n}\n#status-buttons a.active span.round-tabs.two {\n    background: #004691;\n    color: #fff\n}\n#status-buttons a.active span.round-tabs.three {\n    background: #004691;\n    color: #fff\n}\n#status-buttons a.active span.round-tabs.four {\n    background: #004691;\n    color: #fff\n}\n.iradio_buttons {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 22px;\n    height: 22px;\n    background: #febe29 no-repeat;\n    border: none;\n    cursor: pointer;\n}\n.iradio_buttons {\n    background-position: -120px 0;\n}\n.iradio_buttons.hover {\n    background-position: -144px 0;\n}\n.iradio_buttons.checked {\n    background-position: -168px 0;\n}\n.tab-content .tab-pane{\n    padding-top: 20px;\n}\n.alert {\n  padding: 8px;\n  margin-bottom: 8px;\n}\n.ng-valid[required], .ng-valid.required  {\n  border: 1px solid #42A948; /* green */\n}\n/*\n.ng-invalid:not(form)  {\n  border: 1px solid #a94442;\n} */\n.form-control{\n  height: 40px;\n}\n.splash {\n    position: absolute;\n    z-index: 2000;\n    background: white;\n    color: gray;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0\n}\n.splash-title {\n    text-align: center;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 20px\n}\n.splash-title h1{\n    font-size: 26px\n}\n.color-line {\n    border-radius:4px 4px 0 0\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\elton\OneDrive\Documentos\Repository\tim-multi-step-form\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map