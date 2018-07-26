function aktualisido() {

	var d = new Date().getTime();
	return d / 1000;
}

function countdown(a) {
	// Set the date we're counting down to
	var countDownDate = a * 1000;

	// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		document.getElementById("0_time").innerHTML = "Hamarosan kezdünk!<br>" + hours + "h "
			+ minutes + "m " + seconds + "s ";


		// If the count down is over, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("0_time").innerHTML = "MOST!";
			window.top.location.reload();
		}
	}, 1000);
}

function datesc(b) {
	var b = b.substring(0, 16) + ":00Z";
	var utcDate = b;
	var localDate = new Date(utcDate);

	var ora = localDate.getHours();
	var perc = localDate.getMinutes();
	var honap = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var honapnap = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
	var dat = localDate.getFullYear() + "." + honap[localDate.getMonth()] + "." + honapnap[localDate.getDate()];

	return dat;
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return 0;
}

function calcTime(offset) {
	/*Szerveridőbe konvertál*/
	var nd = new Date();
	var utc = nd.getTime() + (nd.getTimezoneOffset() * 60000);
	var d = new Date(utc + (3600000 * offset));
	var hour = d.getHours();
	var min = d.getMinutes();
	var aktido = hour * 60 + min;
	var honap = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var honapnap = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
	var aktdatum = d.getFullYear() + "-" + honap[d.getMonth()] + "-" + honapnap[d.getDate()] + "T" + honapnap[hour] + ":" + honapnap[min] + ":00Z";
	return aktdatum;
}

function timestamp(b) {
	var b = b.substring(0, 16) + ":00Z";
	var utcDate = b;
	var localDate = new Date(utcDate);
	var localDate = localDate.getTime() / 1000;
	return localDate;
}

function TimeConvert(a) {
	var a = a.substring(0, 16) + ":00Z";
	var utcDate = a;
	var localDate = new Date(utcDate);

	var ora = localDate.getHours();
	var perc = localDate.getMinutes();
	var masodperc = localDate.getSeconds();
	var honap = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var honapnap = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
	var dat = localDate.getFullYear() + "." + honap[localDate.getMonth()] + "." + honapnap[localDate.getDate()];

	var perc = honapnap[localDate.getMinutes()];
	var ido = ora + ":" + perc;
	var kezdes = dat + "<br>" + ido;


	return kezdes;
}

function light() {

	for (var i = 0; i < events_hossz; i++) {
		if ((i == 0) & (live_allapot == "live") & ((livetimestamp < stream_veg_nulladik + 3000) & (livetimestamp > stream_start_nulladik - 3000))) {
			document.getElementById(i + "_description").style.backgroundColor = "white";
			document.getElementById(i + "_description").style.border = "1px solid #e5e3e8";
			document.getElementById(i + "_description").style.color = "black";
		} else {
			document.getElementById(i).style.backgroundColor = "white";
			document.getElementById(i).style.border = "1px solid #e5e3e8";
			document.getElementById(i).style.color = "black";
			document.getElementById(i + "_description").style.backgroundColor = "white";
			document.getElementById(i + "_description").style.border = "1px solid #e5e3e8";
			document.getElementById(i + "_description").style.color = "black";
		}

	}
	document.body.style.Color = "black";
	document.body.style.backgroundColor = "#faf9fa";
	document.getElementsByClassName("modal-content")[0].style.color = "black";
	document.getElementsByClassName("modal-content")[0].style.backgroundColor = "white";



}

function dynamicallyLoadScript(url) {
	var script = document.createElement("script"); // Make a script DOM node
	script.src = url; // Set it's src to the provided URl
	document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function dynamicallyLoadScript_content(content) {
	var script = document.createElement("script"); // Make a script DOM node
	script.text = content; // Set it's src to the provided URL
	document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function http_post(url, callback) {
	var http = new XMLHttpRequest();
	/*mikortol = "2018-06-10T14:26:00Z";*/
	var params = "[{\"variables\":{\"channelLogin\":\"fyrexxx\",\"limit\":20,\"before\":null,\"after\":\"" + mikortol + "\",\"sortOrder\":\"ASC\",\"following\":true},\"extensions\":{},\"operationName\":\"EventsPage_EventScheduleQuery\",\"query\":\"query EventsPage_EventScheduleQuery($channelLogin: String!, $limit: Int, $cursor: Cursor, $before: Time, $after: Time, $following: Boolean!, $sortOrder: SortOrder) {  user(login: $channelLogin) {    id    eventLeaves(first: $limit, after: $cursor, criteria: {endsBefore: $before, endsAfter: $after, sortOrder: $sortOrder}) {      pageInfo {        hasNextPage        __typename      }      edges {        cursor        node {          id          self @include(if: $following) {            isFollowing            __typename          }          ... on EventLeaf {            title            startAt            endAt            game {              id              displayName              __typename            }            channel {              id              login              displayName              __typename            }            imageURL(width: 320, height: 180)            __typename          }          __typename        }        __typename      }      __typename    }    __typename  }}\"}]";
	http.open('POST', url, true);
	/*kérésküldés*/
	http.setRequestHeader('Client-ID', 'vpyy1j86wtuetq8b6vbxlmubi0jxoe');
	http.setRequestHeader('Content-type', 'application/json');
	http.send(params);
	http.onreadystatechange = function () {
		if (http.readyState == 4 && http.status == 200) {
			callback(http.responseText);
		}
	}
}

function http_post2(url, params, callback) {
	var http = new XMLHttpRequest();
	http.open('POST', url, true);
	/*kérésküldés*/
	http.setRequestHeader('Client-ID', 'vpyy1j86wtuetq8b6vbxlmubi0jxoe');
	http.setRequestHeader('Content-type', 'application/json');
	http.send(params);
	http.onreadystatechange = function () {
		if (http.readyState == 4 && http.status == 200) {
			callback(http.responseText);
		}
	}

}

function http_get(url, callback) {
	var http = new XMLHttpRequest();
	http.open('GET', url, true);
	/*Kérésküldés*/
	http.setRequestHeader('Client-ID', 'vpyy1j86wtuetq8b6vbxlmubi0jxoe');
	http.setRequestHeader('Content-type', 'application/json');
	http.send();
	http.onreadystatechange = function () {
		if (http.readyState == 4) {
			if (http.status == 200) {
				callback(http.responseText);
			} else {
				document.getElementById("no_stream").innerHTML = "<img src=\"pingvin.png\" alt=\"23\" width=\"320\"><br><h3 style=\"font-family:rockwell;\">Eltünt az internet!<br>(Offline módban vagy!)</h3>";
			}
		}
	}

}

function http_get_feture(url, callback) {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			callback(xhttp.responseText);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

/*Változtatás : stream_veg_nulladik, stream_start_nulladik változók deklarálása itt. */
var mikortol = calcTime(0);
var events, live_adat, stream_veg_nulladik, idomost, pingvinmm_new_feature, stream_start_nulladik, description_event, events_hossz, livetimestamp, live_allapot, cim_live, cover_live, game_id_s, cim_live, cover_live, modal, span, btn, cookie_settings, theme_status, live_dat, live_start, new_function;
var google_calendar_link = [];
var ical_calendar_link = [];
var outlook_calendar_link = [];
var yahoo_calendar_link = [];

/*Cookie lekérdezések*/
cookie_settings = getCookie("pingvinmmcookiepolicysagreement");
if (cookie_settings == 1) {
	theme_status = getCookie("pingvinmm_theme");
	pingvinmm_new_feature = getCookie("pingvinmm_new_feature");
}

if (cookie_settings == 1) {
	window.onload = function () {

		dynamicallyLoadScript("https://www.googletagmanager.com/gtag/js?id=UA-122179264-1");
		dynamicallyLoadScript_content("window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-122179264-1');");
	}
}

document.addEventListener("DOMContentLoaded", function (event) {
	document.body.innerHTML = document.body.innerHTML.replace("forum.thevr.hu/u/dani0001414/", "forum.thevr.hu/u/danx27/");
	document.body.innerHTML = document.body.innerHTML.replace("dani0001414 Ninjon", "DanX27 Ninjon");
	//	document.body.innerHTML = document.body.innerHTML.replace(/dani0001414/g, "DanX27");
	console.log("DOM fully loaded and parsed");
});
http_get("https://api.twitch.tv/helix/streams?user_id=40261250", events_array);

/*http_get live api lekérő meghívja a funkciót és átadja a callback változót*/
function events_array(data) {
	/*Ha még nem erősítette meg a felhasználó, hogy elfogadja e a cookie-kat vagy sem akkor megjeleníti az alsó bannert már itt, hogy gyorsabban megjelenjen!*/
	if ((cookie_settings != 1) & (cookie_settings != -1)) {
		document.getElementById("myCookie").style.display = 'block';
	}

	live_adat = data;
	live_adat = JSON.parse(live_adat);
	cover_live = null;
	cim_live = null;
	live_allapot = null;
	game_id_s = null;
	if (live_adat.data.length > 0) {
		cover_live = live_adat.data['0'].thumbnail_url;
		cim_live = live_adat.data['0'].title;
		live_allapot = live_adat.data['0'].type;
		cover_live = cover_live.replace("{width}", "640");
		cover_live = cover_live.replace("{height}", "360");
		game_id_s = live_adat.data['0'].game_id;  /*493057==PUBG*/

		live_start = TimeConvert(live_adat.data['0'].started_at).split("<br>");
		live_dat = datesc(live_adat.data['0'].started_at);
		livetimestamp = timestamp(live_adat.data['0'].started_at);

	}

	if (live_allapot == "live") { mikortol = live_adat.data['0'].started_at; }

	http_post("https://gql.twitch.tv/gql", events_array2);
}

/*http_post menetrend api lekérő meghívja a funkciót és átadja a callback változót*/
function events_array2(data) {
	events = data;
	events = JSON.parse(events);
	events = events["0"].data.user.eventLeaves.edges;
	events_hossz = events.length;

	/*Változtatás : Ha az events tömb nem nulla akkor az első elem kezdési és végetérési időpontját beletesszük a stream_veg_nulladik és a stream_start_nulladik változókba. */
	if (events_hossz != 0) {
		stream_veg_nulladik = timestamp(events[0].node.endAt);
		stream_start_nulladik = timestamp(events[0].node.startAt);
		if (events_hossz > 1) {
			stream_start_elso = timestamp(events[1].node.startAt);
			stream_veg_elso = timestamp(events[1].node.endAt);
		}
	}

	if ((theme_status == "light") & (cookie_settings == 1)) {
		light();
	} else {
		var meta = document.createElement("meta");
		meta.name = "theme-color";
		meta.content = "#0e0c13";
		document.getElementsByTagName('head')[0].appendChild(meta);
	}

	var jsonstring_d = "[";

	for (var i = 0; i < events_hossz; i++) {
		jsonstring_d += "{\"variables\":{\"eventName\":\"" + events[i].node.id + "\"},\"extensions\":{},\"operationName\":\"EventLandingPage_Event\",\"query\":\"query EventLandingPage_Event($eventName: ID!) {  event(id: $eventName) {    __typename    ... on EventLeaf {      ...EventLeafContent      premiere {        ...PremiereContent        __typename      }      __typename    }    ... on EventCollection {      ...EventCollectionContent      __typename    }  }}fragment PremiereContent on Premiere {  status  pastPremiere {    description    __typename  }  __typename}fragment EventLeafContent on EventLeaf {  description  __typename}fragment EventCollectionContent on EventCollection {  description  __typename}\"}";
		if (i < events_hossz - 1) { jsonstring_d += ","; }
	}
	jsonstring_d += "]";

	http_post2("https://gql.twitch.tv/gql", jsonstring_d, events_array3);
}

/*http_post2 menetrend részletek api lekérő meghívja a funkciót és átadja a callback változót*/
function events_array3(data) {
	description_events = data;
	description_events = JSON.parse(description_events);
	http_get_feture("https://script.google.com/macros/s/AKfycbxCbGnpDeEjNd7Nwpm76MrIfc2efatkbGZyXszSgA45-e1d87M/exec", new_features);
	html_start();
}

/*Feltölti az üres DIV-eket a menetrendi információkkal*/
function html_start() {
	/*var exampleSocket = new WebSocket("ws://irc.chat.twitch.tv:443", ["protocolOne", "protocolTwo"]);*/

	/*exampleSocket.onmessage = function (event) {
		exampleSocket.send("JOIN #wearethevr");
		console.log(event.data);
	}*/
	idomost = aktualisido();
	var stream_veg, stream_start, stream_extraveg, streamextrastart;
	var menetrend_stream_count = 0;



	for (var i = 0; i < events_hossz; i++) {
		if (events_hossz > 1) {
            if ((idomost > stream_start_elso) & (i == 0)) {
                i = 1;
            }
        } else {
            stream_start_elso = timestamp(events[0].node.endAt) + 7200; 
        }
		var cim_id = i + "_cim";
		var cover_id = i + "_cover";
		var time_id = i + "_time";
		var br_id = i + "_br";
		stream_veg = timestamp(events[i].node.endAt);
		stream_start = timestamp(events[i].node.startAt);
		stream_extraveg = stream_veg + 3000;
		streamextrastart = stream_start - 3000;
		var eltelt = parseInt((idomost - stream_veg) / 60, 10);

		/*var stream_div = document.createElement('div');
		stream_div.id = i;
		document.getElementsByTagName('body')[0].appendChild(iDiv);
		*/

		var cover = events[i].node.imageURL;
		cover = cover.replace("320", "320");
		cover = cover.replace("180", "180");

		var start_time = TimeConvert(events[i].node.startAt).split("<br>");
		var end_time = TimeConvert(events[i].node.endAt).split("<br>");

		/*calendar kompatibilis idők*/
		var g_calendar_s = events[i].node.startAt.substring(0, 16) + ":00Z";
		g_calendar_s = g_calendar_s.replace(/-/g, "");
		g_calendar_s = g_calendar_s.replace(/:/g, "");


		var g_calendar_e = events[i].node.endAt.substring(0, 16) + ":00Z";
		g_calendar_e = g_calendar_e.replace(/-/g, "");
		g_calendar_e = g_calendar_e.replace(/:/g, "");


		var g_calendar_title = events[i].node.title.replace(/ /g, "+");
		var ical_calendar_title = events[i].node.title.replace(/ /g, "%20");

		/*Calendar Linkek létrehozása*/
		google_calendar_link[i] = "https://calendar.google.com/calendar/r/eventedit?dates=" + g_calendar_s + "/" + g_calendar_e + "&details&location&text=" + g_calendar_title + "&trp=false&sf=true"
		ical_calendar_link[i] = "https://maestro.io/pkg/lt3-api/4.0/api/calendar/event.ics?alarm=" + g_calendar_e + "&details=&end=" + g_calendar_e + "&location=&stamp=20180704T213131Z&start=" + g_calendar_s + "&title=" + ical_calendar_title;
		yahoo_calendar_link[i] = "https://calendar.yahoo.com/?v=60&view=d&type=20&title=" + g_calendar_title + "&st=" + g_calendar_s + "&et=" + g_calendar_e + "&uid=";

		/*Feltölteni kívánt Div-ek megjelenítése a rejtésből és adatokkal való feltöltésük*/
		document.getElementById(i).style.display = 'block';
		document.getElementById(br_id).style.display = 'block';
		document.getElementById(cim_id).innerHTML = "<p><b>" + events[i].node.title + "</b></p>";
		document.getElementById(cover_id).innerHTML = "<img src=\"" + cover + "\" class=\"aspect__fill\" width=\"320\">";
		document.getElementById(time_id).innerHTML = start_time[0] + "<br>" + start_time[1] + "-" + end_time[1];

		var stream_hossz = stream_veg - stream_start;
		/*Változtatás: Ha az idő 2400másodpercnél kisebb akkor Premier-ről van szó és átszinezzük.*/
		if (description_events[i].data.event.premiere != null) {
			if ((description_events[i].data.event.premiere.__typename == "Premiere")) {
				document.getElementById(i).style.backgroundColor = "#e52e26";
				document.getElementById(i).style.border = "1px solid #0c3033";
				document.getElementById(i).style.color = "white";
				document.getElementById(cim_id).innerHTML = "<div style=\"color: #fafbff\" ><img src=\"https://i.imgur.com/VFXLMAL.png\"><br><b>" + events[i].node.title + "</b></div></p>";
			}
		}
		/*majd 7200 legyen */
		var countdown_kezdes = stream_start - idomost;
		/*A menetrendi idő jelzésének módjának változtatása ha eltérő dátumú kedés és befejezés és ha a stream tovább tart mint a várt*/
		if ((livetimestamp < stream_veg + 3000) & (livetimestamp > stream_start - 3000) & (eltelt > 0) & (start_time[0] == end_time[0])) {
			document.getElementById(time_id).innerHTML = start_time[0] + "<br>" + start_time[1] + "-" + end_time[1] + "<font color=\"yellow\"> + " + eltelt + "p</font>";
		} else if (start_time[0] == end_time[0]) {
			if ((countdown_kezdes < 7200) & (countdown_kezdes > 0) & (live_allapot != "live")) { countdown(stream_start); } else { document.getElementById(time_id).innerHTML = start_time[0] + "<br>" + start_time[1] + "-" + end_time[1]; }
		} else if ((livetimestamp < stream_veg + 3000) & (livetimestamp > stream_start - 3000) & (eltelt > 0)) {
			document.getElementById(time_id).innerHTML = "<div style=\"overflow: hidden; width: 320px;\">    <div style=\"float:left; width: 155px\"><center>" + start_time[0] + "<br>" + start_time[1] + "<font color=\"yellow\"> + " + eltelt + "p</font></center></div>    <div style=\"float:left; margin-left:10px; margin-top:10px\"><center>-</center></div>	<div style=\"overflow: hidden; width: 155px float:right;\"><center>" + end_time[0] + "<br>" + end_time[1] + "</center></div></div>";
		} else {
			if ((countdown_kezdes < 7200) & (countdown_kezdes > 0) & (live_allapot != "live")) { countdown(stream_start); } else { document.getElementById(time_id).innerHTML = "<div style=\"overflow: hidden; width: 320px;\">    <div style=\"float:left; width: 155px\"><center>" + start_time[0] + "<br>" + start_time[1] + "</center></div>    <div style=\"float:left; margin-left:10px; margin-top:10px\"><center>-</center></div>	<div style=\"overflow: hidden; width: 155px float:right;\"><center>" + end_time[0] + "<br>" + end_time[1] + "</center></div></div>"; }
		}
	}


	/*Ha az első menetrendi elem lefedi a stream indítást akkor az első elem streamelődik. Ha nem akkor meglepi stream.(Változtatás : kivettem a fenti if ágból. stream_veg_nulladik és stream_start_nulladik változók használata. ) */
	if ((live_allapot == "live") & ((livetimestamp < stream_veg_nulladik) & (livetimestamp > stream_start_nulladik - 3000)) & (idomost < stream_start_elso)) {  /*Ha előfordulna, hogy jóval előbb indítják a streamet akkormég vagy-ként livetimestamp helyett idomost-al is vizsgálni. */
		document.getElementById("0").style.backgroundColor = "#4b367c";
		document.getElementById("0").style.color = "#c3c1c8";
		document.getElementById("0_cim").innerHTML = "<a target=\"_blank\" href=\"https://www.twitch.tv/fyrexxx\"><img src=\"https://i.imgur.com/o1kyCnf.png\"></a><br><b>" + cim_live + "</b>";
		document.getElementById("0_cover").innerHTML = "<a target=\"_blank\" href=\"https://www.twitch.tv/fyrexxx\"><img src=\"" + cover_live + "\" class=\"aspect__fill\" width=\"320\"></a>";
	} else if ((idomost < stream_veg_elso) & (idomost > stream_start_elso)) {
		document.getElementById("1").style.backgroundColor = "#4b367c";
		document.getElementById("1").style.color = "#c3c1c8";
		document.getElementById("1_cim").innerHTML = "<a target=\"_blank\" href=\"https://www.twitch.tv/fyrexxx\"><img src=\"https://i.imgur.com/o1kyCnf.png\"></a><br><b>" + cim_live + "</b>";
		document.getElementById("1_cover").innerHTML = "<a target=\"_blank\" href=\"https://www.twitch.tv/fyrexxx\"><img src=\"" + cover_live + "\" class=\"aspect__fill\" width=\"320\"></a>";
	} else if ((idomost < stream_veg_nulladik) & (idomost > stream_start_nulladik)) {  /*Ha előfordulna, hogy jóval előbb indítják a streamet akkormég vagy-ként livetimestamp helyett idomost-al is vizsgálni. */
		document.getElementById("0_cim").innerHTML = "<img src=\"https://i.imgur.com/ZNlNn8J.png\"><br><b>" + events[0].node.title + "</b>";
	} else if (live_allapot == "live") {
		document.getElementById("meglepi").style.display = 'block';
		document.getElementById("meglepi_br").style.display = 'block';
		document.getElementById("meglepi_cim").innerHTML = "<a target=\"_blank\" href=\"https://www.twitch.tv/fyrexxx\"><img src=\"https://i.imgur.com/gu6M3eu.png\"></a><br><b>" + cim_live + "</b>";
		document.getElementById("meglepi_cover").innerHTML = "<img src=\"" + cover_live + "\" class=\"aspect__fill\" width=\"320\">";
		document.getElementById("meglepi_time").innerHTML = live_dat + "<br>" + live_start[1] + "-Ameddig tart</p>";

	}
	/*Változtatás : Ha az events tömb hosszúsága nulla és élő közvetítés van akkor meglepi stream. Ellenkező esetbeh ha nincs stream és csak a tömb hossza nulla akkor no_stream div feltöltése a rejtés megjelenítés helyett. Html-ben mindig betöltődött a 125kb nagyságú kép rejtésből megjelenítéses módszernél. ) */
	if ((events_hossz == 0) & (live_allapot == "live")) {
		document.getElementById("meglepi").style.display = 'block';
		document.getElementById("meglepi_br").style.display = 'block';
		document.getElementById("meglepi_cim").innerHTML = "<a target=\"_blank\" href=\"https://www.twitch.tv/fyrexxx\"><img src=\"https://i.imgur.com/gu6M3eu.png\"></a><br><b>" + cim_live + "</b>";
		document.getElementById("meglepi_cover").innerHTML = "<img src=\"" + cover_live + "\" class=\"aspect__fill\" width=\"320\">";
		document.getElementById("meglepi_time").innerHTML = live_dat + "<br>" + live_start[1] + "-Ameddig tart</p>";
	} else if (events_hossz == 0) {
		document.getElementById("no_stream").innerHTML = "<img src=\"pingvin.png\" alt=\"23\" width=\"320\"><br><h3 style=\"font-family:rockwell;\">Nessaj jelenleg egy menetrendi eseményt sem adott meg!</h3>";
	}

	// Get the modal ws3school script
	modal = document.getElementById('myModal');

	// Get the button that opens the modal
	btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	span = document.getElementsByClassName("close")[0];



}

function new_features(data) {
	new_function = data;
	new_function = JSON.parse(new_function);

	var new_function_week = idomost - new_function.timestamp;
	if ((new_function_week < 1209600) & (pingvinmm_new_feature < new_function.timestamp) & (cookie_settings == 1)) {
		modal_open("new");
	}
}
/*Részletek megjelenítése és elrejtése*/
function hide_and_show(element_id, i) {
	/*Ha nem meglepi stream leírása akkor részletekkel töltjük fel részletek div-et.(Változtatás : else if ágba került egy rész ami a lekért leírást beilleszti ha nem üres. Ha üres akkor kiírja, hogy nem tartozik hozzá leírás.) */
	if (element_id != "meglepi_description") {
		if ((i == 0) & (live_allapot == "live") & ((livetimestamp < stream_veg_nulladik + 3000) & (livetimestamp > stream_start_nulladik - 3000))) {
			document.getElementById(element_id).innerHTML = "<b>Részletek:</b><br>" + description_events[i].data.event.description + "";
		} else if (description_events[i].data.event.description) {
			document.getElementById(element_id).innerHTML = "<b>Részletek:</b><br>" + description_events[i].data.event.description + "<br><br><a style=\"cursor: pointer; color: grey; text-decoration: underline;\" onclick=\"modal_open(" + i + ")\" >Hozzáadás a naptárhoz!</a>";
		} else { document.getElementById(element_id).innerHTML = "<b>Részletek:</b><br>Az eseményhez nem tartozik részletes leírás!<br><br><a style=\"cursor: pointer; color: grey; text-decoration: underline;\" onclick=\"modal_open(" + i + ")\" >Hozzáadás a naptárhoz!</a> "; }
	}
	var x = document.getElementById(element_id);
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

}

/*Popup ablak megnyitó*/
function modal_open(i) {
	cookie_settings = getCookie("pingvinmmcookiepolicysagreement");
	if (cookie_settings == 1) { theme_status = getCookie("pingvinmm_theme"); }
	modal.style.display = "block";
	if (typeof i === typeof 3) {

		/*Változtatás: theme_status dark rész ha világos témáról vált vissza valaki akkor rögtön visszavált.*/

		document.getElementById("popup_content").innerHTML = "<b>Hozzáadás a naptáradhoz:</b><br><br><div id=\"light_popup\" ><a href=\"" + google_calendar_link[i] + "\"><img src=\"https://vignette.wikia.nocookie.net/logopedia/images/9/9d/Google_logo_white_2015.svg\" class=\"aspect__fill\" width=\"87\"></a>&nbsp;&nbsp;&nbsp;<a href=\"" + ical_calendar_link[i] + "\"><img src=\"https://dani0001414.github.io/TheVRMobilMenetrend/ical_icon.svg\" class=\"aspect__fill\" width=\"58\"></a>&nbsp;&nbsp;&nbsp;<a href=\"" + yahoo_calendar_link[i] + "\"><img src=\"https://dani0001414.github.io/TheVRMobilMenetrend/Yahooicon.svg\" class=\"aspect__fill\" width=\"58\"></a></div>";
		if (theme_status == "light") { document.getElementById("light_popup").style.filter = "invert(100%)"; }
		if (theme_status == "dark") { document.getElementById("light_popup").style.filter = "invert(0%)"; }  /*Változtatás itt ez */
	}
	if (i == "cookie_settings") {

		var cookie_al_string, theme_cookie;
		if (cookie_settings == 1) { cookie_al_string = "<span id=\"c_gomb\"><span style=\"cursor: pointer; color: grey; text-decoration: underline;\" onclick=\"deleteAllCookies()\">Bekapcsolva</span></span>"; } else { cookie_al_string = "<span id=\"c_gomb\"><span style=\"cursor: pointer; color: grey; text-decoration: underline;\" onclick=\"createcookie('pingvinmmcookiepolicysagreement',1,365)\">Kikapcsolva</span></span>"; }
		if (cookie_settings == 1) {
			theme_status = getCookie("pingvinmm_theme");
			if ((theme_status == "dark") | (theme_status == 0)) { theme_cookie = "<span id=\"theme_gomb\"><span style=\"cursor: pointer; color: grey; text-decoration: underline;\" onclick=\"createcookie('pingvinmm_theme','light',365)\">Sötét</span></span>"; }
			if (theme_status == "light") { theme_cookie = "<span id=\"theme_gomb\"><span style=\"cursor: pointer; color: grey; text-decoration: underline;\" onclick=\"createcookie('pingvinmm_theme','dark',365)\">Világos</span></span>"; }
		} else { theme_cookie = "Kikapcsolt Cookie-val nem lehetésges."; }
		document.getElementById("popup_content").innerHTML = "<br><br><b>[Beállítások]</b><br><br>";
		document.getElementById("popup_content").innerHTML += "<font size=\"2\">Téma: " + theme_cookie + "<br><br></font>";
		document.getElementById("popup_content").innerHTML += "<font size=\"2\">Cookie-k állapota: " + cookie_al_string + "</font>";
	}
	if (i == "cookie_information") {
		document.getElementById("popup_content").innerHTML = "<br><br><b>[Cookie Információ]</b><br><br>";
		document.getElementById("popup_content").innerHTML += "<font size=\"2\"><div align=\"left\">A MobilBarát Menetrend által használt cookie-k:<br><br><span style=\"color: grey;\">pingvinmmcookiepolicysagreement:</span><br>A döntésedet tárolja cookie-k használatával kapcsolatban. Ha nem fogadtad el, akkor a többi cookie nem lesz használatban.<br><br><span style=\"color: grey;\">pingvinmm_theme:</span><br>Az általad választott téma bellítását tárolja<br><br><span style=\"color: grey;\">pingvinmm_new_feature:</span><br>Azt tárolja mikor láttad az új funkciókról szóló értesítést, hogy feleslegesen ne jelenjen meg újra.<br><br><span style=\"color: grey;\">Google Analytics:</span><br>A Google Analitika szolgáltatása által használt Cookie-k amelyek anoním módon rögzítik, hogy miként használod az oldalt. Többek között, hogy milyen eszközről, böngészőböl, internet szolgáltatón keresztül stb. használod az oldalt. Ez segíti a későbbi fejlesztéseket.</div></font>";
		document.getElementById("popup_content").innerHTML += ""
	}
	if (i == "new") {
		document.getElementById("popup_content").innerHTML = "<br><br><span style=\"color: red\"><b>[Újdonságok]</b></span><br><br>" + new_function.content;
		createcookie('pingvinmm_new_feature', new_function.timestamp, 365)
	}
}

/*Cookie létrehozó*/
function createcookie(name, value, days, banner) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires;

	if (banner == "banner") { document.getElementById("myCookie").style.display = 'none'; } else if (name != "pingvinmm_new_feature") { modal_open("cookie_settings"); }
	/*Téma választó cookie létrehozásával egyben át is váltjuk az általa képviselt kinézetre*/
	if (name == "pingvinmm_theme") {
		if (value == "dark") {

			for (var i = 0; i < events_hossz; i++) {
				if ((i == 0) & (live_allapot == "live") & ((livetimestamp < stream_veg_nulladik + 3000) & (livetimestamp > stream_start_nulladik - 3000))) {
					document.getElementById(i + "_description").style.backgroundColor = "#17141f";
					document.getElementById(i + "_description").style.border = "1px solid #2e2b35";
					document.getElementById(i + "_description").style.color = "#c3c1c8";
				} else {
					document.getElementById(i).style.backgroundColor = "#17141f";
					document.getElementById(i).style.border = "1px solid #2e2b35";
					document.getElementById(i).style.color = "#c3c1c8";
					document.getElementById(i + "_description").style.backgroundColor = "#17141f";
					document.getElementById(i + "_description").style.border = "1px solid #2e2b35"; /*Változtatás ezt itt*/
					document.getElementById(i + "_description").style.color = "#c3c1c8";
				}
			}
			document.body.style.Color = "#c3c1c8";
			document.body.style.backgroundColor = "#0e0c13";
			/*Változtatás : A lenti két dolog, hogy ezek is visszaváltozanak témaváltoztatásnál az oldal újratöltése nélkül, illetve vent a border-t: */
			document.getElementsByClassName("modal-content")[0].style.color = "#c3c1c8";
			document.getElementsByClassName("modal-content")[0].style.backgroundColor = "#17141f";
		}
		if (value == "light") {
			light();
		}
		modal_open("cookie_settings");
	}
}

function deleteAllCookies(banner) {
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
	createcookie('pingvinmmcookiepolicysagreement', -1, 20, 'banner');
	if (banner == "banner") {
		document.getElementById("myCookie").style.display = 'none';
		createcookie('pingvinmmcookiepolicysagreement', -1, 20, 'banner');
	} else { modal_open("cookie_settings"); }


}

// When the user clicks on <span> (x), close the modal
function spanonclick() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
