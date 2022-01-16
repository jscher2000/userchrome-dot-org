function pgshow(e){
	var elId = window.location.hash;
	if (elId.length > 1){
		el = document.getElementById(elId.substr(1));
		if (el) el.style.backgroundColor = "#ff8";
		window.scrollBy(0, -62);
	}
}
window.addEventListener('pageshow', pgshow);
function plinks(){
	var bmks = document.querySelectorAll('article h2[id], article h3[id]');
	if (bmks.length === 0) return;
	var btn = document.createElement('button');
	btn.className = 'btnpermlink';
	btn.setAttribute('title', 'Reload as permalink to this heading');
	btn.innerHTML = '<img src="img/plink.png">';
	var added = false;
	for (var i=0; i<bmks.length; i++){
		if (window.location.hash != bmks[i].id) {
			var pbtn = btn.cloneNode(true);
			bmks[i].appendChild(pbtn);
			pbtn.addEventListener('click', function(){window.location.hash = this.parentNode.id; pgshow();});
			added = true;
		} else {
			window.location.reload();
		}
	}
	if (added == true){
		document.querySelector('footer').insertAdjacentHTML('beforeend', '<p class="noprint">Permalink icon from <a href="https://icons8.com">Icon pack by Icons8</a> (<a href="https://creativecommons.org/licenses/by-nd/3.0/">CC BY-ND 3.0</a>).</p>');
	}
}
window.onload = function(e){
	pgshow(e);
	plinks();
	var homelink = document.querySelector('#logo:not([nolink])');
	if (homelink){
		homelink.style.cursor = 'pointer';
		homelink.addEventListener('click', function(){window.location.href='https://www.userchrome.org/'});
	}
}
function loadShare(anum, btn){
	btn.parentNode.parentNode.style.display = 'none';
	var el = document.querySelector('#rightnav > a:nth-of-type('+anum+')');
	el.insertAdjacentHTML('beforebegin', '<a class="a2a_dd" href="https://www.addtoany.com/share"><img src="https://static.addtoany.com/buttons/share_save_171_16.png" width="171" height="16" border="0" alt="Share"></a>');
	el.style.display = 'none';
	var s = document.createElement('script');
	s.setAttribute('src', 'https://static.addtoany.com/menu/page.js');
	document.body.appendChild(s);
}
function loadTrans(anum, btn){
	btn.parentNode.parentNode.style.display = 'none';
	var el = document.querySelector('#rightnav > a:nth-of-type('+anum+')');
	el.insertAdjacentHTML('beforebegin', '<div id="google_translate_element" style="display:inline-block"></div>');
	el.style.display = 'none';
	var s = document.createElement('script');
	s.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
	document.body.appendChild(s);
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
}
function togComments(el){
	var commpanel = document.getElementById('ecomm');
	var maindiv = document.getElementById('main');
	if (!commpanel){
		commpanel = document.createElement('div');
		commpanel.id = 'ecomm';
		document.body.appendChild(commpanel);
		commpanel.style.display = 'block';
		// Add Github issues link
		pGit = document.createElement('p');
		pGit.innerHTML = '<em>Github users: consider adding <a href="https://github.com/jscher2000/userchrome-dot-org/issues" target="_blank">an issue</a> for personal assistance.</em>';
		commpanel.appendChild(pGit);
		maindiv.style.width = "65%";
		var s = document.createElement('script');
		s.setAttribute('src', 'easy-comment/jquery-3.2.1.min.js');
		s.addEventListener('load', function(){var s = document.createElement('script'); s.setAttribute('src', 'easy-comment/jquery.easy-comment.js?20210930'); s.addEventListener('load', function(){$('#ecomm').EasyComment();}); document.body.appendChild(s);});
		document.body.appendChild(s);
		el.classList.add('commopen');
	} else {
		if (commpanel.style.display == 'block'){
			commpanel.style.display = 'none';
			commpanel.innerHTML = '<p><em>Github users: consider adding <a href="https://github.com/jscher2000/userchrome-dot-org/issues" target="_blank">an issue</a> for personal assistance.</em></p>';
			maindiv.style.width = "";
			el.classList.remove('commopen');
		} else {
			commpanel.style.display = 'block';
			maindiv.style.width = "65%";
			$('#ecomm').EasyComment();
			el.classList.add('commopen');
		}
	}
}
function vidswitch(evt){
	if (evt.target.nodeName != 'SPAN') return;
	if (evt.target.className == 'current') return;
	var dtgt = evt.target.getAttribute('tgt');
	if (!dtgt || dtgt.length === 0) return;
	// Switch videos
	var vdivs = document.querySelectorAll('#vidframes > [dtype="vid"]');
	for (var i=0; i<vdivs.length; i++){
		if (vdivs[i].id == dtgt) vdivs[i].style.display = 'block';
		else vdivs[i].style.display = 'none';
	}
	// Switch tabs
	var vtabs = document.querySelectorAll('#vidtabs > span');
	for (var i=0; i<vtabs.length; i++){
		if (vtabs[i].getAttribute('tgt') == dtgt) vtabs[i].className = 'current';
		else vtabs[i].className = '';
	}	
}
var vids = document.getElementById('vidtabs');
if (vids) vids.addEventListener('click', vidswitch);