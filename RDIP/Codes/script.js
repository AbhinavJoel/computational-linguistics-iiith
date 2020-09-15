engCorpus = ["John ate an apple before afternoon",
	"before afternoon John ate an apple",
	"John before afternoon ate an apple",
	"some students like to study in the night",
	"at night some students like to study",
	"John and Mary went to church",
	"Mary and John went to church",
	"John went to church after eating",
	"after eating John went to church",
	"John after eating went to church",
	"did he go to market",
	"he did go to market",
	"the woman who called my sister sells cosmetics",
	"the woman who sells cosmetics called my sister",
	"my sister who sells cosmetics called the woman",
	"my sister who called the woman sells cosmetics",
	"John goes to the library and studies",
	"John studies and goes to the library",
	"John ate an apple so did she",
	"she ate an apple so did John",
	"the teacher returned the book after she noticed the error",
	"the teacher noticed the error after she returned the book",
	"after the teacher returned the book she noticed the error",
	"after the teacher noticed the error she returned the book",
	"she returned the book after the teacher noticed the error",
	"she noticed the error after the teacher returned the book",
	"after she returned the book the teacher noticed the error",
	"after she noticed the error the teacher returned the book",
	"I told her that I bought a book yesterday",
	"I told her yesterday that I bought a book",
	"yesterday I told her that I bought a book",
	"I bought a book that I told her yesterday",
	"I bought a book yesterday that I told her",
	"yesterday I bought a book that I told her"]

hinCorpus = ["राम और श्याम बाजार गयें",
	"राम और श्याम गयें बाजार",
	"बाजार गयें राम और श्याम",
	"गयें बाजार राम और श्याम",
	"राम सोया और श्याम भी",
	"श्याम सोया और राम भी",
	"सोया श्याम और राम भी",
	"सोया राम और श्याम भी",
	"मैंने उसे बताया कि राम सो रहा है",
	"मैंने उसे बताया कि सो रहा है राम",
	"उसे मैंने बताया कि राम सो रहा है",
	"उसे मैंने बताया कि सो रहा है राम",
	"मैंने बताया उसे कि राम सो रहा है",
	"मैंने बताया उसे कि सो रहा है राम",
	"उसे बताया मैंने कि राम सो रहा है",
	"उसे बताया मैंने कि सो रहा है राम",
	"बताया मैंने उसे कि राम सो रहा है",
	"बताया मैंने उसे कि सो रहा है राम",
	"बताया उसे मैंने कि राम सो रहा है",
	"बताया उसे मैंने कि सो रहा है राम",
	"राम खाकर सोया",
	"खाकर राम सोया",
	"राम सोया खाकर",
	"खाकर सोया राम",
	"सोया राम खाकर",
	"सोया खाकर राम",
	"बिल्लियों को मारकर कुत्ता सो गया",
	"मारकर बिल्लियों को कुत्ता सो गया",
	"बिल्लियों को मारकर सो गया कुत्ता",
	"मारकर बिल्लियों को सो गया कुत्ता",
	"कुत्ता सो गया बिल्लियों को मारकर",
	"कुत्ता सो गया मारकर बिल्लियों को",
	"सो गया कुत्ता बिल्लियों को मारकर",
	"सो गया कुत्ता मारकर बिल्लियों को",
	"एक लाल किताब वहाँ है",
	"एक लाल किताब है वहाँ",
	"वहाँ है एक लाल किताब",
	"है वहाँ एक लाल किताब",
	"एक बड़ी सी किताब वहाँ है",
	"एक बड़ी सी किताब है वहाँ",
	"बड़ी सी एक किताब वहाँ है",
	"बड़ी सी एक किताब है वहाँ",
	"वहाँ है एक बड़ी सी किताब",
	"वहाँ है बड़ी सी एक किताब",
	"है वहाँ एक बड़ी सी किताब",
	"है वहाँ बड़ी सी एक किताब"]

function selection() {
	if (document.getElementById("languages").selectedIndex == 0) {
		alert("Select a Language")
		location.reload()
	}
	if (document.getElementById("languages").selectedIndex == 1) {
		checking1()
		document.getElementById("text1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("text2").innerHTML = "(select the buttons in proper order)"
	}
	if (document.getElementById("languages").selectedIndex == 2) {
		checking2()
		document.getElementById("text1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("text2").innerHTML = "(select the buttons in proper order)"
	}

}

function shuffle(arr) {
	var curIndex = arr.length, temp, randIndex;

	while (0 !== curIndex) {

		randIndex = Math.floor(Math.random() * curIndex);
		curIndex -= 1;

		temp = arr[curIndex];
		arr[curIndex] = arr[randIndex];
		arr[randIndex] = temp;
	}

	return arr;
}

var corpShuf1 = shuffle(engCorpus);
var corpShuf2 = shuffle(hinCorpus);
var SenShuf1 = corpShuf1[1].split(" ")
var SenShuf2 = corpShuf2[1].split(" ")
shuffle(SenShuf1)
shuffle(SenShuf2)
let selectedWords1 = []
let selectedWords2 = []
let reform = SenShuf1
let reform3 = SenShuf2

function checking1() {
	document.getElementById("mybuttons").innerHTML = ""

	for (i = 0; i < SenShuf1.length; i++) {

		var x = document.createElement("BUTTON");
		var t = document.createTextNode(SenShuf1[i]);
		var id = document.createAttribute(id = "hello")
		x.appendChild(t);
		document.getElementById("mybuttons").appendChild(x);
		x.onclick = showAlert;
		function showAlert(event) {

			if (!document.getElementById("reform")) {

				var x2 = document.createElement("BUTTON");
				var t2 = document.createTextNode("Reform the Sentence");
				x2.appendChild(t2);
				x2.id = "reform"
				document.getElementById("reform1").appendChild(x2);
				x2.onclick = showAlert2;

			}

			selectedWords1.push(event.target.textContent)

			document.getElementById("sample2").innerHTML = "<b>Formed Sentence (after selecting words):"
			document.getElementById("sample").innerHTML = selectedWords1.join(" ")
			SenShuf1 = SenShuf1.filter((w) => w != event.target.textContent)
			checking1()
			if (SenShuf1 == 0) {
				checkcorrectness1()
			}
		}
	}
}

function showAlert2() {
	document.getElementById("reform1").innerHTML = ""
	document.getElementById("reform20").innerHTML = ""
	SenShuf1 = reform
	checking1()
	document.getElementById("sample2").innerHTML = ""
	document.getElementById("sample").innerHTML = ""
	selectedWords1 = []
	SenShuf1 = SenShuf1.filter((w) => w != event.target.textContent)
	document.getElementById("check1").innerHTML = ""
	document.getElementById("demo").innerHTML = ""
	document.getElementById("check2").innerHTML = ""
	document.getElementById("display").innerHTML = ""
}

function checkcorrectness1() {
	if (!document.getElementById("reform20")) {
		var tp = document.createElement("BUTTON");
		var tpt = document.createTextNode("check correctness");
		tp.appendChild(tpt);
		document.getElementById("check1").appendChild(tp);
		tp.id = "reform20"
	}
	// Find the paragraph element in the page

	tp.onclick = checkcorrectness2;
}
function checkcorrectness2() {
	if (engCorpus.some((sen) => sen == selectedWords1.join(" "))) {
		document.getElementById("demo").textContent = "It's Correct";
	}
	else {
		document.getElementById("demo").textContent = "It's wrong";
		getcorrect()
	}
}

function checking2() {
	document.getElementById("mybuttons").innerHTML = ""
	for (i = 0; i < SenShuf2.length; i++) {

		var x = document.createElement("BUTTON");
		var t = document.createTextNode(SenShuf2[i]);
		var id = document.createAttribute(id = "hello")
		x.appendChild(t);
		document.getElementById("mybuttons").appendChild(x);

		x.onclick = showAlert;

		function showAlert(event) {

			if (!document.getElementById("reform")) {

				var x2 = document.createElement("BUTTON");
				var t2 = document.createTextNode("Reform the Sentence");
				x2.appendChild(t2);
				x2.id = "reform"
				document.getElementById("reform1").appendChild(x2);

				// Find the paragraph element in the page
				x2.onclick = showAlert3;

			}

			selectedWords2.push(event.target.textContent)
			document.getElementById("sample2").innerHTML = "<b>Formed Sentence (after selecting words):"
			document.getElementById("sample").innerHTML = selectedWords2.join(" ")
			SenShuf2 = SenShuf2.filter((w) => w != event.target.textContent)
			checking2()
			if (SenShuf2 == 0) {
				checkcorrectness3()
			}
		}
	}
}

function showAlert3() {
	document.getElementById("reform1").innerHTML = ""
	SenShuf2 = reform3
	checking2()
	document.getElementById("sample2").innerHTML = ""
	document.getElementById("sample").innerHTML = ""
	selectedWords2 = []
	document.getElementById("check1").innerHTML = ""
	document.getElementById("check2").innerHTML = ""
	document.getElementById("display").innerHTML = ""
	document.getElementById("demo").innerHTML = ""
	SenShuf2 = SenShuf2.filter((w) => w != event.target.textContent)
}

function checkcorrectness3() {

	var tp2 = document.createElement("BUTTON");
	var tpt2 = document.createTextNode("check correctness");
	tp2.appendChild(tpt2);
	document.getElementById("check1").appendChild(tp2);

	// Find the paragraph element in the page
	tp2.onclick = checkcorrectness4;
}

function checkcorrectness4() {
	if (hinCorpus.some((sen) => sen == selectedWords2.join(" "))) {
		document.getElementById("demo").textContent = "It's Correct";
	}
	else {
		document.getElementById("demo").textContent = "It's wrong";
		getcorrect2()
	}
}
function getcorrect() {

	var tp1 = document.createElement("BUTTON");
	var tpt1 = document.createTextNode("Get correct Sentence");
	tp1.appendChild(tpt1);
	document.getElementById("check2").appendChild(tp1);
	tp1.id = "hide"

	tp1.addEventListener("click", function () {
		getcorrect1(engCorpus)
		hidebut()

	});
}

function hidebut() {
	document.getElementById("hide").innerHTML = ""
	document.getElementById("check2").innerHTML = ""
	var x2 = document.createElement("BUTTON");
	var t2 = document.createTextNode("hide correct Sentence");
	x2.appendChild(t2);
	x2.id = "hide1"
	document.getElementById("check2").appendChild(x2);

	// Find the paragraph element in the page
	x2.onclick = clearance;

}

function clearance() {
	document.getElementById("hide1").innerHTML = ""
	document.getElementById("check2").innerHTML = ""
	document.getElementById("display").innerHTML = ""
	getcorrect()

}

function getcorrect2() {

	var tp1a = document.createElement("BUTTON");
	var tpt1a = document.createTextNode("Get correct Sentence");
	tp1a.appendChild(tpt1a);
	document.getElementById("check2").appendChild(tp1a);
	tp1a.id = "hide4"
	// Find the paragraph element in the page
	tp1a.onclick = () => getcorrect1(hinCorpus);

	tp1a.addEventListener("click", function () {
		getcorrect1(hinCorpus)
		hidebut1()
	});

}

function hidebut1() {
	document.getElementById("hide4").innerHTML = ""
	document.getElementById("check2").innerHTML = ""
	var x2 = document.createElement("BUTTON");
	var t2 = document.createTextNode("hide correct Sentence");
	x2.appendChild(t2);
	x2.id = "hide5"
	document.getElementById("check2").appendChild(x2);

	// Find the paragraph element in the page
	x2.onclick = clearance1;
}

function clearance1() {
	document.getElementById("hide5").innerHTML = ""
	document.getElementById("check2").innerHTML = ""
	document.getElementById("display").innerHTML = ""
	getcorrect()
}

function getcorrect1(corpus) {
	let sentences = corpus
	selectedWords1.map((word) => {
		sentences = findSentences(word, sentences)
	})
	for (k in sentences)
		document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "<br>" + sentences[k]
}
function findSentences(word, sentences) {
	if (!sentences) {
		return []
	}
	return sentences.filter(sen => sen.split(" ").some(sw => sw == word))
}