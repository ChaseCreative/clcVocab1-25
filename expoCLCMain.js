
function shuffle(array){
  var m = array.length, t, i;

  while (m > 0)
  {
	i = Math.floor(Math.random() * m--);
	t = array[m];
	array[m] = array[i];
	array[i] = t;
  }
  return array;
}



//This initiates an empty array
var vocArry = [];


function resetGame(){

//This retrieves the data based on the user's selection
userInputValue();

// This shuffles the data randomly.
shuffle(vocArry);

}

//This loads the data in the function startGame().
resetGame();


function userInputValue(){
  //This accesseses the user's input and then sets the data
  var x = document.getElementById("labelBox").value;
  console.log(x);
  if (x==1){
    vocArry = [["atrium","reception hall"],["canis","dog"],["coquus","cook"],["cubiculum","bedroom"],["culina","kitchen"],["est","is"],["filius","son"],["hortus","garden"],["in","in, on"],["labōrat","works, is working"],["mater","mother"],["pater","father"],["sedet","sits, is sitting"],["servus","slave"],["tablinum","study"],["triclinium","dining room"],["via","street"]];
  } else if (x==2){
    vocArry = [["amicus","friend"],["ancilla","slave-girl, slave-woman"],["cēna","dinner"],["cibus","food"],["dominus","master"],["dormit","sleeps"],["gustat","tastes"],["intrat","enters"],["laetus","happy"],["laudat","praises"],["mēnsa","table"],["mercātor","merchant"],["quoque","also"],["salūtat","greets"],["toga","toga"],["tunica","tunic"]];
  } else if (x==3){
    vocArry = [["ad","to"],["bibit","drinks"],["circumspectat","looks around"],["clāmat","shouts"],["ecce!","see! look!"],["et","and"],["exit","goes out"],["exspectat","waits for"],["forum","forum, business center"],["iānua","door"],["īrātus","angry"],["leō","lion"],["magnus","big, large, great"],["nāvis","ship"],["nōn","not"],["portat","carries"],["respondet","replies"],["rīdet","laughs, smiles"],["salvē","hello!"],["surgit","gets up, rises"],["taberna","store, shop, inn"],["videt","sees"],["vīlla","house"],["vīnum","wine"]];
  } else if (x==4){
    vocArry = [["agit","does"],["negotium agit","does business, works"],["cēra","wax, wax tablet"],["coquit","cooks"],["cur?","why?"],["ē, ex","out of, from"],["ego","I"],["ēheu","alas! oh dear!"],["habet","has"],["inquit","says"],["iūdex","judge"],["mendāx","liar"],["pecūnia","money"],["perterritus","terrified"],["poeta","poet"],["quaerit","searches for, looks for"],["quis?","who?"],["reddit","gives back"],["satis","enough"],["sed","but"],["signum","sign, seal, signal"],["tu","you"],["vendit","sells"],["vocat","calls"]];
  } else if (x==5){
    vocArry = [["adest","is here"],["adsunt","are here"],["agricola","farmer"],["ambulat","walks"],["audit","hears, listens to"],["clāmor","shout, uproar"],["contendit","hurries"],["currit","runs"],["euge!","hurrah!"],["fābula","play, story"],["fabulam agit","acts in a play"],["fēmina","woman"],["hodiē","today"],["iuvenis","young man"],["meus","my, mine"],["multus","much"],["multi","many"],["optimus","best"],["petit","heads for, attacks, seeks"],["plaudit","applauds, claps"],["puella","girl"],["senex","old man"],["spectat","looks at, watches"],["stat","stands"],["turba","crowd"],["ubi?","where?"],["urbs","city"],["venit","comes"]];
  }  else if (x==6){
    vocArry = [["abest","is out, is absent"],["aberat","was out, was absent"],["avarus","miser"],["bonus","good"],["emit","buys"],["erat","was"],["ferōciter","fiercely"],["festīnat","hurries"],["fortis","brave, strong"],["fūr","thief"],["īnfāns","baby, child"],["intentē","intently"],["lībertus","freedman, ex-slave"],["ōlim","once, some time ago"],["parvus","small, little"],["per","through"],["postquam","after, when"],["pulsat","hits, punches, whacks"],["quod","because"],["rēs","thing"],["scrībit","writes"],["subitō","suddendly"],["superat","overcomes, overpowers"],["tum","then"],["tuus","your, yours"],["vituperat","finds fault with, tells off, curses"]];
  } else if (x==7){
    vocArry = [["cēnat","eats dinner, dines"],["cēnavit","ate dinner, dined"],["centurio","centurion"],["cōnspicit","catches sight of"],["cōnspexit","caught sight of"],["cum","with"],["facit","makes, does"],["fēcit","made, did"],["heri","yesterday"],["ingēns","huge"],["intellegit","understands"],["intellexit","understood"],["lacrimat","cries, weeps"],["lacrimavit","cried, wept"],["mortuus","dead"],["nārrat","tells, relates"],["nārrāvit","told, related"],["necat","kills"],["necāvit","killed"],["nihil","nothing"],["omnis","all"],["parat","prepares"],["parāvit","prepared"],["pestis","pest, rascal"],["pōculum","cup"],["prōcēdit","advances,proceeds"],["prōcessit","advanced, proceeded"],["prope","near"],["pulcher","beautiful, handsome"],["rogat","asks"],["rogāvit","asked"],["tacitē","silently"],["tamen","however"],["terret","frightens"],["terruit","frightened"],["umbra","ghost, shadow"],["valdē","very much, very"]];
  } else if (x==8){
    vocArry = [["agitat","chases, hunts"],["agitāvit","chased, hunted"],["cōnsumit","eats"],["cōnsumpsit","ate"],["dūcit","leads"],["dūxit","led"],["eum","him"],["facile","easily"],["habitat","lives"],["havitāvit","lived"],["ferōx","fierece"],["gladius","sword"],["hic","this"],["ignāvus","cowardly, lazy"],["incitat","urges on, encourages"],["incitāvit","urged on, encouraged"],["nūntius","messenger"],["pēs","foot"],["porta","gate"],["postulat","demands"],["postulāvit","demanded"],["puer","boy"],["pugnat","fights"],["pugnāvit","fought"],["recumbit","lies down, reclines"],["recubuit","lay down, reclined"],["saepe","often"],["sanguis","blood"],["silva","woods, forest"],["spectaculum","show, spectacle"],["statim","at once, immediately"],["tōtus","whole"]];
  } else if (x==9){
    vocArry = [["agnōscit:agnōvit","recgonizes:recognized"],["celebrat:celebrāvit","celebrates:celebrated"],["celeriter","quickly"],["civis","citizen"],["cupit:cupīvit","wants:wanted"],["dat:dedit","gives:gave"],["diēs","day"],["diēs nātālis","birthday"],["ēmittit:ēmīsit","throws, sends out: threw, sent out"],["exercet:exercuit","exercises:exercised"],["fert:tulit","brings, carries: brought, carried"],["homō","man"],["hospes","guest"],["ille","that"],["īnspicit:īnspexit","looks at, inspects, examines: looked at, inspected, examined"],["iterum","again"],["manet:mãnsit","remains, stays: remained, stayed"],["medius","middle"],["mox","soon"],["nõtus","well-known, famous"],["offert:obtulit","offers:offered"],["ostendit:ostendit","shows:showed"],["paulīsper","for a short time"],["post","after"],["revenit:revēnit","comes back, returns:came back, returned"],["suus","his"],["trādit:trādidit","hands over: handed over"]];
  } else if (x==10){
    vocArry = [["abit:abiit","goes away:went away"],["accipit:accēpit","accepts, receives:accepted, received"],["callidus","clever, smart"],["capit:cēpit","takes:took"],["contentus","satisfied"],["exclāmat:exclāmāvit","exclaims:exclaimed"],["frater","brother"],["imperium","power"],["inimīcus","enemy"],["invenit:invēnit","finds:found"],["it:iit","goes:went"],["nūntiat:nūntiavit","announces, announced"],["pāx","peace"],["portus","harbor"],["quam","than, how"],["semper","always"],["sententia","opinion"],["servat:servãvit","saves, protects:saved, protected"],["sōlus","alone"],["tacet:tacuit","is silent, is quiet:was silent, was quiet"],["uxor","wife"],["vehementer","violently, loudly"],["vōs","you"]];
  } else if (x==11){
    vocArry = [["convenit:convēnit","gathers, meets"],["crēdit:crēdidit (+ DAT)","trusts, believes, has faith in"],["dē","down from, about"],["favet:fāvit (+ DAT)","favors, supports"],["gēns","family"],["invītat:invitāvit","invites"],["legit:lēgit","reads"],["līberãlis","generous"],["minimē!","no!"],["mūrus","wall"],["noster","our"],["nunc","now"],["placet:placuit (+ DAT)","it pleases, suits"],["prīmus","first"],["prōmittit:prōmīsit","promises"],["pugna","fight"],["rapit:rapuit","seizes, grabs"],["secundus","second"],["senātor","senator"],["sollicitus","worried, anxious"],["stultus","stupid"],["tertius","thrird"],["ūtilis","useful"],["valē!","good-bye!"],["verberat:verberãvit","strikes, beats"],["vir","man"]];
  } else if (x==12){
    vocArry = [["āmittit:āmīsit","loses:lost"],["cinis","ash"],["complet:complēvit","fills:filled"],["custōdit:custōdivit","guards:guarded"],["dēnsus","thick"],["epistula","letter"],["flamma","flame"],["fortiter","bravely"],["frūstrā","in vain"],["fugit:fūgit","runs away, flees:ran away, fled"],["fundus","farm"],["iacet:iacuit","lies:lay"],["iam","now"],["igitur","therefore"],["incidit:incidit","falls:fell"],["mīrãbilis","marvelous, strange, wonderful"],["mittit:mīsit","sends:sent"],["mōns","mountain"],["nūbēs","cloud"],["optimē","best"],["paene","almost"],["sentit:sensit","feels:felt"],["tandem","at last"],["templum","temple"],["terra","ground, land"],["timet:timuit","is afraid, fears: was afraid, feared"]];
  } else if (x==13){
    vocArry = [["adveniō, advenīre, advēnī","I arrive, to arrive, I arrived"],["aedificium","building"],["aeger:aegrum","sick, ill"],["alter:alterum","the other, the second"],["cantō, cantāre, cantāvī","I sing, to sing, I sang"],["cēterī","the others, the rest"],["coniūratiō:coniūratiōnem","plot"],["custōs, custōdem","guard"],["dēcido, dēcidere, dēcidī","I fall down, to fall down, I fell down"],["dīco, dīcere, dīxī","U say, to say, I said"],["excitō, excitāre, excitāvī","I arouse/wake up, to arouse/wake up, I aroused/woke up"],["fessus","tired"],["horreum","barn, granary"],["interficiō, interficere, interfēci","I kill, to kill, I killed"],["ita vērō","yes"],["nōlō, nōlle, nōlui","I do not want, to not want, I did not want"],["novus","new"],["nullus","not any, no"],["numberō, numerāre, numerāvì","I count, to count, I counted"],["ordo:ordinem","row"],["possum, posse, potuī","I am able, to be able, I was able"],["retineō, retinēre, retinuī","I keep, to keep, I kept"],["ruō, ruere, ruī","I rush, to rush, I rushed"],["sē","himself, herself, itself, themselves"],["sum, ess, fuī","I am, to be, I was"],["trahō, trahere, traxī","I drag, to drag, I dragged"],["vīta","life"],["volō, velle, voluī","I want, to want, I wanted"],["vulnerō, vulnerāre, vulnerāvi","I wound, to wound, I wounded"]];
  } else if (x==14){
    vocArry = [["aliquid","something"],["apud (+ ACC)","among, at the house of"],["attonitus","astonished"],["aula","palace"],["cotīdiē","every day"],["decōrus","right, proper"],["dēleō, dēlēre, dēlēvi","I destroy, to destroy, I destoryed"],["deus","god"],["dei, di (nom. pl.)","gods"],["difficilis","difficult"],["dīligener","carefully"],["domina","mistress"],["dōnum","gift, present"],["familiāris:familiārem","relative, relation"],["fidēlis","faithful, loyal"],["ipse, ipsa","himself, herself"],["iste","that"],["lavō, lavāre, lāvī","I wash, to wash, I washed"],["maritus","husband"],["necesse","necessary"],["nōbilis:nōbilem","noble"],["num?","surely ... not?"],["quam","how"],["quamquam","although"],["-que","and"],["rëx:rēgem","king"],["ubi","when, where"]];
  } else if (x==15){
    vocArry = [["alius, alia, aliud","other, another"],["aqua,f.","water"],["claudō, claudere, clausī","I close, to close, I closed"],["commodus, commoda, commodum","convenient"],["dēbēo, dēbēre, dēbui","to owe, ought"],["effigiēs:effigiem, f.","image, statue"],["equus, m.","horse"],["etiam","also"],["frāctus, frācta, frāctum","broken"],["impediō, impedīre, impedivī",""],["lectus, m.","bed"],["lentē","slowly"],["mare, n.","sea"],["miser, misera, miserum","miserable, wretched"],["nauta, m.","sailor"],["palustrum, n.","wagon, cart"],["praesum, praesse, praefui (+ DAT)","I am in charge of, to be in charge of, I was in charge of"],["princeps:principem, m.","chief, chieftain"],["quī, quae, quod","who, which"],["redeō,redīre, redii","I return, to return, I returned"],["sacerdōs, sacerdōtem, m.","priest"],["saxum, n.","rock"],["teneō, tenēre, tenuī","I hold, to hold, I held"],["unda, f.","wave"],["vincō, vincere, vīcī","I win, to win, I won"]];
  } else if (x==16){
    vocArry = [["aedificō, aedificāre, aedificāvi","I build, to build, I built"],["auxilium, n.","help"],["cōnsentiō, cōnsentīre, cōnsēnsī","I agree, to agree, I agreed"],["consilium, n.","plan, idea"],["deinde","then"],["dēlectcō, dēlectāre, dēlectāvī","I delight, to delight, I delighted"],["dērideō, dēridēre, dērisī","I mock/make fun of, to mock, I mocked"],["dimittō, dimittere, dimīsī","I send away, to send away, I sent away"],["effugiō, effugere, effūgī","I escape, to escape, I escaped"],["faber, fabrum, m.","craftsman"],["flōs, flōrem, m.","flower"],["imperãtor, imperãtorem, m.","emperor"],["inter (+ ACC)","among"],["ita","in this way"],["nāvigō, nāvigāre, nāvigavī","I sail, to sail, I sailed"],["nōnne?","surely?"],["paratus, parata, paratum","ready, prepared"],["pereō, perīre, periī","I die/perish, to die, I died"],["pōno, pōnere, posuī","I place/put, to place, I placed"],["postrīdiē","on the next day"],["pūniõ, pūnīre, pūnīvī","I punish, to punish, I punished"],["simulac, simulatque","as soon as"],["summus, summa, summum","highest, greatest, top"],["supersum, superesse, superfuī","I survive, to survive, I survived"],["tollõ, tollere, sustulī","I raise/lift up, to raise, I raised"],["vertō, vertere, vertī","I turn, to turn, I turned"]];
  } else if (x==17){
    vocArry = [["ā, ab (+ ABL)","from, away from"],["agmen, agminis, n","column (of people), procession"],["animus, animī, n.","spirit, soul, mind"],["appropinquō, appropinquāre, appropinquāvi (+ DAT)","I approach/come near to, to approach, I approached"],["āra, ārae, f.","altar"],["bene","well"],["benignus, benigna, benignum","kind"],["diū","for a long time"],["exanimātus, examimãta, exanimātum","unconscious"],["facilis, facilis, facile","easy"],["graviter","seriously"],["haereō, haerēre, haesī","I stick/cling, to stick, I stuck"],["hūc","here, to this place"],["impetus, impetūs, m.","attack"],["īnsula, īnsulae, f.","island"],["invītus, invīta, invītum","unwilling"],["itaque","and so"],["lītus, lītoris, n.","shore"],["maximus, maxima, maximum","very big, very large, very great"],["multitūdõ, multitūdinis, f.","crowd"],["numquam","neger"],["paucī, paucae, pauca","few, a few"],["perveniō, pervenīre, pervēnī","I arrive, to arrive, I arrived"],["quondam","one day, once"],["recipiō, recipere, recēpī","I recover/take back, to recover, I recovered"],["resistō, resistere, restitī (+ DAT)","I resist, to resist, I resisted"],["sine (+ ABL)","without"],["soleō, solēre","I am accustomed/usually, to be accustomed, I was accustomed"]];
  } else if (x==18){
    vocArry = [["audeō, audēre","I dare, to dare"],["caput, capitis, n.","head"],["coepī","I began"],["cognōscō, cognōscere, cognōvī","I get to know/find out, to get to know, I got to know"],["cōnsistō, cōnsistere, cōnstitī","I stand firm/stand one's ground, to stand firm, I stood firm"],["dea, deae, f.","goddess"],["dēmōnstrō, dēmōnstrāre, dēmōnstrāvī","I show/point out, to show, I showed"],["discēdo, discēdere, discēdi","I depart/leave, to depart, I departed"],["fortasse","perhaps"],["frangō,frangere, frēgī","I break, to break, I broke"],["ibi","there"],["libenter","gladly"],["manus, manūs, f.","hand"],["mīles, mīlitis, m.","soldier"],["nam","for"],["nēmō","no one"],["nox, noctis, f.","night"],["obstō, obstāre, obstitī (+ DAT)","I obstruct/block the way, to obstruct, I obstructed"],["pars, partis, f.","part"],["petō, petere, petīvī","I beg for/ask for, to beg for, I begged for"],["posteã","afterwards"],["postrēmō","finally, lastly"],["praesidium, praesidiī, n.","protection"],["prō (+ ABL)","in front of"],["quō?","whre? where to?"],["recūsō, recūsãre, recūsãvi","I refuse, to refuse, I refused"],["sacer, sacra, sacrum","sacred"],["saeviō, saevīre, saeviī","I am in a rage, to be in a rage, I was in a rage"]];
  } else if (x==19){
    vocArry = [["amō, amāre, amāvi","I love, to love, I loved"],["caedō, caedere, cecīdī","I kill, to kill, I killed"],["cārus, cāra, cārum","dear"],["castīgo, castīgāre, castīgāvi","I scold/nag, to scold, I scolded"],["cōgitō, cōgitāre, cōgitāvī","I think/consider, to think, I thought"],["comparō, comparāre, comparāvī","I obtain, to obtain, I obtained"],["cōnficiō, cōnficere, cōnfēci","I finish, to finish, I finished"],["cūrō, cūrāre, cūrāvī","I look after, to look after, I looked after"],["dulcis, dulcis, dulce","sweet"],["fīlia, fīliae, f.","daughter"],["fluō, fluere, flūxī","I flow, to flow, I flowed"],["forte","by chance"],["grātiās agō","I thank/give thanks"],["hasta, hastae, f.","spear"],["illūc","there, to that place"],["iter, itineris, n.","journey"],["locus, locī, m.","place"],["māne","in the morning"],["neglegēns, neglegēns, neglegēns (gen. neglegentis)","careless"],["nōvi","I know"],["perīculum, perīculī, n.","danger"],["plūrimus, plūrima, plūrimum","very much"],["plūrimī, plūrimae, plūrima", "very many"],["poscō, poscere, poposcī","I demand/ask for, to demand, I demanded"],["sonitus, sonitūs, m.","sound"],["tot","so many"],["umerus, umerī, m.","shoulder"],["vexō, vexāre, vexāvi","I annoy, to annoy, I annoyed"],["vīvō, vīvdere, vīxi","I live, to live, I lived"],["vix","hardly, scarcely"],["vōx, vōcis, f.","voice"]];
  } else if (x==20){
    vocArry = [["adeō, adīre, adiī","I approach/go up to, to approach, I approached"],["arcessō, arcessere, arcessīvī","I summon/send for, to summon, I summoned"],["ars, artis, f.","art"],["auris, auris, f.","ear"],["collocō, collocāre, collocāvī", "I place/put, to place, I placed"],["crūdēlis, crūdēlis, crūdēle","cruel"],["dēnique","finally"],["dēspēro, dēspērāre, dēspērāvi","I despair, to despair, I despaired"],["doctus, docta, doctum","learned, clever"],["domus, domūs, f.","home"],["inferō, inferre, intuli","I bring in/on, to bring in, I brought in"],["irrumpō, irrumpere, irrūpī","I burst in, to burst in, I bursted in"],["lātus, lāta, lātum","wide"],["lībero, līberāre, līberāvī","I free, to free, I freed"],["lūna, lūnae, f.","moon"],["mors, mortis, f.","death"],["oculus, oculī, m.","eye"],["persuādēo, persuādēre, persuāsī + (DAT)","I persuade, to persuade, I persuaded"],["precēs, precum, f. pl.","prayers"],["relinquo, relinquere, relīquī","I leave, to leave, I left"],["remedium, remediī, n.","cure"],["sermō, sermōnis, f.","conversation"],["sīcut","like"],["tam","so"],["temptō, temptāre, temptāvī","I try, to try, I tried"],["vulnus, vulneris, n.","wound"],["ūnus, ūna, ūnum","one"],["duo, duae, duo","two"],["trēs, trēs, tria","three"],["quattuor","four"],["quinque","five"],["sex","six"],["septem","seven"],["octō","eight"],["novem","nine"],["decem","ten"],["vīgintī","twenty"],["trīgintã","thirty"],["quadrāgintã","forty"],["quīnquāgintā","fifty"]];
  } else if (x==21){
    vocArry = [["ā, ab (+ ABL)","by"],["adiuvō, adiuvāre, adiūvī","I help, to help, I helped"],["annus, annī, m.","year"],["ascendō, ascendere, ascendī","I climb/rise, to climb, I climbed"],["barbarus, barbarī, m.","barbarian"],["cēlō, cēlãre, cēlāvī, celātus","I hide, to hide, I hid, having been hidden"],["circum","around"],["cōnfīdo, cōnfīdere (+ DAT)","I trust, to trust"],["dēiciō, dēicere, dēiēci, dēiectus","I throw down, to throw down, I threw down, having been thrown down"],["dūrus, dūra, dūrum","harsh, hard"],["efficiō, efficere, effēci, effectus","I carry out/accomplish, to carry out, I carried out, having been carried out"],["extrahō, extrahere, extrāxi, extractus","I drag out/pull out, to drag out, I dragged out, having been dragged out"],["fōns, fontis, m.","fountain, spring"],["gravis, gravis, grave","heavy, serious"],["haruspex, haruspicis, m.","diviner, soothsayer"],["hōra, hōrae, f.","hour"],["īnfēlix, īnfēlix, īnfēlix (gen. īnfēlicis)","unlucky"],["iubeō, iubēre, iussi, iussus","order"],["morbus, morbī, m.","illness"],["nōnnūllī, nōnnūllae, nōnnūlla","some, several"],["nūper","recently"],["occupātus, occupāta, occupātum","busy"],["oppidum, oppidī, n.","town"],["perītus, perīta, perītum","skillful"],["plēnus, plēna, plēnum","full"],["plūs, plūris, n.","more"],["pretium, pretiī, n.","price"],["sapiēns, sapiēns, sapiēns (gen. sapientis)", "wise"],["suscipiō, suscipere, suscēpi, susceptus","I undertake/take on, to undertake, I undertook, having been undertaken"],["unde","from where"]];
  } else if (x==22){
    vocArry = [["amor, amōris, m.","love"],["aureus, aurea, aureum","golden, made of gold"],["adeptus, adepta, adeptum","having received, having obtained"],["avidē","eagerly"],["caelum, caelī, n.","sky"],["dēcipio, dēcipere, dēcēpi, dēceptus","I deceive/trick, to deceive, I deceived, having been deceived"],["dīrus, dīra, dīrum","dreadful, awful"],["dissentiō, dissentīre, dissēnsī","I disagree, to disagree, I disagreed"],["ēligō, ēligere, ēlēgi, ēlectus","I choose, to choose, I chose, having been chosen"],["exitium, exitiī, n.","ruin, destruction"],["fundō, fundere, fūdi, fūsus","I pour, to pour, I poured, having been poured"],["hostis, hostis, m.","enemy"],["iactō, iactãre, iactāvī, iactātus","I throw, to throw, I threw, having been thrown"],["incipiō, incipere,incēpī, inceptus","I begin, to begin, I began, having been begun"],["ingressus, ingressa, ingressum","having entered"],["iniciō, inicere, iniēcī, iniectus","I thrown in, to throw in, I threw in, having been thrown in"],["lacrima, lacrimae, f.","tear"],["minimus, minima, minimum","very little, least"],["molestus, molesta, molestum","troublesome"],["moneō, monēre, monuī, monitus","I warn/advise, to warn, I warned, having been warned"],["parcō, parcere, pepercī (+ DAT)","I spare, to spare, I spared"],["precãtus, precãta, precãtum","having prayed (to)"],["prüdentia, prüdentiae, f.","prudence, good sense"],["quantus, quanta, quantum","how big"],["tardus, tarda, tardum","late"],["tūtus, tūta, tūtum","safe"],["verbum, verbī, n.","word"],["quō modō?","how?"],["virtūs, virtūtis, f.","courage"],["vītō, vītāre, vītāvī, vītātus","I avoid, to avoid, I avoided, having been avoided"]];
  } else if (x==23){
    vocArry = [["administrō, administrãre, administrāvī, administrātus","I manage, to manage, I managed, having been managed"],["cēdo, cēdere, cessi","I give in/give way, to give in, I gave in"],["commemorō, commemorāre, commemorāvī, commemorātus","I mention/recall, to mention, I mentioned, having been mentioned"],["enim","for"],["errō, errāre, errāvī","I make a mistake, to make a mistake, I made a mistake"],["gerō, gerere, gessī, gestus","I wear, to wear, I wore, having been worn"],["honor, honōris, m.","honor"],["iaciō, iacere, iēci, iactus","I throw, to throw, I threw, having been thrown"],["immōtus, immōta, immōtum","still, motionless"],["ingenium, ingeniī, n.","character"],["locūtus, locūta, locūtum","having spoken"],["magnopere","greatly"],["magis","more, rather"],["maximē","very greatly, most of all"],["mandātum, mandāti, n.","order, instruction"],["modus, modī, m.","manner, way, kind"],["rēs huius modī","a thing of this kind"],["nimium, nimiī, n.","too much"],["ōrno, ōrnāre, ōrnāvī, ōrnãtum","I decorate, to decorate, I decorated, having been decorated"],["pāreo, pārēre, pārui (+ DAT)","I obey, to obey, I obeyed"],["potēns, potēns,potēns,(gen. potentis)","powerful"],["prāvus, prāva, prāvum","evil"],["regressus, regressa, regressum","having returned"],["scio, scīre, scīvī","I know, to know, I knew"],["tãlis, tãlis, tãle","such"],["tamquam","as, like"],["umquam","ever"],["venēnum, venēni, n.","poison"],["venia, veniae, f.","mercy"]];
  } else if (x==24){
    vocArry = [["auctōritas, auctōritātis, f.","authority"],["audāx, audāx, audāx, (gen. audācis)","bold, daring"],["carcer, carceris, m.","prison"],["colloquium, colloquiī, n.","talk, chat"],["comprhendō, comprhendere, comprhendī, comprhensus","I arrest, to arrest, I arrested, having been arrested"],["cōnscendō, cōnscendere, cōnscendī","I climb on/mount, to climb on, I climbed on"],["dēsero, dēserere, dēseruī, dēsertus","I desert, to desert, I deserted, having been deserted"],["ēgressus, ēgressa, ēgressum","having gone out"],["eques, equitis, m.","horseman"],["flūmen, flūminis, n.","river"],["humī","on the ground"],["īnfestus, īnfesta, īnfestum","hostile"],["intereã","meanwhile"],["neque ... neque","neither ... nor"],["nusquam","nowhere"],["oppugnō, oppugnāre, oppugnāvī, oppugnātus","I attack, to attack, I attacked, having been attacked"],["passus, passa, passum","having suffered"],["patefacio, patefacere, patefēci, patefactus","I reveal, to reveal, I revealed, having been revealed"],["perfidus, perfida, perfidum","treacherous, untrustworthy"],["pōns, pontis, m.","bridge"],["ripa, ripae, f.","bank"],["tantum","only"],["trānseō, trānsīre, trānsiī", "I cross, to cross, I crossed"],["trīstis, trīstis, trīste","sad"],["vērum, vēri, n.","truth"]];
  } else if (x==25){
    vocArry = [["accidō, accidere, accidī","I happen, to happen, I happened"],["aliquis","someone"],["aperiō, aperīre, aperuī, apertus","I open, to open, I opened, having been opened"],["autem","but"],["captīvus, captīvī, m.","prisoner, captive"],["castra, castrōrum, n. pl.","military camp"],["cōgo, cōgere, coēgī, coactus","I force/compel, to force, I forced, having been forced"],["dēpōnō, dēpōnere, dēposuī, dēpositus","I  put down/take off, to put down, I put down, having been put down"],["dēsino, dēsinere","I end/cease, to end"],["dignitās, dignitātis, f.","importance, prestige"],["dīligentia, dīligentia, f.","industry, hard work"],["explicō, explicāre, explicāvī, explicātus","I explain, to explain, I explained, having been explained"],["extrā (+ ACC.)","outside"],["furēns, furēns, furēns (gen. furentis)","furious, in a rage"],["immemor, immemor, immemor (gen. immemoris)","forgetful"],["immortālis, immortālis, immortāle","immortal"],["dī immortālēs","heavens above"],["laedō, laedere, laesī, laesus","I harm, to harm, I harmed, having been harmed"],["lateō, latēre, latuī","I lie hidden, to lie hidden, I lay hidden"],["legiō, legiōnis, f.","legion"],["nescio, nescīre, nescīvi","I do not know, to not know, I did not know"],["nōmen, nōminis, n.","name"],["ōs, ōris, n.","mouth"],["poena, poenae, f.","punishment"],["poenãs dare","to pay the penalty"],["rūrsus","again"],["scelestus, scelesta, scelestum","wicked"],["statiō, statiōnis, f.","post"],["suãvis, suãvis, suãve","sweet"],["testis, testis, m./f.","witness"]];
  }

}


 /*

wheelock1 = [["me","me, myself"],["quid","what"],["nihil","nothing"],["nōn","not"],["saepe","often"],["sī","if"],["amō, amāre, amāvī, amātum","to love, like"],["cōgitō, cōgitāre, cōgitāvī, cōgitātum","to think, ponder, consider, plan"],["dō, dāre, dedī, datum","to give, offer"],["dēbeō, dēbēre, dēbuī, dēbitum","to owe; ought, must, should"],["ō, ēre, uī, itum",""],["monō, monmonmonēre, monmonuī, monitum","to remind, advise, warn"],["salvō, salvēre","to be well, be in good health"],["errō, errāre, errāvī, errātum","to wander; err, go astray, make a mistake, be mistaken"],["conservō, conservconservconservāre, conservconservāvī, conservātum","to preserve, conserve, maintain"],["laudō, laudāre, laudāvī, laudātum","to praise"],["vocō, vocāre, vocāvī, vocātum","to call, summon"],["salvē (salvēte)","hello, greetings"],["servō, servāre, servāvī, servātum","to preserve, save, keep, guard"],["terreō, terrēre, terruī, territum","to frighten, terrify"],["valeō, valēre, valuī,valiturum","to be strong, have power; be well"],["videō, vidēre, vīdī, visum","to see; observe,understands"],["valē (valēte)","good-bye, farewll"]];

wheelock2 = [["fama, famae, f.","rumor, report; fame, reputation"],["forma, formae, f.","form, shape; beauty"],["fortuna, fortunae, f.","fortune, luck"],["īra, īrae, f.","anger"],["nauta, nautae, m.","sailor"],["patria, patriae, f.","fatherland, native land, (one's) country"],["pecūnia, pecūniae, f.","money"],["philosophia, pecūniae, f.","philosophy"],["poēta, poētae, m.","poet"],["porta, portae, f.","gate, entrance"],["puella, puellae, f.","girl"],["rosa, rosae, f.","rose"],["sententia, sententiae, f.","feeling,thought, opinion, vote, sentence"],["vita, vitae, f.","life; mode of life"],["antīquus, antīqua, antīquum","ancient, old-time"],["magnus, magna, magnum","large, great; important"],["meus, mea, meum","my"],["multus, multa, multum","much, many"],["tuus, tua, tuum","your"],["et","and; even"],["et ... et","both ... and"],["sed","but"],["est","is"],["Ō","O! Oh!"],["sine (+ ABL.)","wihtout"]];

wheelock3 = [["ager, agrī, m.","field, farm"],["amīcus, amīcī, m.","friend"],["fīlius, fīliī, m.","son"],["numerus, numerī, m.","number"],["populus, populī, m.","the people, a people, a nation"],["amīca, amīcae., f.","friend"],["agricola, agricolae., m.","farmer"],["fēmina, fēminae., f.","woman"],["fīlia, fīliae., f.","daughter"],["sapientia, sapientiae., f.","wisdom"],["puer, puerī, m.","boy"],["vir, virī, m.","man, hero"],["avārus,avāra, avārum","greedy, avaricious"],["Rōmānus, Rōmāna, Rōmānum","Roman"],["paucī, paucae, paeca","few, a few"],["de (+ ABL.)","down from. from; concerning, about"],["in (+ ABL.)","in, on"],["hodiė","today"],["semper","always"],["habeō, habēre, habuī, habitum","to have, hold, possess; consider, regard"],["satiō, satiāre, satiāvī, satiātum","to satisfy, sate"]];

wheelock4 = [["bāsium, bāsiī, n.","kiss"],["bellum, bellī, n.","war"],["cōnsilium, cōnsiliī, n.","plan, purpose, advice, counsel, judgment, wisdom"],["cura, curae, f.","care, attention, caution, anxiety"],["dōnum, dōnī, n.","gift, present"],["exitium, exitiī, n.","destruction, ruin"],["magistra, magistrae, f.","teacher, mistress"],["magister, magistrī, m.","teacher, master"],["officium, officiī, n.","duty, service"],["perīculum, perīculī, n.","danger"],["remedium, remediī, n.","cure, remedy"],["mora, morae, f.","delay"],["nihil","nothing"],["oculus, oculī, m.","eye"],["bellus, bella, bellum","pretty, handsome, charming"],["bonus, bona, bonum","good, kind"],["humānus, humāna, humānum","human, pertaining to man; humane, kind, refined, cultivated"],["malus, mala, malum","bad, wicked, eviil"],["parvus, parva, parvum","small, little"],["stultus, stulta, stultum","foolish"],["stultum, stultī, n.","a fool"],["vērus, vēra, vērum","true, real, proper"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist; please"],["sum, esse, fuī, futurm","to be, exist"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist"]];

wheelock5 = [["adulēscentia, adulēscentia, f.","youth, young manhood; youthfulness"],["animus, animī, m.","soul, spirit, mind"],["animī, animōrum, m.","high spirits, pride, courage"],["caelum, caelī, n.","sky"],["culpa, culpae, f.","fault, blame"],["glōria, glōriae, f.","glory, fame"],["verbum, verbī, n.","word"],["tē","you"],["līber, lībera, līberum","free"],["noster, nostra, nostrum","our, ours"],["pulcher, pulchra, pulchrum","beautiful, handsome; fine"],["sānus, sāna, sānum","sound, healthy, sane"],["igitur","therefore, consequently"],["propter (+ ACC.)","on account of, because of"],["crās","tomorrow"],["heri","yesterday"],["quandō","when"],["sī quandō","if ever"],["satis","enough, sufficient"],["tum","then, at that time"],["cēnō, cēnāre, cēnāvì, cēnātum","to dine"],["culpō, culpāre, culpāvì, culpātum","to blame, censure"],["superō, superāre, superāvī, superātum","to be above, have the upper hand, surpass; overcome, conquer"],["remaneō, remanēre, remansī, remansurum","to remain, stay, stay behind, abide, continue"],["maneō, manēre, mansī, mansurum","to remain, stay, stay behind, abide, continue"],["super","above"]];

wheelock6 = [["deus, deī, m.","god"],["discipulus, discipulī, m.","student, pupil, learner"],["discipula, discipulae, f.","student, pupil, learner"],["insidiae, insidiārum, f.","ambush, plot, treachery"],["liber, librī, m.","book"],["tyrānnus, tyrānnī, m.","tyrant"],["vitium, vitiī, n.","fault, crime, vice"],["Graecus, Graeca, Graecum","Greek"],["Graecus, Graecī, m.","a Greek"],["perpētuus, perpētua, perpētuum","perpetual, lasting, uninterrupted, continuous"],["plēnus, plēna, plēnum","full, abundant, generous"],["salvus, salva, salvum","safe, sound"],["secundus, secunda, secundum","second, favorable"],["vester, vestra, vestrum","your"],["-que","and"],["ubi","where, when"],["ibi","there"],["nunc","now"],["quārē","why, wherefore"],["possum, posse, potuī","to be able, can, could, have power"],["tolerō, tolerāre, tolerāvī, tolerātum","to bear, endure"]];

wheelock7 = [["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]];

wheelock8 = [["amor, amoris, m.","love"],["carmen, carminis, n.","song, poem"],["civitās, civitātis, f.","state, citizenship"],["corpus, corporis, n.","body"],["homo, hominis, m.","man, human being"],["labor, laboris, m.","labor, work, toil; a work, production"],["littera, litterae f.","a letter of the alphabet"],["litterae, litterārum, f.","a lettler"],["mōs, mōris, m.","cusotm, manner, manner"],["mōres, mōrum, m.","habits, morals, character"],["nōmen, nōminis, n.","name"],["pāx, pācis, f.","peace"],["regīna, regīnae, f.","queen"],["rēx, rēgis, m.","king"],["tempus, temporis, n.","time; occasion, opportunity"],["terra, terrae, f.","earthk ground, land, country"],["uxor, uxoris, f.","wife"],["virgō, virginis, f.","maiden, virgin"],["virtūs, virtūtis, f.","manliness, courage, excellence, character, worth, virtue"],["no vus, nov a, novum","new, strange"],["post (+ ACC)","after, behind"],["sub (+ ABL.)","under"],["sub (+ ACC.)","under, up under, close to; down tto/into, to/at the foot of"],["audeō, audēre, ausus sum","to dare"],["necō, necāre, necāvī, necātum","to murder, kill"]];

wheelock9 = [["locus, locī, m.","place, passage in literature"],["loca, locōrum, n.,","places, region"],["morbus, morbī, m.","disease, sickness"],["studium, studiī, n.","eagerness, zeal, pursuit, study"],["hic, haec, hoc","this, the latter"],["ille, illa, illud","that, the former"],["iste, ista, istud","that of yours, that"],["alius, alia, aliud","other, another"],["aliī ... aliī","some ... others"],["alter, altera, alterum","the other (of two), the second"],["neuter, neutra, neutrum","not either, neither"],["nūllus, nūlla, nūllum","not any, no, none"],["sōlus, sōla, sōlum","alone, only, the only"],["nōn sōlum ... sed etiam","not only ... but also"],["tōtus, tōta, tōtum","whole, entire"],["ullus, ulla, ullum","any"],["ūnus, ūna, ūnum","one, single, alone"],["uter, uttra, utrum","either, which (of two)"],["enim","for, in fact, truly"],["in (+ ACC.)","into, toward, against"],["nimis or nimium","too, too much, excessively"]];

wheelock10 = [["amicitia, amicitiae, f.","friendship"],["cupiditās, cupiditātis, f.","desire, longing, passion, cupidity, avarice"],["hōra, hōrae, f.","hour, time"],["natura, naturae, f.","nature"],["senectūs, senectūtis, f.","old age"],["timor, timoris, m.","fear"],["veritās, veritātis, f.","truth"],["voluptās, voluptātis, f.","pleasure"],["via, viae, f.","way, road, street"],["beãtus, beāta, beātum","happy, fortunate, blessed"],["quoniam","since"],["cum (+ ABL.)","with"],["audiō, audīre, audīvī, audītum","to hear"],["veniō, venīre, vēnī, ventum","to come"],,["inveniō, invenīre, invēnī, inventum","to find, come upon"]["capiō, capere, cēpī, captum","to take, capture, seize"],["dīcō, dīcere, dīxī, dictum","to say, tell, speak; name, call"],["faciō, facere, fēcī, factum","to make, do, accomplish"],["fugiō, fugere, fūgī, fugitūrum","to flee, hurry away, escape, go into exile; avoid, shun"],["vivō, vivere, vīxī, vīctum","to live"]];

wheelock11 = [["caput, capitis, n.","head; leader; beginning; life; heading; chapter"],["cōnsul, cōnsulis, m.","consul"],["nēmo, nullīus, nēminī, nēminem, nullō or nullã, m./f.","no one, nobody"],["ego (meī)","I (of me)"],["tū (tuī)","you (of you)"],["is, ea, id","he, she, it"],["i.e. = id est","that is"],["īdem, eadem, īdem","the same"],["amīcus, amīca, amīcum","friendly"],["cārus, cāra, cārum","dear"],["quod","because"],["neque, nec","and not, nor"],["neque ... neque or nec ... nec","neither ... nor"],["autem","however, moreover"],["bene","well, satisfactorily, quite"],["etiam","even, also"],["intellego, intellegere, intellēxi, intellectum","to understand"],["mittō, mittere, mīsi, missus","to send, let go"],["sentio, sentīre, sēnsi, sensum","to feel, perceive, think, experience"]];

wheelock12 = [["adulēscens, adulēscentia, m./f.","young man or woman"],["annus, annī, m.","year"],["Ãsia, Āsiae, f.","Asia"],["Caesar, Caesaris, m.","Caesar"],["māter, mātris, f.","mother"],["medicus, medicī, m.","doctor, physician"],["medica, medicae, f.","doctor, physician"],["pater, patris, m.","father"],["patientia, patientia, f.","suffering; patience, endurance"],["principium, principiī, n.","beginning"],["acerbus, acerba, acerbum","harsh, bitter, grievous"],["pro (+ ABL.)","in front of, before, on behalf of, for the sake of, in return for, instead of, for, as"],["diū","for a long time"],["nūper","recently"],["amittō, amittere, amīsi, amissus","to lose, let go, send away"],["cadō, cadere, cecidī, cāsurum","to fall"],["creō, creāre, creāvī, creātum","to create"]];

wheelock13 = [["divitiae, divitiārum, f.","riches, wealth"],["factum, factī, n.","deed, cat, achievement"],["signum, signī, n.","sign, signal, indication; seal"],["ipse, ipsa, ipsum","myself, yourself, himself, herself, itself, etc."],["quisque, quidque","each one, each person, each thing"],["suī (gen.)","himself, herself, itself, themselves"],["doctus, docta, doctum","taught learned"],["fortūnātus, fortūnāta, fortūnātum","lucky, fortunate, happy"],["suus, suua, suum","his own, her own, its own, their own"],["nam","for"],["ante (+ ACC.)","before"],["per (+ ACC.)","through, by"],["ōlim","once (upon a time), long ago, formerly, in the future"],["alō, alere, aluī, altum","to nourish, support, sustain, cherish, increase"],["dīligo, dīligere, dīlēxi, dīlectum","to esteem, love"],["iungō, iungere, iūnxī, iunctum","to join"],["stō, stāre, stetī, stātum","to stand, stand still or firm"]];

wheelock14 = [["animal, animālis, n.","animal, a living creature"],["aqua, aquae, f.","water"],["ars, artis, f.","art, skill"],["auris, auris, f.","ear"],["cīvis, cīvis, m./f.","citizen"],["iūs, iūris, n.","right, justice, law"],["mare, maris, n.","sea"],["mors, mortis, f.","death"],["nūbes, nūbis, f.","cloud"],["ōs, ōris, n.","mouth, face"],["pars, partis, f.","part, share; direction"],["Rōma, Rōmae, f.","Rome"],["turba, turbae, f.","uproar, disturbance; mob, crowd, multitude"],["urbs, urbis, f.","city"],["vīs, vīs, f.","force, power, violence"],["vīrēs, vīrium, f.","strength"],["ā or ab (+ ABL.)","away from, from; by"],["trāns (+ ACC.)","across"],["appellō, appellāre, appellāvī, appellātum","to speak to, address (as), call, name"],["mūtō, mūtāre, mūtāvī, mūtātum","to change, alter; exchange"],["currō, currere, cucurrī, cursum","to run, rush, move quickly"]["teneō, tenere, tenuī, tentum","to hold, keep, possess; restrain"],["vītō, vītāre, vītāvī, vītātum","to avoid, shun"]];


wheelock15 = [["Italia, Italiae, f.","Italy"],["memoria, memoriae, f.","memory, recollection"],["tempestās, tempestātis, f.","period of time, season, weather, storm"],["centum","one hundred"],["mīlle","thousand"],["miser, misera, miserum","wrectched, miserable, unfortunate"],["inter","between, among"],["itaque","and so, therefor"],["committō, committere, commīsī, commissum","to entrust, commit"],["exspectō, exspectexspectāre, exspectāvī, exspectātum","to look for, expec t, await"],["iaciō, iacere, iēci, iactum","to throw, hurl"],["timeō, timēre, timuī","to fear, be afraid (of)"],["ūnus, ūna, ūnum","one"],["duo, duae, duo","two"],["trēs, trēs, tria","three"],["quattuor","four"],["quinque","five"],["sex","six"],["septem","seven"],["octō","eight"],["novem","nine"],["decem","ten"],["ūndecim","eleven"],["duodecim","tweleve"]["tredcim","thirteen"],["quattuordecim","fourteen"],["quīndecim","fifteen"],["sēdecim","sixteen"],["septendecim","seventeen"],["duodēvīgintī","eighteen"],["ūndēvīgintī","nineteen"],["vīgintī ūnus","twenty-one"],["prīmus, prīma, prīmum","first"],["secundus, secunda, secundum","second"],["tertius, tertia, tertium","third"],["quārtus, quārta, quārtum","fourth"],["quintus, quinta, quintum","fifth"],["sextus, sexta, sextum","sixth"],["septimus, septima, septimum","seventh"],["octāvus, octāva, octāvum","eighth"],["nōnus, nōna, nōnum","ninth"],["decimus, decima, decimum","tenth"],["ūndecimus, ūndecima, ūndecimum","eleventh"],["duodecimua, duodecima, duodecimum","twelth"]];

wheelock16 = [["aetas, aetātis, f.","period of life, life, age, an age, time"],["audītor, audītor, m.","hearer, listener, member of an audience"],["clēmentia, clēmentiae, f.","mildness, gentleness, mercy"],["mēns, mēntis, f.","mind"],["satura, saurae, f.","satire"],["ācer, ācris, ācre","sharp, keen, eager; severe, fierce"],["brevis, brevis, breve","short, small, brief"],["celer, celeris, celere","swift, quick, rapid"],["difficilis, difficilis, difficile","difficult"],["dulcis, dulcis, dulce","sweet; pleasant, agreeable"],["facilis, facilis, facile","easy, agreeable"],["fortis, forttis, forte","strong, brave"],["ingēns, ingēns, ingēns (gen. ingentis)","huge"],["iūcundus, iūcunda, iūcundum","pleasant, delightful, agreeable"],["longus, longa, longum","long"],["omnis, omnis, omne","every, all"],["potēns, potēns, potēns (gen. potentis,)","able, powerful"],["senex, senex, senex (gen. senis)","old, aged; old man"],["quam","how"],["regō, regere, rēxī, rectum","to rule, guide, direct"]];

wheelock17 = [["libellus, libellī, m.","little book"],["quī, quae, quod","who, which, what, that"],["caecus, caeca, caecum","blind"],["levis, leve","light; easy; slight, trivial"],["aut","or"],["aut ... aut","either ... or"],["cito","quickly"],["quoque","also, too"],["admittō, admittere, admīsi, admissum","to admit, receive, let in"],["coepī, coepisse, coeptum","began"],["cupio, cupere, cupīvī, cupītum","to desire, wish, long for"],["dēleo, dēlēre, dēlēvī, dēlētum","to destroy, wipe out, erase"],["dēsīderō, dēsīderāre, dēsīderāvì, dēsīderātum","to desire, long for, miss"],["incipiō, incipere, incēpī, inceptum","to begin"],["nāvigō, nāvigāre, nāvigāvī, nāvigātum","to sail, navigate"],["neglegō, neglegāre, neglegāvī, neglegātum","to neglect, disregard"],["recitō, recitāre, recitāvī, recitātum","to recite, read aloud"]];

wheelock18 = [["flūmen,flūminis, n.", "river"],["genus, generis, n.","origin, kind, type, sort, class"],["hostis, hostis, m.","an enemy"],["lūdus, lūdi, m.","game, sport; school"],["probitās, probitātis, f.","uprightness, honesty"],["sciēntia, sciēntiae, f.","knowledge"],["clārus, clāra, clārum","clear, bright; renowned, famous, illustrious"],["mortālis, mortālis, mortāle","mortal"],["cūr","why"],["deinde","thereupon, next then"],["fluō, fluere, flūxī, fluctum","to flow"],["legō, legere, lēgī, lectum","to pick out, choose, read"],["misceō, miscēre, miscuī, mixtum","to mix, stir up, disturb"],["moveō, movēre, mōvī, mōtum","to move, arouse, affect"],["videor, vidērī, vīsus sum","to be seen, seem, appear"]];

wheelock19 = [["argūmentum, argūmentī, n.","proof, evidence, argument"],["auctor, auctōris, m.","increaser; author, originator"],["beneficium, beneficiī, n.","benefit, kindness, favor"],["familia, familiae, f.","household, family"],["Graecia, Graeciae, f.","Greece"],["iūdex, iūdicis, m.","judge, juror"],["iūdicium, iūdiciī, n.","jugment, decision, opinion; trial"],["scelus, sceleris, n.","evil deed, crime, sin, wickedness"],["quis? quid?","who? whose? whom? what?"],["quī? quae? quod?","what? which? what kind of; what (a)!"],["certus, certa, certum","definite, sure, certain, reliable"],["immortālis, immortālis, immortāle","immortal, not subject to death"],["at","but; but, mind youp; but, you say"],["nisi","if ... not, unless; except"],["contrā (+ ACC.)","against"],["iam","now, already, soon"],["dēlectō, dēlectāre, dēlectāvī, dēlectātum","to delight, charm, please"],["līberō, līberāre, līberāvī, līberātum","to free, liberate"],["parō, parāre, parāvī, parātum","o prepare, prove; get, obtain"],["",""],["",""],["",""],["",""],["",""]];

wheelock20 = [["coniūratī, coniūratōrum","conspirators"],["cornū, cornūs, n.","horn"],["frūctus, frūctūs, m.","fruit; profit, benefit, enjoyment"],["genu, genūs, n.","knee"],["manus, manūs, f.","hand, handwriting; band"],["metus, metūs, m.","fear, dread, anxiety"],["mons, montis, m.","mountain"],["senātus, senātūs, m.","senate"],["sensus, sensūs, m.","feeling, sense"],["spīritus, spīritūs, m.","beath, breathing; spirit, soul"],["servitūs, servitūtis, f.","servitude, slavery"],["versus, versūs, m.","line of verse"],["commūnis, commūnis, commūne","common, general, of/for the community"],["dexter, dextra, dextrum","right, right-handed"],["sinister, sinistra, sinistrum","left, left-handed; harmful, ill-omened"],["careō, carēre, caruī, cariturum (+ ABL.)","to be without, deprived of, want, lack; be free from"],["defendō, defendere, defendī, defensum","to defend"],[", discēdere, discessī, discessum","to go away, depart"],["ōdī, ōdisse, õsum","to hate"],["prohibeō, prohibēre, prohibuī, prohibitum","to kee (back), prevent, hinder, restrain, prohibit"],["prōnūntiō, prōnūntiāre, prōnūntiāvī, prōnūntiātum","to proclaim, announce, declaim, pronounce"]];

wheelock21 = [["casa, casae, f.","house, cottage, hut"],["causa, causae, f.","cause, reason; case, situation"],["causā (with a preceding genitive)","for the sake of, on account of"],["fenestra, fenestrae, f.","window"],["finis, finis, m.","end, limit, boundary; purpose"],["finēs, finium, m.","boundaries"],["gēns, gentis, f.","clan, race, nation, people"],["mundus, mundī, m.","wolrd, universe"],["nāvis, nāvis, f.","ship, boat"],["salūs, salūtis, f.","health, safety; greeting"],["Trōia, rōiae, f.","Troy"],["vīcīnus, vīcīnī, m.","neighbor"],["vīcīna, vīcīnae, f.","neighbor"],["vulgus, vulgī, n.","the common people, mob, rabble"],["asper, aspera, asperum","rough, harsh"],["atque or ac","and also, and even, and in fact"],["iterum","again, a second time"],["contineō, continēre, continuī, contentum","to hold together, keep, contain, enclose, restrain"],["iubeō, iubēre, iussī, iussum","to order, bid, command"],["laborō, laborāre, laborāvī, laborātum","to labor, work, be in distress"],["rapiō, rapere, rapuī, raptum","to seize, snatch, carry away"],["relinquō, relinquere, reliquī, relictum","to leave behind, leave, abandon, desert"],["sciō, scīre, scīvī, scitum","to know"],["nesciō, nescīre, nescīvī, nescitum","to not know, be ignorant"],["tangō, tangere, tetigī, tāctum","to touch"]];

wheelock22 = [["diēs, dieī, m.","day"],["ferrum, ferrī, n.","iron; sword"],["fidēs, fideī, f.","faith, turst, trustworthiness, fidelity; promise, guarantee, protection"],["modus, modī, m.","measure, bound, limit, manner, method, mode, way"],["rēs, reī, f.","thing"],["rēs pūblica, reī pūblicae, f.","state, commonwealth, republic"],["spēs, speī, f.","hope"],["ignis, ignis, m.","fire"],["aequus, aequa, aequum","level, calm, even, equal, just; favorable"],["fēlīx, fēlīx, fēlīx (gen. fēlicis)","lucky, fortunate, happy"],["incertus, incerta, incertum","uncertain, unsure, doubtful"],["Latīnus, Latīna, Latīnum","Latin"],["medius, media, medium","middle; middle of"],["quondam","formerly, once"],["ultrā (+ ACC.)","on the other side of, beyond"],["prōtinus","immediately"],["cernō, cernere, crēvī, crētum","to distnguish, discern, perceive"],["ēripiō, ēripere, ēripuī, ēreptum","to snatch away, take away, rescue"],["inquit","he says or he said"],["tollo, tollere, sustulī, sublātum","to raise, lift up; take away, remove, destroy"]];

wheelock23 = [["arx, arcis, f.","citadel, stronghold"],["dux, ducis, m.","leader, guide; commander, general"],["equus, equuī, m.","horse"],["hasta, hastae, f.","spear"],["īnsula, īnsulae, f.","island"],["lītus, lītoris, n.","shore, coast"],["mīles, mīlitis, m.","soldier"],["ōrātor, ōrātoris, m.","orator, speaker"],["sacerdōs, sacerdōtis, m.","priest"],["aliquis, aliquid","someone, something"],["quisquis, quidquid","whoever, whatever"],["magnanimus, magnanima, magnanimum","great-hearted, brave, magnanimous"],["umquam","ever, at any time"],["ēducō, ēducāre, ēducāvī, ēducātum","to bring up, educate"],["gaudeō, gaudēre, gāvīsus sum","to be glad, rejoice"],["ostendō, ostendere, ostendī, ostentum","to show, exhibit, display"],["petō, petere, petīvī, petītum","to seek, aim at, beg beseech"],["premō, premere, pressī, pressum","to press; press hard, pursue"],["opprimō, opprimere, oppressī, oppressum","to suppress, overwhelm, overpower, check"],["verto, vertere, vertī, versum","to turn, change"],["āverto, āvertere, āvertī, āversum","to turn away, avert"]];

wheelock24 = [["Carthāgo, Carthāginis, f.","Carthage"],["fabula, fabulae, f.","story, tale; play"],["imperātor, imperātoris, m.","general, commander-in-chief, emperor"],["imperium, imperiī, n.","power t command, supreme power, authority, command"],["perfugium, perfugiī, n.","refuge, shelter"],["servus, servī, m.","slave"],["sōlācium, sōlāciī, n.","comfort, relief"],["vulnus, vulneris, n.","wound"],["re or red as prefix","again, back"],["ut","as, just as, when"],["posteā","aferwards"],["accipiō, accipere, accēpī, acceptum","to take, receive, accept"],["excipiō, excipere, excēpī, exceptum","to take out, except; take, receive, capture"],["recipiō, recipere, recēpī, receptum","to take back, regain; admit, receive"],["pellō, pellere, pepulī, pulsum","to strike, push; drive out, banish"],"expellō, expellere, expulsī, expulsum","to drive out, expel, banish"],["nārrō, nārrāre, nārrāvī, nārrātum","to tell, report, narrate"],["quaerō, quaerere, quaesīvī, quaesītum","to seek, look for, strive for; ask, inquire, inquire into"],["rīdeō, rīdēre, rīsī, rīsum","to laugh, laugh at"]];

wheelock25 = [["lingua, linguae, f.","tongue; language"],["ferōx, ferōx, ferōx (gen. ferōcis)","fierce, savage"],["fidēlis, fidēlis, fidēle","faithful, loyal"],["geminus, gemina, geminum","twin"],["sapiēns, sapiēns, sapiēns (gen. sapientis)","wise, judicious"],["ultimus, ultima, ultimum","farthest, extreme"],["dehinc","then, next"],["hīc","here"],["āit, āiunt","he says, they say, assert"],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["crēdō, crēdere, crēdidī, crēditum (+ DAT.)","believe, trust"],["negō, negāre, negāvī, negātum","to deny, say that ... not"],["iacō, iacēre, iacuī","to lie; lie prostrate; lie dead"],["nesciō, nescīre, nescīvī, nescītum","to not know, be ignorant"],["patefaciō, patefacere, patefēcī, patefactum","to make open, open; disclose, expose"],["nuntiō, nuntiāre, nuntiāvī, nuntiātum","to announce, report, relate"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["sperō, sperāre, sperāvī, sperātum","to hope for, hope"],["putō, putāre, putāvī, putātum","to reckon, suppose, judge, think, imagine"],["suscipiō, suscipere, suscēpī, susceptum","to undertake"]];


wheelock26 = [["cēna, cēnae, f.","dinner"],["forum, forī, n.","marketplace, forum"],["lēx, lēgis, f.","law, statute"],["līmen, līminis, n.","threshold"],["lūx, lūcis, f.","light"],["mēnsa, mēnsae, f.","ttable; dining; dish, course"],["nox, noctis, f.","night"],["somnus, somnī, m.","sleep"],["quīdam, quaedam, quiddam or quoddam","a certain one or thing, someone, someting; a certain, some"],["pudīcus, pudīca, pudīcum","modest, chaste"],["superbus, superba, superbum","arrogant, overbearing, haughty, proud"],["trīstis, trīstis, trīste","sad, sorrowful; joyless, grim, severe"],["turpis, turpis, turpe","ugly; shameful, base, disgraceful"],["urbānus, urbāna, urbānum","of the city urban; urbance, elegant"],["prae (+ ABL.)","in front ofl before"],["quam","than; as ... as possible; how"],["tantum","only"],["invītō, invītāre, invītāvī, invītātum","to entertain, invite, summon"]];


wheelock27 = [["dēlectātio, dēlectātionis, f.","delight, pleasure, enjoyment"],["nepōs, nepōtis, m.","grandson, descendant"],["sōl, sōlis, m.","sun"],["dīligēns, dīligēns, dīligēns (gen. dīligentis)","diligent, careful"],["dissimilis, dissimilis, dissimile","unlike, different"],["gracilis, gracilis, gracile","slender, thin"],["humilis, humilis, humile","lowly, humble"],["maior, maior, maius","greater, older"],["maiōres, maiōrum, m.","ancestors, i.e., the older ones"],["prīmus, prīma, prīmum","first, foremost, chief, principal"],["quot","how many, as many as"],["similis, similis, simile","similar (to), like, resembling"],["superus, supera, superum","above, upper"],["superī, superōrum, m.","the gods"],["ūtilis, ūtilis, ūtile","useful, advantageous"],["pōnō, pōnere, pōsuī, pōsitum","to put, place"],["probō, probāre, probāvī, probātum","to approve, recommend, test"]];


wheelock28 = [["arma, armōrum, n.","arms, weapons"],["cursus, cursūs, m.","running, race; course"],["lūna, lūnae, f.","moon"],["occāsiō, occāsiōnis, f.","occasion, opportunity"],["parēns, parentis, m./f.","parent"],["stella, stellae, f.","star, planet"],["vesper, vesperis or vesperī, m.","evening; evening star"],["mortutus, mortua, mortuum","dead"],["prīnceps, prīncipis, m./f.","leader, emperor"],["ut + subjunctive","in order that, so that, that, in order to, so as to, to"],["ut + indicative","as, when"],["nē","not; in order that ... not, that ... not, in order not to"],["cēdo, cēdere, cessī, cessum","to go, withdraw; yield to, grant, submit"],["dēdicō, dēdicāre, dēdicāvī, dēdicātum","to dedicate"],["egeō, egēre, eguī (+ ABL. or GEN.)","to need, lack, wantt"]["ō, āre, āvī, ātum",""],["expleō, explēre, explēvī, explētum","to fill, fill up, complete"]["praestō, praestāre, praestitī, praestitum","to excel; exhibit, show, offer, supply, furnish"],["taceō, tacēre, tacuī, tacitum","to be silent, leave unmentioned"]];

wheelock29 = [["fātum, fāti, n.","fate; death"],["ingenium, ingeniī, n.","nature, innate talent"],["moenia, moenium, n.","walls of a city"],["nata, natae, f.","daughter"],["ōsculum, ōsculi, n.","kiss"],["sīdus, sīderis, n.","constellation, star"],["dignus, digna, dignum (+ ABL.)","worthy, worthy of"],["dūrus, dūra, dūrum","hard, harsh, rough, stern, unfeeling, hardy"],["tantus, tanta, tantum","so large, so great, of such a size"],["dēnique","at last, finally, lastly"],["ita","so, thus"],["quidem","indeed, certainly, at least, even"],["sīc","so, thus"],["tam","so, to such a degree"],["tam ... quam","so ... as"],["tamquam","as it were, as if, so to speak"],["vēro","in truth, indeed, to be sure, however"],["condō, condere, condidī, conditum","to put together or into, store; foundk establish"],["contendō, contendere, contendī, contentum","to strive, struggle, contend;hasten"],["molliō, mollīre, mollīvī, mollītum","to soften; make calm or less hostile"],["pugnō, pugnāre, pugnāvī, pugnātum","to fight"],["respondeō, respondēre, respondī, respōnsum","to answer"],["surgō, surgere, durrēxī, surrēctum","to get up, arise"]];


wheelock30 = [["honor, honōris, m.","honor, esteem; public office"],["cēterī, cēterae, cētera","the remaining, the rest, the other, all the others"],["quantus, quanta, quantum","how large, how great, how much"],["tantus ... quantus","just as much (many) ... as"],["rīdiculus, rīdicula, rīdiculum","laughable, ridiculous"],["vīvus, vīva, vīvum","alive, living"],["furtim","stealthily, secretly"],["fūr, fūris, m.","thief"],["mox","soon"],["under","whence, from what or which place, from which, from whom"],["utrum ... an","whether ... or"],["bibō, bibere, bibī","to drink"],["cognōscō, cognōscere, cognōvī, cognitum","become acquainted with, learn, recognize"],["comprehendō, comprehendere, comprehendī, comprehensum","to grasp, seize, arrest; comprehend, understand"],["cōnsūmō, cōnsūmere, cōnsūmpsī, cōnsūmptum","to consume, use up"],["dubitō, dubitāre, dubitāvī, dubitātum","to doubt, hesitate"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["expōnō, expōnere, exposuī, expositum","to set forth, explain, expose"],["rogō, rogāre, rogāvī, rogātum","to ask"],["minuō, minuere, minuī, minutum","to lessen, diminish"]];

wheelock31 = [["as, assis, m.","an as (a small copper coin)"],["auxilium, auxiliī, n.","aid, help"],["digitus, digitī, m.","finger, toe"],["elephantus, elephantī, m.","elephant"],["exsilium, exsiliī, n.","exile, banishment"],["invidia, invidiae, f.","envy, jealously, hatred"],["rūmor, rūmoris, m.","rumor"],["vīnum, vīnī, n.","wine"],["mediocris, mediocris, mediocre","ordinary, moderate, mediocre"],["cum + subjunctive","when, since, although"],["cum + indicative","when"],["apud (+ ACC.)","among, in the presence of, at the house of"],["semel","a single time, once, once and for all, simultaneously"],["usque","all the way, up (to), even (to), constinuously, always"],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ferō, ferre, tulī, lātum","to bear, carry, bring; suffer, endure, tolerate; say, report"],["adferō, adferre, attulī, allātum","to bring to"],["cōnferō, cōnferre, contulī, collātum","to bring together, compare; confer, bestow; se conferre = to go"],["offerō, offerre, obtulī, oblātum","to offer"],["referō, referre, rettulī, relātum","to carry back, bring back; repeat, answer, report"],["invideō, invidēre, invīdī, invīsum","to be envious; to be jealous of, envy, look at with envy (+ DAT.)"],["occidō, occidere, occidī, occāsum","to fall down, die, set"]];

wheelock32 = [["custōdia, custōdiae, f.","protection, custody"],["exercitus, exercitūs, m.", "army"], ["paupertās, paupertātis, f.", "poverty, humble circumstances"],["dīves, dīves, dīves (gen. dīvitis or dītis)","rich, wealthy"],["pār, pār, pār (gen. paris)","equal"],["pauper, pauper, pauper (gen. pauperis)","of small means, poor"],["dummodo + subjunctive","provided that, so long as"],["longē","far"],["liberē","freely"],["pulchrē","beautifully"],["fortiter","bravely"],["celeriter","quickly"],["ācriter","keenly"],["felīciter","happily"],["sapienter","wisely"],["facile","easily"],["bene","well"],["male","badly"],["multum","much"],["magnopere","greatly"],["parum","little, not very [much]"],["diū","for a long time"],["longius","farther, too far"],["līberius","more freely"],["pulchrius","more beautifully"],["fortius","more bravely"],["celerius","more quickly"],["ācrius","more keenly"],["fēlīcius","more happily"],["sapientius","more easily"],["melius","better"],["peius","worse"],["plūs","more (quantity)"],["magis","more (quality)"],["prius","before, earlier"],["minus","less"],["diūtius","longer"],["diūtissimē","very long"],["prīmum","in the first place"],["prīmō","first, at first"],["minimē","least"],["maximē","most, especially"],["maximē","most"],["plurimum","most, very much"],["pessimē","worst"],["optimē","best"],["longissimē","farthest, very far"],["liberrimē","most, very freely"],["pulcherrimē","most beautifully"],["fortissimē","most bravely"],["celerrimē","most quicly"],["ācerrimē","most keenly"],["fēlīcissimē","most happily"],["sapientissimē","most wisely"],["facillimē","most easily"],["malō, malle, maluī","to want (something) more, instead; prefer"],["volō, velle, voluī","to want, wish, be willing, will"],["nolō, nolle, noluī","to not ... wish, be unwilling"],["pateō, patēre, patuī","to be open, lie open; be accessible, be evident"],["praebeō, praebēre, praebuī, praebitum","to offer, provide"],["promittō, promittere, promīsī, promissum","to promise, send forth"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""]];

wheelock33 = [["initium, initiī, n.","beginning, commencement"],["ops, opis, f.","help, aid"],["opēs, opum, f.","power, resources, wealth"],["philosophus, philosophī, m.","philosopher"],["philosopha, philosophae, f.","philosopher"],["plēbs, plēbis, f.","the common people, populace, plebeians"],["sãl, alis, m.","salt; wit"],["speculum, speculī, n.","mirror"],["quis, quid after sī, nisi, num and ne","anyone, anything, someone, something"],["candidus, candida, candidum","shining, bright, white; beautiful"],["merus, mera, merum","pure, undiluted"],["suāvis, suāvis, suāve","sweet"],["-ve","or"],["heu","ah! alas!"],["subitō","suddenly"],["recūsō, recūsāre, recūsāvī, recūsātum","to refuse"],["tradō, tradere, tradidī, traditum","to give over, surrender; hand down, transmit, teach"]];

wheelock34 = [["anima, animae, f.","air, breath, soul, spirit"],["remissiō, remissiōnis, f.","letting go, release, relaxation"],["vōx, vōcis, f.","voice, word"],["adversus, adversa, adversum","opposite, adverse"],["tālis, tālis, tāle","such, of such a sxort"],["vae (+ DAT. or ACC.)","alas, woe to"],["arbitror, arbitrāri, arbitrātus sum","to judge, think"],["conor, conāri, conātus sum","to try, attempt"],["crēscō, crēscere, crēvī, crētum","to increase"],["hortor, hortāri, hortātus sum","to encourage, urge"],["fateor, fatēri, fassus sum","to confess, admitt"],["ēgredior, ēgredī, ēgressus sum","to go out"],["loquor, loquī, locutus sum","to say, speak, tell"],["molīor, molīrī, molītus sum","to work at, build, undertake, plan"],["morior, morī, mortuus sum","to die"],["nāscor, nāscī, nātus sum","to be born, spring forth, arise"],["patior, patī, passus sum","to suffer, endure; permit"],["proficīscor, proficīscī, profectus sum","to set out, start"],["rūsticor, rūsticāri, rūsticātus sum","to live in the country"],["sedō, sedēre, sēdī, sessum","to sit"],["sequor, sequi, secutus sum","to follow"],["spectō, spectāre, spectāvī, spectātum","to look at, see"],["ūtor, ūtī, ūsus sum (+ ABL.)","to use; enjoy, experience"]];

wheelock35 = [["aestās, aestātis, f.","summer"],["iānua, iānuae, f.","door"],["pectus, pectoris, n.","breast, heart"],["praemium, praemiī, n.","reward, prize"],["īrātus, īrāta, īrātum","angry"],["antepōnō, antepōnere, antepōsuī, antepōsitum","to put before, prefer"],["fōveō, fōvēre, fōvī, fōtum","to comfort, nurture, cherish"],["ignōscō, ignōscere, ignōvī, ignōtum (+ DAT.)","to grant pardon to, forgive"],["imperō, imperāre, imperāvī, imperātum (+ DAT.)","to give orders to, command"],["mīror, mīrārī, mīrātus sum","to marvel at, admire, wonder"],["noceō, nocēre, nocuī, nocitum (+ DAT.)","to do harm to, harm, injure"],["nūbō, nūbere, nūpsī, nūptum","to cover, veil, + DAT. to be married to, marry"],["parcō, parcere, pepercī, parsurum (+ DAT.)","to spare"],["pāreō, pārēre, pāruī (+ DAT.)","to be obedient to, obey"],["persuādeō, persuādēre, persuāsī, persuāsum (+ DAT.)","to succeed in urging, persuade"],["placeō, placēre, placuī, placitum (+ DAT.)","to be pleasing to, please"],["sapiō, sapīre, sapīvī","to have good tase, have good sense, be wise"],["serviō, servīre, servīvī, servītum (+ DAT.)","TO BE A SLAVE TO, SERVE"],["studeō, studēre, studuī (+ DAT.)","to direct one's zeal to, be eager for, study"],["subrideō, subridēre, subrīsī, subrīsum","to smile (down) upon"],["",""],["",""],["",""],["",""],["",""]];

wheelock36 = [["cupīdo, cupīdinis, f.","desire, passion"],["lēctor, lēctoris, m.","reader"],["lēctrīx, lēctrīcis, f.","reader"],["vinculum, vinculī, n.","bond, chain, fetter"],["cōtīdiē","daily, every day"],["fortasse","perhaps"],"accēdō, accēdere, accessī, accessum","to come to, approach"],"carpō, carpere, carpsī, carptum","to harvest, pluck; seize"],"cogō, cogere, coegī, coactum","to drive or bring together, force, compel"],"contemnō, contemnere, contempsī, contemptum","to despise, scorn"]["curō, curāre, curāvī, curātum","to care for, attend to; heal, cure; take care"],["contundō, contundere, contudī, contunsum","to beat, crush, bruise, destroy"],["dēcernō, dēcernere, dēcrēvī, dēcrētum","to decide, settle, decree"],["exigō, exigere, exēgī, exactum","to drive out, force out, exact, drive through, complete"],["fiō, fierī, factus sum","to occur, happen; become; be made, be done"],["oblectō, oblectoblectāre, oblectāvī, oblectātum","to please, amuse, delight, pass time pleasantly"],["orō, orāre, orāvī, orātum","to speak, plead, be, beseech, entreat, pray"],["requīrō, requīrere, requīsīvī, requīsitum","to seek, ask for; miss, need, require"],["recreō, recreāre, recreāvī, recreātum","to restore, revive; refresh, cheer"],["serenō, serenāre, serenāvī, serenātum","to make clear, brighten; cheer kup, soothe"]];

wheelock37 = [["Athēnae, Athēnārum, f.","Athens"],["domus, domūs (domī), f.","house, home"],["humus, humī, f.","ground, earth, soil"],["iter, itineris, n.","journey, route, road"],["rūs, rūris, n.","the country, countryside"],["Syrācūsae, Syrācūsārum, f.","Syracuse"],["grātus, grāta, grātum","pleasing, agreeable; grateful"],["idōneus, idōnea, idōneum","suitable, fit, appropriate"],["immōtus, immōta, immōtum","unmoved; uknchanged, unrelenting"],["forīs","out of doors, outside"],["eō, īre, iī, itum","to go"],["abeō, abīre, ababiī, abitum","to go away, depart, leave"],["adeō, adīre, adiī, aditum","to go to, approach"],["exeō, exīre, exiī, exitum","to go out exit"],["ineō, inīre, iniī, initum","to go in, enter; enter into, begin"],["obeō, obīre, obiī, boitum","to go up against, mee, die"],["pereō, perīre, periī, peritum","to pass away, be destroyed"],["redeō, redīre, rediī, reditum","to go back, return"],["interficiō, interficere, interfecī, interfectum","to kill, murder"],["licet, licēre, licuit (+ DAT.)","it is permitted (for someone to do something), one may"],["pergrīnor, pergrīnārī, pergrīnātus sum","to travel abroad, wander"],["requiēsco, requiēscere, requiēvī, requiētum","to rest"],["soleō, solēre, solitus sum","to be accustomed"]];

wheelock38 = [["arbor, arboris, f.","tree"],["dignitās, dignitātis, f.","merit, prestige, dignity"],["dolor, doloris, m.","pain, grief"],["odium, odiī, n.","hatred"],["opus, operis, n.","a work, task; deed, accomplishment"],["ōrātiō, ōrātiōnis, f.","speech"],["pēs, pedis, m.","lower leg, foot"],["sator, satōris, m.","sower, planter; begetter, father; founder"],["fīrmus, fīrma, fīrmum","firm, storng, reliable"],["mīrābilis, mīrābilis, mīrābile","amazing, wondrous, remarkable"],["prīstinus, prīstina, prīstinum","ancient; former, previous"],["etsī","even if, although"],["erga (+ ACC.)","toward"],["libenter","with pleasure, gladly"],["impēdiō, impēdīre, impēdīvī, impēdītum","to impede, hinder, prevent"],["metuō, metuere, metuī","to fear, dread; be afraid for (+ DAT.)"],["recognōscō, recognōscere, recognōvī, recognitum","to recognize, recollect"],["suspendō, suspendere, suspendī, suspensum","to hand up, suspend; interrupt"],["vēndō, vēndere, vēndidī, vēnditum","to sell"],["queror, querī, questus sum","to complain, lament"]];

wheelock39 = [["aedificium, aedificiī, n.","building, structure"],["iniūria, iniūriae, f.","injustice, injury, wrong"],["mulier, mulieris, f.","woman"],["transitus, transitūs, m.","passing over, transit, transition"],["ventus, ventī, m.","wind"],["cupidus, cupida, cupidum","desirous, eager, fond (+ GEN.)"],["līberālis, līberālis, līberāle","decent, liberal, generous; of, relating to a free person; worthy of a free man"],["necesse","necessary, inevitable"],["necesse est","it is necessary"],["vetus, vetus, vetus (gen. veteris)","old"],["quasi","as if, as it were"],["ambulō, ambulāre, ambulāvī, ambulātum","to walk"],["experior, experīrī, expertus sum","to try, test"],["lībō, lībāre, lībāvī, lībātum","to pour alibation of, on; pour ritually; sip; touch gently"],["ō, āre, āvī, ātum",""],["oportet, oportēre, oportuit","it is proper, right, necessary"],["oppugnō, oppugnāre, oppugnāvī, oppugnātum","to fight against, attack, assault, assail"],["ōrnō, ōrnāre, ōrnāvī, ōrnātum","to equip, furnish, adorn"],["pernoctō, pernoctpernoctāre, pernoctāvī, pernoctātum","to spend or occupy the night"],["transeō, transīre, transiī, transitum","to go across, cross; pass over, ignore"]];


wheelock40 = [["aes, aeris, n.","bronze"],["dominus, dominī, m.","master (of a household), lord"],["domina, dominae, f.","mistress, lady"],["lācrima, lācrimae, f.","tear"],["mēta, mētae, f.","turning point, goal; limit, boundary"],["monumentum, monumentī, n.","monument"],["nāsus, nāsi, m.","nose"],["saxum, saxī, n.","rock, stone"],["vultus, vultūs, m.","countenance, face"],["iūstus, iūsta, iūstum","just, right"],["tot","so many, as many"],["tot ... quot","as many ... as"],["praeter (+ ACC.)","besides, exceopt; beyond, past"],["nōnne","introduces a question expecting the answer 'yes'"],["num","introduces a question expecting the answer 'no'""],["omnīnō","wholly, entirely, altogether"],["postrēmum","after all, finally; for the last time"],["quīn","indeed, in fact, furthermore"],["explicō, explicāre, explicāvī, explicātum","to unfold; explain; spread out, deploy"],["fatīgō, fatīgāre, fatīgāvī, fatīgātum","to weary, tire out"],["for, fārī, fatus sum","to speak (prophetically), talk, foretell"],["ōpinor, ōpinārī, ōpinatus sum","to suppose"],["reperiō, reperīre, repperī, repertum","to find, discover, learn; get"],["vereor, verērī, veritus sum","to show reverence for, respect; be afraid of, fear"]];

stage = [["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["a, ae, f.",""],["ō, īre, īvī, ītum",""],["ō, ere, ī, tum",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]];

*/



function hideLabel(){
  document.getElementById("label").style.display = "none" ;
}

function unHideLabel(){
  document.getElementById("label").style.display = "block" ;
}

function hideLabelBox(){
  document.getElementById("labelBox").style.display = "none" ;
}

function unHideLabelBox(){
  document.getElementById("labelBox").style.display = "block" ;
}

function hideBox1(){
  document.getElementById("box1").style.display = "none" ;
}

function unHideBox1(){
  document.getElementById("box1").style.display = "block" ;
}

function hideBox2(){
  document.getElementById("box2").style.display = "none" ;
}

function unHideBox2(){
  document.getElementById("box2").style.display = "block" ;
}

function hideDemo(){
  document.getElementById("latin").style.display = "none" ;
}

function unHideDemo(){
  document.getElementById("latin").style.display = "block" ;
}
function hideDemo2(){
  document.getElementById("trans").style.display = "none" ;
}

function unHideDemo2(){
  document.getElementById("trans").style.display = "block" ;
}

hideBox2();
hideDemo();
hideDemo2();


function changeBoxColorsTwo(){

  document.getElementById("box1").style.background= "yellow" ;
  document.getElementById("box1").style.borderColor= "black" ;

  document.getElementById("latin").style.background= "black" ;
  document.getElementById("latin").style.borderColor= "white" ;

  document.getElementById("trans").style.background= "white" ;
  document.getElementById("trans").style.borderColor= "black" ;
  document.getElementById("trans").style.color= "black" ;
}


function startGame(){

  //This extracts the user's input
  var x = document.getElementById("labelBox").value;
  //console.log(x);

  hideLabel();
  hideLabelBox();

 //This activitates boxes 1 and 2 to start the Latin to English game
  document.getElementById("box1").onclick = function(){startLatinGame()};
  document.getElementById("box2").onclick = function(){giveEnglishAnswerOne()};

//This loads the data into the game
  resetGame();


//This sets the colors of box 1 for the first game
  document.getElementById("box1").innerHTML = "Let's Go!"
  document.getElementById("box1").style.background = "yellow";
  document.getElementById("box1").style.color = "black";

}

 


function startEnglishGame(){

document.getElementById("box1").innerHTML = "Let's Go!"
document.getElementById("box1").style.background = "blue";
document.getElementById("box1").style.color = "white";
document.getElementById("box2").style.background = "blue";
document.getElementById("box2").style.color = "white";
document.getElementById("latin").style.color = "yellow";
document.getElementById("trans").style.color = "blue";

//resetSentence();

if (vocArry.slice(0,1).length ==0){
document.getElementById("latin").innerHTML = "finis";
document.getElementById("trans").innerHTML = "The End!";
document.getElementById("box1").innerHTML = "Trick Me Again!"
document.getElementById("box1").style.background = "blue";
document.getElementById("box1").style.color = "white";
document.getElementById("box2").style.color = "black";
document.getElementById("latin").style.color = "white";
document.getElementById("trans").style.borderColor= "black" ;
document.getElementById("trans").style.color = "black";
document.getElementById("box1").onclick = function(){startLatinGame()};
document.getElementById("box2").onclick = function(){giveEnglishAnswerOne()};


resetGame();

} else {
document.getElementById("box1").innerHTML = "Next!"
removed = vocArry.splice(0,1);

    hideBox1();
    unHideBox2();
    unHideDemo();
    hideDemo2();


    document.getElementById("latin").innerHTML = removed[0][1];
}

}

function giveLatinAnswerOne(){


  unHideBox1();
  hideBox2();
  unHideDemo2();


  document.getElementById("trans").innerHTML = removed[0][0];

}









function startLatinGame(){
  document.getElementById("box1").innerHTML = "Select Stage!"
  document.getElementById("box1").style.background = "yellow";
  document.getElementById("box1").style.color = "black";

//document.getElementById("box1").innerHTML = "Next!"
//document.getElementById("box1").style.background = "blue";
//document.getElementById("box1").style.color = "white";

document.getElementById("box2").style.background = "yellow";
document.getElementById("box2").style.color = "black";

document.getElementById("latin").style.background = "black";
document.getElementById("latin").style.color = "white";

document.getElementById("trans").style.borderColor= "black" ;
document.getElementById("trans").style.background = "white";
document.getElementById("trans").style.color = "black";

//resetSentence();

if (vocArry.slice(0,1).length ==0){
document.getElementById("latin").innerHTML = "finis";
document.getElementById("trans").innerHTML = "The End!";
document.getElementById("box1").innerHTML = "Trick Me Again!"
document.getElementById("box1").style.background = "blue";
document.getElementById("box1").style.color = "white";
document.getElementById("box2").style.color = "black";

document.getElementById("latin").style.color = "white";
document.getElementById("trans").style.color = "black";
document.getElementById("box1").onclick = function(){startEnglishGame()};
document.getElementById("box2").onclick = function(){giveLatinAnswerOne()};


resetGame();

} else {
document.getElementById("box1").innerHTML = "Next!"
removed = vocArry.splice(0,1);

    hideBox1();
    unHideBox2();
    unHideDemo();
    hideDemo2();
    //changeBoxColorsOne();

    document.getElementById("latin").innerHTML = removed[0][0];
}


}

function giveEnglishAnswerOne(){


  unHideBox1();
  hideBox2();
  unHideDemo2();
  //changeBoxColorsTwo();

  document.getElementById("trans").innerHTML = removed[0][1];


}
