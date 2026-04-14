const alleFragen = [
    {
        "q": "Wie lautet der wahre Name von 'Mr. 2' Bon Curry?",
        "options": ["Bentham", "Galdino", "Daz Bonez", "Zala"],
        "correct": 0,
        "tip": "Er ist ein Meister des Okama Kenpo."
    },
    {
        "q": "Welches dieser Schwerter gehört NICHT zu den 21 Königsschwertern (O Wazamono)?",
        "options": ["Shusui", "Wado Ichimonji", "Enma", "Sandai Kitetsu"],
        "correct": 3,
        "tip": "Eines davon ist 'nur' ein Meisterschwert (Ryo Wazamono)."
    },
    {
        "q": "Wie heißt das Schiff der Rumbar-Piratenbande, auf dem Brook segelte?",
        "options": ["Vira", "Saber of Vrede", "Vincit", "Es gibt keinen offiziellen Namen"],
        "correct": 3,
        "tip": "Oft werden Schiffe in der Serie nicht explizit benannt, wenn sie keine tragende Rolle spielen."
    },
    {
        "q": "Wie viele Söhne hat Big Mom (Charlotte Linlin)?",
        "options": ["39", "46", "43", "50"],
        "correct": 1,
        "tip": "Sie hat insgesamt 85 Kinder."
    },
    {
        "q": "Was ist die Blutgruppe von Sanji?",
        "options": ["F", "XF", "S RH-", "X"],
        "correct": 2,
        "tip": "Diese seltene Blutgruppe wurde auf der Fischmenschen-Insel zum Problem."
    },
    {
        "q": "Wie heißt der Entdecker, der das Buch 'Brag Men' schrieb, das auf Little Garden gefunden wurde?",
        "options": ["Louis Arnot", "Montblanc Noland", "Willie Gallon", "Terry Gilteo"],
        "correct": 0,
        "tip": "Der Name wird kurz im Loguetown oder Little Garden Arc erwähnt."
    },
    {
        "q": "Welchen Rang bekleidete Vergo innerhalb der Marine, bevor sein Verrat bekannt wurde?",
        "options": ["Vizeadmiral", "Konteradmiral", "Kommodore", "Flottenadmiral"],
        "correct": 0,
        "tip": "Er war der Leiter von G-5."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Admiral Fujitora?",
        "options": ["Funi Funi no Mi", "Zushi Zushi no Mi", "Gura Gura no Mi", "Gravi Gravi no Mi"],
        "correct": 1,
        "tip": "Es beschreibt das Geräusch von Stampfen oder Druck."
    },
    {
        "q": "Wer war der vierte Kommandant der Whitebeard-Piratenbande?",
        "options": ["Jozu", "Vista", "Thatch", "Rakuyo"],
        "correct": 2,
        "tip": "Er wurde von Blackbeard ermordet."
    },
    {
        "q": "Wie heißt die Insel, auf der sich das antike Königreich befunden haben soll (laut Fan-Theorien basierend auf Professor Klees Hinweisen)?",
        "options": ["Raftel", "Ohara", "Vira", "Der Name wurde noch nicht enthüllt"],
        "correct": 3,
        "tip": "Professor Klee wurde erschossen, bevor er den Namen aussprechen konnte."
    },
    {
        "q": "Wie lautet der Name von Trafalgar Laws Schwert?",
        "options": ["Kikoku", "Shisui", "Raijin", "Nidai Kitetsu"],
        "correct": 0,
        "tip": "Es bedeutet 'Dämonenschrei'."
    },
    {
        "q": "Welches Kopfgeld hatte Nico Robin, als sie zum ersten Mal gesucht wurde?",
        "options": ["80.000.000 Berry", "79.000.000 Berry", "77.000.000 Berry", "100.000.000 Berry"],
        "correct": 1,
        "tip": "Sie war damals erst 8 Jahre alt."
    },
    {
        "q": "Wie heißt der Vater von Nefertari Vivi?",
        "options": ["Cobra", "Chaka", "Pell", "Toto"],
        "correct": 0,
        "tip": "Er ist der 12. König von Alabasta."
    },
    {
        "q": "Welche Farbe hat die Sprechblase von Gott Enel laut Eiichiro Oda im SBS?",
        "options": ["Gelb", "Weiß", "Blassblau", "Es gibt keine spezielle Farbe"],
        "correct": 3,
        "tip": "In One Piece haben Sprechblasen in der Regel keine Farben, außer bei speziellen Soundeffekten."
    },
    {
        "q": "Wie heißt das riesige Walross, das mit den CP9-Agenten befreundet war?",
        "options": ["Hattori", "Stefan", "Tyranosaurus", "Es war ein Seekönig"],
        "correct": 2,
        "tip": "Eigentlich war es eine Maus in Iceburgs Tasche, aber die Frage zielt auf ein Easter Egg ab."
    },
    {
        "q": "Welches Tier repräsentiert Sir Crocodile innerhalb der ehemaligen Sieben Samurai?",
        "options": ["Krokodil", "Wüstenfuchs", "Skorpion", "Falke"],
        "correct": 0,
        "tip": "Sein Name macht es offensichtlich."
    },
    {
        "q": "Wie hieß die Sklavin, die Fisher Tiger bat, sie nach Hause zu bringen?",
        "options": ["Koala", "Sugar", "Monet", "Rebecca"],
        "correct": 0,
        "tip": "Sie wurde später ein Mitglied der Revolutionsarmee."
    },
    {
        "q": "Auf welcher Insel trainierte Chopper während des Zeitsprungs?",
        "options": ["Boin-Archipel", "Momoiro", "Turino", "Kuraigana"],
        "correct": 2,
        "tip": "Das 'Königreich der Vögel'."
    },
    {
        "q": "Wer war das erste Mitglied der CP9, das von Ruffy besiegt wurde?",
        "options": ["Blueno", "Lucci", "Jabura", "Kaku"],
        "correct": 0,
        "tip": "Der Kampf fand auf dem Dach des Justizturms statt."
    },
    {
        "q": "Wie viele Glockenschläge gab Ruffy am Ende des Krieges in Marineford ab?",
        "options": ["12", "16", "8", "20"],
        "correct": 1,
        "tip": "Es war eine Nachricht an seine Freunde."
    },
    {
        "q": "Wie lautet der Name von Gol D. Rogers Schiff?",
        "options": ["Oro Jackson", "Saber of Vrede", "Red Force", "Queen Mama Chanter"],
        "correct": 0,
        "tip": "Es wurde aus dem Holz des Schatzbaums Adam gebaut."
    },
    {
        "q": "Wer ist der biologische Vater von Portgas D. Ace?",
        "options": ["Monkey D. Garp", "Whitebeard", "Gol D. Roger", "Monkey D. Dragon"],
        "correct": 2,
        "tip": "Er hasste seinen Vater zutiefst."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Brook?",
        "options": ["Yomi Yomi no Mi", "Horo Horo no Mi", "Kage Kage no Mi", "Suke Suke no Mi"],
        "correct": 0,
        "tip": "Yomi bedeutet Unterwelt."
    },
    {
        "q": "Welches Kopfgeld hatte Fisher Tiger?",
        "options": ["230.000.000 Berry", "150.000.000 Berry", "400.000.000 Berry", "keines"],
        "correct": 0,
        "tip": "Er war der Anführer der Sonnen-Piratenbande."
    },
    {
        "q": "Wie heißt die Technik, mit der Zorro drei Schwerter gleichzeitig nutzt?",
        "options": ["Ittoryu", "Nitoryu", "Santoryu", "Kyotoryu"],
        "correct": 2,
        "tip": "San bedeutet Drei."
    },
    {
        "q": "Wer ist der 'Vize-Kapitän' der Strohhutbande (offiziell laut Databooks oft debattiert, aber wer wird meist so genannt)?",
        "options": ["Zorro", "Sanji", "Jinbei", "Nami"],
        "correct": 0,
        "tip": "Er war das erste Mitglied."
    },
    {
        "q": "In welcher Stadt wurde Gold Roger hingerichtet?",
        "options": ["Water 7", "Loguetown", "Marie Joie", "Marineford"],
        "correct": 1,
        "tip": "Die Stadt des Anfangs und des Endes."
    },
    {
        "q": "Wie heißt der Anführer der Revolutionsarmee?",
        "options": ["Sabo", "Dragon", "Ivankov", "Kuma"],
        "correct": 1,
        "tip": "Er ist Ruffys Vater."
    },
    {
        "q": "Welches Mitglied der Strohhutbande stammt aus dem North Blue?",
        "options": ["Zorro", "Ruffy", "Sanji", "Robin"],
        "correct": 2,
        "tip": "Er hat eine Verbindung zum Germa 66."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Buggy dem Clown?",
        "options": ["Bara Bara no Mi", "Sube Sube no Mi", "Bomu Bomu no Mi", "Hana Hana no Mi"],
        "correct": 0,
        "tip": "Sie erlaubt es ihm, seinen Körper zu trennen."
    },
    {
        "q": "Wie heißt das Schiff aus dem South Blue, das in der Jaya-Saga vom Himmel auf die Strohhüte fiel?",
        "options": ["St. Briss", "St. Lucia", "Victoria Punk", "Blissful Mary"],
        "correct": 0,
        "tip": "Es war über 200 Jahre alt."
    },
    {
        "q": "Welches Alter gab Dr. Kuleha bei ihrem ersten Auftritt an?",
        "options": ["141 Jahre", "139 Jahre", "150 Jahre", "128 Jahre"],
        "correct": 0,
        "tip": "Sie fragt oft, ob man das Geheimnis ihrer Jugend wissen will."
    },
    {
        "q": "Wie heißt der riesige Goldfisch, der Inseln frisst und auf Little Garden erwähnt wurde?",
        "options": ["Laboon", "Inselfresser", "Lord of the Coast", "Nola"],
        "correct": 1,
        "tip": "Dorry und Brogy haben ihn besiegt."
    },
    {
        "q": "Welches ist das Lieblingsessen von Marshall D. Teach (Blackbeard)?",
        "options": ["Scharfe Hühnchenteile", "Kirschkuchen", "Fleisch am Knochen", "Gegrillter Fisch"],
        "correct": 1,
        "tip": "Er stritt sich mit Ruffy in Mock Town darüber."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Señor Pink?",
        "options": ["Sui Sui no Mi", "Hira Hira no Mi", "Beta Beta no Mi", "Ton Ton no Mi"],
        "correct": 0,
        "tip": "Sui kommt vom englischen 'Swim'."
    },
    {
        "q": "Wer war der ursprüngliche Besitzer der Suke Suke no Mi (Unsichtbarkeits-Frucht) vor Shiryu?",
        "options": ["Lafitte", "Absalom", "Vasco Shot", "Pizarro"],
        "correct": 1,
        "tip": "Er war ein Kommandant auf Thriller Bark."
    },
    {
        "q": "Wie lautet der Name von Brooks früherem Kapitän bei den Rumbar-Piraten?",
        "options": ["Yorki", "Zeff", "Bellett", "Mika"],
        "correct": 0,
        "tip": "Er starb an einer Krankheit im Calm Belt."
    },
    {
        "q": "In welcher FPS (SBS) wurde das Geburtsdatum von Ruffy (5. Mai) offiziell bestätigt?",
        "options": ["Band 8", "Band 15", "Band 4", "Band 22"],
        "correct": 0,
        "tip": "Es war eine der ganz frühen Leserfragen."
    },
    {
        "q": "Welche Tierart ist 'Stefan', das Haustier von Whitebeard (laut SBS)?",
        "options": ["Ein Hund", "Ein Löwe", "Ein kleiner Wal", "Er ist ein Mensch mit einer Frucht"],
        "correct": 0,
        "tip": "Er hat den gleichen markanten Schnurrbart wie sein Herrchen."
    },
    {
        "q": "Wie heißt die Technik, mit der Sanji Feuer an seinen Beinen erzeugt?",
        "options": ["Diable Jambe", "Rankyaku", "Ifrit Jambe", "Red Hawk"],
        "correct": 0,
        "tip": "Französisch für 'Teufelsbein'."
    },
    {
        "q": "Wie viele Kilogramm kann Miss Valentine mit ihrer Kilo-Kilo-Frucht maximal wiegen?",
        "options": ["1.000 kg", "10.000 kg", "5.000 kg", "100.000 kg"],
        "correct": 1,
        "tip": "Es sind genau zehntausend."
    },
    {
        "q": "Wie heißt das Schwert von Vizeadmiral Tashigi, das zu den 50 Meistergradschwertern gehört?",
        "options": ["Shigure", "Kashu", "Yamaoka", "Hana Arashi"],
        "correct": 0,
        "tip": "Es bedeutet 'Herbstregen'."
    },
    {
        "q": "Wer ist der Architekt, der Tequila Wolf entworfen hat?",
        "options": ["Ein unbekannter Weltaristokrat", "Sklaven über 700 Jahre", "Vegapunk", "Tom"],
        "correct": 1,
        "tip": "Die Brücke wird seit 700 Jahren gebaut."
    },
    {
        "q": "Welches Tier ist laut Oda das Vorbild für das Aussehen von Sir Crocodile?",
        "options": ["Ein Krokodil", "Ein italienischer Mafia-Boss", "Ein Wüstenfuchs", "Ein Skorpion"],
        "correct": 0,
        "tip": "Das war eine Fangfrage, es ist tatsächlich das Krokodil."
    },
    {
        "q": "Wie heißt der Anführer der Tontatta-Zwerge?",
        "options": ["Leo", "Gancho", "Mansherry", "Wicca"],
        "correct": 1,
        "tip": "Er ist der 'Tatta-Chef' (König)."
    },
    {
        "q": "Welche Blume repräsentiert Nico Robin laut Oda?",
        "options": ["Orchidee", "Dahlie", "Rose", "Lilie"],
        "correct": 1,
        "tip": "Oda ordnet jedem Strohhut eine Blume zu."
    },
    {
        "q": "Wie hießen die drei Söhne von Neptun?",
        "options": ["Fukaboshi, Ryuboshi, Manboshi", "Aladdin, Jinbei, Fisher", "Hody, Dosun, Zeo", "Ichiji, Niji, Yonji"],
        "correct": 0,
        "tip": "Sie sind Haifisch-Wassermänner."
    },
    {
        "q": "Wie heißt die Insel, auf der Blackbeard seine Operationsbasis im New World hat?",
        "options": ["Fullalead (Hachinosu)", "Raijin", "Risky Red", "Karai Bari"],
        "correct": 0,
        "tip": "Man nennt sie auch die Pirateninsel."
    },
    {
        "q": "Welche Nummer trägt der Pacifista, der von Bartholomäus Bär als 'Original' bezeichnet wird?",
        "options": ["PX-0", "PX-1", "PX-Z", "PX-Alpha"],
        "correct": 0,
        "tip": "Er ist der Prototyp."
    },
    {
        "q": "Wie heißt der Fischmensch, der das Dojo leitet, in dem Koala Karate lernte?",
        "options": ["Hack", "Jinbei", "Arlong", "Kuroobi"],
        "correct": 0,
        "tip": "Er ist ein enger Vertrauter von Sabo."
    },
    {
        "q": "Was war das erste Kopfgeld von Bepo (Laws Navigator)?",
        "options": ["500 Berry", "50 Berry", "1.000 Berry", "100 Berry"],
        "correct": 1,
        "tip": "Genau wie Chopper wird er als Haustier abgestempelt."
    },
    {
        "q": "Wie heißt der legendäre Schmied, der die Schwerter Enma und Wado Ichimonji erschuf?",
        "options": ["Shimotsuki Kozaburo", "Kozuki Sukiyaki", "Shimotsuki Ushimaru", "Tenguyama Hitetsu"],
        "correct": 0,
        "tip": "Er verließ Wano Kuni vor 50 Jahren illegal."
    },
    {
        "q": "Welche Teufelsfrucht gegessen zu haben, behauptete Kin'emon fälschlicherweise (da er den Namen nicht kannte)?",
        "options": ["Fuku Fuku no Mi", "Kleidungsmagie", "Garment-Frucht", "Kitsu-Kitsu no Mi"],
        "correct": 0,
        "tip": "Er nennt seine Kräfte 'Magie'."
    },
    {
        "q": "Wie heißt die riesige Schlange auf Skypia?",
        "options": ["Nola", "Kashigami", "Jörmungandr", "Sura"],
        "correct": 0,
        "tip": "Sie ist die Enkelin von Kashigami."
    },
    {
        "q": "Wer ist der 'Gott der Berge' in Wano Kuni?",
        "options": ["Ein riesiges weißes Wildschwein", "Oden", "Kaido", "Ein Drache"],
        "correct": 0,
        "tip": "Oden spaltete ihn in zwei Teile."
    },
    {
        "q": "Wie heißt der vierte Sohn der Vinsmoke-Familie?",
        "options": ["Yonji", "Sanji", "Niji", "Ichiji"],
        "correct": 0,
        "tip": "Sein Beiname ist 'Winch Green'."
    },
    {
        "q": "Welches Mitglied der Weltregierung trägt den Titel 'Erzähler des Rechts' (Justizminister)?",
        "options": ["Baskerville", "Spandam", "Kong", "Magellan"],
        "correct": 0,
        "tip": "Es ist eigentlich ein dreiköpfiger (oder drei Personen) Riese."
    },
    {
        "q": "Wie heißt das Schiff von Capone 'Gang' Bege?",
        "options": ["Nostra Castello", "Big Father", "Queen Mama Chanter", "Grösser Vater"],
        "correct": 0,
        "tip": "Es sieht aus wie eine Festung auf dem Wasser."
    },
    {
        "q": "Was ist die Besonderheit der 'Kuro Kabuto', Lysops Waffe?",
        "options": ["Sie kann Pop Greens verschießen", "Sie wächst, wenn sie Wasser bekommt", "Sie ist aus Seestein", "Sie hat eine Teufelsfrucht gegessen"],
        "correct": 1,
        "tip": "Es ist eine lebende Pflanze."
    },
    {
        "q": "Wie heißt die Insel, auf der Ruffy Gear 4 trainierte?",
        "options": ["Rusukaina", "Kuraigana", "Momoiro", "Boin"],
        "correct": 0,
        "tip": "Dort herrschen 48 Jahreszeiten pro Jahr."
    },
    {
        "q": "Wie lautet der Name von Gol D. Rogers Vize-Kapitän?",
        "options": ["Silvers Rayleigh", "Scopper Gaban", "Douglas Bullet", "Kozuki Oden"],
        "correct": 0,
        "tip": "Der 'Dunkle König'."
    },
    {
        "q": "Welches Kopfgeld hat 'God' Lysop nach den Ereignissen in Dressrosa?",
        "options": ["200.000.000 Berry", "500.000.000 Berry", "30.000.000 Berry", "150.000.000 Berry"],
        "correct": 0,
        "tip": "Doflamingo setzte 5 Sterne auf ihn aus."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von X. Drake?",
        "options": ["Ryu Ryu no Mi, Modell: Allosaurus", "Zou Zou no Mi, Modell: Mamut", "Ryu Ryu no Mi, Modell: Pteranodon", "Kura Kura no Mi"],
        "correct": 0,
        "tip": "Eine antike Zoan-Frucht."
    },
    {
        "q": "Wer ist der Kommandant der 1. Division der Strohhut-Großflotte?",
        "options": ["Cavendish", "Bartolomeo", "Sai", "Hajrudin"],
        "correct": 0,
        "tip": "Der Anführer der Schön-Piraten."
    },
    {
        "q": "Wie heißt der Baum, aus dem das Holz für die Thousand Sunny stammt?",
        "options": ["Schatzbaum Adam", "Wissensbaum", "Sonnenbaum Eve", "Daigo-Baum"],
        "correct": 0,
        "tip": "Es ist das stärkste Holz der Welt."
    },
    {
        "q": "Wie heißt der Vater von Franky?",
        "options": ["Ein unbekannter Pirat", "Tom", "Vegapunk", "Queen"],
        "correct": 0,
        "tip": "Er wurde von Pirateneltern auf Water 7 zurückgelassen; ihr Name ist unbekannt."
    },
    {
        "q": "Wie heißt die Technik, mit der Nami das Wetter kontrolliert?",
        "options": ["Clima-Tact", "Weather Ball", "Mirage Tempo", "Thunder Breed Tempo"],
        "correct": 0,
        "tip": "Usopp hat die erste Version gebaut."
    },
    {
        "q": "Welche Farbe hat das Haki der Rüstung (Busoshoku) meistens in der visuellen Darstellung des Anime?",
        "options": ["Schwarz/Violett", "Blau", "Gold", "Rot"],
        "correct": 0,
        "tip": "Es wird oft als 'Verhärtung' bezeichnet."
    },
    {
        "q": "Wie heißt das Dorf, in dem Zorro aufgewachsen ist?",
        "options": ["Shimotsuki", "Fuusha", "Syrup", "Cocoyashi"],
        "correct": 0,
        "tip": "Benannt nach einem berühmten Clan aus Wano."
    },
    {
        "q": "Welchen Titel trägt Dracule Mihawk?",
        "options": ["Bester Schwertkämpfer der Welt", "König der Diebe", "Vize-Admiral", "Gott des Schwertes"],
        "correct": 0,
        "tip": "Er ist Zorros großes Ziel."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Boa Hancock?",
        "options": ["Mero Mero no Mi", "Goro Goro no Mi", "Sube Sube no Mi", "Horo Horo no Mi"],
        "correct": 0,
        "tip": "Mero Mero ist ein lautmalerischer Ausdruck für 'verliebt sein'."
    },
    {
        "q": "Wie viele Poneglyphen gibt es insgesamt auf der Welt?",
        "options": ["30", "20", "4", "10"],
        "correct": 0,
        "tip": "Davon sind 9 Informations-Poneglyphen und 4 Road-Poneglyphen."
    },
    {
        "q": "Wer ist der 'Vater' von Yamato?",
        "options": ["Kaido", "Oden", "Whitebeard", "Shanks"],
        "correct": 0,
        "tip": "Yamato identifiziert sich jedoch als Oden."
    },
    {
        "q": "Wie heißt die Insel der Frauen?",
        "options": ["Amazon Lily", "Momoiro", "Estra", "Rusukaina"],
        "correct": 0,
        "tip": "Sie liegt im Calm Belt."
    },
    {
        "q": "Welches Instrument spielt Brook am liebsten?",
        "options": ["Geige", "Klavier", "Gitarre", "Flöte"],
        "correct": 1,
        "tip": "Er spielte 'Binks' Sake' darauf, während seine Crew starb."
    },
    {
        "q": "Wie heißt der Anführer der CP0?",
        "options": ["Rob Lucci", "Spandam", "Kaku", "Stussy"],
        "correct": 0,
        "tip": "Er war früher der stärkste Agent der CP9."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Trafalgar Law?",
        "options": ["Ope Ope no Mi", "Ito Ito no Mi", "Guru Guru no Mi", "Shambles no Mi"],
        "correct": 0,
        "tip": "Ope steht für Operation."
    },
    {
        "q": "Wer war der erste Charakter, der das 'Haki des Königs' (Haoshoku) im Anime einsetzte?",
        "options": ["Shanks", "Ruffy", "Rayleigh", "Whitebeard"],
        "correct": 0,
        "tip": "Er rettete Ruffy vor dem Seekönig."
    },
    {
        "q": "Wie heißt die Hauptstadt von Wano Kuni?",
        "options": ["Blumenhauptstadt", "Kuri", "Udon", "Ebisu"],
        "correct": 0,
        "tip": "Dort residierte der Shogun."
    },
    {
        "q": "Wer hat die Teufelsfrucht von Portgas D. Ace nach seinem Tod gegessen?",
        "options": ["Sabo", "Jesus Barges", "Ruffy", "Blackbeard"],
        "correct": 0,
        "tip": "Er gewann sie beim Turnier im Kolosseum."
    },
    {
        "q": "Wie heißt die Organisation, die von Crocodile in Alabasta gegründet wurde?",
        "options": ["Baroque Works", "Cross Guild", "CP9", "Thriller Bark"],
        "correct": 0,
        "tip": "Ihre Agenten hatten Codenamen wie Mr. 1 oder Miss All Sunday."
    },
    {
        "q": "Was ist die 'Waffe' von Vizeadmiral Garp?",
        "options": ["Seine Fäuste", "Ein riesiger Eisenball", "Ein Schwert", "Haki-Kanonen"],
        "correct": 0,
        "tip": "Er wird auch 'Garp die Faust' genannt."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Charlotte Katakuri?",
        "options": ["Mochi Mochi no Mi", "Gomu Gomu no Mi", "Suke Suke no Mi", "Sticky Sticky no Mi"],
        "correct": 0,
        "tip": "Es ist eine spezielle Paramecia-Frucht."
    },
    {
        "q": "Welche Position hat Jinbei in der Strohhutbande?",
        "options": ["Steuermann", "Koch", "Schiffszimmermann", "Musiker"],
        "correct": 0,
        "tip": "Er kann die Sunny durch gewaltige Wellen steuern."
    },
    {
        "q": "Wie heißt der Schwan-Reitvogel von Chopper auf der Insel Turino?",
        "options": ["Es gibt keinen Schwan", "Mascha", "Humphrey", "Pierre"],
        "correct": 0,
        "tip": "Chopper ritt auf Vögeln, aber der Schwan ist eine Fangfrage zu Mr. 2."
    },
    {
        "q": "Wer ist der Urheber der 'Sun-Piraten'?",
        "options": ["Fisher Tiger", "Jinbei", "Arlong", "Neptun"],
        "correct": 0,
        "tip": "Er erklomm die Red Line mit bloßen Händen."
    },
    {
        "q": "Welche Teufelsfrucht besitzt Donquixote Doflamingo?",
        "options": ["Ito Ito no Mi", "Bari Bari no Mi", "Hira Hira no Mi", "Nui Nui no Mi"],
        "correct": 0,
        "tip": "Ito bedeutet Faden."
    },
    {
        "q": "Was ist das Ziel der 'Revolutionäre'?",
        "options": ["Sturz der Weltregierung (Weltaristokraten)", "Das One Piece finden", "Die Marine vernichten", "Alle Teufelsfrüchte sammeln"],
        "correct": 0,
        "tip": "Sie kämpfen gegen die Tyrannei der Himmelsdrachen."
    },
    {
        "q": "Wie heißt das antike Schiff, dessen Baupläne Franky verbrannt hat?",
        "options": ["Pluton", "Poseidon", "Uranus", "Noah"],
        "correct": 0,
        "tip": "Es soll ein Kriegsschiff sein, das ganze Inseln vernichten kann."
    },
    {
        "q": "Wer ist der 'Gott' in Skypia vor Enel?",
        "options": ["Gan Fort", "Viper", "Kalgara", "Ohm"],
        "correct": 0,
        "tip": "Er reitet auf einem Vogel namens Pierre."
    },
    {
        "q": "Was ist das besondere Merkmal der 'D.'-Träger?",
        "options": ["Sie sterben oft mit einem Lächeln", "Sie sind alle Piraten", "Sie haben alle schwarze Haare", "Sie können kein Haki nutzen"],
        "correct": 0,
        "tip": "Man nennt sie die 'Natürlichen Feinde Gottes'."
    },
    {
        "q": "Wie heißt der Bruder von Donquixote Doflamingo?",
        "options": ["Rocinante (Corazón)", "Trebol", "Diamante", "Pica"],
        "correct": 0,
        "tip": "Er war ein Spion der Marine."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Kizaru?",
        "options": ["Pika Pika no Mi", "Goro Goro no Mi", "Mero Mero no Mi", "Hie Hie no Mi"],
        "correct": 0,
        "tip": "Pika Pika beschreibt das Glitzern oder Leuchten."
    },
    {
        "q": "Welcher Strohhut war als Erster auf Sabaody Archipel nach dem Zeitsprung?",
        "options": ["Zorro", "Ruffy", "Nami", "Brook"],
        "correct": 0,
        "tip": "Er war stolz darauf, die Nummer 1 zu sein (dank Perona)."
    },
    {
        "q": "Wie heißt der Koch der Blackbeard-Piraten?",
        "options": ["Es gibt keinen benannten Koch", "Lafitte", "Vasco Shot", "Doc Q"],
        "correct": 0,
        "tip": "In den offiziellen Rollen ist bisher kein Koch explizit gelistet, Sanji ist also einzigartig."
    },
    {
        "q": "Welche Form hat die Pupille von Mihawk?",
        "options": ["Wie die eines Falken", "Ein Kreuz", "Spiralen", "Normal"],
        "correct": 0,
        "tip": "Daher kommt sein Beiname 'Falkenauge'."
    },
    {
        "q": "Wie heißt das Land, aus dem Ryuma stammt?",
        "options": ["Wano Kuni", "Alabasta", "Dressrosa", "Kano"],
        "correct": 0,
        "tip": "Er ist ein legendärer Samurai."
    },
    {
        "q": "Wie hieß die Spezialeinheit der Marine unter der Leitung von X. Drake?",
        "options": ["SWORD", "CP0", "G-5", "SMILE"],
        "correct": 0,
        "tip": "Es ist eine geheime Spezialeinheit."
    },
    {
        "q": "Welches Kopfgeld hat Gol D. Roger?",
        "options": ["5.564.800.000 Berry", "5.000.000.000 Berry", "6.000.000.000 Berry", "4.500.000.000 Berry"],
        "correct": 0,
        "tip": "Es ist das höchste bekannte Kopfgeld der Geschichte."
    },
    {
        "q": "Wie heißt die Teufelsfrucht von Enel?",
        "options": ["Goro Goro no Mi", "Pika Pika no Mi", "Moku Moku no Mi", "Suna Suna no Mi"],
        "correct": 0,
        "tip": "Goro Goro ist das Geräusch von Donner."
    }
];