const NAMEPARTS = [
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

const TRAITS = [
	"Abrasive",
	"Abrupt",
	"Absent-minded",
	"Adamant",
	"Adaptable",
	"Afraid",
	"Alert",
	"Aloof",
	"Ambitious",
	"Analytical",
	"Angry",
	"Anti-intellectual",
	"Anxious",
	"Apathetic",
	"Apprehensive",
	"Arbitrary",
	"Aristocratic",
	"Articulate",
	"Artistic",
	"Artless",
	"Ashamed",
	"Aspiring",
	"Assertive",
	"Astute",
	"Attentive",
	"Audacious",
	"Austere",
	"Authoritarian",
	"Authoritative",
	"Autocratic",
	"Awed",
	"Awful",
	"Awkward",
	"Babbling",
	"Backstabbing",
	"Bashful",
	"Belligerent",
	"Benevolent",
	"Bewildered",
	"Bewitching",
	"Bitter",
	"Blasé",
	"Blissful",
	"Blowhard",
	"Boastful",
	"Boisterous",
	"Bold",
	"Boorish",
	"Bored",
	"Boring",
	"Bossy",
	"Boundless",
	"Bragging",
	"Brainy",
	"Brash",
	"Bratty",
	"Brave",
	"Brazen",
	"Bright",
	"Brilliant",
	"Brutish",
	"Bubbly",
	"Bully",
	"Burdened",
	"Busy",
	"Calculating",
	"Callous",
	"Calm",
	"Candid",
	"Capable",
	"Capricious",
	"Carefree",
	"Careful",
	"Careless",
	"Caring",
	"Caustic",
	"Cautious",
	"Changeable",
	"Charismatic",
	"Charitable",
	"Charming",
	"Chaste",
	"Chatty",
	"Cheat",
	"Cheerful",
	"Cheerless",
	"Childish",
	"Chivalrous",
	"Civilised",
	"Classy",
	"Clean",
	"Clever",
	"Closed",
	"Clumsy",
	"Coarse",
	"Cocky",
	"Coherent",
	"Cold",
	"Combative",
	"Comfortable",
	"Committed",
	"Communicative",
	"Compassionate",
	"Competent",
	"Competitive",
	"Complacent",
	"Compliant",
	"Compulsive",
	"Conceited",
	"Concerned",
	"Condescending",
	"Confident",
	"Conformist",
	"Confused",
	"Congenial",
	"Connoisseur",
	"Conscientious",
	"Conservative",
	"Considerate",
	"Consistent",
	"Conspicuous",
	"Constricting",
	"Constructive",
	"Content",
	"Contrarian",
	"Contrary",
	"Contrite",
	"Controlling",
	"Conventional",
	"Conversational",
	"Cool",
	"Cooperative",
	"Coquettish",
	"Cosmopolitan",
	"Courageous",
	"Courteous",
	"Covetous",
	"Cowardly",
	"Cowering",
	"Coy",
	"Crabby",
	"Crafty",
	"Cranky",
	"Crazy",
	"Creative",
	"Credible",
	"Creepy",
	"Critical",
	"Cross",
	"Crude",
	"Cruel",
	"Culpable",
	"Cultured",
	"Cunning",
	"Curious",
	"Cutthroat",
	"Cynical",
	"Dainty",
	"Dangerous",
	"Daredevil",
	"Daring",
	"Dark",
	"Dashing",
	"Dauntless",
	"Dazzling",
	"Debonair",
	"Deceitful",
	"Deceiving",
	"Decent",
	"Decisive",
	"Decorous",
	"Dedicated",
	"Defeated",
	"Deferential",
	"Defiant",
	"Deliberate",
	"Deliberative",
	"Delicate",
	"Delighted",
	"Delusional",
	"Demanding",
	"Dependable",
	"Dependent",
	"Depraved",
	"Depressed",
	"Depressive",
	"Deranged",
	"Desirous",
	"Despairing",
	"Despicable",
	"Despondent",
	"Destructive",
	"Detached",
	"Detail-oriented",
	"Determined",
	"Devilish",
	"Devious",
	"Devoted",
	"Devout",
	"Dictatorial",
	"Diffident",
	"Dignified",
	"Diligent",
	"Diplomatic",
	"Direct",
	"Directionless",
	"Disaffected",
	"Disagreeable",
	"Discerning",
	"Disciplined",
	"Discontented",
	"Discouraged",
	"Discreet",
	"Disgusted",
	"Dishonest",
	"Disillusioned",
	"Disinterested",
	"Disloyal",
	"Dismayed",
	"Disorderly",
	"Disorganized",
	"Disparaging",
	"Disrespectful",
	"Dissatisfied",
	"Dissident",
	"Dissolute",
	"Distant",
	"Distracted",
	"Distraught",
	"Distressed",
	"Distrustful",
	"Disturbed",
	"Divided",
	"Docile",
	"Dogmatic",
	"Dominant",
	"Domineering",
	"Doubtful",
	"Draconian",
	"Dramatic",
	"Dreamer",
	"Dreamy",
	"Dreary",
	"Driven",
	"Dubious",
	"Dull",
	"Dutiful",
	"Dynamic",
	"Eager",
	"Easygoing",
	"Eccentric",
	"Ecstatic",
	"Effervescent",
	"Efficient",
	"Egocentric",
	"Egotistic",
	"Egotistical",
	"Elated",
	"Eloquent",
	"Elusive",
	"Eminent",
	"Emotional",
	"Empathetic",
	"Empty",
	"Enchanted",
	"Enchanting",
	"Encouraging",
	"Enduring",
	"Energetic",
	"Engaging",
	"Enigmatic",
	"Enterprising",
	"Entertaining",
	"Enthusiastic",
	"Entrepreneurial",
	"Envious",
	"Equable",
	"Erratic",
	"Ethical",
	"Evasive",
	"Evil",
	"Exacting",
	"Excellent",
	"Excessive",
	"Excitable",
	"Excited",
	"Exclusive",
	"Expansive",
	"Expedient",
	"Experimental",
	"Expert",
	"Expressive",
	"Extravagant",
	"Extraverted",
	"Extreme",
	"Exuberant",
	"Fabulous",
	"Facetious",
	"Faded",
	"Failure",
	"Fair",
	"Faithful",
	"Faithless",
	"Fake",
	"Fanatical",
	"Fanciful",
	"Fantastic",
	"Fastidious",
	"Fatalistic",
	"Fawning",
	"Fearful",
	"Fearless",
	"Feisty",
	"Ferocious",
	"Fidgety",
	"Fierce",
	"Fiery",
	"Finicky",
	"Flagging",
	"Flakey",
	"Flamboyant",
	"Flashy",
	"Fleeting",
	"Flexible",
	"Flighty",
	"Flippant",
	"Flirtatious",
	"Flirty",
	"Flustered",
	"Focused",
	"Follower",
	"Foolhardy",
	"Foolish",
	"Forceful",
	"Forgetful",
	"Forgiving",
	"Formal",
	"Forthright",
	"Fortunate",
	"Foul",
	"Fragile",
	"Fragmented",
	"Frank",
	"Frantic",
	"Frazzled",
	"Fresh",
	"Fretful",
	"Friendly",
	"Frigid",
	"Frugal",
	"Fun",
	"Funny",
	"Furious",
	"Furtive",
	"Fussy",
	"Gabby",
	"Garrulous",
	"Gaudy",
	"Generous",
	"Genial",
	"Gentle",
	"Genuine",
	"Giddy",
	"Giggly",
	"Giving",
	"Glad",
	"Glamorous",
	"Gloomy",
	"Glorious",
	"Glum",
	"Glutton",
	"Gluttonous",
	"Goal-orientated",
	"Goofy",
	"Graceful",
	"Gracious",
	"Grandiose",
	"Grateful",
	"Greedy",
	"Gregarious",
	"Grieving",
	"Grotesque",
	"Grouchy",
	"Grounded",
	"Group-oriented",
	"Growly",
	"Gruesome",
	"Gruff",
	"Grumpy",
	"Guarded",
	"Guileless",
	"Guilty",
	"Gullible",
	"Haggard",
	"Haggler",
	"Happy",
	"Hard",
	"Hard-working",
	"Harmonious",
	"Harried",
	"Harsh",
	"Hateful",
	"Haughty",
	"Heartless",
	"Heavenly",
	"Hedonistic",
	"Helpful",
	"Helpless",
	"Heroic",
	"Hesitant",
	"Hobbyist",
	"Holy",
	"Homesick",
	"Honest",
	"Honorable",
	"Hopeful",
	"Hopeless",
	"Horrible",
	"Hospitable",
	"Hostile",
	"Hot-headed",
	"Huffy",
	"Humble",
	"Humorous",
	"Hurt",
	"Hypocritical",
	"Hysterical",
	"Ignorant",
	"Imaginative",
	"Immaculate",
	"Immature",
	"Immobile",
	"Immodest",
	"Impartial",
	"Impatient",
	"Impeccable",
	"Imperial",
	"Impersonal",
	"Impolite",
	"Impotent",
	"Impractical",
	"Impudent",
	"Impulsive",
	"Inactive",
	"Incoherent",
	"Incompetent",
	"Inconsiderate",
	"Inconsistent",
	"Indecisive",
	"Independent",
	"Indifferent",
	"Indiscrete",
	"Indiscriminate",
	"Individualistic",
	"Indolent",
	"Indulgent",
	"Industrious",
	"Inefficient",
	"Inept",
	"Infantile",
	"Infatuated",
	"Inflexible",
	"Informed",
	"Inhibited",
	"Inhumane",
	"Inimitable",
	"Innocent",
	"Inquisitive",
	"Insane",
	"Insecure",
	"Insensitive",
	"Insightful",
	"Insincere",
	"Insipid",
	"Insistent",
	"Insolent",
	"Insouciant",
	"Inspired",
	"Instinctive",
	"Insulting",
	"Intellectual",
	"Intense",
	"Interested",
	"Interrupting",
	"Intimidated",
	"Intimidating",
	"Intolerant",
	"Intrepid",
	"Introspective",
	"Introverted",
	"Intuitive",
	"Inventive",
	"Involved",
	"Irresponsible",
	"Irreverent",
	"Irritable",
	"Isolated",
	"Jaded",
	"Jealous",
	"Jittery",
	"Joking",
	"Jolly",
	"Jovial",
	"Joyful",
	"Judgmental",
	"Jumpy",
	"Just",
	"Keen",
	"Kind",
	"Knowledgeable",
	"Lackadaisical",
	"Lacking",
	"Laconic",
	"Languid",
	"Lascivious",
	"Late",
	"Lax",
	"Lazy",
	"Leader",
	"Lecherous",
	"Lethargic",
	"Lewd",
	"Liar",
	"Licentious",
	"Light-hearted",
	"Likeable",
	"Limited",
	"Lively",
	"Logical",
	"Lonely",
	"Loquacious",
	"Lordly",
	"Loud",
	"Loudmouth",
	"Loving",
	"Loyal",
	"Lunatic",
	"Lusty",
	"Lying",
	"Macho",
	"Mad",
	"Malevolent",
	"Malicious",
	"Maniacal",
	"Manic",
	"Manipulative",
	"Mannered",
	"Mannerly",
	"Masochistic",
	"Materialistic",
	"Matronly",
	"Matter-of-fact",
	"Mature",
	"Maudlin",
	"Mean",
	"Meek",
	"Megalomaniac",
	"Melodramatic",
	"Merciful",
	"Mercurial",
	"Messy",
	"Meticulous",
	"Mild",
	"Mischievous",
	"Miserable",
	"Miserly",
	"Mistrusting",
	"Modern",
	"Modest",
	"Moody",
	"Moping",
	"Moralistic",
	"Morbid",
	"Motherly",
	"Motivated",
	"Mysterious",
	"Mystical",
	"Nagging",
	"Naive",
	"Narcissistic",
	"Narrow-minded",
	"Nasty",
	"Naughty",
	"Neat",
	"Needy",
	"Negative",
	"Negligent",
	"Nervous",
	"Neurotic",
	"Nice",
	"Nihilistic",
	"Noble",
	"Noisy",
	"Nonchalant",
	"Noncommittal",
	"Nonconforming",
	"Nostalgic",
	"Nosy",
	"Nuanced",
	"Nuisance",
	"Nurturing",
	"Obedient",
	"Obliging",
	"Oblivious",
	"Obnoxious",
	"Obscene",
	"Obsequious",
	"Observant",
	"Obsessed",
	"Obstinate",
	"Odious",
	"Open",
	"Open-minded",
	"Opinionated",
	"Opportunistic",
	"Oppositional",
	"Optimistic",
	"Orderly",
	"Organized",
	"Ornery",
	"Ostentatious",
	"Outgoing",
	"Outspoken",
	"Over-wrought",
	"Overbearing",
	"Overconfident",
	"Overwhelmed",
	"Overwhelming",
	"Paces",
	"Pacifistic",
	"Painstaking",
	"Panicky",
	"Paranoid",
	"Participating",
	"Particular",
	"Passionate",
	"Passive",
	"Passive-aggressive",
	"Patient",
	"Patriotic",
	"Peaceful",
	"Penitent",
	"Pensive",
	"Perfectionist",
	"Performer",
	"Persevering",
	"Persistent",
	"Personable",
	"Persuasive",
	"Perverse",
	"Pessimistic",
	"Petty",
	"Petulant",
	"Philanthropic",
	"Picky",
	"Pious",
	"Pitiful",
	"Pity",
	"Placid",
	"Playful",
	"Pleasant",
	"Pleased",
	"Pleasing",
	"Plotting",
	"Plucky",
	"Polished",
	"Polite",
	"Pompous",
	"Positive",
	"Possessive",
	"Power-hungry",
	"Practical",
	"Precise",
	"Precise",
	"Predictable",
	"Preoccupied",
	"Presumptuous",
	"Pretentious",
	"Pretty",
	"Prim",
	"Primitive",
	"Private",
	"Productive",
	"Profane",
	"Professional",
	"Promiscuous",
	"Proper",
	"Prosaic",
	"Prosperous",
	"Protective",
	"Proud",
	"Prudent",
	"Psychopath",
	"Psychotic",
	"Punctilious",
	"Punctual",
	"Purposeful",
	"Pushy",
	"Puzzled",
	"Quarrelsome",
	"Quick",
	"Quick-tempered",
	"Quiet",
	"Quirky",
	"Quitter",
	"Quixotic",
	"Radical",
	"Raging",
	"Rambunctious",
	"Random",
	"Rash",
	"Rational",
	"Reactionary",
	"Realistic",
	"Reasonable",
	"Reasoning",
	"Rebellious",
	"Recalcitrant",
	"Receptive",
	"Reckless",
	"Reclusive",
	"Refined",
	"Reflective",
	"Refreshed",
	"Regretful",
	"Relaxed",
	"Relentless",
	"Relents",
	"Reliable",
	"Religious",
	"Reluctant",
	"Remorseful",
	"Remote",
	"Repugnant",
	"Repulsive",
	"Resentful",
	"Reserved",
	"Resilient",
	"Resolute",
	"Resourceful",
	"Respectful",
	"Responsible",
	"Responsive",
	"Restless",
	"Restrained",
	"Reverent",
	"Rhetorical",
	"Righteous",
	"Rigid",
	"Risk-averse",
	"Risk-taking",
	"Romantic",
	"Rough",
	"Rowdy",
	"Rude",
	"Ruthless",
	"Sacrificing",
	"Sad",
	"Sadistic",
	"Sagely",
	"Saintly",
	"Salient",
	"Sanctimonious",
	"Sanguine",
	"Sarcastic",
	"Sassy",
	"Satisfied",
	"Saucy",
	"Savage",
	"Savvy",
	"Scared",
	"Scarred",
	"Scattered",
	"Scheming",
	"Scornful",
	"Scrawny",
	"Scruffy",
	"Secretive",
	"Secure",
	"Sedate",
	"Seditious",
	"Seductive",
	"Selective",
	"Self-absorbed",
	"Self-assured",
	"Self-blaming",
	"Self-centered",
	"Self-confident",
	"Self-conscious",
	"Self-controlling",
	"Self-deprecating",
	"Self-directed",
	"Self-disciplined",
	"Self-doubting",
	"Self-effacing",
	"Self-giving",
	"Self-indulgent",
	"Self-reliant",
	"Self-righteous",
	"Self-satisfied",
	"Self-serving",
	"Self-sufficient",
	"Selfish",
	"Selfless",
	"Senile",
	"Sensitive",
	"Sensual",
	"Sentimental",
	"Serene",
	"Serious",
	"Servile",
	"Settled",
	"Sexual",
	"Shallow",
	"Shameless",
	"Sharp-tongued",
	"Sheepish",
	"Shiftless",
	"Shifty",
	"Short-tempered",
	"Shrewd",
	"Shy",
	"Silent",
	"Silly",
	"Simple",
	"Sincere",
	"Skeptical",
	"Skillful",
	"Sleazy",
	"Sloppy",
	"Slovenly",
	"Slow",
	"Sluggish",
	"Sly",
	"Smooth",
	"Sneaky",
	"Snobbish",
	"Sociable",
	"Soft",
	"Soft-spoken",
	"Solemn",
	"Solitary",
	"Solution-oriented",
	"Sophisticated",
	"Sore",
	"Sorrowful",
	"Sorry",
	"Sour",
	"Spendthrift",
	"Spiritual",
	"Spiteful",
	"Spoiled",
	"Spontaneous",
	"Spunky",
	"Squeamish",
	"Stable",
	"Staid",
	"Startled",
	"Stately",
	"Static",
	"Steadfast",
	"Steady",
	"Sterile",
	"Stern",
	"Stimulating",
	"Stingy",
	"Stoic",
	"Stolid",
	"Straight-laced",
	"Straightforward",
	"Stressed-out",
	"Strict",
	"Strident",
	"Strong-willed",
	"Stubborn",
	"Studious",
	"Stunned",
	"Stupefied",
	"Stupid",
	"Suave",
	"Submissive",
	"Subtle",
	"Succinct",
	"Suffering",
	"Sulky",
	"Sullen",
	"Sultry",
	"Supercilious",
	"Superstitious",
	"Supportive",
	"Sure",
	"Surly",
	"Suspicious",
	"Sweet",
	"Sycophantic",
	"Sympathetic",
	"Systematic",
	"Taciturn",
	"Tactful",
	"Tactless",
	"Talented",
	"Talkative",
	"Tardy",
	"Tasteful",
	"Temperamental",
	"Temperate",
	"Tempted",
	"Tenacious",
	"Tense",
	"Tenuous",
	"Terrible",
	"Terrified",
	"Testy",
	"Thankful",
	"Thankless",
	"Thorough",
	"Thoughtful",
	"Thoughtless",
	"Threatened",
	"Threatening",
	"Thrifty",
	"Thrillseeker",
	"Tight",
	"Time-driven",
	"Timid",
	"Tired",
	"Tireless",
	"Tiresome",
	"Toadying",
	"Tolerant",
	"Touchy",
	"Tough",
	"Traditional",
	"Traitorous",
	"Tranquil",
	"Treacherous",
	"Treasonous",
	"Tricky",
	"Troubled",
	"Trusting",
	"Trustworthy",
	"Truthful",
	"Tyrannical",
	"Unappreciative",
	"Unapproachable",
	"Unassuming",
	"Unbending",
	"Unbiased",
	"Uncaring",
	"Uncommitted",
	"Uncommunicative",
	"Unconcerned",
	"Uncontrolled",
	"Unconventional",
	"Uncooperative",
	"Uncouth",
	"Undependable",
	"Understanding",
	"Undisciplined",
	"Uneasy",
	"Unenthusiastic",
	"Unexacting",
	"Unfeeling",
	"Unfocused",
	"Unforgiving",
	"Unfriendly",
	"Ungrateful",
	"Unhappy",
	"Unhelpful",
	"Uninhibited",
	"Unkind",
	"Unmotivated",
	"Unpredictable",
	"Unprejudiced",
	"Unpretentious",
	"Unreasonable",
	"Unreceptive",
	"Unreliable",
	"Unresponsive",
	"Unrestrained",
	"Unruly",
	"Unscrupulous",
	"Unselfish",
	"Unsentimental",
	"Unshakeable",
	"Unsure",
	"Unsuspecting",
	"Unsuspicious",
	"Unsympathetic",
	"Unusual",
	"Unwilling",
	"Unworried",
	"Upbeat",
	"Upset",
	"Uptight",
	"Useful",
	"Utilitarian",
	"Vacant",
	"Vague",
	"Vain",
	"Valiant",
	"Valorous",
	"Vehement",
	"Vengeful",
	"Venomous",
	"Venturesome",
	"Verbose",
	"Versatile",
	"Vicious",
	"Vigilant",
	"Vigorous",
	"Vindictive",
	"Violent",
	"Virtuous",
	"Visual",
	"Vital",
	"Vivacious",
	"Volatile",
	"Voracious",
	"Vulgar",
	"Vulnerable",
	"Wanton",
	"Warm",
	"Wary",
	"Wasteful",
	"Watchful",
	"Weary",
	"Weepy",
	"Welcoming",
	"Whimsical",
	"Wholesome",
	"Wild",
	"Willful",
	"Willing",
	"Wishy-washy",
	"Withdrawn",
	"Witty",
	"Worldly",
	"Worried",
	"Worshipful",
	"Worthless",
	"Wretched",
	"Xenophobic",
	"Youthful",
	"Zany",
	"Zealous"
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

function getSystemCargos(elem) {
	var cargos = [];

	cargos = cargos.concat(generateMajorCargos(elem));
	cargos = cargos.concat(generateMinorCargos(elem));
	cargos = cargos.concat(generateIncidentalCargos(elem));

	return cargos
}

function numberCargos(elem, type) {
	var result = 0;
	var drm = 0;
	switch(elem.port) {
		case 'C':
			drm = -1;
			break;
		case 'D':
			drm = -2;
			break;
		case 'E':
			drm = -4;
			break;
		case 'X':
			drm = -8;
			break;
	}
	switch(elem.population) {
		case 1:
			if(type.includes('major') || type.includes('minor')) {
				result = roll(6) - 4 + drm;
			} else {
				result = 0;
			}
			break;
		case 2:
			if(type.includes('major')) {
				result = roll(6) - 2 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) - 1 + drm;
			} else {
				result = 0;
			}
			break;
		case 3:
			if(type.includes('major')) {
				result = roll(6) - 1 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + drm;
			} else {
				result = 0;
			}
			break;
		case 4:
			if(type.includes('major')) {
				result = roll(6) + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 1 + drm;
			} else {
				result = 0;
			}
			break;
		case 5:
			if(type.includes('major')) {
				result = roll(6) + 1 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 2 + drm;
			} else {
				result = 0;
			}
			break;
		case 6:
			if(type.includes('major')) {
				result = roll(6) + 2 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 3 + drm;
			} else {
				result = roll(6) - 3 + drm;
			}
			break;
		case 7:
			if(type.includes('major')) {
				result = roll(6) + 3 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 4 + drm;
			} else {
				result = roll(6) - 3 + drm;
			}
			break;
		case 8:
			if(type.includes('major')) {
				result = roll(6) + 4 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 5 + drm;
			} else {
				result = roll(6) - 2 + drm;
			}
			break;
		case 9:
			if(type.includes('major')) {
				result = roll(6) + 5 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 6 + drm;
			} else {
				result = roll(6) - 2 + drm;
			}
			break;
		case 10:
			if(type.includes('major')) {
				result = roll(6) + 6 + drm;
			} else if(type.includes('minor')) {
				result = roll(6) + 7 + drm;
			} else {
				result = roll(6) + drm;
			}
			break;
	}
	if(result < 0) { result = 0; }
	return result;
}

function generateMajorCargos(elem) {
	var num = numberCargos(elem, 'major');
	var cargos = [];
	for(var i = 0; i < num; i++) {
		cargos.push(generateCargo(elem, roll(6) + 10));
	}
	return cargos;
}

function generateMinorCargos(elem) {
	var num = numberCargos(elem, 'minor');
	var cargos = [];
	for(var i = 0; i < num; i++) {
		cargos.push(generateCargo(elem, roll(6) + 5));
	}
	return cargos;
}

function generateIncidentalCargos(elem) {
	var num = numberCargos(elem, 'incidental');
	var cargos = [];
	for(var i = 0; i < num; i++) {
		cargos.push(generateCargo(elem, roll(6)));
	}
	return cargos;
}

function generateCargo(elem, size) {
	if((roll(6) + roll(6)) < 7) {
		// freight
		if((roll(6) + roll(6)) < 9) {
			// short haul contract
			var distance = (roll(6) + 1);
			return 'Freight: ' + size + ' tons at ' + (size * 1000 + distance * 250) + 'cr, destination ' + distance + ' pc away';
		} else {
			// long haul contract
			var distance = (roll(6) + roll(6) + 1);
			return 'Freight: ' + size + ' tons at ' + (size * 1000 + distance * 400) + 'cr, destination ' + distance + ' pc away';
		}
	} else {
		// cargo
		var words = elem.remarks.trim().split(' ');
		var type = words[rand(words.length)];
		switch(type) {
			case "Ag":
				return 'Cargo: ' + size + ' tons of ' + generateAgCargo(elem);
			case "NI":
				return 'Cargo: ' + size + ' tons of ' + generateNiCargo(elem);
			case "Wa": case "Ri":
				return 'Cargo: ' + size + ' tons of ' + generateWaCargo(elem);
			case "In":
				return 'Cargo: ' + size + ' tons of ' + generateInCargo(elem);
			case "As": case "Va": case "De": case "Na":
				return 'Cargo: ' + size + ' tons of ' + generateVaCargo(elem);
			default: // case "Ba": case "Fl": case "Hi": case "IC": case "Lo": case "Po": 
				return 'Cargo: ' + size + ' tons of ' + generateBaCargo(elem);
		}
	}
}

function generateAgCargo(elem) {
	var die = roll(6) + roll(6);
	if(elem.government >= 9) { die++; }
	if(elem.law >= 9) { die++; }

	if(die < 4) {
		return getNaturalResource(0);
	} else if(die < 7) {
		return getNaturalResource(1);
	} else if(die < 9) {
		return getProcessedResource(1);
	} else if(die < 11) {
		return getManufacturedGood();
	} else {
		return getNovelties();
	}
}

function generateNiCargo(elem) {
	var die = roll(6) + roll(6);
	if(elem.government >= 9) { die++; }
	if(elem.law >= 9) { die++; }
	if(elem.remarks.includes('Ba')) { die -= 5 }

	if(die < 7) {
		return getNaturalResource(0);
	} else if(die < 8) {
		return getProcessedResource(0);
	} else if(die < 11) {
		return getManufacturedGood();
	} else {
		return getNovelties();
	}
}

function generateWaCargo(elem) {
	var die = roll(6) + roll(6);
	if(elem.government >= 9) { die++; }
	if(elem.law >= 9) { die++; }
	if(elem.population >= 9) { die++; }

	if(die < 6) {
		return getNaturalResource(0);
	} else if(die < 8) {
		return getProcessedResource(0);
	} else if(die < 10) {
		return getManufacturedGood();
	} else {
		return getNovelties();
	}
}

function generateInCargo(elem) {
	var die = roll(6) + roll(6);
	if(elem.government >= 9) { die++; }
	if(elem.law >= 9) { die++; }

	if(die < 4) {
		return getNaturalResource(0);
	} else if(die < 6) {
		return getProcessedResource(0);
	} else if(die < 11) {
		return getManufacturedGood();
	} else {
		return getNovelties();
	}
}

function generateVaCargo(elem) {
	var die = roll(6) + roll(6);
	if(elem.government >= 9) { die++; }
	if(elem.law >= 9) { die++; }
	if(elem.population >= 9) { die++; }
	if(elem.remarks.includes('Ba')) { die -= 5 }

	if(die < 7) {
		return getNaturalResource(-1);
	} else if(die < 8) {
		return getProcessedResource(-1);
	} else if(die < 11) {
		return getManufacturedGood();
	} else {
		return getNovelties();
	}
}

function generateBaCargo(elem) {
	var die = roll(6) + roll(6);
	if(elem.government >= 9) { die++; }
	if(elem.law >= 9) { die++; }
	if(elem.population >= 9) { die++; }
	if(elem.remarks.includes('Ba')) { die -= 7 }

	if(die < 5) {
		return getNaturalResource();
	} else if(die < 6) {
		return getInformation();
	} else if(die < 9) {
		return getManufacturedGood();
	} else if(die < 11) {
		return getManufacturedGood();
	} else {
		return getNovelties();
	}
}

function decodeCargoClass(cargo) {
	var result = cargo.name;
	
	if( cargo.corrosive ||
		cargo.flammable ||
		cargo.explosive ||
		cargo.radioactive ||
		cargo.perishable ||
		cargo.fragile ||
		cargo.living
	) {
		result += ' (';
		if(cargo.corrosive) { result += 'corrosive '; }
		if(cargo.flammable) { result += 'flammable '; }
		if(cargo.explosive) { result += 'explosive '; }
		if(cargo.radioactive) { result += 'radioactive '; }
		if(cargo.perishable) { result += 'perishable '; }
		if(cargo.fragile) { result += 'fragile '; }
		if(cargo.living) { result += 'living '; }
		result = result.trim();
		result += ')';
	}

	return result;
}

function getNaturalResource(type) {
	var die = 0;
	var result = {
		name: '',
		corrosive: false,
		flammable: false,
		explosive: false,
		radioactive: false,
		perishable: false,
		fragile: false,
		living: false
	}
	if(type < 0) {
		die = roll(3) * 10 + roll(6);
	} else if(type < 1) {
		die = roll(6) * 10 + roll(6);
	} else {
		die = (roll(3) + 3) * 10 + roll(6);
	}
	
	switch(die) {
		case 11: case 12: case 13:
			result.name = 'Ferrous Metal Ore';
			break;
		case 14: case 15:
			result.name = 'Nonmetal Ore'
			if((roll(6) + roll(6)) >= 10) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 12) { result.explosive = true; }
			break;
		case 16: case 21:
			result.name = 'Radioactive Ore';
			if((roll(6) + roll(6)) >= 6) { result.radioactive = true; }
			break;
		case 22: case 23:
			result.name = 'Nonferrous Ore';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.radioactive = true; }
			break;
		case 24: case 25: case 26:
			result.name = 'Raw Crystals';
			break;
		case 31:
			result.name = 'Raw Precious Gems';
			break;
		case 32: case 33:
			result.name = 'Nitrogen Compounds';
			if((roll(6) + roll(6)) >= 10) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.explosive = true; }
			break;
		case 34: case 35: case 36:
			result.name = 'Raw Hydrocarbons';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 11) { result.explosive = true; }
			break;
		case 41: case 42:
			result.name = 'Plants (wood)';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 43:
			result.name = 'Plants (bales)';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 44:
			result.name = 'Plants (fibers)';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 6) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 45:
			result.name = 'Plants (herbs)';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 6) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.radioactive = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 46:
			result.name = 'Wild Plants';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 6) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			result.living = true;
			break;
		case 51: case 52: case 53: case 54:
			result.name = 'Food Plants';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.flammable = true; }
			result.living = true;
			break;
		case 55: case 56:
			result.name = 'Animals';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			result.living = true;
			break;
		case 61: case 62: case 63: case 64:
			result.name = 'Livestock';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			result.living = true;
			break;
		case 65:
			result.name = 'Rare Plants';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.flammable = true; }
			result.living = true;
			break;
		case 66:
			result.name = 'Rare Animals';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			result.living = true;
			break;
		default:
			result.name = 'Obfuscated';
			break;
	}
	
	return decodeCargoClass(result);
}

function getManufacturedGood() {
	var die = roll(6) * 10 + roll(6);
	var result = {
		name: '',
		corrosive: false,
		flammable: false,
		explosive: false,
		radioactive: false,
		perishable: false,
		fragile: false,
		living: false
	}

	switch(die) {
		case 11:
			result.name = 'Pharmaceuticals';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 12:
			result.name = 'Pharmaceuticals';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 13:
			result.name = 'Preserved Foods';
			if((roll(6) + roll(6)) >= 9) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 14: case 15:
			result.name = 'Spices';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 16:
			result.name = 'Gourmet Foods';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 21:
			result.name = 'Flavored Water';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 12) { result.perishable = true; }
			break;
		case 22:
			result.name = 'Alcoholic Beverages';
			if((roll(6) + roll(6)) >= 8) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 23:
			result.name = 'Alcoholic Beverages';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 8) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 24:
			result.name = 'Consumable Milks';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 8) { result.perishable = true; }
			break;
		case 25:
			result.name = 'Consumable Nectars';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 26:
			result.name = 'Consumable Syrups';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 31:
			result.name = 'Consumable Teas';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 12) { result.perishable = true; }
			break;
		case 32:
			result.name = 'Exotic Fluids';
			if((roll(6) + roll(6)) >= 8) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 33:
			result.name = 'Aromatics';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 34:
			result.name = 'Aromatics';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 35: case 36:
			result.name = 'Disposables';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			break;
		case 41: case 42:
			result.name = 'Clothing';
			if((roll(6) + roll(6)) >= 12) { result.fragile = true; }
			break;
		case 43:
			result.name = 'Protective Gear';
			if((roll(6) + roll(6)) >= 9) { result.fragile = true; }
			break;
		case 44:
			result.name = 'Weapons';
			if((roll(6) + roll(6)) >= 9) { result.fragile = true; }
			break;
		case 45:
			result.name = 'Weapons';
			if((roll(6) + roll(6)) >= 9) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 11) { result.explosive = true; }
			break;
		case 46:
			result.name = 'Weapons';
			if((roll(6) + roll(6)) >= 9) { result.fragile = true; }
			if((roll(6) + roll(6)) >= 9) { result.radioactive = true; }
			break;
		case 51:
			result.name = 'Metal Parts';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			break;
		case 52:
			result.name = 'Electronic Parts';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			break;
		case 53:
			result.name = 'High Tech Parts';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			break;
		case 54: case 55:
			result.name = 'Tools';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			break;
		case 56:
			result.name = 'Vehicles';
			if((roll(6) + roll(6)) >= 12) { result.fragile = true; }
			break;
		case 61:
			result.name = 'Entertainment Equipment';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			break;
		case 62:
			result.name = 'Computers';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			break;
		case 63: case 64:
			result.name = 'Robots';
			if((roll(6) + roll(6)) >= 11) { result.fragile = true; }
			break;
		case 65:
			result.name = 'Appliances';
			if((roll(6) + roll(6)) >= 10) { result.fragile = true; }
			break;
		case 66:
			result.name = 'Furniture';
			if((roll(6) + roll(6)) >= 19) { result.fragile = true; }
			break;
		default:
			result.name = 'Obfuscated';
			break;
	}
	
	return decodeCargoClass(result);
}

function getProcessedResource(type) {
	var die = 0;
	var result = {
		name: '',
		corrosive: false,
		flammable: false,
		explosive: false,
		radioactive: false,
		perishable: false,
		fragile: false,
		living: false
	}
	if(type < 0) {
		die = roll(3) * 10 + roll(6);
	} else if(type < 1) {
		die = roll(6) * 10 + roll(6);
	} else {
		die = (roll(3) + 3) * 10 + roll(6);
	}
	
	switch(die) {
		case 11:
			result.name = 'Iron';
			break;
		case 12: case 13: case 14:
			result.name = 'Steel';
			break;
		case 15:
			result.name = 'Aluminum';
			break;
		case 16:
			result.name = 'Aluminum';
			if((roll(6) + roll(6)) >= 6) { result.radioactive = true; }
			break;
		 case 21:
			result.name = 'Copper';
			if((roll(6) + roll(6)) >= 6) { result.radioactive = true; }
			break;
		case 22:
			result.name = 'Tin';
			if((roll(6) + roll(6)) >= 11) { result.radioactive = true; }
			break;
		case 23:
			result.name = 'Zinc';
			if((roll(6) + roll(6)) >= 11) { result.radioactive = true; }
			break;
		case 24:
			result.name = 'Special Alloys';
			if((roll(6) + roll(6)) >= 12) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.flammable = true; }
			break;
		case 25:
			result.name = 'Gold';
			break;
		case 26:
			result.name = 'Silver';
			break;
		case 31:
			result.name = 'Precious Metals';
			break;
		case 32:
			result.name = 'Nonmetals';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 10) { result.explosive = true; }
			break;
		case 33:
			result.name = 'Crystals';
			break;
		case 34:
			result.name = 'Radioactives';
			if((roll(6) + roll(6)) >= 5) { result.radioactive = true; }
			break;
		case 35:
			result.name = 'Rare Earths';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 12) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 12) { result.radioactive = true; }
			break;
		case 36:
			result.name = 'Isotopes';
			if((roll(6) + roll(6)) >= 3) { result.radioactive = true; }
			break;
		case 41: case 42:
			result.name = 'Grain';
			if((roll(6) + roll(6)) >= 6) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 4) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 43:
			result.name = 'Vegetables';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 8) { result.perishable = true; }
			break;
		case 44:
			result.name = 'Fruit';
			if((roll(6) + roll(6)) >= 11) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 8) { result.perishable = true; }
			break;
		case 45:
			result.name = 'Meat';
			if((roll(6) + roll(6)) >= 12) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 5) { result.perishable = true; }
			break;
		case 46:
			result.name = 'Herbs';
			if((roll(6) + roll(6)) >= 12) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 10) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 51:
			result.name = 'Plant Compounds';
			if((roll(6) + roll(6)) >= 10) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 10) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 52:
			result.name = 'Animal Compounds';
			if((roll(6) + roll(6)) >= 10) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 10) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 53: case 54:
			result.name = 'Petrochemicals';
			if((roll(6) + roll(6)) >= 10) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 7) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 8) { result.explosive = true; }
			break;
		case 55:
			result.name = 'Textiles';
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 11) { result.perishable = true; }
			break;
		case 56:
			result.name = 'Explosives';
			if((roll(6) + roll(6)) >= 12) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 3) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 10) { result.perishable = true; }
			break;
		case 61: case 62:
			result.name = 'Polymers';
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			break;
		case 63:
			result.name = 'Fertilizers';
			if((roll(6) + roll(6)) >= 10) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 9) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 64:
			result.name = 'Plants (lumber)';
			if((roll(6) + roll(6)) >= 12) { result.corrosive = true; }
			if((roll(6) + roll(6)) >= 6) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.explosive = true; }
			if((roll(6) + roll(6)) >= 9) { result.perishable = true; }
			break;
		case 65: case 66:
			result.name = 'Plants (paper)';
			if((roll(6) + roll(6)) >= 5) { result.flammable = true; }
			if((roll(6) + roll(6)) >= 12) { result.perishable = true; }
			break;
		default:
			result.name = 'Obfuscated';
			break;
	}
	
	return decodeCargoClass(result);
}

function getInformation() {
	var die = roll(6) * 10 + roll(6);
	switch(die) {
		case 11:
			return 'Writings (paper)';
		case 12:
			return 'Writings (data)';
		case 13: case 14:
			return '2D Still Pictures';
		case 15: case 16:
			return 'Computer Software';
		case 21: case 22:
			return 'Robotic Software';
		case 23: case 24:
			return 'Starship Software';
		case 25: case 26:
			return '3D Still Pictures';
		case 31:
			return 'Sculpture';
		case 32:
			return 'Paintings';
		case 33:
			return 'Exotic Artforms';
		case 34:
			return 'Audio Recordings';
		case 35:
			return '2D Video Recordings';
		case 36:
			return '3D Video Recordings';
		case 41:
			return 'Raw Data (paper)';
		case 42: case 43:
			return 'Raw Data (data)';
		case 44: case 45:
			return 'Currency (valuables)';
		case 46: case 51: case 52: case 53:
			return 'Currency (paper)';
		case 54: case 55: case 56:
			return 'Records (paper)';
		case 61: case 62: case 63: case 64: case 65: case 66:
			return 'Records (data)';
		default:
			return 'Obfuscated';
	}
}

function getNovelties() {
	var die = roll(6) * 10 + roll(6);
	switch(die) {
		case 11:
			return 'New Natural Resources';
		case 12:
			return 'New Processed Resources';
		case 13: case 14:
			return 'New Manufactured Goods';
		case 15: case 16:
			return 'New Information';
		case 21: case 22: case 23: case 24: case 25: case 26: case 31: case 32:
			return 'Uniques';
		case 33: case 34:
			return 'Artifacts';
		case 35: case 36: case 41: case 42:
			return 'Antiques';
		case 43: case 44: case 45: case 46: case 51: case 52: case 53:
			return 'Original Information';
		case 54: case 55: case 56:
			return 'Fad Information';
		case 61: case 62:
			return 'Fad Manufactured Goods';
		case 63: case 64: case 65: case 66:
			return 'Prototype Manufactured Goods';
		default:
			return 'Obfuscated';
	}
}

function generatePatron() {
	if(roll(6) < 4) {
		return generatePatronOne() + ' Missions: ' + getPatronMissions();
	} else {
		return generatePatronTwo() + ' Missions: ' + getPatronMissions();
	}
}

function generatePatronOne() {
	var die = roll(6) * 10 + roll(6);
	switch(die) {
		case 11:
			return 'Arsonist' + ' (' + getPatronAttitude(-1) + ')';
		case 12:
			return 'Cutthroat' + ' (' + getPatronAttitude(-2) + ')';
		case 13:
			return 'Assassin' + ' (' + getPatronAttitude(0) + ')';
		case 14:
			return 'Hijacker' + ' (' + getPatronAttitude(-2) + ')';
		case 15:
			return 'Smuggler' + ' (' + getPatronAttitude(0) + ')';
		case 16:
			return 'Terrorist' + ' (' + getPatronAttitude(-2) + ')';
		case 21:
			return 'Crewmember' + ' (' + getPatronAttitude(0) + ')';
		case 22:
			return 'Peasant' + ' (' + getPatronAttitude(1) + ')';
		case 23:
			return 'Rumor' + ' (' + getPatronAttitude(0) + ')';
		case 24:
			return 'Clerk' + ' (' + getPatronAttitude(0) + ')';
		case 25:
			return 'Soldier' + ' (' + getPatronAttitude(2) + ')';
		case 26:
			return 'Shopkeeper' + ' (' + getPatronAttitude(1) + ')';
		case 31:
			return 'Shipowner' + ' (' + getPatronAttitude(0) + ')';
		case 32:
			return 'Tourist' + ' (' + getPatronAttitude(0) + ')';
		case 33:
			return 'Merchant' + ' (' + getPatronAttitude(1) + ')';
		case 34:
			return 'Police Officer' + ' (' + getPatronAttitude(-1) + ')';
		case 35:
			return 'Scout' + ' (' + getPatronAttitude(0) + ')';
		case 36:
			return 'Rumor' + ' (' + getPatronAttitude(-4) + ')';
		case 41:
			return 'Diplomat' + ' (' + getPatronAttitude(2) + ')';
		case 42:
			return 'Courier' + ' (' + getPatronAttitude(2) + ')';
		case 43:
			return 'Spy' + ' (' + getPatronAttitude(0) + ')';
		case 44:
			return 'Scholar' + ' (' + getPatronAttitude(2) + ')';
		case 45:
			return 'Governor' + ' (' + getPatronAttitude(1) + ')';
		case 46:
			return 'Administrator' + ' (' + getPatronAttitude(1) + ')';
		case 51:
			return 'Mercenary' + ' (' + getPatronAttitude(-1) + ')';
		case 52:
			return 'Naval Officer' + ' (' + getPatronAttitude(1) + ')';
		case 53:
			return 'Marine Officer' + ' (' + getPatronAttitude(2) + ')';
		case 54:
			return 'Scout' + ' (' + getPatronAttitude(2) + ')';
		case 55:
			return 'Army Officer' + ' (' + getPatronAttitude(1) + ')';
		case 56:
			return 'Mercenary' + ' (' + getPatronAttitude(1) + ')';
		case 61:
			return 'Noble' + ' (' + getPatronAttitude(0) + ')';
		case 62:
			return 'Playboy' + ' (' + getPatronAttitude(0) + ')';
		case 63:
			return 'Avenger' + ' (' + getPatronAttitude(0) + ')';
		case 64:
			return 'Emigre' + ' (' + getPatronAttitude(1) + ')';
		case 65:
			return 'Speculator' + ' (' + getPatronAttitude(-1) + ')';
		case 66:
			return 'Rumor' + ' (' + getPatronAttitude(2) + ')';
	}
	return 'Unknown';
}

function generatePatronTwo() {
	var die = roll(6) * 10 + roll(6);
	switch(die) {
		case 11:
			return 'Naval Officer' + ' (' + getPatronAttitude(-1) + ')';
		case 12:
			return 'Scout Official' + ' (' + getPatronAttitude(1) + ')';
		case 13:
			return 'Marine Officer' + ' (' + getPatronAttitude(-1) + ')';
		case 14:
			return 'Hunter' + ' (' + getPatronAttitude(2) + ')';
		case 15:
			return 'Port Warden' + ' (' + getPatronAttitude(0) + ')';
		case 16:
			return 'Naval Officer' + ' (' + getPatronAttitude(0) + ')';
		case 21:
			return 'Reporter' + ' (' + getPatronAttitude(0) + ')';
		case 22:
			return 'Technician' + ' (' + getPatronAttitude(0) + ')';
		case 23:
			return 'Doctor' + ' (' + getPatronAttitude(1) + ')';
		case 24:
			return 'Rogue' + ' (' + getPatronAttitude(1) + ')';
		case 25:
			return 'Noble' + ' (' + getPatronAttitude(0) + ')';
		case 26:
			return 'Government Official' + ' (' + getPatronAttitude(3) + ')';
		case 31:
			return 'Barbarian' + ' (' + getPatronAttitude(2) + ')';
		case 32:
			return 'Scout Pilot' + ' (' + getPatronAttitude(1) + ')';
		case 33:
			return 'Pirate' + ' (' + getPatronAttitude(0) + ')';
		case 34:
			return 'Researcher' + ' (' + getPatronAttitude(1) + ')';
		case 35:
			return 'Writer' + ' (' + getPatronAttitude(2) + ')';
		case 36:
			return 'Professor' + ' (' + getPatronAttitude(3) + ')';
		case 41:
			return 'Criminal Boss' + ' (' + getPatronAttitude(0) + ')';
		case 42:
			return 'Scientist' + ' (' + getPatronAttitude(0) + ')';
		case 43:
			return 'Belter' + ' (' + getPatronAttitude(1) + ')';
		case 44:
			return 'Architect' + ' (' + getPatronAttitude(1) + ')';
		case 45:
			return 'Steward' + ' (' + getPatronAttitude(0) + ')';
		case 46:
			return 'Financier' + ' (' + getPatronAttitude(0) + ')';
		case 51:
			return 'Navigator' + ' (' + getPatronAttitude(1) + ')';
		case 52:
			return 'Swindler' + ' (' + getPatronAttitude(0) + ')';
		case 53:
			return 'Broker' + ' (' + getPatronAttitude(-1) + ')';
		case 54:
			return 'Arms Broker' + ' (' + getPatronAttitude(-1) + ')';
		case 55:
			return 'Doctor' + ' (' + getPatronAttitude(1) + ')';
		case 56:
			return 'Pilot' + ' (' + getPatronAttitude(-1) + ')';
		case 61:
			return 'Merchant' + ' (' + getPatronAttitude(-2) + ')';
		case 62:
			return 'Rogue' + ' (' + getPatronAttitude(1) + ')';
		case 63:
			return 'Embezzler' + ' (' + getPatronAttitude(0) + ')';
		case 64:
			return 'Belter' + ' (' + getPatronAttitude(-2) + ')';
		case 65:
			return 'Bureaucrat' + ' (' + getPatronAttitude(2) + ')';
		case 66:
			return 'Diplomat' + ' (' + getPatronAttitude(0) + ')';
	}
	return 'Unknown';
}

function getPatronAttitude(drm) {
	var die = roll(6) + roll(6) + drm;
	
	if(die < 4) {
		return 'cheat';
	} else if(die < 6) {
		return 'swindle';
	} else if(die < 8) {
		return 'indifferent';
	} else {
		return 'honest';
	}
}

function getPatronMissions() {
	var die = roll(3) + 1;
	var result = '';
	for(var i = 0; i < die; i++) {
		var found = false;
		while(!found) {
			var mission = getPatronMission();
			if(!result.includes(mission)) {
				found = true;
				if(result.length < 1) {
					result += mission;
				} else {
					result += ', ' + mission;
				}
			}
		}
	}
	return result;
}

function getPatronMission() {
	var die = roll(6) * 10 + roll(6);
	switch(die) {
		case 11:
			return 'transport self';
		case 12:
			return 'transport others';
		case 13:
			return 'transport cargo';
		case 14:
			return 'pick up others';
		case 15:
			return 'pick up cargo';
		case 16:
			return 'vehicle crew';
		case 21:
			return 'capture animal';
		case 22:
			return 'rescue another';
		case 23:
			return 'find lost cargo';
		case 24:
			return 'find lost person';
		case 25:
			return 'surveillance';
		case 26:
			return 'infiltration';
		case 31:
			return 'act as agent';
		case 32:
			return 'guard self';
		case 33:
			return 'guard others';
		case 34:
			return 'guard place';
		case 35:
			return 'guard cargo';
		case 36:
			return 'guard vehicle';
		case 41:
			return 'provide opinion';
		case 42:
			return 'investigate mystery';
		case 43:
			return 'join expedition';
		case 44:
			return 'smuggling';
		case 45:
			return 'sabotage';
		case 46:
			return 'manage assets';
		case 51:
			return 'kill another';
		case 52:
			return 'steal cargo';
		case 53:
			return 'destroy cargo';
		case 54:
			return 'steal vehicle';
		case 55:
			return 'provide expert skills';
		case 56:
			return 'frame others';
		case 61:
			return 'coerce others';
		case 62:
			return 'perform repairs';
		case 63:
			return 'aid in speculation';
		case 64:
			return 'participate in military action';
		case 65:
			return 'find place';
		case 66:
			return 'act as guides';
	}
	return 'Unknown';
}

function getNPCTrait() {
	return TRAITS[rand(TRAITS.length)];
}
