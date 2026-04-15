const alleFragen = [
    // --- SCHWIERIGKEIT: LEICHT (difficulty: 0) ---
    {
        q: "Wer ist der Koch der Strohhutbande?",
        options: ["Zorro", "Sanji", "Chopper", "Franky"],
        correct: 1,
        tip: "Er kämpft nur mit seinen Beinen.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Sanji"
    },
    {
        q: "Wie lautet der große Traum von Monkey D. Ruffy?",
        options: ["König der Piraten zu werden", "Den All Blue zu finden", "Der beste Schwertkämpfer zu werden", "Eine komplette Weltkarte zu zeichnen"],
        correct: 0,
        tip: "Es ist das ultimative Ziel auf der Grandline, welches eng mit Gol D. Roger verbunden ist.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Monkey_D._Ruffy"
    },
    {
        q: "In welchem der vier großen Ozeane beginnt die Geschichte von One Piece?",
        options: ["North Blue", "South Blue", "West Blue", "East Blue"],
        correct: 3,
        tip: "Dieser Ozean galt lange Zeit als das schwächste der vier Meere.",
        img: "",
        difficulty: 0,
        category: "Geografie",
        url: "https://opwiki.org/wiki/East_Blue"
    },
    {
        q: "Wie viele Schwerter benutzt Lorenor Zorro gleichzeitig in seinem Kampfstil?",
        options: ["Ein Schwert", "Zwei Schwerter", "Drei Schwerter", "Vier Schwerter"],
        correct: 2,
        tip: "Eines dieser Schwerter trägt er während eines ernsthaften Kampfes im Mund.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Lorenor_Zorro"
    },
    {
        q: "Welche Funktion erfüllt Nami in der Strohhutbande?",
        options: ["Köchin", "Navigatorin", "Ärztin", "Schiffszimmermann"],
        correct: 1,
        tip: "Sie hat die Aufgabe, das Schiff sicher über das tückische Meer der Grandline zu steuern.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Nami"
    },
    {
        q: "Welches körperliche Merkmal ist besonders typisch für Lysop?",
        options: ["Eine lange Nase", "Rote Haare", "Drei Augen", "Ein Holzbein"],
        correct: 0,
        tip: "Seine Optik ist stark an die Figur Pinocchio angelehnt, was gut zu seiner Eigenschaft als Lügner passt.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Lysop"
    },
    {
        q: "Welche strenge Regel hat Sanji beim Kämpfen?",
        options: ["Er kämpft nur mit den Händen", "Er kämpft nur mit den Beinen", "Er kämpft nicht gegen Männer", "Er weigert sich, Teufelskraftnutzer zu attackieren"],
        correct: 1,
        tip: "Er schont seine Hände, da ein Koch diese zum Zubereiten von Speisen in perfektem Zustand benötigt.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Sanji"
    },
    {
        q: "Welche Teufelsfrucht hat das Rentier Tony Chopper gegessen?",
        options: ["Gum-Gum-Frucht", "Mensch-Mensch-Frucht", "Rentier-Frucht", "Heil-Frucht"],
        correct: 1,
        tip: "Diese Zoan-Frucht verleiht ihm menschliche Intelligenz und die Fähigkeit zu sprechen.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Mensch-Mensch-Frucht"
    },
    {
        q: "Welche Teufelsfrucht hat Nico Robin gegessen?",
        options: ["Flora-Flora-Frucht", "Lese-Frucht", "Schatten-Frucht", "Faden-Frucht"],
        correct: 0,
        tip: "Diese Paramecia-Frucht erlaubt es ihr, ihre Körperteile wie Blumen auf allen Oberflächen wachsen zu lassen.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Flora-Flora-Frucht"
    },
    {
        q: "Mit welchem Getränk betreibt der Cyborg Franky seinen Körper und seine Waffen?",
        options: ["Wasser", "Cola", "Sake", "Milch"],
        correct: 1,
        tip: "Wenn ihm dieser Treibstoff ausgeht, ändert sich seine Persönlichkeit drastisch und er wird sehr träge.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Franky"
    },
    {
        q: "Wie lautet das charakteristische Lachen des Musikers Brook?",
        options: ["Shishishi", "Zehahaha", "Yohohoho", "Gurarara"],
        correct: 2,
        tip: "Dieses Lachen spiegelt seine fröhliche Natur wider, obwohl er nur aus Knochen besteht.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Brook"
    },
    {
        q: "Wie hieß das allererste eigene Segelschiff der Strohhutbande?",
        options: ["Thousand Sunny", "Oro Jackson", "Red Force", "Flying Lamb"],
        correct: 3,
        tip: "Es war ein Geschenk von Kaya und hatte den Kopf eines Schafes als Galionsfigur.",
        img: "",
        difficulty: 0,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Flying_Lamb"
    },
    {
        q: "Wie heißt das Schiff, welches Franky für die Strohhutbande in Water 7 baute?",
        options: ["Thousand Sunny", "Polar Tang", "Moby Dick", "Victoria Punk"],
        correct: 0,
        tip: "Die Galionsfigur ist ein stilisierter Löwenkopf, der aussieht wie eine Sonne.",
        img: "",
        difficulty: 0,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Thousand_Sunny"
    },
    {
        q: "Wie heißt die weltweite Währung, die in der Welt von One Piece genutzt wird?",
        options: ["Zeni", "Ryo", "Berry", "Gil"],
        correct: 2,
        tip: "Kopfgelder werden in dieser Währung ausgestellt.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Berry"
    },
    {
        q: "Wer ist der Adoptivbruder von Ruffy, der die Feuerfrucht gegessen hat?",
        options: ["Sabo", "Puma D. Ace", "Shanks", "Buggy"],
        correct: 1,
        tip: "Er war der Kommandant der 2. Division der Whitebeard-Piratenbande.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Puma_D._Ace"
    },
    {
        q: "Was schenkte Shanks dem kleinen Ruffy, bevor er das Dorf Foosha verließ?",
        options: ["Ein Schwert", "Eine Teufelsfrucht", "Seinen Strohhut", "Eine Schatzkarte"],
        correct: 2,
        tip: "Ruffy versprach, ihm diesen Gegenstand zurückzugeben, sobald er ein großer Pirat geworden ist.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Shanks"
    },
    {
        q: "Wer ist der Erfinder und Zeichner (Mangaka) von One Piece?",
        options: ["Masashi Kishimoto", "Akira Toriyama", "Eiichiro Oda", "Tite Kubo"],
        correct: 2,
        tip: "Er startete die Serie im Jahr 1997 im Weekly Shōnen Jump Magazin.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Eiichiro_Oda"
    },
    {
        q: "Welchen Beruf übt Ruffys Großvater, Monkey D. Garp, aus?",
        options: ["Vizeadmiral der Marine", "Anführer der Revolutionäre", "Kaiser der Meere", "Bürgermeister"],
        correct: 0,
        tip: "Er wird in der ganzen Welt als 'Held' bezeichnet, weil er unzählige Piraten gefangen hat.",
        img: "",
        difficulty: 0,
        category: "Marine",
        url: "https://opwiki.org/wiki/Monkey_D._Garp"
    },
    {
        q: "Welche Teufelsfrucht hat Buggy der Clown gegessen?",
        options: ["Trenn-Trenn-Frucht", "Clown-Frucht", "Unsichtbarkeits-Frucht", "Gum-Gum-Frucht"],
        correct: 0,
        tip: "Diese Frucht macht ihn immun gegen Schnittattacken, weshalb Zorro ihn nicht zerschneiden kann.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Trenn-Trenn-Frucht"
    },
    {
        q: "Wie lautet der höchste Rang innerhalb der regulären Marine (direkt unter dem Weltaristokraten und den 5 Weisen)?",
        options: ["Admiral", "Flottenadmiral", "Vizeadmiral", "Kommodore"],
        correct: 1,
        tip: "Senghok und später Akainu (Sakazuki) hatten diesen Posten inne.",
        img: "",
        difficulty: 0,
        category: "Marine",
        url: "https://opwiki.org/wiki/Marine"
    },
    {
        q: "Welchen inoffiziellen Titel trägt Mihawk Dulacre (Falkenauge)?",
        options: ["Stärkster Pirat", "Bester Schwertkämpfer der Welt", "König der Scharfschützen", "Schnellster Mann der Welt"],
        correct: 1,
        tip: "Er trägt das legendäre schwarze Schwert Yoru und zerschneidet damit ganze Schiffe.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Mihawk_Dulacre"
    },
    {
        q: "Wer ist der Vater von Monkey D. Ruffy?",
        options: ["Monkey D. Garp", "Gol D. Roger", "Shanks", "Monkey D. Dragon"],
        correct: 3,
        tip: "Er ist der Anführer der Revolutionäre und der meistgesuchte Mann der Welt.",
        img: "",
        difficulty: 0,
        category: "Revolutionäre",
        url: "https://opwiki.org/wiki/Monkey_D._Dragon"
    },
    {
        q: "In welchem Wüstenkönigreich regiert die Familie von Prinzessin Nefertari Vivi?",
        options: ["Dress Rosa", "Wano Kuni", "Alabasta", "Sakura"],
        correct: 2,
        tip: "Das Land litt stark unter einer Dürre, die von dem Samurai der Meere, Sir Crocodile, inszeniert wurde.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Alabasta"
    },
    {
        q: "Wie heißt das gefährlichste Meer der Welt, das von Piraten aus aller Welt befahren wird, um das One Piece zu finden?",
        options: ["Calm Belt", "All Blue", "Grandline", "Red Line"],
        correct: 2,
        tip: "Es ist ein Ozean, der sich wie ein Gürtel um die ganze Welt zieht und in zwei Hälften geteilt ist.",
        img: "",
        difficulty: 0,
        category: "Geografie",
        url: "https://opwiki.org/wiki/Grandline"
    },
    {
        q: "Welche Logia-Frucht hat der Marineoffizier Smoker gegessen?",
        options: ["Feuerfrucht", "Eisfrucht", "Qualmfrucht", "Sandfrucht"],
        correct: 2,
        tip: "Dadurch kann er seinen Körper in dichten Rauch verwandeln und Gegner fangen.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Qualmfrucht"
    },
    {
        q: "Wer war der Gründer und erste Kapitän der Sonnen-Piratenbande, bevor Jinbei übernahm?",
        options: ["Arlong", "Fisher Tiger", "Hody Jones", "Vander Decken"],
        correct: 1,
        tip: "Er befreite unzählige Sklaven, indem er das Heilige Land Mary Joa angriff.",
        img: "",
        difficulty: 0,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Fisher_Tiger"
    },
    {
        q: "Wie heißt der quacksalbernde Arzt, der Chopper als seinen Sohn ansah und ihm die Medizin näherbrachte?",
        options: ["Dr. Kuleha", "Dr. Bader", "Dr. Hogback", "Doc Q"],
        correct: 1,
        tip: "Er schenkte Chopper seinen charakteristischen rosa Hut.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Bader"
    },
    {
        q: "Wem gehörte ursprünglich das weiße Schwert 'Wado-Ichimonji', das Zorro in Erinnerung an ein Versprechen trägt?",
        options: ["Seinem Vater", "Koshiro", "Kuina", "Tashigi"],
        correct: 2,
        tip: "Sie war seine Kindheitsfreundin und die Einzige, die er im Dojo nie besiegen konnte.",
        img: "",
        difficulty: 0,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Kuina"
    },
    {
        q: "Wer rettete Sanji als Kind das Leben und brachte ihm das Kochen sowie seinen Kampfstil bei?",
        options: ["Rotfuß Jeff", "Ein Marine-Koch", "Käpt'n Creek", "Monkey D. Garp"],
        correct: 0,
        tip: "Er opferte sein eigenes Bein, damit Sanji nicht verhungert.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Jeff"
    },
    {
        q: "Wie heißt das Heimatdorf von Lysop, in dem er die 'Lysop-Piratenbande' gründete?",
        options: ["Foosha", "Kokos", "Shimotsuki", "Syrop"],
        correct: 3,
        tip: "Dort erzählte er dem kranken Mädchen Kaya jeden Tag erfundene Abenteuergeschichten.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Syrop"
    },
    {
        q: "Welche Geheimorganisation wurde von dem Samurai der Meere, Sir Crocodile, gegründet?",
        options: ["Germa 66", "Cipher Pol", "Barock-Firma", "Cross Guild"],
        correct: 2,
        tip: "Die männlichen Agenten dieser Organisation wurden mit Zahlen benannt (z.B. Mr. 1, Mr. 2).",
        img: "",
        difficulty: 0,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Barock-Firma"
    },
    {
        q: "Wie heißt Namis Heimatdorf, das jahrelang von der Arlong-Piratenbande tyrannisiert wurde?",
        options: ["Kokos", "Loguetown", "Orange", "Konomi"],
        correct: 0,
        tip: "Ihre Ziehmutter Bellemere besaß dort eine Mandarinenplantage.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Kokos"
    },
    {
        q: "Wie heißt das seltene Mineral, das dieselbe Energie wie das Meer ausstrahlt und Teufelskraftnutzer schwächt?",
        options: ["Wapometall", "Seestein", "Dial", "Adam-Holz"],
        correct: 1,
        tip: "Die Marine nutzt es unter anderem für Handschellen und um die Unterseite ihrer Schiffe zu beschlagen.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Seestein"
    },
    {
        q: "Wie heißt das berüchtigte Hochsicherheitsgefängnis der Weltregierung?",
        options: ["Enies Lobby", "Marineford", "Mary Joa", "Impel Down"],
        correct: 3,
        tip: "Es ist ein Unterwassergefängnis, das in verschiedene 'Höllen'-Ebenen unterteilt ist.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Impel_Down"
    },
    {
        q: "Welche Insel der Weltregierung, auch bekannt als die Justizinsel, greift die Strohhutbande an, um Robin zu retten?",
        options: ["Enies Lobby", "Punk Hazard", "Marineford", "Sabaody Archipel"],
        correct: 0,
        tip: "Die Insel hat ein riesiges Loch im Ozeanwasserfall und dort scheint niemals die Sonne unterzugehen.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Enies_Lobby"
    },
    {
        q: "Wie lautet der wahre Geburtsname von Franky?",
        options: ["Iceburg", "Cutty Flam", "Tom", "Kokoro"],
        correct: 1,
        tip: "Er änderte seinen Namen auf Anraten von Iceburg, um seine Identität vor der Weltregierung zu verbergen.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Franky"
    },
    {
        q: "Wie heißt der berühmte Seezug, der Water 7 mit anderen Inseln verbindet?",
        options: ["Rocketman", "Ocean Express", "Puffing Tom", "Blue Station"],
        correct: 2,
        tip: "Er wurde vom legendären Schiffsbauer Tom konstruiert, um Water 7 vor dem wirtschaftlichen Ruin zu bewahren.",
        img: "",
        difficulty: 0,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Puffing_Tom"
    },
    {
        q: "Aus welchem Land stammt Nico Robin, das für seine Archäologen und den Baum des Wissens bekannt war?",
        options: ["Alabasta", "Ohara", "Baterilla", "Elban"],
        correct: 1,
        tip: "Die Insel wurde von der Marine durch einen Buster Call komplett ausgelöscht.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Ohara"
    },
    {
        q: "Zu welcher Piratenbande gehörte Brook, bevor er der Strohhutbande beitrat?",
        options: ["Sonnen-Piratenbande", "Rumba-Piratenbande", "Rocks-Piratenbande", "Rolling-Piratenbande"],
        correct: 1,
        tip: "Sie bestanden größtenteils aus Musikern und versprachen dem Wal La Boum, zu ihm zurückzukehren.",
        img: "",
        difficulty: 0,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Rumba-Piratenbande"
    },
    {
        q: "Wer war der Vizekapitän der Roger-Piratenbande und ist heute als 'Dunkler König' bekannt?",
        options: ["Scopper Gaban", "Crocus", "Silvers Rayleigh", "Kozuki Oden"],
        correct: 2,
        tip: "Er trainierte Ruffy während des Zeitsprungs in den Grundlagen des Haki.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Silvers_Rayleigh"
    },
    {
        q: "Welches markante Tattoo trägt Puma D. Ace auf seinem linken Oberarm?",
        options: ["Das Whitebeard-Symbol", "ASCE mit einem durchgestrichenen S", "Einen flammenden Totenkopf", "Einen Drachen"],
        correct: 1,
        tip: "Das durchgestrichene S ist eine Hommage an seinen Kindheitsfreund Sabo, den er für tot hielt.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Puma_D._Ace"
    },
    {
        q: "Wer herrschte in Skypia als sogenannter 'Gott' und aß die Donner-Frucht?",
        options: ["Gan Fort", "Wyper", "Enel", "Nola"],
        correct: 2,
        tip: "Er besitzt ein extrem starkes Observationshaki (Mantra) und plante, zum 'Fairy Vearth' (Mond) zu fliegen.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Enel"
    },
    {
        q: "Wie werden die direkten Nachfahren der 20 Könige, die vor 800 Jahren die Weltregierung gründeten, umgangssprachlich genannt?",
        options: ["Die Fünf Weisen", "Himmelsdrachen-Menschen (Weltaristokraten)", "Gotteskrieger", "Marine-Admiräle"],
        correct: 1,
        tip: "Sie tragen oft Luftblasen über dem Kopf, weil sie nicht dieselbe Luft wie gewöhnliche Menschen atmen wollen.",
        img: "",
        difficulty: 0,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Weltaristokraten"
    },
    {
        q: "Welche Gruppe von fünf alten Männern bildet öffentlich die höchste politische Instanz der Weltregierung?",
        options: ["Die Cipher Pol Aegis 0", "Die Sieben Samurai", "Die Fünf Weisen", "Die Heiligen Ritter"],
        correct: 2,
        tip: "Sie agieren direkt aus dem Pangaea-Schloss in Mary Joa.",
        img: "",
        difficulty: 0,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Fuenf_Weisen"
    },
    {
        q: "Welche Teufelsfrucht hat Trafalgar Law gegessen?",
        options: ["Operations-Frucht", "Zerschneide-Frucht", "Herz-Frucht", "Raum-Frucht"],
        correct: 0,
        tip: "Mit ihr kann er kugelförmige 'Rooms' erschaffen, in denen er alles nach Belieben kontrollieren und chirurgisch verändern kann.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Operations-Frucht"
    },
    {
        q: "Welche Teufelskraft nutzt Eustass Kid im Kampf?",
        options: ["Schwerkraft", "Magnetismus", "Explosionen", "Metall-Erschaffung"],
        correct: 1,
        tip: "Damit kann er Waffen seiner Gegner anziehen und riesige mechanische Arme aus Schrott formen.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Magnet-Frucht"
    },
    {
        q: "Wer ist die riesige Meerjungfrauen-Prinzessin der Fischmenscheninsel, die sich jahrelang im Harten Turm einsperren musste?",
        options: ["Otohime", "Shirahoshi", "Camie", "Madame Shyarly"],
        correct: 1,
        tip: "Ruffy nennt sie anfangs oft 'Heulsuse', weil sie sehr ängstlich und emotional ist.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Shirahoshi"
    },
    {
        q: "Wie heißt das 'Heilige Land', in dem die Weltaristokraten und die Führung der Weltregierung residieren?",
        options: ["Marineford", "Enies Lobby", "Mary Joa", "Pangaea"],
        correct: 2,
        tip: "Es liegt direkt auf der Red Line, genau oberhalb der Fischmenscheninsel.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Mary_Joa"
    },
    {
        q: "Wie wurde die Gruppe von sieben starken Piraten genannt, die offiziell im Dienst der Weltregierung standen?",
        options: ["Die Sieben Samurai der Meere", "Die Sieben Kaiser", "Die Heiligen Ritter", "Cipher Pol 7"],
        correct: 0,
        tip: "Bekannte ehemalige Mitglieder sind unter anderem Mihawk Dulacre, Boa Hancock und Jinbei.",
        img: "",
        difficulty: 0,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Sieben_Samurai_der_Meere"
    },
    {
        q: "Wie nennt man die unzerstörbaren Steinblöcke, auf denen die wahre Geschichte der Welt in einer alten Sprache eingemeißelt ist?",
        options: ["Road-Steine", "Poneglyphe", "Diale", "Uranus-Blöcke"],
        correct: 1,
        tip: "Nico Robin ist die einzige lebende Person, die diese Inschriften noch entziffern kann.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Poneglyph"
    },
    {
        q: "Auf welcher Insel wurde Gol D. Roger, der König der Piraten, hingerichtet?",
        options: ["Mary Joa", "Marineford", "Loguetown", "Raftel (Laugh Tale)"],
        correct: 2,
        tip: "Diese Insel im East Blue wird auch als 'Die Stadt des Anfangs und des Endes' bezeichnet.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Loguetown"
    },
    {
        q: "Welchen Rang erreicht Koby nach dem zweijährigen Zeitsprung in der Marine?",
        options: ["Kapitän zur See", "Vizeadmiral", "Fähnrich", "Admiral"],
        correct: 0,
        tip: "Er wurde von Garp trainiert und ist ein Meister der Formel 6 (Rokushiki).",
        img: "",
        difficulty: 0,
        category: "Marine",
        url: "https://opwiki.org/wiki/Koby"
    },
    {
        q: "Welches Land ist für seine starken Samurai berüchtigt und schottete sich lange Zeit vom Rest der Welt ab?",
        options: ["Wano Kuni", "Elban", "Zou", "Dress Rosa"],
        correct: 0,
        tip: "Die Hauptstadt dieses von Kaido terrorisierten Landes heißt 'Blumenhauptstadt'.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Wano_Kuni"
    },
    {
        q: "Welchen Spitznamen trägt Jinbei, der Steuermann der Strohhutbande?",
        options: ["Ritter des Meeres", "Der Tyrann", "Chirurg des Todes", "Meereskönig"],
        correct: 0,
        tip: "Er ist ein Walhai-Fischmensch und ein Mann von großer Ehre und Loyalität.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Jinbei"
    },
    {
        q: "Welche Teufelsfrucht hat Brook gegessen?",
        options: ["Skelett-Frucht", "Totenreich-Frucht", "Geister-Frucht", "Knochen-Frucht"],
        correct: 1,
        tip: "Diese Paramecia-Frucht ermöglichte es seiner Seele, nach dem Tod in seinen Körper zurückzukehren.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Totenreich-Frucht"
    },
    {
        q: "Auf dem Rücken welches riesigen Tieres befindet sich die Insel Zou?",
        options: ["Einer Schildkröte", "Einem Wal", "Einem Elefanten", "Einem Seekönig"],
        correct: 2,
        tip: "Dieses Tier wandert seit über 1000 Jahren ununterbrochen durch das offene Meer.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Zou"
    },
    {
        q: "Wie lautet der wahre Name der Piratenkaiserin, die unter dem Namen 'Big Mom' bekannt ist?",
        options: ["Charlotte Linlin", "Carmel", "Katarina Devon", "Jewelry Bonney"],
        correct: 0,
        tip: "Sie regiert über das Archipel Totland und hat eine gefährliche Schwäche für Süßigkeiten.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Charlotte_Linlin"
    },
    {
        q: "Welche Form von Haki besitzen nur sehr wenige Auserwählte, wie zum Beispiel Monkey D. Ruffy und Gol D. Roger?",
        options: ["Rüstungshaki", "Observationshaki", "Königshaki", "Mantra"],
        correct: 2,
        tip: "Mit dieser Art von Haki kann man schwache Gegner allein durch den eigenen Willen und Einschüchterung ohnmächtig werden lassen.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Haki"
    },
    {
        q: "Welche Position bekleidet Sabo in der Revolutionsarmee?",
        options: ["Anführer", "Stabschef (Nummer 2)", "Kommandant der Nordarmee", "Spion"],
        correct: 1,
        tip: "Er ist der direkte Untergebene von Monkey D. Dragon und hat nach Aces Tod die Feuerfrucht gegessen.",
        img: "",
        difficulty: 0,
        category: "Revolutionäre",
        url: "https://opwiki.org/wiki/Sabo"
    },
    {
        q: "Welches tierähnliche Volk lebt auf der wandelnden Insel Zou?",
        options: ["Fischmenschen", "Riesen", "Minks", "Zwerge"],
        correct: 2,
        tip: "Sie sind geborene Krieger und können durch das Reiben ihres Fells Elektrizität (Electro) erzeugen.",
        img: "",
        difficulty: 0,
        category: "Rassen",
        url: "https://opwiki.org/wiki/Minks"
    },
    {
        q: "Welches Tier ist Bepo, der loyale Navigator der Heart-Piratenbande?",
        options: ["Ein Rentier", "Ein Eisbär", "Ein Pinguin", "Ein Löwe"],
        correct: 1,
        tip: "Er ist ein Mink und hat die Angewohnheit, sich sehr schnell zu entschuldigen, wenn er kritisiert wird.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Bepo"
    },
    {
        q: "Welches verfluchte Schwert kaufte Zorro in Loguetown in einem Waffenladen?",
        options: ["Wado-Ichimonji", "Sandai Kitetsu", "Shusui", "Enma"],
        correct: 1,
        tip: "Er testete den Fluch des Schwertes, indem er es in die Luft warf und seinen eigenen Arm ausstreckte.",
        img: "",
        difficulty: 0,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Sandai_Kitetsu"
    },
    {
        q: "Wer war der tyrannische Herrscher von Dress Rosa, bevor er von Ruffy besiegt wurde?",
        options: ["Sir Crocodile", "Don Quichotte Doflamingo", "Gecko Moria", "Enel"],
        correct: 1,
        tip: "Er trägt einen auffälligen rosa Federmantel und manipulierte die Bevölkerung mit seiner Faden-Frucht.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Don_Quichotte_Doflamingo"
    },
    {
        q: "Wie viele Vertreter gründeten nach den Ereignissen auf Dress Rosa die 'Strohhut-Großflotte'?",
        options: ["5", "7", "9", "12"],
        correct: 1,
        tip: "Cavendish, Bartolomeo und Sai gehören unter anderem zu den Anführern dieser Flotte.",
        img: "",
        difficulty: 0,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Strohhut-Gro%C3%9Fflotte"
    },
    {
        q: "Wie heißt der Riesenwal, der am Kap der Zwillinge auf die Rückkehr seiner Piratenfreunde wartet?",
        options: ["Nola", "Surume", "La Boum", "Zunisha"],
        correct: 2,
        tip: "Brook gehörte zu der Rumba-Piratenbande, die diesen Wal damals dort zurücklassen musste.",
        img: "",
        difficulty: 0,
        category: "Tiere",
        url: "https://opwiki.org/wiki/La_Boum"
    },
    {
        q: "Wie lautet der wahre Name von dem Piratenkaiser Blackbeard?",
        options: ["Marshall D. Teach", "Gol D. Roger", "Rocks D. Xebec", "Trafalgar D. Water Law"],
        correct: 0,
        tip: "Er ist der einzige bekannte Pirat, der die Kräfte von zwei Teufelsfrüchten gleichzeitig nutzen kann.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Marshall_D._Teach"
    },
    {
        q: "Welche Logia-Frucht verleiht die Kraft, sich in Elektrizität zu verwandeln und Blitze zu erzeugen?",
        options: ["Funkel-Frucht", "Donner-Frucht", "Licht-Frucht", "Feuerfrucht"],
        correct: 1,
        tip: "Enel aß diese Frucht und galt auf Skypia als unbesiegbar, bis er auf den Gummi-Menschen Ruffy traf.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Donner-Frucht"
    },
    {
        q: "Wie heißt das technologisch hochentwickelte Königreich, das von Sanjis Familie (den Vinsmokes) regiert wird?",
        options: ["Germa-Königreich", "Kamabakka", "Prodence", "Ryugu-Reich"],
        correct: 0,
        tip: "Es ist ein Königreich, das keine feste Landmasse besitzt, sondern aus vielen riesigen, schneckenartigen Schiffen besteht.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Germa_66"
    },
    {
        q: "Unter welchem Decknamen trat Lysop in Enies Lobby auf, um seine Identität vor der Crew zu verbergen?",
        options: ["Sogeking", "Mr. Prince", "Lucy", "O-Soba Mask"],
        correct: 0,
        tip: "Er trug eine goldene Sonnenmaske, einen roten Umhang und sang sein eigenes Titellied.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Sogeking"
    },
    {
        q: "Wie nennt man das spezielle Stück Papier, das magisch immer in die Richtung seines Besitzers zeigt?",
        options: ["Poneglyph", "Vivre Card", "Log-Port", "Eternal-Port"],
        correct: 1,
        tip: "Es wird in der Neuen Welt aus den Fingernägeln einer Person hergestellt und spiegelt deren Lebensenergie wider.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Vivre_Card"
    },
    {
        q: "Welches Navigationsinstrument ist zwingend erforderlich, um von Insel zu Insel auf der Grandline zu reisen?",
        options: ["Ein normaler Kompass", "Eine Sternenkarte", "Ein Log-Port", "Ein Teleskop"],
        correct: 2,
        tip: "Es speichert das magnetische Feld der aktuellen Insel, um den Weg zur nächsten Insel zu weisen.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Log-Port"
    },
    {
        q: "Welcher Piratenkapitän ist der wohl größte und verrückteste Fan von Monkey D. Ruffy und der Strohhutbande?",
        options: ["Cavendish", "Bellamy", "Bartolomeo", "Sai"],
        correct: 2,
        tip: "Er hat die Barrieren-Frucht gegessen und sogar sein Schiff, die 'Going Ruffy', im Design seines Idols gebaut.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Bartolomeo"
    },
    {
        q: "Wie heißt die freundliche Barbesitzerin aus dem Windmühlendorf (Foosha), die sich oft um Ruffy und Ace kümmerte?",
        options: ["Dadan", "Makino", "Nojiko", "Shakuyaku"],
        correct: 1,
        tip: "Sie betreibt 'Partys Bar' und hat Shanks und seiner Bande immer geduldig Essen und Getränke serviert.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Makino"
    },
    {
        q: "Wie lange dauerte der Trainings-Zeitsprung (Timeskip), bei dem die Strohhüte voneinander getrennt waren?",
        options: ["6 Monate", "1 Jahr", "2 Jahre", "3 Jahre"],
        correct: 2,
        tip: "Ruffy signalisierte diese Dauer seiner Crew durch eine tätowierte Nachricht auf seinem rechten Arm (3D2Y).",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Zeitsprung"
    },
    {
        q: "Welchen Beruf übte Silvers Rayleigh auf dem Sabaody Archipel aus, als die Strohhüte ihn zum ersten Mal trafen?",
        options: ["Barmann", "Schiffsummanteler", "Auktionator", "Kopfgeldjäger"],
        correct: 1,
        tip: "Er beschichtet Schiffe mit dem Harz der Yarukiman-Mangroven, damit diese sicher zur Fischmenscheninsel hinabtauchen können.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Silvers_Rayleigh"
    },
    {
        q: "Wie wird die Gruppe von Rookie-Piraten genannt, die zeitgleich mit einem Kopfgeld von über 100 Millionen auf dem Sabaody Archipel ankamen?",
        options: ["Die Sieben Samurai", "Die Schlimmste Generation (Supernovae)", "Die neuen Kaiser", "Die Flying Six"],
        correct: 1,
        tip: "Ruffy, Zorro, Law, Kid und Capone Bege gehören unter anderem zu dieser berüchtigten Gruppe von Piraten.",
        img: "",
        difficulty: 0,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Elf_Supernovae"
    },
    {
        q: "Wie hat Ruffy die kleine Narbe unter seinem linken Auge bekommen?",
        options: ["In einem Kampf mit einem Raubtier", "Er hat sich selbst mit einem Messer gestochen", "Shanks hat ihn versehentlich verletzt", "Sein Großvater Garp hat ihn beim Training getroffen"],
        correct: 1,
        tip: "Er tat dies als Kind, um Shanks zu beweisen, wie mutig und hart er ist, in der Hoffnung, in dessen Bande aufgenommen zu werden.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Monkey_D._Ruffy"
    },
    {
        q: "Aus welchem der vier großen Ozeane stammt Sanji ursprünglich?",
        options: ["East Blue", "South Blue", "North Blue", "West Blue"],
        correct: 2,
        tip: "Obwohl er im East Blue aufgewachsen ist, wurde er in diesem Ozean als Prinz des Germa-Königreichs geboren.",
        img: "",
        difficulty: 0,
        category: "Geografie",
        url: "https://opwiki.org/wiki/Sanji"
    },
    {
        q: "Wie heißt der Arzt und Leuchtturmwärter am Kap der Zwillinge, der sich um den Wal La Boum kümmert?",
        options: ["Silvers Rayleigh", "Crocus", "Kureha", "Hogback"],
        correct: 1,
        tip: "Er war einst der Schiffsarzt der Roger-Piratenbande und begleitete sie bis zur letzten Insel.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Crokus"
    },
    {
        q: "Wer ist der amtierende Bürgermeister der Wasserstadt Water 7 und der Chef der Galeera-Company?",
        options: ["Iceburg", "Franky", "Spandam", "Pauly"],
        correct: 0,
        tip: "Er war wie Franky ein Schüler des legendären Schiffsbauers Tom und besitzt eine kleine Hausmaus namens Tyrannosaurus.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Eisburg"
    },
    {
        q: "Welche Besonderheit wies Sanjis Steckbrief auf, nachdem die Strohhüte Dress Rosa verlassen hatten?",
        options: ["Sein Kopfgeld war auf null gesetzt", "Das Bild war wieder nur gezeichnet", "Es stand 'Only Alive' (Nur lebendig) darauf", "Sein Name war falsch geschrieben"],
        correct: 2,
        tip: "Seine mächtige Familie, die Vinsmokes, veranlasste diese Änderung, um ihn für eine politische Hochzeit nutzen zu können.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Kopfgeld"
    },
    {
        q: "Wie lautet der Name der fliegenden Himmelsinsel, die die Strohhutbande besucht?",
        options: ["Weatheria", "Skypia", "Fairy Vearth", "Birka"],
        correct: 1,
        tip: "Man erreicht sie unter anderem, indem man den extrem gefährlichen 'Knock-Up-Stream' hinaufsegelt.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Skypia"
    },
    {
        q: "Welcher ehemalige Agent der Barock-Firma freundet sich mit Ruffy an und opfert sich im Impel Down für ihn?",
        options: ["Mr. 1 (Jazz Boner)", "Mr. 3 (Gal Dino)", "Mr. 2 (Bon Curry)", "Mr. 5"],
        correct: 2,
        tip: "Er hat die Transen-Frucht gegessen und ist ein Meister des Tritt-Kampfstils 'Okama Kenpo'.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Bentham"
    },
    {
        q: "Wer war der legendäre Schiffsbauer, der das Schiff des Piratenkönigs, die Oro Jackson, gebaut hat?",
        options: ["Iceburg", "Franky", "Kokoro", "Tom"],
        correct: 3,
        tip: "Er war ein Hornkofferfischmensch und der Mentor von Franky und Iceburg in Water 7.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Tom"
    },
    {
        q: "Welchen Titel trägt Boa Hancock in ihrer Heimat Amazon Lily?",
        options: ["Schlangenprinzessin", "Königin der Piraten", "Göttin des Krieges", "Kaiserin des Ozeans"],
        correct: 0,
        tip: "Sie wird von ihrem Volk bedingungslos verehrt und herrscht über den Kuja-Stamm.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Boa_Hancock"
    },
    {
        q: "Welches Haustier sitzt fast immer auf der Schulter des CP9-Agenten Rob Lucci?",
        options: ["Ein Affe", "Eine Taube namens Hattori", "Ein Rabe", "Eine kleine Schlange"],
        correct: 1,
        tip: "Lucci nutzte dieses Tier oft als eine Art Bauchrednerpuppe, um nicht selbst sprechen zu müssen, als er in Water 7 undercover war.",
        img: "",
        difficulty: 0,
        category: "Tiere",
        url: "https://opwiki.org/wiki/Hattori"
    },
    {
        q: "Welche der folgenden Teufelsfrüchte gehört zur Kategorie der 'Zoan'-Früchte?",
        options: ["Feuerfrucht", "Mensch-Mensch-Frucht", "Gum-Gum-Frucht", "Trenn-Trenn-Frucht"],
        correct: 1,
        tip: "Diese Kategorie von Früchten erlaubt es dem Nutzer, sich in ein Tier oder ein Tier-Mensch-Wesen zu verwandeln.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Teufelsfrucht"
    },
    {
        q: "Wer ist der Hauptgegner der Strohhutbande auf dem riesigen Geisterschiff Thriller Bark?",
        options: ["Gecko Moria", "Sir Crocodile", "Enel", "Rob Lucci"],
        correct: 0,
        tip: "Er nutzte die Schatten-Frucht, um eine Armee aus Zombies zu erschaffen.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Gecko_Moria"
    },
    {
        q: "Wie nennt man das große Geheimnis, das bestimmte Persönlichkeiten wie Ruffy, Law, Blackbeard und Roger in ihrem Namen tragen?",
        options: ["Das Erbe von Mary Joa", "Der Wille des D.", "Das Zeichen des Joy Boy", "Die Bestimmung der Ahnen"],
        correct: 1,
        tip: "Die Weltregierung fürchtet die Träger dieses Namens sehr, da sie als die 'natürlichen Feinde Gottes' gelten.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Wille_des_D."
    },
    {
        q: "Wie heißen die beiden Riesen, die auf der Insel Little Garden seit über 100 Jahren ein Duell austragen?",
        options: ["Oimo und Karsee", "Hajrudin und Loki", "Dorrey und Brogi", "Yarli und Falli"],
        correct: 2,
        tip: "Sie waren einst die Kapitäne der gefürchteten Riesenkrieger-Piratenbande aus Elban.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Riesenkrieger-Piratenbande"
    },
    {
        q: "Welche der drei antiken Waffen ist bekanntermaßen ein massives, extrem zerstörerisches Kriegsschiff?",
        options: ["Uranus", "Poseidon", "Pluton", "Noah"],
        correct: 2,
        tip: "Die Baupläne für dieses Schiff wurden über Generationen von den besten Schiffsbauern in Water 7 versteckt und schließlich von Franky verbrannt.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Antike_Waffen"
    },
    {
        q: "Wie heißt das mächtige schwarze Schwert, das Zorro nach einem Kampf vom Zombie-Samurai Ryuma erhält?",
        options: ["Shusui", "Wado-Ichimonji", "Enma", "Sandai Kitetsu"],
        correct: 0,
        tip: "Es gilt in Wano Kuni als ein heiliger Nationalschatz, weshalb Zorro später gebeten wird, es zurückzugeben.",
        img: "",
        difficulty: 0,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Shusui"
    },
    {
        q: "Was läutet Ruffy nach der großen Schlacht in Marineford 16 Mal, um eine Geheimbotschaft an seine Crew zu senden?",
        options: ["Die goldene Glocke von Shandora", "Die Ox-Glocke", "Die Marine-Alarmglocke", "Die Friedensglocke"],
        correct: 1,
        tip: "Normalerweise wird sie zum Jahreswechsel geläutet. Ruffys Aktion signalisierte der Welt den Beginn einer neuen Ära.",
        img: "",
        difficulty: 0,
        category: "Orte",
        url: "https://opwiki.org/wiki/Ox-Glocke"
    },
    {
        q: "Welche Teufelsfrucht aß der gefürchtete Gefängnisdirektor von Impel Down, Magellan?",
        options: ["Säure-Frucht", "Magma-Frucht", "Gift-Frucht", "Schleim-Frucht"],
        correct: 2,
        tip: "Aufgrund dieser Kraft leidet er oft unter starken Magenproblemen und verbringt einen Großteil seines Tages auf der Toilette.",
        img: "",
        difficulty: 0,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Gift-Frucht"
    },
    {
        q: "Wie heißt der Präsident der Weltwirtschaftszeitung, der durch die Welt fliegt und die Nachrichten kontrolliert?",
        options: ["Morgans", "Absalom", "Pell", "Karasu"],
        correct: 0,
        tip: "Er hat eine Vogel-Frucht (Modell: Albatros) gegessen und liebt es, sensationelle Nachrichten zu verbreiten – selbst wenn sie die Weltregierung verärgern.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Morgans"
    },
    {
        q: "Welchen Rang bekleidete Sakazuki (Akainu) vor dem zweijährigen Zeitsprung innerhalb der Marine?",
        options: ["Vizeadmiral", "Flottenadmiral", "Kommodore", "Admiral"],
        correct: 3,
        tip: "Er stand auf der gleichen Stufe wie Aokiji und Kizaru. Nach einem Duell mit Aokiji wurde er befördert.",
        img: "",
        difficulty: 0,
        category: "Marine",
        url: "https://opwiki.org/wiki/Sakazuki"
    },
    {
        q: "Welches markante Kleidungsstück trägt der Cyborg Franky meistens anstelle einer normalen Hose?",
        options: ["Einen Kilt", "Eine Badehose", "Weite Boxershorts", "Einen Lendenschurz"],
        correct: 1,
        tip: "Er bezeichnet sich selbst oft stolz als Perversen und ändert dieses Beinkleid nur sehr selten.",
        img: "",
        difficulty: 0,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Franky"
    },
    {
        q: "Wer ist der Kommandant der 1. Division der Whitebeard-Piratenbande?",
        options: ["Puma D. Ace", "Marco", "Jozu", "Vista"],
        correct: 1,
        tip: "Er wird aufgrund seiner seltenen Mystischen Zoan-Frucht auch 'Der Phönix' genannt.",
        img: "",
        difficulty: 0,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Marco"
    },
    {
        q: "Wie wird Marco von der Whitebeard-Piratenbande aufgrund seiner mächtigen Teufelskraft auch genannt?",
        options: ["Marco der Drache", "Marco der Phönix", "Marco der Greif", "Marco der Adler"],
        correct: 1,
        tip: "Seine blauen Flammen der Wiedergeburt erlauben es ihm, sich von fast allen Verletzungen sofort zu heilen.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Marco"
    },
    {
        q: "Welches Körperteil hat Shanks geopfert, als er Ruffy im Windmühlendorf vor einem Seekönig rettete?",
        options: ["Sein rechtes Bein", "Sein linkes Auge", "Seinen rechten Arm", "Seinen linken Arm"],
        correct: 3,
        tip: "Ruffy war damals ins Meer gefallen und konnte nicht schwimmen, woraufhin Shanks einsprang und den Seekönig mit Haki vertrieb.",
        img: "",
        difficulty: 0,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Shanks"
    },
    {
        q: "Was ist das ultimative Gesetz der Weltregierung in Bezug auf die antiken Poneglyphe?",
        options: ["Man muss sie in Mary Joa abgeben", "Sie sollen als Waffen genutzt werden", "Das Lesen und Entziffern ist strengstens verboten", "Man muss Kopien davon für die Marine anfertigen"],
        correct: 2,
        tip: "Dieses Gesetz führte zur Vernichtung der Insel Ohara, da die Archäologen dort der Wahren Geschichte auf die Spur kamen.",
        img: "",
        difficulty: 0,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Poneglyph"
    },

    // --- SCHWIERIGKEIT: MITTEL (difficulty: 1) ---
     {
        q: "Wer war der erste Samurai der Meere, den Ruffy besiegt hat?",
        options: ["Moria", "Doflamingo", "Sir Crocodile", "Jinbei"],
        correct: 2,
        tip: "Der Kampf fand in der Wüste von Alabasta statt.",
        img: "",
        difficulty: 1,
        category: "Samurai der Meere",
        url: "https://opwiki.org/wiki/Sir_Crocodile"
    },
    {
        q: "Wie hoch war das allererste Kopfgeld, das auf Monkey D. Ruffy ausgesetzt wurde?",
        options: ["15 Millionen Berry", "30 Millionen Berry", "50 Millionen Berry", "100 Millionen Berry"],
        correct: 1,
        tip: "Er erhielt es nach seinem Sieg über Arlong und der Zerstörung des Arlong Parks im East Blue.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Kopfgeld"
    },
    {
        q: "Welches Schwert gab Lorenor Zorro in Wano Kuni zurück, um im Austausch das Schwert 'Enma' zu erhalten?",
        options: ["Wado-Ichimonji", "Sandai Kitetsu", "Yubashiri", "Shusui"],
        correct: 3,
        tip: "Es ist das schwarze Schwert, das einst dem legendären Samurai Ryuma gehörte und in Wano als heiliger Nationalschatz gilt.",
        img: "",
        difficulty: 1,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Shusui"
    },
    {
        q: "Welche mächtige Teufelsfrucht hat der ehemalige Flottenadmiral Senghok gegessen?",
        options: ["Gold-Frucht", "Mensch-Mensch-Frucht (Modell: Buddha)", "Licht-Frucht", "Beben-Frucht"],
        correct: 1,
        tip: "Sie gehört zur seltenen Kategorie der Mystischen Zoan-Früchte und hüllt ihn in goldenes Licht.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Senghok"
    },
    {
        q: "Wie lautet der Name des Schiffes, mit dem die Roger-Piratenbande als erste und einzige die Grandline eroberte?",
        options: ["Red Force", "Moby Dick", "Oro Jackson", "Jackson Blue"],
        correct: 2,
        tip: "Es wurde vom legendären Schiffsbauer Tom aus dem kostbaren und extrem robusten Adam-Holz gebaut.",
        img: "",
        difficulty: 1,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Oro_Jackson"
    },
    {
        q: "Auf welcher Insel wurde Ruffy von Bartholomäus Bär geschleudert, um dort während des Zeitsprungs zu trainieren?",
        options: ["Amazon Lily", "Rusukaina", "Boin-Archipel", "Kuraigana"],
        correct: 1,
        tip: "Es ist eine Insel der 48 Jahreszeiten nordwestlich von Amazon Lily, die von riesigen Tieren bewohnt wird.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Rusukaina"
    },
    {
        q: "Wer war der direkte Vorgänger von Enel als Herrscher (Gott) von Skypia?",
        options: ["Wyper", "Gan Fort", "Montblanc Noland", "Ohm"],
        correct: 1,
        tip: "Er reitet auf einem großen Vogel namens Pierre, der die Pferde-Frucht gegessen hat, was ihn wie einen Pegasus wirken lässt.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Gan_Fort"
    },
    {
        q: "Wie hieß Namis Ziehmutter, die sich schützend vor sie und Nojiko stellte und dafür ihr Leben gab?",
        options: ["Makino", "Bellemere", "Kureha", "Rouge"],
        correct: 1,
        tip: "Sie war eine ehemalige Marinesoldatin und wurde von Arlong erschossen, weil sie das Schutzgeld nicht zahlen konnte.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Bellemere"
    },
    {
        q: "Welche Teufelsfrucht hat die Piratenkaiserin Boa Hancock gegessen?",
        options: ["Schlangen-Frucht", "Schönheits-Frucht", "Liebes-Frucht", "Stein-Frucht"],
        correct: 2,
        tip: "Mit dieser Paramecia-Frucht kann sie jeden, der unreine Gedanken ihr gegenüber hegt oder sich von ihr betören lässt, in Stein verwandeln.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Liebes-Frucht"
    },
    {
        q: "Wer zündete das geliebte Schiff 'Flying Lamb' bei ihrer feierlichen Wikinger-Bestattung auf offener See an?",
        options: ["Lysop", "Monkey D. Ruffy", "Franky", "Sanji"],
        correct: 1,
        tip: "Er tat es weinend mit einer brennenden Fackel, da das Schiff nach der wundersamen Rettung aus Enies Lobby in der Mitte durchbrach.",
        img: "",
        difficulty: 1,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Flying_Lamb"
    },
    {
        q: "Wie lautet der Name von Lysops Vater?",
        options: ["Banchina", "Gild Tesoro", "Yasopp", "Lucky Roux"],
        correct: 2,
        tip: "Er ist ein Meisterschütze und gehört zur engsten Crew der Rothaar-Piratenbande unter Shanks.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Yasopp"
    },
    {
        q: "Wie lange hielt die Wirkung eines 'Rumble Balls' von Chopper vor dem zweijährigen Zeitsprung an?",
        options: ["1 Minute", "3 Minuten", "5 Minuten", "10 Minuten"],
        correct: 1,
        tip: "In dieser exakt begrenzten Zeit konnte er seine Teufelskraft so stören, dass er auf vier zusätzliche Transformationsformen zugreifen konnte.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Rumble_Ball"
    },
    {
        q: "Wer rettete Trafalgar Law als Kind das Leben und besorgte ihm unter Einsatz des eigenen Lebens die Operations-Frucht?",
        options: ["Vergo", "Don Quichotte Doflamingo", "Don Quichotte Rosinante (Corazon)", "Senghok"],
        correct: 2,
        tip: "Er war Doflamingos leiblicher Bruder, arbeitete aber heimlich als Kommandant für die Marine.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Don_Quichotte_Rosinante"
    },
    {
        q: "Zu welcher antiken Rasse gehört King, der stärkste Kommandant von Kaido?",
        options: ["Lunarier", "Minks", "Riesen", "Fischmenschen"],
        correct: 0,
        tip: "Diese Rasse galt als ausgestorben. Sie können Feuer erschaffen, überleben unter extremsten Bedingungen und haben große schwarze Flügel.",
        img: "",
        difficulty: 1,
        category: "Rassen",
        url: "https://opwiki.org/wiki/Lunarier"
    },
    {
        q: "Welche Form von Gerechtigkeit vertritt Flottenadmiral Sakazuki (Akainu) bedingungslos?",
        options: ["Moderate Gerechtigkeit", "Absolute Gerechtigkeit", "Dunkle Gerechtigkeit", "Faule Gerechtigkeit"],
        correct: 1,
        tip: "Dieser Philosophie zufolge müssen Böses und Piraterie mit allen Mitteln ausgelöscht werden, selbst wenn dabei Unschuldige sterben.",
        img: "",
        difficulty: 1,
        category: "Marine",
        url: "https://opwiki.org/wiki/Sakazuki"
    },
    {
        q: "Wie heißt das Gefängnis in Wano Kuni, in dem Ruffy nach seiner ersten Niederlage gegen Kaido zur Zwangsarbeit verurteilt wurde?",
        options: ["Impel Down", "Udon", "Onigashima", "Ebisu"],
        correct: 1,
        tip: "Dort traf er auf Eustass Kid und lernte von dem alten Yakuza-Boss Hyogoro das fortgeschrittene Rüstungshaki (Ryo).",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Udon"
    },
    {
        q: "Auf welcher Insel trainierte Sanji unfreiwillig während des zweijährigen Zeitsprungs?",
        options: ["Boin-Archipel", "Kuraigana", "Momoiro (Kamabakka-Reich)", "Namakura"],
        correct: 2,
        tip: "Die Insel wird von Transvestiten (Okamas) bewohnt, und Sanji lernte dort fliehen (Sky Walk) und die 99 Rezepte der Angriffsküche.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Momoiro"
    },
    {
        q: "Welche der drei antiken Waffen ist in Wirklichkeit keine Maschine, sondern die Meerjungfrauen-Prinzessin Shirahoshi?",
        options: ["Pluton", "Uranus", "Poseidon", "Noah"],
        correct: 2,
        tip: "Diese Waffe besitzt die angeborene Fähigkeit, mit den gigantischen Seekönigen zu kommunizieren und sie zu befehlen.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Antike_Waffen"
    },
    {
        q: "Wer war der erste Gegner, gegen den Ruffy die körperbelastende Technik 'Gear 2' erfolgreich im Kampf einsetzte?",
        options: ["Rob Lucci", "Bluno", "Crocodile", "Enel"],
        correct: 1,
        tip: "Der Kampf fand auf dem Dach des Gerichtsgebäudes von Enies Lobby statt, bevor Ruffy zu Lucci vordrang.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Bluno"
    },
    {
        q: "Wie heißen die speziellen roten Poneglyphe, die den genauen Weg zur letzten Insel Laugh Tale weisen?",
        options: ["Rio-Poneglyphe", "Road-Poneglyphe", "Uranus-Poneglyphe", "Joy-Poneglyphe"],
        correct: 1,
        tip: "Es gibt insgesamt vier von ihnen. Werden ihre Koordinaten auf einer Karte gekreuzt, offenbart sich der Standort.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Poneglyph"
    },
    {
        q: "Unter welchem Decknamen agierte der Samurai der Meere Sir Crocodile als geheimer Boss der Barock-Firma?",
        options: ["Mr. 0", "Mr. 1", "Mr. Boss", "King"],
        correct: 0,
        tip: "Seine Partnerin Nico Robin operierte im selben System unter dem Decknamen 'Miss All Sunday'.",
        img: "",
        difficulty: 1,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Crocodile"
    },
    {
        q: "Wer ist der amtierende Kapitän der Fire-Tank-Piratenbande?",
        options: ["Scratchmen Apoo", "Basil Hawkins", "Capone Bege", "Urouge"],
        correct: 2,
        tip: "Er gehört zur schlimmsten Generation, hat die Burg-Frucht gegessen und stammt aus dem West Blue, wo er ein mächtiger Mafia-Boss war.",
        img: "",
        difficulty: 1,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Capone_Bege"
    },
    {
        q: "Welchen exakten Teufelsfrucht-Typ hat Choppers Mensch-Mensch-Frucht?",
        options: ["Logia", "Paramecia", "Zoan", "Spezial-Paramecia"],
        correct: 2,
        tip: "Dieser Typ erlaubt es dem Nutzer, sich in ein anderes Lebewesen oder einen Hybriden zu verwandeln.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Mensch-Mensch-Frucht"
    },
    {
        q: "Welcher Marine-Admiral wählte freiwillig die Blindheit und fügte sich Wunden an den Augen zu, um das Übel der Welt nicht mehr sehen zu müssen?",
        options: ["Kizaru (Borsalino)", "Akainu (Sakazuki)", "Ryokugyu (Aramaki)", "Fujitora (Issho)"],
        correct: 3,
        tip: "Er benutzt ein Schwert und die Stampf-Frucht, um Gravitation zu kontrollieren und sogar riesige Meteoriten vom Himmel stürzen zu lassen.",
        img: "",
        difficulty: 1,
        category: "Marine",
        url: "https://opwiki.org/wiki/Issho"
    },
    {
        q: "Wie lautet der offizielle Spitzname des Supernovae Eustass Kid?",
        options: ["Der Rote", "Captain", "Der Magnet", "Rookie"],
        correct: 1,
        tip: "Er teilt sich diesen englischen Spitznamen ironischerweise mit seinem Rang in der eigenen Crew.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Eustass_Kid"
    },
    {
        q: "Welcher Strohhutpirat wurde auf der Thriller Bark als Erstes seines Schattens beraubt, um den Spezial-Zombie Oars zum Leben zu erwecken?",
        options: ["Lorenor Zorro", "Sanji", "Monkey D. Ruffy", "Nico Robin"],
        correct: 2,
        tip: "Aufgrund dieses Schattens konnte der riesige Zombie sich dehen und strecken, als wäre er aus Gummi.",
        img: "",
        difficulty: 1,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Thriller_Bark"
    },
    {
        q: "Wie lautet der Name von Sanjis ältestem leiblichen Bruder in der Germa 66?",
        options: ["Niji", "Yonji", "Ichiji", "Judge"],
        correct: 2,
        tip: "Sein Name bedeutet wörtlich übersetzt 'Nummer Eins'. Er trägt den Beinamen 'Sparking Red'.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Ichiji"
    },
    {
        q: "Welche Teufelsfrucht aß der CP9-Agent Kaku kurz vor dem Kampf in Enies Lobby?",
        options: ["Hunde-Frucht (Modell: Wolf)", "Rind-Frucht (Modell: Giraffe)", "Leoparden-Frucht", "Elefanten-Frucht"],
        correct: 1,
        tip: "Zorro machte sich über diese kantige Tierform lustig, obwohl Kaku sie tödlich im Kampf einsetzte.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Rind-Frucht,_Modell:_Giraffe"
    },
    {
        q: "Was war Namis ursprüngliches Ziel, für das sie jahrelang 100 Millionen Berry sammeln musste?",
        options: ["Ein eigenes Schiff bauen", "Sich von der Marine freikaufen", "Ihr Heimatdorf Kokos von Arlong freikaufen", "Eine Schatzkarte der Grandline erwerben"],
        correct: 2,
        tip: "Arlong hatte ihr dieses Versprechen gegeben, es aber kurz vor Erreichen der Summe durch Verrat gebrochen.",
        img: "",
        difficulty: 1,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Nami"
    },
    {
        q: "Wie lautet der Spitzname des Samurai Kinemon aus Wano Kuni?",
        options: ["Donner-Schwert", "Rotklinge", "Fuchsfeuer Kinemon", "Der eiserne Samurai"],
        correct: 2,
        tip: "Er hat diesen Namen, weil er mit seinem Schwertstil Flammen erzeugen und auch feindliches Feuer zerschneiden kann.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Kinemon"
    },
    {
        q: "Welcher Kommandant von Kaido (All-Star) aß die Antike Zoan-Frucht: Dino-Frucht (Modell: Brachiosaurus)?",
        options: ["King", "Queen", "Jack", "Sasaki"],
        correct: 1,
        tip: "Dieser Cyborg ist sehr massig gebaut, tanzt gerne und weigert sich, Gewicht zu verlieren, da er sonst 'zu beliebt' wäre.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Queen"
    },
    {
        q: "Welcher Kaiser der Meere nahm die Fischmenscheninsel nach dem Tod von Whitebeard vorübergehend unter seinen Schutz?",
        options: ["Blackbeard", "Shanks", "Big Mom", "Kaido"],
        correct: 2,
        tip: "Als Gegenleistung für diesen Schutz forderte dieser Kaiser monatlich 10 Tonnen Süßigkeiten aus der Bonbonfabrik der Insel.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Fischmenscheninsel"
    },
    {
        q: "Wer ist der Vize-Kapitän der Kid-Piratenbande und gehört wie sein Kapitän zur 'Schlimmsten Generation'?",
        options: ["Wire", "Heat", "Killer", "Bepo"],
        correct: 2,
        tip: "Er verbirgt sein Gesicht immer hinter einer blau-weiß gestreiften Maske und benutzt zwei rotierende Klingen (Punisher) als Waffen.",
        img: "",
        difficulty: 1,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Killer"
    },
    {
        q: "Wie hoch war das allererste Kopfgeld von Tony Chopper nach den Vorfällen auf Enies Lobby?",
        options: ["50 Berry", "100 Berry", "500 Berry", "1.000 Berry"],
        correct: 0,
        tip: "Die Marine hielt ihn fälschlicherweise nicht für ein vollwertiges Mitglied der Bande, sondern lediglich für das Haustier.",
        img: "",
        difficulty: 1,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Kopfgeld"
    },
    {
        q: "Wie heißt die extrem starke Teufelsfrucht von Big Moms stärkstem Kommandanten, Charlotte Katakuri?",
        options: ["Spiegel-Frucht", "Keks-Frucht", "Mochi-Frucht", "Sirup-Frucht"],
        correct: 2,
        tip: "Es handelt sich um eine 'Spezial-Paramecia', die ihm Eigenschaften verleiht, die fast mit einer Logia-Frucht vergleichbar sind.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Mochi-Frucht"
    },
    {
        q: "Wie hieß das wertvolle Schwert, das Zorro in Loguetown geschenkt bekam und auf Enies Lobby durch einen Marinekapitän verlor (zerstört wurde)?",
        options: ["Wado-Ichimonji", "Sandai Kitetsu", "Yubashiri", "Shusui"],
        correct: 2,
        tip: "Der Waffenladenbesitzer Ipponmatsu schenkte es Zorro, nachdem dieser Mut beim Test des verfluchten Sandai Kitetsu bewies.",
        img: "",
        difficulty: 1,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Yubashiri"
    },
    {
        q: "Welche Teufelsfrucht aß Kalifa, die Sekretärin von Iceburg und Mitglied der CP9?",
        options: ["Wasch-Frucht", "Schaum-Frucht", "Gleit-Frucht", "Wasser-Frucht"],
        correct: 1,
        tip: "Mit dieser Kraft kann sie ihre Gegner einseifen und so reiben, dass sie völlig aalglatt und kampfunfähig werden.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Schaum-Frucht"
    },
    {
        q: "Wer hat die gefährliche Faden-Frucht (Ito Ito no Mi) gegessen?",
        options: ["Don Quichotte Doflamingo", "Tsuru", "Machvise", "Diamante"],
        correct: 0,
        tip: "Er nutzte diese Kraft unter anderem, um Dress Rosa in den 'Vogelkäfig' einzusperren.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Faden-Frucht"
    },
    {
        q: "Welche Insel wählte die Revolutionsarmee als neuen Hauptsitz, nachdem ihre geheime Basis auf Baltigo von Blackbeard zerstört wurde?",
        options: ["Ohara", "Momoiro (Kamabakka-Reich)", "Baterilla", "Zou"],
        correct: 1,
        tip: "Es ist das Reich von Emporio Ivankov, in dem auch Sanji zwei Jahre lang trainierte.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Revolutionsarmee"
    },
    {
        q: "Welcher Agent der Barock-Firma aß die Wachs-Frucht und wurde später ein enger Verbündeter von Buggy?",
        options: ["Mr. 1", "Mr. 2", "Mr. 3 (Gal Dino)", "Mr. 4"],
        correct: 2,
        tip: "Seine Konstruktionen aus Wachs sind so hart wie Stahl. In Impel Down nutzte er sie, um Magellans Gift abzuwehren.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Gal_Dino"
    },
    {
        q: "Welcher der 11 Supernovae gehört offiziell dem Langarm-Stamm an?",
        options: ["Basil Hawkins", "Urouge", "X Drake", "Scratchmen Apoo"],
        correct: 3,
        tip: "Er kämpft mit Musik und hat seinen Körper in verschiedene Instrumente verwandelt.",
        img: "",
        difficulty: 1,
        category: "Rassen",
        url: "https://opwiki.org/wiki/Scratchmen_Apoo"
    },
    {
        q: "Wie lautet der Name des massiven, fliegenden Schiffes, das Enel aus Gold erbauen ließ?",
        options: ["Arche Maxim", "Pluton", "Vearth Explorer", "Götter-Galeere"],
        correct: 0,
        tip: "Das Schiff wird durch Enels eigene Teufelskraft, die Donner-Frucht, angetrieben.",
        img: "",
        difficulty: 1,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Arche_Maxim"
    },
    {
        q: "Welcher Riese führt die 'Neuen Riesenkrieger-Piraten' an und schloss sich der Strohhut-Großflotte an?",
        options: ["Brogi", "Dorry", "Hajrudin", "Oimo"],
        correct: 2,
        tip: "Er nahm auf Dress Rosa am Turnier um die Feuerfrucht teil, wurde aber von Ruffy (Lucy) mit einem Schlag besiegt.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Hajrudin"
    },
    {
        q: "Wie hieß das Schwert von Spandam (Chef der CP9), das eine Teufelsfrucht gegessen hat und sich in einen Elefanten verwandeln konnte?",
        options: ["Smiley", "Funkfreed", "Lasso", "Babanuki"],
        correct: 1,
        tip: "Dank der Forschung von Dr. Vegapunk ist es in One Piece möglich, dass leblose Gegenstände Zoan-Früchte essen.",
        img: "",
        difficulty: 1,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Funkfreed"
    },
    {
        q: "Welche mächtige Teufelsfrucht aß Portgas D. Rouge, um ihren Sohn Ace fast 20 Monate lang in ihrem Leib zu behalten?",
        options: ["Zeit-Frucht", "Gum-Gum-Frucht", "Barrieren-Frucht", "Keine, es war pure Willenskraft"],
        correct: 3,
        tip: "Sie tat dies allein aus purer Mutterliebe und Willenskraft, um ihn vor der Marine zu beschützen, was sie letztendlich das Leben kostete.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Portgas_D._Rouge"
    },
    {
        q: "Wer von diesen Charakteren war als Erstes Mitglied in der Bande von Gol D. Roger?",
        options: ["Shanks", "Buggy", "Silvers Rayleigh", "Crocus"],
        correct: 2,
        tip: "Er traf Roger, als dieser sein gestohlenes Boot bewunderte, und wurde sein Vize-Kapitän.",
        img: "",
        difficulty: 1,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Silvers_Rayleigh"
    },
    {
        q: "Wie lautet der Name von Whitebeards legendärem Hauptschiff?",
        options: ["Moby Dick", "Red Force", "Thriller Bark", "Oro Jackson"],
        correct: 0,
        tip: "Die Galionsfigur dieses riesigen Schiffes war ein weißer Wal. Es wurde in der Schlacht von Marineford durch Akainu zerstört.",
        img: "",
        difficulty: 1,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Moby_Dick"
    },
    {
        q: "Welche Krankheit befiel das Volk der Shandia auf Jaya und wurde von Montblanc Noland geheilt?",
        options: ["Bleikrankheit", "Baumfieber", "Das Kiemen-Syndrom", "Schwarze Pest"],
        correct: 1,
        tip: "Noland musste dafür den heiligen Wald der Shandia abholzen, was zu einem schweren Konflikt führte.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Baumfieber"
    },
    {
        q: "Wie hieß der Drache, den Ruffy und Zorro auf Punk Hazard besiegten?",
        options: ["Momonosuke", "Smiley", "Nummer 13", "Kein Name, es war eine Erfindung von Dr. Vegapunk"],
        correct: 3,
        tip: "Zorro nutzte im Kampf gegen dieses künstlich geschaffene Bestie die Technik 'Todeslöwenlied'.",
        img: "",
        difficulty: 1,
        category: "Tiere",
        url: "https://opwiki.org/wiki/Drachen"
    },
    {
        q: "Welches Poneglyph befindet sich auf Zou im Baum des Wals?",
        options: ["Ein Road-Poneglyph", "Ein Rio-Poneglyph", "Ein Info-Poneglyph", "Ein Waffen-Poneglyph"],
        correct: 0,
        tip: "Es ist knallrot und gehört zu den vier wichtigsten Steinen, die den Weg nach Laugh Tale weisen.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Zou"
    },
    {
        q: "Welchen Titel trägt Trafalgar Law auf Dress Rosa, bevor er von Fujitora entlassen wird?",
        options: ["Kaiser der Meere", "Samurai der Meere", "Supernova", "Admiral"],
        correct: 1,
        tip: "Er verdiente sich diesen Titel während des Zeitsprungs, indem er dem Hauptquartier der Marine 100 Piratenherzen schickte.",
        img: "",
        difficulty: 1,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Sieben_Samurai_der_Meere"
    },
    {
        q: "Welches Schwert erhielt Zorro in Wano Kuni von Kozuki Hiyori als Ersatz für sein Schwert Shusui?",
        options: ["Wado-Ichimonji", "Sandai Kitetsu", "Enma", "Ame no Habakiri"],
        correct: 2,
        tip: "Dieses Schwert gehörte einst dem legendären Samurai Kozuki Oden und hat die Eigenart, das Haki seines Nutzers ungefragt freizusetzen.",
        img: "",
        difficulty: 1,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Enma"
    },
    {
        q: "Wer war der erste Kapitän der Rumba-Piratenbande, bevor Brook nach einer Tragödie das Kommando übernehmen musste?",
        options: ["Calico Yorki", "Fisher Tiger", "Montblanc Noland", "Captain John"],
        correct: 0,
        tip: "Er infizierte sich mit einer unheilbaren Krankheit und musste die Grandline über den Calm Belt verlassen, weshalb er den Wal La Boum zurückließ.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Yorki"
    },
    {
        q: "Welche Paramecia-Frucht hat der Samurai der Meere, Bartholomäus Bär (Kuma), gegessen?",
        options: ["Druck-Frucht", "Tatzen-Frucht", "Abwehr-Frucht", "Beben-Frucht"],
        correct: 1,
        tip: "Mit dieser Kraft kann er alles, einschließlich Schmerzen und Erschöpfung, aus einem Körper reflektieren oder Menschen tagelang durch die Luft schleudern.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Tatzen-Frucht"
    },
    {
        q: "Welche Teufelsfrucht nutzte Gecko Moria, um seine Zombie-Armee auf der Thriller Bark aufzubauen?",
        options: ["Geister-Frucht", "Totenreich-Frucht", "Schatten-Frucht", "Dunkelheits-Frucht"],
        correct: 2,
        tip: "Er stiehlt diese von lebenden Menschen; wer ihn beraubt wurde, verbrennt sofort zu Asche, wenn er ins Sonnenlicht tritt.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Schatten-Frucht"
    },
    {
        q: "Wie heißt die offizielle Währungseinheit, die auf der Himmelsinsel Skypia verwendet wird?",
        options: ["Berry", "Zeni", "Gor", "Extol"],
        correct: 3,
        tip: "Ein Berry entspricht auf dem dortigen Markt etwa 10.000 Einheiten dieser Himmelswährung.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Extol"
    },
    {
        q: "Wer war der ambitionierte Vize-Gefängnisdirektor von Impel Down, der immer davon träumte, Magellans Posten zu übernehmen?",
        options: ["Shiryuu", "Hannyabal", "Domino", "Saldeath"],
        correct: 1,
        tip: "Er hat eine pharaonenähnliche Optik und trat mutig gegen Ruffy an, um einen Ausbruch zu verhindern, obwohl er stark unterlegen war.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Hannyabal"
    },
    {
        q: "Welche Teufelsfrucht erlaubte es dem CP9-Agenten Bluno, sich unsichtbar in Iceburgs Zimmer zu schleichen?",
        options: ["Unsichtbarkeits-Frucht", "Spiegel-Frucht", "Tür-Tür-Frucht", "Wand-Frucht"],
        correct: 2,
        tip: "Mit ihr kann er auf jeder Oberfläche – sogar in der bloßen Luft – Öffnungen erschaffen und in eine Zwischendimension treten.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/T%C3%BCr-T%C3%BCr-Frucht"
    },
    {
        q: "Unter welchem Decknamen nahm Ruffy am großen Gladiatoren-Turnier im Corrida-Kolosseum auf Dress Rosa teil?",
        options: ["Luffy", "Sabo", "Lucy", "Gatz"],
        correct: 2,
        tip: "Er trug dabei einen falschen weißen Bart, einen goldenen Helm und ein Hawaiihemd.",
        img: "",
        difficulty: 1,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Corrida_Kolosseum"
    },
    {
        q: "Wie heißt der gewaltige Baum, dessen Wurzeln tief ins Meer bis zur Fischmenscheninsel reichen und ihr das nötige Sonnenlicht spenden?",
        options: ["Baum des Wissens", "Sonnenbaum Eva", "Adam-Holz-Baum", "Yarukiman-Mangrove"],
        correct: 1,
        tip: "Er ist das direkte Gegenstück zum Schatzbaum Adam, aus dessen Holz die Thousand Sunny gebaut wurde.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Sonnenbaum_Eva"
    },
    {
        q: "Wie heißt das berühmte verfluchte Nodachi-Schwert, das Trafalgar Law immer bei sich trägt?",
        options: ["Kikoku", "Shusui", "Oto", "Kogarashi"],
        correct: 0,
        tip: "Es ist fast so groß wie Law selbst und er nutzt es in Kombination mit seiner Operations-Frucht, um Gegner auf Distanz zu zerschneiden.",
        img: "",
        difficulty: 1,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Kikoku"
    },
    {
        q: "Wer ist die rechtmäßige Thronerbin von Dress Rosa, die im Kolosseum als 'ungeschlagene Frau' kämpfte?",
        options: ["Viola", "Scarlett", "Rebecca", "Baby 5"],
        correct: 2,
        tip: "Sie kämpfte mit einem stumpfen Schwert und nutzte einen Kampfstil, bei dem sie auswich und die Kraft ihrer Gegner gegen sie verwendete.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Rebecca"
    },
    {
        q: "Wie heißt die geheime Spezialeinheit des Marine-Hauptquartiers, deren Kommandant X Drake ist?",
        options: ["CP0", "SWORD", "Die Sieben Samurai", "Cipher Pol Aegis"],
        correct: 1,
        tip: "Auch Koby und Helmeppo sind bekannte Mitglieder dieser Undercover-Organisation.",
        img: "",
        difficulty: 1,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/SWORD"
    },
    {
        q: "Wie hoch war das offiziell bestätigte Kopfgeld des Piratenkönigs Gol D. Roger, das höchste in der Geschichte?",
        options: ["4.611.100.000 Berry", "5.046.000.000 Berry", "5.564.800.000 Berry", "6.000.000.000 Berry"],
        correct: 2,
        tip: "Es ist das höchste bekannte Kopfgeld, gefolgt von dem seines Rivalen Whitebeard.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Kopfgeld"
    },
    {
        q: "Welche künstlich von Dr. Vegapunk erschaffene Teufelsfrucht aß Momonosuke auf Punk Hazard?",
        options: ["Künstliche Drachen-Frucht", "Künstliche Schlangen-Frucht", "SMILE-Frucht (Modell: Löwe)", "Künstliche Fisch-Frucht"],
        correct: 0,
        tip: "Vegapunk betrachtete diese Frucht als Fehlschlag, weil sich Momonosuke in einen rosa, statt in einen blauen, Drachen verwandelte.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Momonosuke"
    },
    {
        q: "Wer ist der älteste Sohn der Charlotte-Familie (Big Mom-Piratenbande) und der Inselminister für Süßigkeiten?",
        options: ["Charlotte Katakuri", "Charlotte Oven", "Charlotte Daifuku", "Charlotte Perospero"],
        correct: 3,
        tip: "Er hat die Schleck-Frucht gegessen und hat fast Pedro auf Zou und später auf Whole Cake Island das Leben gekostet.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Charlotte_Perospero"
    },
    {
        q: "Wie nennt man die riesigen, harzproduzierenden Bäume, die das Fundament des Sabaody Archipels bilden?",
        options: ["Adam-Bäume", "Eva-Wurzeln", "Yarukiman-Mangroven", "Himmels-Bohnenranken"],
        correct: 2,
        tip: "Ihre Wurzeln sondern Seifenblasen ab, die auf dem Archipel für fast alles, von Fortbewegung bis hin zu Hotels, genutzt werden.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Sabaody_Archipel"
    },
    {
        q: "Welche Teufelsfrucht aß Wapol, der tyrannische Ex-König von Drumm?",
        options: ["Eisen-Frucht", "Mampf-Frucht", "Festungs-Frucht", "Verschmelzungs-Frucht"],
        correct: 1,
        tip: "Dank dieser Frucht kann er absolut alles fressen (sogar Kanonen oder Menschen) und die gegessenen Objekte in seinen Körper integrieren.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Mampf-Frucht"
    },
    {
        q: "Wer ist das einzige weibliche Mitglied der sogenannten 'Schlimmsten Generation' (Supernovae)?",
        options: ["Nico Robin", "Capone Pez", "Katarina Devon", "Jewelry Bonney"],
        correct: 3,
        tip: "Sie ist bekannt als der 'Vielfraß' und kann mit ihrer Teufelskraft das Alter von sich selbst und anderen manipulieren.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Jewelry_Bonney"
    },
    {
        q: "Wer rettete Ruffy in letzter Sekunde aus dem Marineford-Krieg, indem er ihn in seinem gelben U-Boot mitnahm und operierte?",
        options: ["Shanks", "Trafalgar Law", "Emporio Ivankov", "Jinbei"],
        correct: 1,
        tip: "Er riskierte sein Leben, indem er direkt in das Kreuzfeuer der Admiräle fuhr, um den Gummi-Menschen zu retten.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Trafalgar_Law"
    },
    {
        q: "Welche Teufelsfrucht aß die hochrangige Marine-Veteranin Tsuru, die auf einer Stufe mit Garp und Senghok steht?",
        options: ["Säuberungs-Frucht", "Wasser-Frucht", "Wasch-Frucht", "Gleit-Frucht"],
        correct: 2,
        tip: "Mit dieser Frucht kann sie Feinde wie Wäsche waschen, flach auswringen und zum Trocknen aufhängen, was laut Oda sogar deren böse Herzen ein wenig 'reinigt'.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Wasch-Frucht"
    },
    {
        q: "Wo hielt Franky die brisanten Baupläne für die antike Waffe Pluton jahrelang versteckt?",
        options: ["In einem Schließfach bei der Galeera", "Vergraben unter dem Seezug Puffing Tom", "In seinem eigenen Cyborg-Körper", "In seinem Versteck im Müllberg"],
        correct: 2,
        tip: "Er trug das Erbe seines Meisters Tom buchstäblich in sich und verbrannte die Pläne erst auf Enies Lobby vor den Augen von Spandam.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Antike_Waffen"
    },
    {
        q: "Wer war der rechtmäßige Shogun von Wano Kuni, bevor Kurozumi Orochi durch Verrat die Macht an sich riss?",
        options: ["Kozuki Sukiyaki", "Kozuki Momonosuke", "Kozuki Oden", "Shimotsuki Yasuie"],
        correct: 2,
        tip: "Er reiste sowohl mit Whitebeard als auch mit Gol D. Roger und fand das One Piece.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Kozuki_Oden"
    },
    {
        q: "Wie lautet der Name von Zorros erstem Schwertkampf-Meister im Dorf Shimotsuki?",
        options: ["Koshiro", "Ryuma", "Tenguyama Hitetsu", "Kyoshiro"],
        correct: 0,
        tip: "Er war der Vater von Kuina und überreichte Zorro das Wado-Ichimonji nach deren Tod.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Koshiro"
    },
    {
        q: "Wie lautet der Name des eiskalten Scharfschützen der Blackbeard-Piratenbande?",
        options: ["Jesus Burgess", "Doc Q", "Van Augur", "Lafitte"],
        correct: 2,
        tip: "Er trägt ein extrem langes Gewehr namens Senriku und hat später die Warp-Frucht (Teleportations-Frucht) gegessen.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Van_Augur"
    },
    {
        q: "Welche antike Waffe liegt laut den roten Poneglyphen tief unter Wano Kuni verborgen?",
        options: ["Uranus", "Poseidon", "Pluton", "Arche Noah"],
        correct: 2,
        tip: "Kozuki Oden wies an, die Grenzen von Wano Kuni zu öffnen, um dieses gewaltige Kriegsschiff freizusetzen.",
        img: "",
        difficulty: 1,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Pluton"
    },
    {
        q: "Welcher freundliche Riese und Vizeadmiral der Marine rettete die kleine Nico Robin während des Buster Calls auf Ohara?",
        options: ["Hajrudin", "Brogi", "Jaguar D. Sauro", "Oimo"],
        correct: 2,
        tip: "Er lehrte Robin das markante Lachen 'Dereshishishi', damit sie auch in dunklen Zeiten lächeln kann.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Jaguar_D._Sauro"
    },
    {
        q: "Welcher hochrangige Revolutionär aß die Hormon-Frucht und ist als 'Wunderwirker' bekannt?",
        options: ["Bartholomäus Bär", "Sabo", "Belo Betty", "Emporio Ivankov"],
        correct: 3,
        tip: "Er herrscht über das Kamabakka-Reich und bewahrte Ruffy im Impel Down vor dem sicheren Gifttod.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Hormon-Frucht"
    },
    {
        q: "Wie heißt das Königreich, das Wapol im South Blue gründete, nachdem er endgültig von Ruffy aus Drumm vertrieben wurde?",
        options: ["Black Drum", "Neu Drumm", "Wapol-Land", "Ballywood"],
        correct: 0,
        tip: "Er verdiente sich durch die Herstellung des Wapometalls neuen Reichtum und wurde von den Weltaristokraten als König anerkannt.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Black_Drum"
    },
    {
        q: "Welche makabre Teufelsfrucht nutzt der Supernova Basil Hawkins im Kampf?",
        options: ["Voodoo-Frucht", "Karten-Frucht", "Stroh-Frucht", "Schatten-Frucht"],
        correct: 2,
        tip: "Mit dieser Frucht kann er unter anderem Strohpuppen erschaffen, um tödlichen Schaden auf andere Personen umzuleiten.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Stroh-Frucht"
    },
    {
        q: "Wie heißt das Schiff der Kid-Piratenbande, das stark an den Punk-Style angelehnt ist?",
        options: ["Metal Punk", "Victoria Punk", "Bloody Roar", "Killer's Pride"],
        correct: 1,
        tip: "Die Galionsfigur dieses Schiffes ist ein dinosaurierähnlicher Schädel.",
        img: "",
        difficulty: 1,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Victoria_Punk"
    },
    {
        q: "Welcher Marineoffizier wurde berüchtigt für seine harte Führung und leitet nach dem Zeitsprung die G-5-Einheit in der Neuen Welt?",
        options: ["Tashigi", "Corby", "X Drake", "Smoker"],
        correct: 3,
        tip: "Er jagt Ruffy bereits seit Loguetown im East Blue.",
        img: "",
        difficulty: 1,
        category: "Marine",
        url: "https://opwiki.org/wiki/Smoker"
    },
    {
        q: "Wie heißt die Basis/Insel der Big Mom-Piratenbande, die komplett aus Kuchen und Süßigkeiten besteht?",
        options: ["Cacao Island", "Totland", "Whole Cake Island", "Sweet City"],
        correct: 2,
        tip: "Das dortige Hauptschloss von Big Mom ist das gewaltige Whole Cake Chateau.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Whole_Cake_Island"
    },
    {
        q: "Unter welchem Codenamen ermittelte Prinzessin Nefertari Vivi jahrelang undercover innerhalb der Barock-Firma?",
        options: ["Miss All Sunday", "Miss Valentine", "Miss Wednesday", "Miss Doublefinger"],
        correct: 2,
        tip: "In dieser Rolle wurde sie stets von ihrem Partner Mr. 9 begleitet.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Nefertari_Vivi"
    },
    {
        q: "Welche Logia-Frucht macht den Marine-Admiral Kizaru (Borsalino) extrem gefährlich und schnell?",
        options: ["Laser-Frucht", "Funkel-Frucht", "Spiegel-Frucht", "Schall-Frucht"],
        correct: 1,
        tip: "Er kann sich damit mit Lichtgeschwindigkeit fortbewegen und explosive Lichtstrahlen aus seinen Fingern und Beinen feuern.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Funkel-Frucht"
    },
    {
        q: "Wie lautet der Name von Helmeppos tyrannischem Vater, dem Ruffy und Zorro im East Blue das Handwerk legten?",
        options: ["Käpt'n Creek", "Captain Morgan", "Ratte", "Vizeadmiral Garp"],
        correct: 1,
        tip: "Er hatte einen Beil-Arm und ließ jeden bestrafen, der seiner riesigen Statue nicht genug Respekt zollte.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Morgan"
    },
    {
        q: "Wie lautet der Name des Meisterschwertes, welches die Marine-Offizierin Tashigi meistens benutzt?",
        options: ["Shusui", "Wado-Ichimonji", "Yubashiri", "Shigure"],
        correct: 3,
        tip: "Ihr erklärtes Ziel ist es, alle wertvollen Meisterschwerter (Meito) aus den Händen von Kriminellen und Piraten zu befreien.",
        img: "",
        difficulty: 1,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Shigure"
    },
    {
        q: "Welche Paramecia-Frucht nutzt Jewelry Bonney, um Wachen und Feinde auszutricksen?",
        options: ["Kind-Frucht", "Klon-Frucht", "Alterungs-Frucht", "Zeit-Frucht"],
        correct: 2,
        tip: "Sie verwandelte Marinesoldaten auf dem Sabaody Archipel entweder in weinende Babys oder in zerbrechliche Greise.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Alterungs-Frucht"
    },
    {
        q: "Auf welcher Insel wurde Ruffy von Bartholomäus Bär geschleudert, wo er auf den Kriegerstamm der Kuja traf?",
        options: ["Amazon Lily", "Momoiro", "Boin-Archipel", "Rusukaina"],
        correct: 0,
        tip: "Es ist ein von Boa Hancock regiertes Frauen-Imperium im Calm Belt.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/Amazon_Lily"
    },
    {
        q: "Wer ist der kleine, aber extrem schnelle und mutige Anführer der Tontatta-Zwergenpiraten auf Dress Rosa?",
        options: ["Gancho", "Leo", "Kabu", "Mansherry"],
        correct: 1,
        tip: "Er aß die Näh-Frucht, womit er feindliche Marinesoldaten problemlos am Boden festnähen kann.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Leo"
    },
    {
        q: "Welche seltene Antike Zoan-Frucht hat X Drake, einer der Supernovae, gegessen?",
        options: ["Dino-Frucht (Modell: Pteranodon)", "Dino-Frucht (Modell: Allosaurus)", "Elefanten-Frucht (Modell: Mammut)", "Dino-Frucht (Modell: Spinosaurus)"],
        correct: 1,
        tip: "Diese Frucht lässt ihn sich in einen gewaltigen, blauen, zweibeinigen Dinosaurier verwandeln, der auf Sabaody einen Pacifista biss.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Dino-Frucht,_Modell:_Allosaurus"
    },
    {
        q: "Welche Teufelsfrucht aß Don Quichotte Rosinante (Corazon), mit der er Trafalgar Law heimlich vor Doflamingo rettete?",
        options: ["Unsichtbarkeits-Frucht", "Lautlos-Frucht", "Schatten-Frucht", "Schlaf-Frucht"],
        correct: 1,
        tip: "Damit konnte er akustische Schutzschilde errichten, in denen kein Ton nach außen oder innen drang.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Lautlos-Frucht"
    },
    {
        q: "Wie lautet der Name von Namis adoptierter älterer Schwester, mit der sie in Kokos aufwuchs?",
        options: ["Makino", "Bellemere", "Nojiko", "Kaya"],
        correct: 2,
        tip: "Sie hat blaue Haare und tätowierte sich den Arm, um Nami mit ihrem Arlong-Tattoo nicht alleine zu lassen.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Nojiko"
    },
    {
        q: "Welche tödliche Zoan-Frucht nutzte Rob Lucci im Kampf gegen Ruffy auf Enies Lobby?",
        options: ["Katzen-Frucht (Modell: Leopard)", "Hunde-Frucht (Modell: Wolf)", "Katzen-Frucht (Modell: Säbelzahntiger)", "Katzen-Frucht (Modell: Löwe)"],
        correct: 0,
        tip: "Als Meister der Formel 6 kombiniert er seine extrem starken Tritte mit der brutalen Schnelligkeit dieser Raubtierform.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Katzen-Frucht,_Modell:_Leopard"
    },
    {
        q: "Welches Riesen-Duo bewachte über 50 Jahre lang unwissend das Haupttor der Justizinsel Enies Lobby?",
        options: ["Dorry und Brogi", "Oimo und Karsee", "Hajrudin und Loki", "Yarli und Falli"],
        correct: 1,
        tip: "Lysop öffnete ihnen die Augen, dass die Marine sie belogen hatte, woraufhin sie sich auf die Seite der Strohhüte stellten.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Oimo"
    },
    {
        q: "Welche Spezies lebt in einem riesigen Königreich 10.000 Meter unter dem Meeresspiegel direkt unterhalb der Red Line?",
        options: ["Nur Meerjungfrauen", "Fischmenschen und Meerjungfrauen", "Riesen-Fischmenschen", "Nur Seekönige"],
        correct: 1,
        tip: "Dieses Volk leidet stark unter Rassismus durch die Weltaristokraten und Menschen.",
        img: "",
        difficulty: 1,
        category: "Rassen",
        url: "https://opwiki.org/wiki/Fischmenschen"
    },
    {
        q: "Wohin wurde das Hauptquartier der Marine nach dem zweijährigen Zeitsprung verlegt, um den Piratenkaisern näher zu sein?",
        options: ["G-5", "Sabaody Archipel", "New Marineford", "Mary Joa"],
        correct: 2,
        tip: "Akainu tauschte den Standort des alten Marinefords mit der Marinebasis G-1 auf der anderen Seite der Red Line.",
        img: "",
        difficulty: 1,
        category: "Orte",
        url: "https://opwiki.org/wiki/New_Marineford"
    },
    {
        q: "Welcher Süßigkeiten-Kommandant der Big Mom-Piraten nutzte die Keks-Frucht, um gewaltige Rüstungen zu erschaffen?",
        options: ["Charlotte Katakuri", "Charlotte Smoothie", "Charlotte Oven", "Charlotte Cracker"],
        correct: 3,
        tip: "Er hasst Schmerzen über alles, weshalb er sich stets in extrem harten Kekssoldaten versteckt, die Ruffy im Kampf weich regnen lassen musste.",
        img: "",
        difficulty: 1,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Keks-Frucht"
    },
    {
        q: "Wer ist der ständige Begleiter und Schiffsarzt der Blackbeard-Piratenbande, der fast immer auf einem kranken Pferd reitet?",
        options: ["Lafitte", "Avalo Pizarro", "Vasco Shot", "Doc Q"],
        correct: 3,
        tip: "Er bot Ruffy in Mock Town einen explodierenden Apfel an, um dessen 'Schicksal' zu testen.",
        img: "",
        difficulty: 1,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Doc_Q"
    },
    {
        q: "Wie lautet der offizielle Name der Piratenbande von Kaiser Kaido?",
        options: ["Bestien-Piratenbande", "100-Bestien-Piratenbande", "Drachen-Piratenbande", "Onigashima-Piraten"],
        correct: 1,
        tip: "Ihre Kommandanten werden All-Stars genannt und die Offiziere nutzen fast ausschließlich echte oder künstliche Zoan-Früchte (SMILE).",
        img: "",
        difficulty: 1,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/100-Bestien-Piratenbande"
    },
    {
        q: "Wie lautet der Name des waffensammelnden Fuchs-Yokai in Wano Kuni (Ringo), das sich als Kriegsmönch Gyukimaru tarnte?",
        options: ["Onimaru", "Komachiyo", "Inuarashi", "Kitsune"],
        correct: 0,
        tip: "Er sammelte jahrelang auf der Oihagi-Brücke Waffen für die große Schlacht und stahl Zorro vorübergehend das Schwert Shusui.",
        img: "",
        difficulty: 1,
        category: "Tiere",
        url: "https://opwiki.org/wiki/Onimaru"
    },

    // --- SCHWIERIGKEIT: SCHWER (difficulty: 2) ---
    {
        q: "Wie heißt das Schwert, das Zorro von Hiyori im Austausch für Shusui erhielt?",
        options: ["Enma", "Wado Ichimonji", "Sandai Kitetsu", "Nidai Kitetsu"],
        correct: 0,
        tip: "Es ist das einzige Schwert, das Kaido eine Wunde zufügen konnte.",
        img: "",
        difficulty: 2,
        category: "Schwerter",
        url: "https://opwiki.org/wiki/Enma"
    },
    {
        q: "Wie lautet der Name des kleinen Bootes, mit dem Mihawk Dulacre (Falkenauge) über das Meer reist?",
        options: ["Sarg-Boot (Hitsugibune)", "Nachtfalke", "Kreuz-Galeone", "Yoru-Nami"],
        correct: 0,
        tip: "Das Boot ähnelt optisch einem Sarg und ist mit grünen Kerzen dekoriert.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Hitsugibune"
    },
    {
        q: "Wie hieß das Schwert des legendären Piratenkönigs Gol D. Roger?",
        options: ["Gryphon", "Ace", "Murakumogiri", "Rayleigh"],
        correct: 1,
        tip: "Sein Schwert teilt den Namen mit seinem leiblichen Sohn.",
        img: "",
        difficulty: 2,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Ace_(Schwert)"
    },
    {
        q: "Welche exakte Blutgruppe hat Sanji, für die im Fischmenscheninsel-Arc dringend ein Spender gesucht wurde?",
        options: ["F", "S (Rh-)", "XF", "AB"],
        correct: 1,
        tip: "Es handelt sich um eine extrem seltene Blutgruppe, weshalb keiner der Strohhüte als Spender in Frage kam.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Sanji"
    },
    {
        q: "Welche Nationalität hätte Nico Robin, wenn die Strohhutbande in der realen Welt leben würde (laut einer SBS von Oda)?",
        options: ["Französisch", "Ägyptisch", "Russisch", "Brasilianisch"],
        correct: 2,
        tip: "Ruffy wäre Brasilianer, Sanji Franzose und Zorro Japaner.",
        img: "",
        difficulty: 2,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Nico_Robin"
    },
    {
        q: "Wie lautet der Name von Boa Hancocks Piratenschiff, das von zwei riesigen Giftschlangen gezogen wird?",
        options: ["Kuja-Galeone", "Perfume Yuda", "Gorgon-Schiff", "Schlangen-Kreuzer"],
        correct: 1,
        tip: "Die Yuda-Schlangen sind so giftig, dass nicht einmal Seekönige es wagen, das Schiff anzugreifen.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Perfume_Yuda"
    },
    {
        q: "Welches der legendären 12 Drachenschwerter (Saijo O Wazamono) führte Whitebeard im Kampf?",
        options: ["Shodai Kitetsu", "Murakumogiri", "Ace", "Kikoku"],
        correct: 1,
        tip: "Es handelt sich dabei nicht um ein gewöhnliches Schwert, sondern um eine gewaltige Naginata (Schwertlanze).",
        img: "",
        difficulty: 2,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Murakumogiri"
    },
    {
        q: "Wie heißt der Gelehrte, der das Buch 'Brag Men' schrieb, in dem Nami die Geschichte von Little Garden fand?",
        options: ["Montblanc Noland", "Louis Arnot", "Clover", "Tom"],
        correct: 1,
        tip: "Er war ein Entdecker, der viele Inseln der Grandline bereiste und seine Erlebnisse dokumentierte.",
        img: "",
        difficulty: 2,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Louis_Arnot"
    },
    {
        q: "Wie lautet die exakte Seriennummer des Pacifista, in den der originale Bartholomäus Bär komplett verwandelt wurde?",
        options: ["PX-0", "PX-1", "PX-Z", "PX-King"],
        correct: 0,
        tip: "Er war der Prototyp, der seine Persönlichkeit vollständig opferte.",
        img: "",
        difficulty: 2,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Pacifista"
    },
    {
        q: "Wie lautet der wahre bürgerliche Name des Marine-Admirals Ryokugyu (Stier)?",
        options: ["Issho", "Borsalino", "Sakazuki", "Aramaki"],
        correct: 3,
        tip: "Er hat die Wald-Frucht gegessen und bewundert Flottenadmiral Akainu geradezu fanatisch.",
        img: "",
        difficulty: 2,
        category: "Marine",
        url: "https://opwiki.org/wiki/Aramaki"
    },
    {
        q: "Welche spezielle Währung wird im Kuja-Reich auf Amazon Lily verwendet?",
        options: ["Gor", "Extol", "Zeni", "Berry"],
        correct: 0,
        tip: "Im Gegensatz zur restlichen Welt hat diese Fraueninsel eine komplett eigene, isolierte Ökonomie.",
        img: "",
        difficulty: 2,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Gor"
    },
    {
        q: "Wie lautet der Name der Insel, auf der Gold Roger und Monkey D. Garp gemeinsam die legendären Rocks-Piraten besiegten?",
        options: ["Baterilla", "God Valley", "Laugh Tale", "Lodestar"],
        correct: 1,
        tip: "Die Insel wurde kurz nach diesem historischen Vorfall restlos von den Karten der Weltregierung gelöscht.",
        img: "",
        difficulty: 2,
        category: "Orte",
        url: "https://opwiki.org/wiki/God_Valley"
    },
    {
        q: "Welche seltene Teufelsfrucht hat Kinemon in Wano Kuni gegessen?",
        options: ["Feuer-Frucht", "Kleidungs-Frucht", "Schwert-Frucht", "Fuchs-Frucht"],
        correct: 1,
        tip: "Er kann durch das Auflegen eines Steins oder Blattes auf den Kopf jeder Person eine perfekte Verkleidung erschaffen.",
        img: "",
        difficulty: 2,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Kleidungs-Frucht"
    },
    {
        q: "Wie heißt das persönliche Hauptschiff der Blackbeard-Piratenbande nach dem Zeitsprung?",
        options: ["Saber of Xebec", "Darkness Revenge", "Teach's Terror", "Moby Dick II"],
        correct: 0,
        tip: "Der Name des Schiffes ist eine direkte Hommage an den berüchtigten Piratenkapitän Rocks D. Xebec.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Saber_of_Xebec"
    },
    {
        q: "Wie lautet der offizielle Titel des beliebten Comics, der in der Welt von One Piece die Taten der Marine und der Germa 66 behandelt?",
        options: ["Sora, der Krieger des Meeres", "Die fliegenden Helden", "Stealth Black", "Marine-Gerechtigkeit"],
        correct: 0,
        tip: "Trafalgar Law und X Drake kannten durch diesen Comic sogar die Fähigkeiten der Vinsmoke-Anzüge in- und auswendig.",
        img: "",
        difficulty: 2,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Sora,_der_Krieger_des_Meeres"
    },
    {
        q: "Welche spezielle Teufelsfrucht aß der Chefkoch der Big Mom-Piraten, Streusen, mit der er die Torte schuf?",
        options: ["Kuchen-Frucht", "Koch-Frucht", "Zucker-Frucht", "Mampf-Frucht"],
        correct: 1,
        tip: "Damit kann er jedes nicht lebende Objekt in Essen verwandeln, was Big Mom schon in ihrer Kindheit das Leben rettete.",
        img: "",
        difficulty: 2,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Koch-Frucht"
    },
    {
        q: "Wie lautet der wahre bürgerliche Name der Barock-Firma Agentin 'Miss Goldenweek'?",
        options: ["Marianne", "Mikita", "Zala", "Drophy"],
        correct: 0,
        tip: "Sie hat keine Teufelsfrucht gegessen, sondern nutzt hypnotisierende Farben ('Colors Trap'), um Emotionen zu manipulieren.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Marianne"
    },
    {
        q: "Welches Schwert trägt der Kapitän der Rothaar-Piratenbande, Shanks?",
        options: ["Gryphon", "Oto", "Raiu", "Durandal"],
        correct: 0,
        tip: "Es ist ein langes Säbelschwert, das er sogar nutzt, um sich mit dem stärksten Schwertkämpfer der Welt (Mihawk) zu duellieren.",
        img: "",
        difficulty: 2,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Gryphon"
    },
    {
        q: "Auf welcher Insel wurde Montblanc Noland, der als 'Lügner' in die Geschichte einging, ursprünglich geboren?",
        options: ["Jaya", "Königreich Lvneel", "Königreich Prodence", "Flevance"],
        correct: 1,
        tip: "Er war ein Entdecker und Admiral im Dienste dieses Reiches im North Blue.",
        img: "",
        difficulty: 2,
        category: "Orte",
        url: "https://opwiki.org/wiki/K%C3%B6nigreich_Lvneel"
    },
    {
        q: "Wie heißt das blutrünstige Schwert des 2. Flottenkommandanten der Blackbeard-Piraten, Shiryuu des Regens?",
        options: ["Kikoku", "Raiu", "Yoto", "Zanbato"],
        correct: 1,
        tip: "Er behauptet von diesem Meisterschwert, dass es nach Blut dürste, weshalb er als Gefängnisdirektor so viele Insassen tötete.",
        img: "",
        difficulty: 2,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Raiu"
    },
    {
        q: "Welcher CP0-Agent schaltete sich auf Befehl der 5 Weisen in den finalen Kampf zwischen Kaido und Ruffy auf Onigashima ein?",
        options: ["Rob Lucci", "Maha", "Guernica", "Gisela"],
        correct: 2,
        tip: "Er hielt Ruffy fest, was dazu führte, dass Kaido ihm einen vernichtenden Schlag verpassen konnte.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Guernica"
    },
    {
        q: "Wie lautet der Name des Reittiers von Duval, dem Anführer der Tobiuo Riders?",
        options: ["Motobaro", "Bikero", "Bison", "Gyuuki"],
        correct: 0,
        tip: "Es ist ein riesiger Bulle, der von Ruffy durch den Einsatz von Haki (damals noch unbewusst) eingeschüchtert wurde.",
        img: "",
        difficulty: 2,
        category: "Tiere",
        url: "https://opwiki.org/wiki/Motobaro"
    },
    {
        q: "Wer war der sadistische Weltaristokrat, der im East Blue das kleine Fischerboot des jungen Sabo mit einer Bazooka abschoss?",
        options: ["Sankt Charlos", "Sankt Rosward", "Sankt Jalmack", "Sankt Mjosgard"],
        correct: 2,
        tip: "Er besuchte das Königreich Goa zu einer feierlichen Inspektion und war erzürnt, dass ein gewöhnlicher Junge vor seinem Schiff kreuzte.",
        img: "",
        difficulty: 2,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Jalmack"
    },
    {
        q: "Welche exakte Teufelsfrucht hat Karasu, der Kommandant der Nordarmee der Revolutionäre, gegessen?",
        options: ["Krähen-Frucht", "Ruß-Frucht", "Asche-Frucht", "Rauch-Frucht"],
        correct: 1,
        tip: "Mit dieser Logia-Frucht kann er seinen Körper in Form von dutzenden fliegenden Krähen aus schwarzem Ruß aufteilen.",
        img: "",
        difficulty: 2,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Ru%C3%9F-Frucht"
    },
    {
        q: "Wie heißt das massive Schiff der Sonnen-Piratenbande, das von Fisher Tiger geführt wurde?",
        options: ["Sun Pride", "Snapper Head", "Noah", "Sea Tiger"],
        correct: 1,
        tip: "Es war ein großes rotes Schiff mit dem Kopf eines Schnappers als Galionsfigur, das später von der Marine versenkt wurde.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Snapper_Head"
    },
    {
        q: "Wie lautet der Name des Schiffes der Neuen Riesenkrieger-Piratenbande unter der Führung von Hajrudin?",
        options: ["Naglfar", "Yggdrasil", "Midgard", "Great Elbaf"],
        correct: 0,
        tip: "Der Name des Schiffes entstammt der nordischen Mythologie, was perfekt zum Wikinger-Thema von Elban passt.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Naglfar"
    },
    {
        q: "Wie hieß der frühere Marine-Direktor der CP9, der auch der Vater von Spandam ist?",
        options: ["Spandine", "Buster", "Kong", "Kurokawa"],
        correct: 0,
        tip: "Er leitete damals den Buster Call auf die Insel Ohara ein und war genauso feige wie sein Sohn.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Spandine"
    },
    {
        q: "Welcher hochrangige Marine-Vizeadmiral nutzt acht Schwerter gleichzeitig, die durch seine Spinnen-Kräfte gehalten werden?",
        options: ["Momonga", "Doberman", "Onigumo", "Bastille"],
        correct: 2,
        tip: "Er legte in Marineford sogar dem Phönix Marco Seesteinhandschellen an.",
        img: "",
        difficulty: 2,
        category: "Marine",
        url: "https://opwiki.org/wiki/Onigumo"
    },
    {
        q: "Wer von diesen Charakteren hat die Teufelsfrucht: Tonnen-Frucht (Ton Ton no Mi) gegessen?",
        options: ["Miss Valentine", "Machvise", "Burgess", "Avalo Pizarro"],
        correct: 1,
        tip: "Nicht zu verwechseln mit der Kilo-Frucht! Dieser massige Kämpfer der Donquichotte-Familie zerschmetterte in Dress Rosa den Riesen Hajrudin.",
        img: "",
        difficulty: 2,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Tonnen-Frucht"
    },
    {
        q: "Welcher Kommandant der 2. Division der Whitebeard-Piratenbande war der direkte Vorgänger von Puma D. Ace?",
        options: ["Marshall D. Teach", "Thatch", "Kozuki Oden", "Izou"],
        correct: 2,
        tip: "Er wurde von Whitebeard als 'kleiner Bruder' an Bord genommen und war der Samurai, der das Enma führte.",
        img: "",
        difficulty: 2,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Kozuki_Oden"
    },
    {
        q: "Zu welcher exakten Rasse gehört Dellinger aus der Donquichotte-Familie?",
        options: ["Mink-Mensch-Mischling", "Kampffisch-Halbfischmensch", "Hai-Fischmensch", "Zwerg"],
        correct: 1,
        tip: "Deshalb besitzt er ausfahrbare Hörner, spitze Zähne und eine Finne auf dem Rücken, obwohl er wie ein normaler Junge aussieht.",
        img: "",
        difficulty: 2,
        category: "Rassen",
        url: "https://opwiki.org/wiki/Dellinger"
    },
    {
        q: "Welcher König regiert das kleine 'Königreich Prodence', der für seinen unglaublich zerstörerischen 'King Punch' bekannt ist?",
        options: ["Riku Doldo III.", "Elizabello II.", "Nefertari Kobra", "Garrack"],
        correct: 1,
        tip: "Sein spezieller Schlag braucht eine Stunde Aufwärmzeit, kann aber laut Gerüchten sogar einen Kaiser bezwingen.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Elizabello_II."
    },
    {
        q: "Wie heißt der CP7-Agent, der im Seezug Puffing Tom gegen Sanji kämpfte und den absurden 'Ramen-Kenpo' (Nudel-Kampfstil) nutzte?",
        options: ["Nero", "Wanze", "Jerry", "T-Bone"],
        correct: 1,
        tip: "Er formte Rüstungen und Waffen aus Nudeln, die er aus seiner Nase schoss, was Sanji als Koch extrem wütend machte.",
        img: "",
        difficulty: 2,
        category: "Organisationen",
        url: "https://opwiki.org/wiki/Wanze"
    },
    {
        q: "Welche exakte Nummer trug die Marinebasis im East Blue (Shells Town), die von Käpt'n Morgan geleitet wurde?",
        options: ["Marinebasis 1", "Marinebasis 77", "Marinebasis 153", "Marinebasis 0"],
        correct: 2,
        tip: "Es war die erste offizielle Basis der Marine, in die Ruffy in der Serie eindrang, um Zorro zu rekrutieren.",
        img: "",
        difficulty: 2,
        category: "Marine",
        url: "https://opwiki.org/wiki/Marinebasis_153"
    },
    {
        q: "Welcher Professor und Chefarchäologe leitete in Ohara die verbotene Forschung an den Poneglyphen?",
        options: ["Professor Kleeblatt (Clover)", "Professor Olvia", "Dr. Tsukimi", "Dr. Vegapunk"],
        correct: 0,
        tip: "Er hatte durch seine Forschung den wahren Namen des Antiken Königreichs herausgefunden, wurde aber erschossen, bevor er ihn aussprechen durfte.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Kleeblatt"
    },
    {
        q: "Wie lautet der Name des gigantischen Riesenhundes, auf dem der Priester Ohm in Skypia in den Kampf reitet?",
        options: ["Holy", "Gedatsu", "Nola", "Chou-Chou"],
        correct: 0,
        tip: "Der Hund ist extrem gehorsam und befolgt jeden Befehl – ironischerweise auch dann, wenn der Gegner (wie Zorro) den Befehl gibt.",
        img: "",
        difficulty: 2,
        category: "Tiere",
        url: "https://opwiki.org/wiki/Holy"
    },
    {
        q: "Wer entwarf den Strohhut-Jolly-Roger in seiner endgültigen Form, so wie er auf dem Segel zu sehen ist?",
        options: ["Ruffy", "Lysop", "Sanji", "Franky"],
        correct: 1,
        tip: "Ruffy hatte anfangs eine sehr grobe und furchtbare Version auf das Segel gemalt, die dann professionell korrigiert wurde.",
        img: "",
        difficulty: 2,
        category: "Strohhutbande",
        url: "https://opwiki.org/wiki/Strohhut-Bande"
    },
    {
        q: "Zu welcher Tierart gehört der sprechende Modedesigner Pappag, der mit Camie reist?",
        options: ["Ein Oktopus", "Eine Krabbe", "Ein Seestern", "Ein Seepferdchen"],
        correct: 2,
        tip: "Er lernte nur sprechen, weil er in seiner Jugend fälschlicherweise dachte, er sei ein Mensch.",
        img: "",
        difficulty: 2,
        category: "Rassen",
        url: "https://opwiki.org/wiki/Pappag"
    },
    {
        q: "Wie heißt der gigantische eiserne Roboter, der vor 200 Jahren Mary Joa angriff und in Egghead ruhte?",
        options: ["Pluton", "Emet", "PX-0", "Gotteskrieger"],
        correct: 1,
        tip: "Er erwachte nur dann wieder zum Leben, wenn er den Rhythmus der Trommeln der Befreiung (Joy Boy) hörte.",
        img: "",
        difficulty: 2,
        category: "Allgemein",
        url: "https://opwiki.org/wiki/Emet"
    },
    {
        q: "Wie hieß das zweite Schwert von Kozuki Oden, das er neben Enma an seinen Sohn Momonosuke vererbte?",
        options: ["Wado-Ichimonji", "Ame no Habakiri", "Nidai Kitetsu", "Shusui"],
        correct: 1,
        tip: "Es ist ein Schwert der 21 Meisterschwerter (O Wazamono), das laut Legenden den Himmel spalten kann.",
        img: "",
        difficulty: 2,
        category: "Waffen",
        url: "https://opwiki.org/wiki/Ame_no_Habakiri"
    },
    {
        q: "Auf welcher riesigen, sich im Bau befindenden Brücke landete Nico Robin nach dem Vorfall auf dem Sabaody Archipel?",
        options: ["Tequila Wolf", "Oud", "Bier-Weg", "East-Blue-Pass"],
        correct: 0,
        tip: "Sie wurde dort zunächst von den Wachen der Weltregierung versklavt, aber später von den Revolutionären befreit.",
        img: "",
        difficulty: 2,
        category: "Orte",
        url: "https://opwiki.org/wiki/Tequila_Wolf"
    },
    {
        q: "Welcher Kommandant der Whitebeard-Piratenbande (6. Division) aß die Taschen-Frucht (Poke Poke no Mi)?",
        options: ["Izou", "Rakuyo", "Blamenco", "Namur"],
        correct: 2,
        tip: "Er hat genähte Taschen in seinem Körper, aus denen er riesige Waffen wie einen gewaltigen Hammer ziehen kann.",
        img: "",
        difficulty: 2,
        category: "Teufelsfrüchte",
        url: "https://opwiki.org/wiki/Taschen-Frucht"
    },
    {
        q: "Aus wie vielen Piraten besteht die riesige Strohhut-Großflotte exakt nach ihrer Gründung auf Dress Rosa?",
        options: ["4.000", "5.640", "8.000", "10.000"],
        correct: 1,
        tip: "Diese Armee schwor Ruffy bedingungslose Treue, trank den Sake der Vaterschaft und teilt sich auf 7 Kapitäne auf.",
        img: "",
        difficulty: 2,
        category: "Piratenbanden",
        url: "https://opwiki.org/wiki/Strohhut-Gro%C3%9Fflotte"
    },
    {
        q: "Welcher Fischmensch war der 8. Divisions-Kommandant der Whitebeard-Piratenbande?",
        options: ["Jinbei", "Hack", "Namur", "Karma"],
        correct: 2,
        tip: "Er ist ein Hai-Fischmensch und kämpft meist unbewaffnet mit extremer Beißkraft.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Namur"
    },
    {
        q: "Wie lautet der Name von Big Moms Hauptschiff, das eine riesige singende Galionsfigur besitzt?",
        options: ["Queen Mama Chanter", "Tarteship", "Sweet King", "Linlins Rache"],
        correct: 0,
        tip: "Das Schiff ist ein Homie, der durch Big Moms Seelen-Frucht zum Leben erweckt wurde und fröhlich vor sich hin singt.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Queen_Mama_Chanter"
    },
    {
        q: "Wie lautet der offizielle Name der gigantischen Schlange (Herrin der Wälder), die auf Skypia lebt?",
        options: ["Kashigami", "Nola", "Salome", "Yamata"],
        correct: 1,
        tip: "Sie ist die Enkelin der Schlange Kashigami, die 400 Jahre zuvor von Noland und Kargara verehrt wurde.",
        img: "",
        difficulty: 2,
        category: "Tiere",
        url: "https://opwiki.org/wiki/Nola"
    },
    {
        q: "Wie hieß der Bürgermeister der Orange-Stadt im East Blue, der die Stadt tapfer gegen Buggy verteidigen wollte?",
        options: ["Boodle", "Woop Slap", "Iceburg", "Morgans"],
        correct: 0,
        tip: "Er trägt eine markante Rüstung und hat einen auffälligen Haarschopf, der wie das Fell eines Pudels geformt ist.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Boodle"
    },
    {
        q: "Welcher Kapitän ist der Navigator der Blackbeard-Piratenbande und infiltrierte lautlos Mary Joa?",
        options: ["Lafitte", "Jesus Burgess", "Van Augur", "Doc Q"],
        correct: 0,
        tip: "Er sieht aus wie ein Pantomime, tanzt Stepptanz und trägt den Beinamen 'Demon Sheriff'.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Lafitte"
    },
    {
        q: "Wie heißt das Schiff der Donquichotte-Piratenbande (Doflamingos Familie)?",
        options: ["Numancia Flamingo", "Dress Rosa Express", "Smile Factory", "Joker's Pride"],
        correct: 0,
        tip: "Es ist ein auffälliges, rosafarbenes Schiff mit einer riesigen Flamingo-Galionsfigur, das eine Sonnenbrille trägt.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Numancia_Flamingo"
    },
    {
        q: "Wer war der allererste Charakter in der Serie, der offiziell die Techniken der Formel 6 (Rokushiki) nutzte, ohne Mitglied der CP9 zu sein?",
        options: ["Koby", "Corby", "Nero", "T-Bone"],
        correct: 2,
        tip: "Er war das neueste Mitglied der CP9 auf dem Seezug, beherrschte aber nur vier der sechs Techniken.",
        img: "",
        difficulty: 2,
        category: "Charaktere",
        url: "https://opwiki.org/wiki/Nero"
    },
    {
        q: "Wie lautet der Name des Schiffes der Beautiful-Piratenbande unter Kapitän Cavendish?",
        options: ["White Charger", "Schlafender Löwe des Waldes", "Rose of Versailles", "Bourgeoisie"],
        correct: 1,
        tip: "Das Schiff ist extrem luxuriös gestaltet, da Cavendish stark auf sein Aussehen und seine PR achtet.",
        img: "",
        difficulty: 2,
        category: "Schiffe",
        url: "https://opwiki.org/wiki/Schlafender_L%C3%B6we_des_Waldes"
    },
];
