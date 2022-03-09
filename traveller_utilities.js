var NAMEPARTS = [
	[ // 0
		"Eye","Star","Scepter","Jewel","Dagger","Sword","Justice","Hand","Will","Crown","Diadem","Ascension","Miracle"
	],
	[ // 1
		"Courageous","Excellent","Glorious","Loyal","Innovative","Independent","Creative","Indefatigable","Progressive","Tenacious"
	],
	[ // 2
		"Express","Carrier","Merchant","Trader","Excellence","Discoverer","Venture","Blue Sky","Clear Sky","Crystal Sky","Glory","Spirits","Commerce","Councillor","Courage","Diamond","Emerald","Innovator","Ruby","Sapphire","Loyalty","Liberty","Harmony","Winter","Summer","Autumn","Spring","Independence","Innovation","Invention","Creation","Conception","Perseverance","Progress","Prospect","Tenacity","Delight","Haven"
	],
	[ // 3
		"Princess","Duchess","Lady","Countess","Baroness","Marquise","Empress","Dauphine","Queen"
	],
	[ // 4
		"Prince","Duke","Count","Viscount","Knight","Marquis","Baron","Emperor","King"
	],
	[ // 5
		"Andromeda","Antilia","Apus","Aquarius","Aquila","Ara","Aries","Auriga","Boötes","Caelum","Camelopardalis","Cancer","Canes Venatici","Canis Major","Canis Minor","Capricornus","Carina","Cassiopeia","Centaurus","Cepheus","Cetus","Chamaeleon","Circinus","Columba","Coma Berenices","Corona Austrina","Corona Borealis","Corvus","Crater","Crux","Cygnus","Delphinus","Dorado","Draco","Equuleus","Eridanus","Fornax","Gemini","Grus","Hercules","Horologium","Hydra","Hydrus","Indus","Lacerta","Leo","Leo Minor","Lepus","Libra","Lupus","Lynx","Lyra","Mensa","Microscopium","Monoceros","Musca","Norma","Octans","Ophiuchus","Orion","Pavo","Pegasus","Perseus","Phoenix","Pictor","Pisces","Piscis Austrinus","Puppis","Pyxis","Reticulum","Sagitta","Sagittarius","Scorpius","Sculptor","Scutum","Serpens","Sextans","Taurus","Telescopium","Triangulum","Triangulum Australe","Tucana","Ursa Major","Ursa Minor","Vela","Virgo","Volans","Vulpecula"
	],
	[ // 6
		"Scheddi","Ras Elased Australis","Rana","Rijl al Awwa","Ruchba","Sadatoni","Sinistra","Media","Menkab","Minkar","Murzim","Muscida","Nair Al Saif","Nash","Nembus","Okul","Giedi","Girtab","Gorgonea Tertia","Haedus","Heka","Hoedus","Hoedus II","Hydrobius","Kabdhilinan","Kastra","Kuma","Dnoces","Duhr","Elmuthalleth","Fum al Samakah","Gatria","Askella","Asterion","Auva","Azaleh","Baham","Benetnasch","Betria","Chara","Cheleb","Chow","Dheneb","Al Thalimain","Arich","Armus","Asellus","Alfecca Meridiana","Al Kalb al Rai","Alkurah","Al Minliar al Asad","Alrai","Alrami","Tejat Prior","Thabit","Tyl","Zuben-el-Akrab","Zuben-el-Akribi","Acamar","Achernar","Achird","Acrab","Acrux","Acubens","Adhafera","Adhara","Adhil","Ain","Ainalrami","Al Kalb al Rai","Al Minliar al Asad","Aladfar","Alamak","Alathfar","Albaldah","Albali","Albireo","Alchiba","Alcor","Alcyone","Aldebaran","Alderamin","Aldhanab","Aldhibah","Aldulfin","Alfirk","Algedi","Algenib","Algieba","Algol","Algorab","Alhena","Alioth","Aljanah","Alkaid","Alkalurops","Alkaphrah","Alkarab","Alkes","Almaaz","Almach","Alnair","Alnasl","Alnilam","Alnitak","Alniyat","Alphard","Alphecca","Alpheratz","Alpherg","Alrakis","Alrescha","Alruba","Alsafi","Alsciaukat","Alsephina","Alshain","Alshat","Altair","Altais","Alterf","Aludra","Alula Australis","Alula Borealis","Alya","Alzirr","Ancha","Angetenar","Ankaa","Anser","Antares","Arcturus","Arkab Posterior","Arkab Prior","Arneb","Ascella","Asellus Australis","Asellus Borealis","Asellus Primus","Asellus Secundus","Asellus Tertius","Ashlesha","Aspidiske","Asterope, Sterope","Athebyne","Atik","Atlas","Atria","Avior","Azelfafage","Azha","Azmidi","Baten Kaitos","Beemim","Beid","Bellatrix","Betelgeuse","Bharani","Biham","Botein","Brachium","Bunda","Canopus","Capella","Caph","Castor","Castula","Cebalrai","Celaeno","Cervantes","Chalawan","Chamukuy","Chara","Chertan","Copernicus","Cor Caroli","Cujam","Cursa","Dabih","Dalim","Deneb","Deneb Algedi","Denebola","Diadem","Diphda","Dschubba","Dubhe","Dziban","Edasich","Electra","Elgafar","Elkurud","Elnath","Eltanin","Enif","Errai","Fafnir","Fang","Fawaris","Felis","Fomalhaut","Fulu","Fumalsamakah","Furud","Fuyue","Gacrux","Garnet Star","Giausar","Gienah","Ginan","Gomeisa","Graffias","Grumium","Gudja","Guniibuu","Hadar","Haedus","Hamal","Hassaleh","Hatysa","Helvetios","Heze","Homam","Iklil","Imai","Intercrus","Izar","Jabbah","Jishui","Kaffaljidhma","Kakkab","Kang","Kaus Australis","Kaus Borealis","Kaus Media","Keid","Kekouan","Khambalia","Kitalpha","Kochab","Kornephoros","Kraz","Kuma","Kurhah","La Superba","Larawag","Lesath","Libertas","Lich","Lilii Borea","Maasym","Mahasim","Maia","Marfark","Marfik","Markab","Markeb","Marsic","Matar","Mebsuta","Megrez","Meissa","Mekbuda","Meleph","Menkalinan","Menkar","Menkent","Menkib","Merak","Merga","Meridiana","Merope","Mesarthim","Miaplacidus","Mimosa","Minchir","Minelauva","Mintaka","Mira","Mirach","Miram","Mirfak","Mirzam","Misam","Mizar","Mothallah","Muliphein","Muphrid","Muscida","Musica","Nahn","Naos","Nash","Nashira","Navi","Nekkar","Nembus","Nihal","Nunki","Nusakan","Ogma","Okab","Paikauhale","Peacock","Phact","Phecda","Pherkad","Piautos","Pipirima","Pleione","Polaris","Polaris Australis","Polis","Pollux","Porrima","Praecipua","Prima Hyadum","Procyon","Propus","Proxima Centauri","Ran","Rasalas","Rasalgethi","Rasalhague","Rastaban","Regor","Regulus","Revati","Rigel","Rigil Kentaurus","Rotanev","Ruchbah","Rukbat","Sabik","Saclateni","Sadachbia","Sadalbari","Sadalmelik","Sadalsuud","Sadr","Saiph","Salm","Sargas","Sarin","Sarir","Sceptrum","Scheat","Schedar","Secunda Hyadum","Segin","Seginus","Sephdar","Sham","Shaula","Sheliak","Sheratan","Sirius","Situla","Skat","Spica","Sualocin","Subra","Suhail","Sulafat","Syrma","Tabit","Taiyangshou","Taiyi","Talitha","Tania Australis","Tania Borealis","Tarazed","Tarf","Taygeta","Tegmine","Tejat","Terebellum","Thabit","Theemin","Thuban","Tiaki","Tianguan","Tianyi","Titawin","Toliman","Tonatiuh","Torcular","Tureis","Ukdah","Unukalhai","Unurgunite","Vega","Veritate","Vindemiatrix","Wasat","Wazn","Wezen","Wurren","Xamidimura","Xuange","Yed","Yildun","Zaniah","Zaurak","Zavijava","Zhang","Zibal","Zosma","Zubenelgenubi","Zubenelhakrabi","Zubeneschamali"
	],
	[ // 7
		"Altona","Carmen","Carouge","Cordoba","Geneva","Leigh","Monterey","Napoli","Nuria","Pamela","Rosaria","Sabrina","Mayaguez","MacCabe","MacColl","MacKay","MacMahon","Erika","Macoma","Cortesia","Karen","Danielsen","Jindal","Kamakshi","Hansa","Harpa","Histria Agata","Histria Azure","Histria Coral","Gadila","Golden Nori","Gallina","Golfito","Gudrun","Edith","Emma","Estelle","Fatima","Desabla","Camito","Medea","Thalassa","Vela","Guangzhou","Colombo","Costa Allegra","Craigantlet","Cristina","Bandırma","Bessemer","Biruinţa","Biscaglia","Bali","Axel Mærsk","Acavus","Adula","Akebono Maru","Alexia","Altmark","Amastra","Amoco Cadiz","Ancylus","Adhara","Albireo","Alderamin","Alkaid","Alkes","Allegan","Allioth","Alnitah","Aludra","Antenor","Appanoose","Ara","Aranui","Arided","Arkab","Ascella","Astron","Osaka","Ranga","Savannah","Osakana","Salem","Fredericksberg","Sidsel","Knutsen","Stolt","Torrey","Torben","Tampa","Love","Valdez","Los Angeles","Al Barrah","Al Dafna","Al Jabirah","Al Oraic","Al Rayyan","Al Thakhira","Ayame","Almarona","Almajedah","Alrar","Althea","Anafi","Annapurna","Antwerpen","Mediterrana","Aurora","Berlian Ekuator","Ningbo","Berge","Nantong","Disha","Fuji","Venezia","Magic","Cat","Gandria","Gimi","Mazo","Maria","Stella","Grace","Cosmos","Acacia","Iris","Jag Vidhi","Jag Vishnu","Lyne","Labhatreya","Shubhatreya","Krishnatreya","Devatreya","Vamadeva","Bhardwaj","Devatreya","Jade","Swan","Genesis","Gusto","Malanje","Pampero","Orchid","Raahi","Secreto","Sylvie","Sonja","Silvia","Ivor","Sansovino","Seri Bijaksana","Soyo","Thetis","Yuhsan","Yuyo","Zekreet"
	]
];
const NAMECONNECTS = [
	[0, "of", 5],
	[0, "of", 6],
	[1, 0, "of", 5],
	[1, 0, "of", 6],
	[3, "of", 5],
	[3, 6],
	[3, 7],
	[4, "of", 5],
	[4, 6],
	[4, 7],
	[7, 2],
	[1, 2],
	[5, 2],
	[6, 2],
	[5, 2]
];
const SHIPS = [
	{ "name": "Scout", "tons": 100, "streamlined": true, "merchant": true, "cargo": 8, "staterooms": 4, "book": "MgT Core pg. 115" },
	{ "name": "Seeker Mining Ship", "streamlined": true, "merchant": true, "tons": 100, "cargo": 23, "staterooms": 2, "book": "MgT Core pg. 115" },
	{ "name": "Free Trader", "streamlined": true, "merchant": true, "tons": 200, "cargo": 88, "staterooms": 10, "lowberths": 20, "book": "MgT Core pg. 118" },
	{ "name": "Far Trader", "streamlined": true, "merchant": true, "tons": 200, "cargo": 64, "staterooms": 10, "lowberths": 6, "book": "MgT Core pg. 118" },
	{ "name": "Fast Trader", "streamlined": true, "merchant": true, "tons": 200, "cargo": 48, "staterooms": 10, "lowberths": 6, "book": "MgT Traders and Gunboats pg. 42" },
	{ "name": "Subsidized Merchant", "streamlined": true, "merchant": true, "tons": 400, "cargo": 205, "staterooms": 13, "lowberths": 9, "book": "MgT Core pg. 119" },
	{ "name": "Laboratory Ship", "streamlined": false, "merchant": false, "tons": 400, "cargo": 21, "staterooms": 20, "book": "MgT Core pg. 121" },
	{ "name": "Gazelle Close Escort", "streamlined": true, "merchant": false, "tons": 400, "cargo": 15, "staterooms": 8, "book": "MgT Core pg. 123" },
	{ "name": "Heavy Freighter", "streamlined": false, "merchant": true, "tons": 1000, "cargo": 552, "staterooms": 8, "book": "MgT Core pg. 125" },
	{ "name": "Large Freighter", "streamlined": false, "merchant": true, "tons": 2000, "cargo": 1004, "staterooms": 16, "lowberths": 18, "book": "MgT Traders and Gunboats pg. 44" },
	{ "name": "Yacht", "streamlined": false, "merchant": false, "tons": 200, "cargo": 21, "staterooms": 16, "book": "MgT Core pg. 126" },
	{ "name": "Mercenary Cruiser", "streamlined": false, "merchant": false, "tons": 800, "cargo": 77, "staterooms": 25, "book": "MgT Core pg. 127" },
	{ "name": "Corsair", "streamlined": false, "merchant": true, "tons": 400, "cargo": 160, "staterooms": 10, "lowberths": 20, "book": "MgT Core pg. 129" },
	{ "name": "Serpent Police Cutter", "streamlined": true, "merchant": true, "tons": 100, "cargo": 20, "staterooms": 2, "lowberths": 10, "book": "MgT Core pg. 131" },
	{ "name": "Safari Ship", "streamlined": true, "merchant": true, "tons": 200, "cargo": 21, "staterooms": 8, "lowberths": 10, "book": "MgT Traders and Gunboats pg. 50" },
	{ "name": "Subsidized Liner", "streamlined": true, "merchant": true, "tons": 600, "cargo": 62, "staterooms": 36, "lowberths": 24, "book": "MgT Traders and Gunboats pg. 80" },
];

function rand(size) {
	return Math.floor(Math.random() * size);
}

function roll(size) {
	return rand(size) + 1;
}

function flux() {
	return roll(6) - roll(6);
}

function uwpElem(num) {
	if(num < 0) { num = 0; }
	if(num < 16) { return num.toString(16).toUpperCase(); }
	switch(num) {
	case 16:
		return "G";
	case 17:
		return "H";
	case 18:
		return "J";
	case 19:
		return "K";
	case 20:
		return "L";
	}
}
		
