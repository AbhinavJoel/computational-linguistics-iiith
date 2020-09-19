const engCorpus = [
    "The child liked the chocolate",
    "She was stopped by the bravest knight",
    "Mary baked a cake for his birthday",
    "She decorated the cake carefully",
    "Mary wore a dress with polka dots"
]

const hinCorpus = [
    "राम ने सीता के लिए फल	तोड़ा",
    "छोटे बच्चे पाठशाला जल्दी आयेंगे",
    "मेहनत का फल मीठा होता है",
    "वाह वह खूबसूरत है",
    "पेड़ से पत्ते गिर गए"
]

function selection() {
    if (document.getElementById("languages").selectedIndex == 0) {
        alert("Select a Language")
        location.reload()
    }
    if (document.getElementById("languages").selectedIndex == 1) {
        createEngDb()
    }
    if (document.getElementById("languages").selectedIndex == 2) {
        createHinDb()
    }

}

function createEngDb() {
    document.getElementById("selectbox1").innerHTML = ""
    document.getElementById("table1").innerHTML = ""
    document.getElementById("mybutton").innerHTML = ""
    document.getElementById("mybutton2").innerHTML = ""
    var values = ["---Select a sentence---", ...engCorpus];

    var select = document.createElement("select");
    select.name = "sentences1";
    select.id = "engSentences"

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }


    document.getElementById("selectbox1").appendChild(select);
    document.getElementById("engSentences").addEventListener("change", next);
}


function createHinDb() {
    document.getElementById("selectbox1").innerHTML = ""
    document.getElementById("table1").innerHTML = ""
    document.getElementById("mybutton").innerHTML = ""
    document.getElementById("mybutton2").innerHTML = ""
    var values = ["---Select a sentence---", ...hinCorpus];

    var select = document.createElement("select");
    select.name = "sentences2";
    select.id = "hinSentences"

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val
        select.appendChild(option);
    }


    document.getElementById("selectbox1").appendChild(select);
    document.getElementById("hinSentences").addEventListener("change", next2);
}



let posData = undefined

function next() {
    if (document.getElementById("engSentences").selectedIndex == 0) {
        alert("Select a sentence")
        return
    }

    posData = getPosData(engCorpus[document.getElementById("engSentences").selectedIndex - 1])
    generateTable()
    document.getElementById("mybutton2").innerHTML = ""
}

function next2() {
    if (document.getElementById("hinSentences").selectedIndex == 0) {
        alert("Select a sentence")
        return
    }

    posData = getPosData(hinCorpus[document.getElementById("hinSentences").selectedIndex - 1])
    generateTable()
    document.getElementById("mybutton2").innerHTML = ""
}

function generateTable() {
    document.getElementById("table1").innerHTML = ""
    document.getElementById("mybutton").innerHTML = ""
    document.getElementById("heading").innerHTML = "Select the POS tag for corresponding words"
    var body = document.getElementById("table1");

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");


    var row1 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var celltext1 = document.createTextNode("LEXICON");
    cell1.appendChild(celltext1)
    cell1.style.fontWeight = 'bold';
    cell1.style.color = 'red';
    var cell2 = document.createElement("td");
    var celltext2 = document.createTextNode("POS");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    cell2.appendChild(celltext2)
    cell2.style.fontWeight = 'bold';
    cell2.style.color = 'red';
    row1.appendChild(cell1)
    row1.appendChild(cell2)
    row1.appendChild(cell3)
    row1.appendChild(cell4)
    tblBody.appendChild(row1);


    // creating all cells
    for (var i = 0; i < posData.length; i++) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            if (j == 0) {
                var cellText = document.createTextNode(posData[i][0]);
                cell.appendChild(cellText);
            }
            if (j == 1) {
                cell.appendChild(createDB('cell' + i))

            }
            if (j == 2) {
                var cell = document.createElement("td");
                cell.id = "icon" + i
            }
            if (j == 3) {
                var cell = document.createElement("td");
                cell.id = "index" + i
                cell.setAttribute("border", "1");
            }
            row.appendChild(cell);

        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
    tbl.setAttribute("text-align","center")
    var z = document.createElement("BUTTON");
    var t = document.createTextNode("Submit");
    z.id = "button1"
    z.appendChild(t);
    document.getElementById("mybutton").appendChild(z);
    z.addEventListener("click", function () {
        submit()
    });
}



function createDB(id) {
    var values = [
        "Noun", "Pronoun", "Verb", "Adjective", "Adverb", "Determiner", "Preposition", "Conjunction", "Interjection"];
        var select = document.createElement("select");
        select.name = "db1";
        select.id = id
        for (const val of values) {
            var option = document.createElement("option");
            option.value = val;
            option.text = val;
            select.appendChild(option);
        }
        return select
    }

function getPosValue(key) {
    switch(key) {
        case "NN":
            return "Noun"
        case "JSS":
            return "Adjective"
        case "DT":
            return "Determiner"
        case "IN":
            return "Preposition"
        case "VBD":
            return "Verb"
        case "PRP":
            return "Preposition"
        case "CC":
            return "Conjunction"
        case "JJR":
            return "Adjective"
        case "NNP":
            return "Noun"
        case "NNPS":
            return "Noun"
        case "NNS":
            return "Noun"
        case "PDT":
            return "Determiner"
        case "PRP$":
            return "Pronoun"
        case "RB":
            return "Adverb"
        case "RBR":
            return "Adverb"
        case "RBS":
            return "Adverb"
        case "VB":
            return "Verb"
        case "VBG":
            return "Verb"
        case "VBN":
            return "Verb"
        case "VBP":
            return "Verb"
        case "VBZ":
            return "Verb"
        case "UH":
            return "Interjection"
        case "WDT":
            return "Determiner"
        default: 
            return ""
    }

}

function submit() {
    for (j = 0; j < posData.length; j++) {
        var e = document.getElementById("cell" + j);
        var str = e.options[e.selectedIndex].value;
        const posStr = getPosValue(posData[j][1])
        if (str == posStr) {
            document.getElementById("icon" + j).innerHTML = "<img src='https://s4.aconvert.com/convert/p3r68-cdx67/a1ztg-mounh.jpg' alt='Right'/>";
        }
        else {
            document.getElementById("icon" + j).innerHTML = "<img src='https://s4.aconvert.com/convert/p3r68-cdx67/a3tcb-wads5.jpg' alt='Wrong'/>";
        }
    }

    document.getElementById("mybutton2").innerHTML = ""
    var z = document.createElement("BUTTON");
    var t = document.createTextNode("Get Answer");
    z.id = "getAnsBtn"
    z.appendChild(t);
    z.addEventListener("click", function () {
        for (g = 0; g < posData.length; g++) {
            if(document.getElementById("index" + g).innerHTML) {
                document.getElementById("index" + g).innerHTML = ""
            } else {
                document.getElementById("index" + g).innerHTML = getPosValue(posData[g][1])
            }
        }

        if(document.getElementById("getAnsBtn").innerHTML == "Get Answer") {
            document.getElementById("getAnsBtn").innerHTML = "Hide Answer"
        } else {
            document.getElementById("getAnsBtn").innerHTML = "Get Answer"
        }
    });

    document.getElementById("mybutton2").appendChild(z);

}


