// ; "use strict";
;(function(){

	// var myDiv = document.createElement("div");

	// document.getElementsByTagName('p') - return Array-like object

	/*Attributes*/
	// Node.nodeName;
	// Node.nodeType;
	// Node.parentNode;
	// Node.parentElement;
	// Node.textContent;

	/*Methods*/
	// Node.appendChild(node)
	// Node.cloneNode()
	// Node.insertBefore(node)
	// Node.removeChild(node)
	// Node.replaceChild(newChild, oldChild)

	/*Practice start*/

	// let li = document.createElement('li'),
	// 	anchor = document.createElement("a");

	// anchor.textContent = 'New link';
	// anchor.setAttribute('href', '#');
	// li.appendChild(anchor);

	// document.querySelector('ul').appendChild(li);

	// let p = document.querySelector('p');
	// let p1 = p.cloneNode();

	// p1.textContent = p.textContent + ' you';
	// document.body.appendChild(p1);

	/*Practice end*/

	/*Document props*/
	// document.activeElement;
	// document.anchors;
	// document.body;
	// document.cookie;
	// document.designMode = 'on';
	// document.readyState;
	// document.refferer;
	// document.scripts;
	// document.title;

	/*Document methods*/
	// document.createAttribute('attr-name');
	// document.createComment('comment');
	// document.createDocumentFragment();
	// document.createElement('a');
	// document.createEvent('some-event');
	// document.createTextNode('some text');

	/*Practice start*/

	let p = document.createElement('p'),
		p1 = document.createElement('p'),
		p2 = document.createElement('p');

	p.textContent = 'First paragraph';
	p1.textContent = 'Second paragraph';
	p2.textContent = 'Third paragraph';

	let div = document.querySelector('div');

	// div.appendChild(p);
	// div.appendChild(p1);
	// div.appendChild(p2);

	let fragment = document.createDocumentFragment();

	fragment.appendChild(p);
	fragment.appendChild(p1);
	fragment.appendChild(p2);

	div.appendChild(fragment);
	/*Practice end*/

	/*Document methods*/
	// document.getElementById("refId")
	// document.getElementsByClassName("class")
	// document.getElementsByTagName("p")
	// document.getElementsByName("some-name")

	// document.querySelector("a[href*='https://']")
	// document.querySelectorAll("a[href*='https://']")
	// document.querySelectorAll(".foo, .boo")

	// document.getSelection();
	// document.registerElement("my-custom-tag");

	// document.write("<p>Blah</p>")
	// document.writeln("<p>Blah</p>")

	/*Element props*/
	// Element.attributes;
	// Element.childElementCount;
	// Element.classList; - return array
	// Element.className; - return line with spaces
	// Element.innerHTML;
	// Element.outerHTML;
	// Element.tagName;
	// Element.innerText;

	/*Element methods*/
	// Element.createShadowRoot();
	// Element.dispatchEvent();
	// Element.getAttribute('data-attr');
	// Element.getBoundingClientRect();

	// Element.insertAdjacentHTML("<span>boo</span>")
	// Element.hasAttribute("data-blah")
	// Element.removeAttribute('data-attr')
	// Element.setAttribute('data-attr', 'new value')


	/*Practice start*/
	// document.querySelector("button").addEventListener('click', function(e) {
	// 	this.textContent = 'hello';
	// });

	// setTimeout(function() {
	// 	document.querySelector("button").dispatchEvent(new Event('click'));
	// }, 2000);
	/*Practice end*/

	/*HTMLElement props*/
	// HTMLElement.contentEditable
	// HTMLElement.isContentEditable
	// HTMLElement.dir
	// HTMLElement.hidden
	// HTMLElement.offsetHeight
	// HTMLElement.offsetWidth
	// HTMLElement.style
	// HTMLElement.title

	// HTMLElement.oncopy
	// HTMLElement.oncut
	// HTMLElement.onpaste

	// HTMLElement.blur()
	// HTMLElement.click()
	// HTMLElement.focus()
 
 	/*Discard copy*/
 	// div.addEventListener('copy', logCopy);
	
	// function logCopy(event) {
	// 	event.returnValue = false;
	// 	console.log(event);
	// }

	/*Discard paste*/
	// document.querySelector('input').addEventListener('paste', logPaste);
	
	// function logPaste(event) {
	// 	event.returnValue = false;
	// 	console.log(event);
	// }

	/*Event props*/
	// Event.bubbles
	// Event.cancelable
	// Event.target
	// Event.currentTarget
	// Event.type
	// Event.isTrusted

	/*Event methods*/
	// Event.preventDefault()
	// Event.stopPropagation()
	// Event.stopImmediatePropagiation()

	/*EventTarget*/
	// EventTarget.addEventListener()
	// EventTarget.removeEventListener()
	// EventTarget.dispatchEvent()

	


})();