import type { Locale } from "./utils";
import type { FeatureIconName } from "../components/icons/types";

export interface LegalSection {
	heading: string;
	/** Plain text body. Use `bodyHtml` instead when the paragraph needs an inline link. */
	body?: string;
	/** Pre-authored trusted HTML (inline links), rendered as-is. */
	bodyHtml?: string;
}

export interface LegalDocument {
	title: string;
	lead: string;
	sections: LegalSection[];
}

export interface TranslationKeys {
	meta: {
		title: string;
		description: string;
	};
	/** Small strings shared across components (shared JS libs like toast.ts aren't Astro components and can't call useTranslations, so callers pass these through). */
	common: {
		close: string;
	};
	nav: {
		problem: string;
		roles: string;
		how: string;
		security: string;
		contact: string;
		signIn: string;
		menuLabel: string;
	};
	hero: {
		kicker: string;
		headlineLead: string;
		headlineAccent: string;
		subheadline: string;
		ctaPrimary: string;
		ctaSecondary: string;
		rota: {
			caption: string;
			gridAria: string;
			initialLabel: string;
			solutionLabel: string;
			fairFirst: string;
			fairEqual: string;
			loadTitle: string;
			spreadLabel: string;
			hoursUnit: string;
			legendLong: string;
			legendShort: string;
			legendLeave: string;
			legendUnavailable: string;
		};
	};
	problem: {
		kicker: string;
		titleLine1: string;
		titleLine2: string;
		lead: string;
		legalTick: string;
		barsNote: string;
		spreadLabel: string;
		unfairTitle: string;
		fairTitle: string;
	};
	roles: {
		kicker: string;
		title: string;
		lead: string;
		items: {
			tag: string;
			title: string;
			pain: string;
			fixes: string[];
		}[];
	};
	how: {
		kicker: string;
		title: string;
		lead: string;
		spaceTitle: string;
		spaceTitleSuffix: string;
		spaceAria: string;
		solutionsUnit: string;
		axisValid: string;
		axisFair: string;
		axisNote: string;
		steps: {
			title: string;
			description: string;
		}[];
	};
	features: {
		kicker: string;
		title: string;
		lead: string;
		items: {
			title: string;
			description: string;
			/** Binds this item to its icon by data, not array position — a 7th item added without one is now a compile error instead of a silently blank icon. (M6) */
			icon: FeatureIconName;
		}[];
		moreLabel: string;
		slotsNote: string;
		slots: { day: string; label: string; start: number; width: number }[];
	};
	partners: {
		label: string;
		ceo: string;
	};
	security: {
		kicker: string;
		title: string;
		lead: string;
	};
	contact: {
		title: string;
		lead: string;
		nameLabel: string;
		namePlaceholder: string;
		emailLabel: string;
		emailPlaceholder: string;
		orgLabel: string;
		orgPlaceholder: string;
		headcountLabel: string;
		headcountPlaceholder: string;
		scopeLabel: string;
		scopeOptions: string[];
		problemLabel: string;
		problemPlaceholder: string;
		submit: string;
		submitPending: string;
		success: string;
		toastSuccessTitle: string;
		toastErrorTitle: string;
		toastValidationTitle: string;
		errors: {
			nameRequired: string;
			emailRequired: string;
			emailInvalid: string;
			submitFailed: string;
			captchaFailed: string;
		};
	};
	/** Server-side strings for the demo-request e-mails (src/pages/api/contact.ts, src/lib/emailTemplates.ts) — kept alongside `contact` so every locale sends mail in its own language. (H4) */
	email: {
		subject: string;
		/** `{org}` is replaced with the submitted institution name. */
		subjectWithOrg: string;
		confirmationSubject: string;
		/** `{name}` is replaced with the submitter's name. */
		confirmationTitle: string;
		confirmationBody: string;
		confirmationFooterNote: string;
		notificationTitle: string;
		notificationLead: string;
		fieldName: string;
		fieldEmail: string;
		fieldOrg: string;
		fieldHeadcount: string;
		fieldScope: string;
		fieldProblem: string;
	};
	footer: {
		description: string;
		product: string;
		productLinks: { label: string; href: string }[];
		company: string;
		companyLinks: { label: string; href: string; external?: boolean }[];
		legal: string;
		legalLinks: { label: string; href: string; external?: boolean }[];
		ctaHeading: string;
		ctaButton: string;
		appLink: string;
		copyright: string;
	};
	legal: {
		terms: LegalDocument;
		privacy: LegalDocument;
	};
}

export const translations: Record<Locale, TranslationKeys> = {
	hr: {
		meta: {
			title: "Luna — Pametno upravljanje rasporedom u zdravstvu",
			description:
				"Moderni sustav za upravljanje rasporedom, odmorima i bolovanjima medicinskog osoblja s automatiziranim tijekovima odobravanja.",
		},
		common: {
			close: "Zatvori",
		},
		nav: {
			problem: "Problem",
			roles: "Za koga",
			how: "Kako radi",
			security: "Sigurnost",
			contact: "Kontakt",
			signIn: "Prijava",
			menuLabel: "Izbornik",
		},
		hero: {
			kicker: "Alat skrojen za zdravstvene djelatnike",
			headlineLead: "Rasporedi",
			headlineAccent: "bez stresa",
			subheadline:
				"Automatizirani rasporedi, odmori i bolovanja — bez tablica i papirologije. Luna pojednostavljuje upravljanje rasporedom medicinskog osoblja.",
			ctaPrimary: "Zatražite demo",
			ctaSecondary: "Kako to radi",
			rota: {
				caption: "DEŽURSTVA · KOLOVOZ 2026. · 9 LIJEČNIKA",
				gridAria:
					"Animirani prikaz: iz početnog stanja s godišnjim odmorima i nedostupnostima algoritam popunjava mjesečni raspored dežurstava, pa izmjenjuje pet različitih rasporeda koji su svi jednako pravedni.",
				initialLabel: "POČETNO STANJE — samo ograničenja",
				solutionLabel: "RJEŠENJE",
				fairFirst: "pravedno",
				fairEqual: "jednako pravedno",
				loadTitle: "Opterećenje · prekovremeni sati",
				spreadLabel: "Raspon",
				hoursUnit: "h",
				legendLong: "24-satno dežurstvo",
				legendShort: "16-satno dežurstvo",
				legendLeave: "Godišnji odmor",
				legendUnavailable: "Nedostupan",
			},
		},
		problem: {
			kicker: "Problem",
			titleLine1: "Oba su rasporeda zakonita,",
			titleLine2: "ali nisu jednaka.",
			lead: "Softver koji „samo radi raspored\" stat će na prvom rješenju koje ne krši nijedno pravilo. Ali unutar zakonskih okvira i dalje postoji ogroman broj rasporeda — i razlika među njima nije formalna, nego ju netko odradi na svojoj koži.",
			legalTick: "✓ zakonski ispravan",
			barsNote: "Prekovremeni sati po liječniku",
			spreadLabel: "Razlika najviše ↔ najmanje",
			unfairTitle: "Prvi pronađeni raspored",
			fairTitle: "Raspored koji radi Luna",
		},
		roles: {
			kicker: "Za koga",
			title: "Tri uloge, tri različita problema",
			lead: "Ravnomjerna raspodjela je temelj, ali svaka skupina od rasporeda traži nešto svoje.",
			items: [
				{
					tag: "01 / Liječnici",
					title: "Dežurstva koja se ne gomilaju uvijek na istima",
					pain: 'Napraviti raspored koji poštuje zakon nije teško. Teško je kroz <em>cijeli mjesec ili kvartal</em> držati dežurstva, noćne i vikende ravnomjerno raspoređenima — i pritom paziti da u svakoj smjeni bude dovoljno iskustva uz specijalizante. Luna složi cijeli raspored, a <em>zadnja riječ ostaje kod voditelja</em>.',
					fixes: [
						"Opterećenje se izravnava kroz cijeli period, ne tjedan po tjedan",
						"Zakonska ograničenja rada i odmora ugrađena su u sam algoritam",
						"Cijeli mjesec složen odjednom; ako voditelj nešto zaključa ili naknadno promijeni, raspored se sam ponovno uravnoteži oko toga",
					],
				},
				{
					tag: "02 / Sestre",
					title: "Glavna sestra ne skuplja dostupnosti po papirićima",
					pain: "Najviše vremena odlazi na <em>prikupljanje dostupnosti i želja</em> zaposlenika prije nego raspored uopće počne nastajati. Luna to skupi na jednom mjestu, pa se raspored po smjenama i radilištima generira jednim klikom.",
					fixes: [
						"Dostupnost i želje zaposlenici upisuju sami — bez prikupljanja po odjelu",
						"Raspored po smjenama i radilištima generira se jednim klikom",
						"Svatko vidi svoje smjene na mobitelu, čim se nešto promijeni",
					],
				},
				{
					tag: "03 / Ambulante",
					title: "Dostupnost suradnika bez trideset poruka i poziva",
					pain: "Privatne ambulante rade s vanjskim suradnicima koji dolaze iz drugih ustanova. Najveći trošak vremena nije sam raspored, nego <em>prikupljanje njihove dostupnosti</em> i popunjavanje otvorenih smjena. A dostupnost rijetko ide po cijelom danu — netko može <em>tek popodne od 16</em>, netko samo <em>jutrom do 14</em>.",
					fixes: [
						"Suradnici sami upisuju kada mogu — i to po dijelu dana, ne samo „mogu / ne mogu\"",
						"Otvorene smjene same se nude dostupnima s odgovarajućom specijalnošću",
						"Odrađeni sati skupljaju se sami, spremni za obračun honorara",
					],
				},
			],
		},
		how: {
			kicker: "Kako radi",
			title: "Jezgra posuđena iz kvantne fizike",
			lead: "Algoritam koji pokreće našu jezgru inspiriran je metodama koje se u kvantnoj fizici koriste za simulaciju atomskih i molekularnih sustava — problema u kojima broj mogućih stanja daleko premašuje ono što se može prebrojati, pa se do najboljeg dolazi pametnim uzorkovanjem umjesto redom.",
			spaceTitle: "PROSTOR RJEŠENJA",
			spaceTitleSuffix: " · PROJEKCIJA PO PRAVEDNOSTI",
			spaceAria:
				"Oblak točaka: svaka točka je zakonski valjan raspored. Zlatni skup su rasporedi koji su ujedno i pravedni, a Luna bira jedan od njih.",
			solutionsUnit: "RJEŠENJA",
			axisValid: "Valjan raspored",
			axisFair: "Valjan i pravedan",
			axisNote: "vodoravno: raspon noćnih · okomito: raspon ukupnih sati",
			steps: [
				{
					title: "Raspored nije popis, nego prostor",
					description:
						"Za jedan mjesec i dvadesetak ljudi postoji astronomski broj rasporeda koji zadovoljavaju svako zakonsko pravilo. Alat koji vrati „prvi koji prolazi\" nije riješio problem — samo je odabrao nasumično.",
				},
				{
					title: "Pravednost je mjerljiva veličina",
					description:
						"Luna je mjeri: raspon noćnih, vikenda, ukupnih sati i ostalog — i to optimizira.",
				},
				{
					title: "Uzorkovanje umjesto prebrojavanja",
					description:
						"Prostor je prevelik da bi se pretražio redom. Luna koristi postupke uzorkovanja razvijene u računalnoj fizici za sustave s golemim brojem mogućih stanja — one koji ne obilaze sve mogućnosti, nego ciljano nalaze najbolje.",
				},
				{
					title: "Cijeli period, ne tjedan po tjedan",
					description:
						"Većina alata izravnava opterećenje unutar jednog tjedna. Kad se takvi tjedni poslože u mjesec, nejednakost se nakuplja. Luna optimizira cijeli period odjednom.",
				},
				{
					title: "Pravednih rješenja ima više — i to je dobra vijest",
					description:
						"Rijetko postoji samo jedan pošten raspored. Zato voditelj ne dobiva ultimatum, nego izbor: nekoliko jednako pravednih rasporeda među kojima bira prema onome što algoritam ne zna — tko se s kim dobro smjenjuje. Odabrani raspored i dalje ostaje u njegovim rukama: dežurstva može ručno dodijeliti ili promijeniti u bilo kojem trenutku.",
				},
			],
		},
		features: {
			kicker: "Uz algoritam",
			title: "Sve što vam treba za upravljanje rasporedom",
			lead: "Od zahtjeva do odobravanja, od planiranja do izvještaja — Luna pokriva cijeli proces.",
			items: [
				{
					title: "Odmori i bolovanja",
					icon: "leave",
					description:
						"Osoblje kreira zahtjeve za odmor, bolovanje ili edukaciju. Višeslojni tijek odobravanja osigurava transparentnost — od voditelja odjela do ravnatelja.",
				},
				{
					title: "Planiranje i pregled",
					icon: "planning",
					description:
						"Interaktivni Gantt prikaz dostupnosti tima, 12-mjesečni kalendar s označenim tipovima odsutnosti i osobna nadzorna ploča za svakog zaposlenika.",
				},
				{
					title: "Praćenje salda dana",
					icon: "balance",
					description:
						"Automatsko praćenje raspoloživih dana po tipu odsutnosti, prikaz potrošnje, prijenos neiskorištenih dana i korekcije salda.",
				},
				{
					title: "Administracija",
					icon: "admin",
					description:
						"Upravljanje odjelima, zaposlenicima, praznicima i tipovima odsutnosti. Potpuni revizijski trag svih promjena statusa zahtjeva.",
				},
				{
					title: "Izvještaji i izvoz",
					icon: "reports",
					description:
						"Generiranje PDF i Excel izvještaja o korištenju odmora, planiranju i saldima. Izvoz podataka za potrebe računovodstva i revizije.",
				},
				{
					title: "Vanjski suradnici",
					icon: "contractors",
					description:
						"Poseban status za honorarne suradnike koji rade u više ustanova. Pozivnica na jedan klik, vlastita dostupnost i pregled odrađenih sati za obračun. Dostupnost se upisuje i po dijelu dana, ne samo po cijelom danu.",
				},
			],
			moreLabel: "više…",
			slotsNote:
				"Suradnik ne bira samo „mogu / ne mogu\" po danu — upisuje i vremenski prozor. Netko je slobodan tek popodne od 16, netko samo jutrom do 14. Luna te prozore uzima kao ograničenje i oko njih slaže smjene.",
			slots: [
				{ day: "pon", label: "do 14", start: 0, width: 58 },
				{ day: "uto", label: "od 16", start: 67, width: 33 },
				{ day: "sri", label: "cijeli dan", start: 0, width: 100 },
			],
		},
		partners: {
			label: "Luna je razvijena u suradnji",
			ceo: "dr. sc. Krešimir Dželalija, CEO",
		},
		security: {
			kicker: "Povjerenje",
			title: "Podaci o osoblju",
			lead: "Rasporedi, bolovanja i osobni podaci zaposlenika spadaju među osjetljivije podatke koje ustanova drži. Zato su pristup i vidljivost vezani uz ulogu u ustanovi, a svaka promjena statusa zahtjeva ostaje zabilježena u revizijskom tragu.",
		},
		contact: {
			title: "Pokažite nam svoj najgori mjesec",
			lead: "Pošaljite nam raspored koji vam je zadao najviše muke. Na demo pozivu pokazujemo što Luna napravi s njim — i koliko se raspon opterećenja smanji.",
			nameLabel: "IME I PREZIME",
			namePlaceholder: "Ana Anić",
			emailLabel: "EMAIL",
			emailPlaceholder: "ana@ustanova.hr",
			orgLabel: "USTANOVA",
			orgPlaceholder: "Naziv",
			headcountLabel: "BROJ DJELATNIKA",
			headcountPlaceholder: "npr. 40",
			scopeLabel: "ŠTO RASPOREĐUJETE",
			scopeOptions: [
				"Liječnike / dežurstva",
				"Sestre / smjene na odjelu",
				"Vanjske suradnike u ambulanti",
				"Kombinirano",
			],
			problemLabel: "NAJVEĆI PROBLEM S RASPOREDOM (NIJE OBAVEZNO)",
			problemPlaceholder: "Npr. noćne uvijek završe na istima...",
			submit: "Zatražite demo",
			submitPending: "Slanje...",
			success: "Hvala na upitu! Javit ćemo se u roku od 24 sata.",
			toastSuccessTitle: "Uspješno poslano!",
			toastErrorTitle: "Greška",
			toastValidationTitle: "Provjerite podatke",
			errors: {
				nameRequired: "Obavezno unesite ime i prezime.",
				emailRequired: "Obavezno unesite email adresu.",
				emailInvalid: "Unesite ispravnu email adresu.",
				submitFailed: "Nešto je pošlo po zlu. Pokušajte ponovno ili nas kontaktirajte izravno.",
				captchaFailed: "Molimo potvrdite da niste robot.",
			},
		},
		email: {
			subject: "Luna demo",
			subjectWithOrg: "Luna demo — {org}",
			confirmationSubject: "Primili smo vaš zahtjev za demo Lune",
			confirmationTitle: "Hvala na upitu, {name}!",
			confirmationBody:
				"Primili smo vaš zahtjev za demo Lune. Naš tim će pregledati upit koji ste poslali i javiti Vam se u roku od 24 sata kako bismo dogovorili termin.",
			confirmationFooterNote: "Ako imate dodatna pitanja u međuvremenu, javite nam se na info@luna.med.",
			notificationTitle: "Novi zahtjev za demo",
			notificationLead: "Netko je upravo ispunio formu za demo na luna.med.",
			fieldName: "Ime i prezime",
			fieldEmail: "Email",
			fieldOrg: "Ustanova",
			fieldHeadcount: "Broj djelatnika",
			fieldScope: "Što raspoređuju",
			fieldProblem: "Najveći problem",
		},
		footer: {
			description:
				"Luna je moderni sustav za upravljanje rasporedom, odmorima i bolovanjima medicinskog osoblja.",
			product: "Proizvod",
			productLinks: [
				{ label: "Mogućnosti", href: "#mogucnosti" },
				{ label: "AI raspoređivanje", href: "#kako" },
				{ label: "Kako radi", href: "#kako" },
				{ label: "Sigurnost", href: "#sigurnost" },
			],
			company: "Tvrtka",
			companyLinks: [
				{ label: "O nama", href: "#suradnja" },
				{ label: "Kontakt", href: "#kontakt" },
				{ label: "Kodelab", href: "https://kodelab.hr", external: true },
			],
			legal: "Pravno",
			legalLinks: [
				{ label: "Uvjeti korištenja", href: "/terms" },
				{ label: "Pravila privatnosti", href: "/privacy" },
			],
			ctaHeading: "Krenimo",
			ctaButton: "Zatražite demo",
			appLink: "Prijava u aplikaciju →",
			copyright: "Kodelab d.o.o. Sva prava pridržana.",
		},
		legal: {
			terms: {
				title: "Uvjeti korištenja",
				lead: "Ovi Uvjeti korištenja uređuju vaš pristup i korištenje Lune. Pristupom ili korištenjem Lune prihvaćate ove uvjete.",
				sections: [
					{
						heading: "1. Opseg usluge",
						body: "Luna pruža softver za raspoređivanje osoblja, upravljanje odsutnostima i povezane administrativne procese za zdravstvene ustanove.",
					},
					{
						heading: "2. Odgovornost za račun",
						body: "Odgovorni ste za čuvanje povjerljivosti vjerodajnica svog računa te za sve aktivnosti izvršene putem vašeg računa.",
					},
					{
						heading: "3. Prihvatljivo korištenje",
						body: "Obvezujete se da nećete zlorabiti uslugu, pokušavati neovlašteni pristup, ometati uobičajeni rad ili koristiti Lunu suprotno važećim propisima.",
					},
					{
						heading: "4. Podaci i privatnost",
						bodyHtml:
							'Podatke obrađujemo u skladu s važećim propisima o zaštiti podataka i našim <a class="doc-link" href="/privacy">Pravilima privatnosti</a>. Korisnici ostaju odgovorni za podatke koje dostavljaju Luni.',
					},
					{
						heading: "5. Dostupnost i promjene",
						body: "S vremena na vrijeme možemo ažurirati, poboljšati ili izmijeniti Lunu. Iako težimo visokoj dostupnosti usluge, neprekinut pristup nije zajamčen.",
					},
					{
						heading: "6. Ograničenje odgovornosti",
						body: 'U mjeri u kojoj to dopušta zakon, Luna se pruža "takva kakva jest", te ne odgovaramo za neizravnu ili posljedičnu štetu nastalu korištenjem usluge.',
					},
					{
						heading: "7. Kontakt",
						bodyHtml:
							'Za pitanja vezana uz ove uvjete kontaktirajte nas na <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
			privacy: {
				title: "Pravila privatnosti",
				lead: "Ova Pravila privatnosti objašnjavaju kako Luna prikuplja, koristi i štiti osobne podatke tijekom korištenja usluge.",
				sections: [
					{
						heading: "1. Podaci koje prikupljamo",
						body: "Možemo obrađivati podatke o računu, podatke o ustanovi i rasporedu osoblja te metapodatke o korištenju usluge potrebne za pružanje i sigurnost Lune.",
					},
					{
						heading: "2. Kako koristimo podatke",
						body: "Podaci se koriste za rad platforme, upravljanje pristupom, podršku korisnicima, poboljšanje performansi proizvoda i ispunjavanje zakonskih obveza.",
					},
					{
						heading: "3. Dijeljenje podataka",
						body: "Ne prodajemo osobne podatke. Podaci se mogu dijeliti s pouzdanim pružateljima usluga koji podržavaju rad platforme, uz odgovarajuće ugovorne i sigurnosne kontrole.",
					},
					{
						heading: "4. Sigurnost i čuvanje podataka",
						body: "Primjenjujemo razumne tehničke i organizacijske mjere zaštite te podatke čuvamo samo onoliko dugo koliko je potrebno za pružanje usluge, usklađenost s propisima i legitimne poslovne svrhe.",
					},
					{
						heading: "5. Vaša prava",
						body: "Ovisno o vašoj jurisdikciji, možete imati pravo na pristup, ispravak, brisanje ili ograničenje obrade vaših osobnih podataka, kao i pravo na prigovor ili prenosivost podataka.",
					},
					{
						heading: "6. Pravila privatnosti Kodelaba",
						bodyHtml:
							'Lunu pruža Kodelab. Za dodatne informacije o praksama privatnosti i pravnim informacijama pogledajte cjelovita pravila privatnosti Kodelaba: <a class="doc-link" href="https://kodelab.hr/privacy" target="_blank" rel="noopener noreferrer">https://kodelab.hr/privacy</a>',
					},
					{
						heading: "7. Kontakt",
						bodyHtml:
							'Za pitanja vezana uz privatnost kontaktirajte nas na <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
		},
	},

	en: {
		meta: {
			title: "Luna — Smart Scheduling for Healthcare",
			description:
				"Modern system for managing schedules, leave, and sick days for medical staff with automated approval workflows.",
		},
		common: {
			close: "Close",
		},
		nav: {
			problem: "Problem",
			roles: "Who it's for",
			how: "How it works",
			security: "Security",
			contact: "Contact",
			signIn: "Sign in",
			menuLabel: "Menu",
		},
		hero: {
			kicker: "Built for healthcare professionals",
			headlineLead: "Scheduling",
			headlineAccent: "without the stress",
			subheadline:
				"Automated schedules, leave, and sick days — no spreadsheets, no paperwork. Luna simplifies workforce management for medical staff.",
			ctaPrimary: "Request a demo",
			ctaSecondary: "How it works",
			rota: {
				caption: "ON-CALL DUTY · AUGUST 2026 · 9 DOCTORS",
				gridAria:
					"Animated view: starting from annual leave and unavailability constraints, the algorithm fills in the monthly on-call schedule, then cycles through five different schedules that are all equally fair.",
				initialLabel: "INITIAL STATE — constraints only",
				solutionLabel: "SOLUTION",
				fairFirst: "fair",
				fairEqual: "equally fair",
				loadTitle: "Workload · overtime hours",
				spreadLabel: "Spread",
				hoursUnit: "h",
				legendLong: "24-hour shift",
				legendShort: "16-hour shift",
				legendLeave: "Annual leave",
				legendUnavailable: "Unavailable",
			},
		},
		problem: {
			kicker: "Problem",
			titleLine1: "Both shift schedules are legal,",
			titleLine2: "but they are not equal.",
			lead: "Software that “just makes a shift schedule” stops at the first solution that breaks no rule. But within the legal boundaries an enormous number of shift schedules still exists — and the difference is not a formality — someone ends up living it.",
			legalTick: "✓ legally compliant",
			barsNote: "Overtime hours per doctor",
			spreadLabel: "Highest ↔ lowest difference",
			unfairTitle: "First shift schedule found",
			fairTitle: "The shift schedule Luna produces",
		},
		roles: {
			kicker: "Who it's for",
			title: "Three roles, three different problems",
			lead: "An even distribution is the foundation, but each group needs something specific from a shift schedule.",
			items: [
				{
					tag: "01 / Doctors",
					title: "On-call duty that doesn't always pile up on the same people",
					pain: "Building a shift schedule that follows the law is not hard. What is hard is keeping on-call shifts, nights, and weekends evenly distributed across <em>an entire month or quarter</em> — while making sure every shift has enough experience alongside the residents. Luna assembles the whole shift schedule, and <em>the final word stays with the manager</em>.",
					fixes: [
						"Workload is levelled across the entire period, not week by week",
						"Legal limits on work and rest are built into the algorithm itself",
						"The whole month is solved at once; if the manager locks or later changes something, the shift schedule rebalances itself around it",
					],
				},
				{
					tag: "02 / Nurses",
					title: "The head nurse no longer collects availability on paper slips",
					pain: "Most of the time goes into <em>collecting availability and preferences</em> from staff before the shift schedule even starts taking shape. Luna gathers that in one place, so the shift and workstation schedule is generated with a single click.",
					fixes: [
						"Staff enter their own availability and preferences — no collecting around the ward",
						"The shift and workstation schedule is generated with a single click",
						"Everyone sees their own shifts on their phone as soon as something changes",
					],
				},
				{
					tag: "03 / Clinics",
					title: "Contractor availability without thirty messages and calls",
					pain: "Private clinics work with external contractors who come from other institutions. The biggest time cost is not the shift schedule itself, but <em>collecting their availability</em> and filling open shifts. And availability rarely covers a whole day — one person is free <em>only from 4 pm</em>, another <em>only until 2 pm</em>.",
					fixes: [
						"Contractors enter their own availability — per part of the day, not just “available / unavailable”",
						"Open shifts are offered automatically to available contractors with the right specialty",
						"Hours worked accumulate automatically, ready for fee settlement",
					],
				},
			],
		},
		how: {
			kicker: "How it works",
			title: "A core borrowed from quantum physics",
			lead: "The algorithm driving our core is inspired by methods used in quantum physics to simulate atomic and molecular systems — problems where the number of possible states far exceeds anything that can be counted, so the best result is reached through smart sampling rather than exhaustive search.",
			spaceTitle: "SOLUTION SPACE",
			spaceTitleSuffix: " · PROJECTED BY FAIRNESS",
			spaceAria:
				"A cloud of points: each point is a legally valid shift schedule. The golden cluster are shift schedules that are also fair, and Luna picks one of them.",
			solutionsUnit: "SOLUTIONS",
			axisValid: "Valid schedule",
			axisFair: "Valid and fair",
			axisNote: "horizontal: night-shift spread · vertical: total-hours spread",
			steps: [
				{
					title: "A shift schedule is not a list, it is a space",
					description:
						"For a single month and around twenty people there is an astronomical number of shift schedules that satisfy every legal rule. A tool that returns “the first one that passes” has not solved the problem — it has only picked at random.",
				},
				{
					title: "Fairness is a measurable quantity",
					description:
						"Luna measures it: the spread of night shifts, weekends, total hours, and more — and optimizes for it.",
				},
				{
					title: "Sampling instead of counting",
					description:
						"The space is far too large to search exhaustively. Luna uses sampling methods developed in computational physics for systems with an enormous number of possible states — methods that do not visit every option, but home in on the best ones.",
				},
				{
					title: "The whole period, not week by week",
					description:
						"Most tools level the workload within a single week. When such weeks are stacked into a month, the imbalance accumulates. Luna optimizes the entire period at once.",
				},
				{
					title: "There is more than one fair solution — and that is good news",
					description:
						"There is rarely only one fair shift schedule. So the manager is not handed an ultimatum but a choice: several equally fair shift schedules to pick from based on what the algorithm cannot know — who works well in rotation with whom. The chosen shift schedule stays in their hands: shifts can be assigned or changed manually at any time.",
				},
			],
		},
		features: {
			kicker: "Alongside the algorithm",
			title: "Everything you need for schedule management",
			lead: "From requests to approvals, from planning to reports — Luna covers the entire process.",
			items: [
				{
					title: "Leave & sick days",
					icon: "leave",
					description:
						"Staff create leave, sick day, or education requests. Multi-level approval workflows ensure transparency — from department heads to facility directors.",
				},
				{
					title: "Planning & overview",
					icon: "planning",
					description:
						"Interactive Gantt view of team availability, a 12-month calendar with color-coded absence types, and a personal dashboard for every employee.",
				},
				{
					title: "Leave balance tracking",
					icon: "balance",
					description:
						"Automatic tracking of available days per absence type, usage display, carry-over of unused days, and balance corrections.",
				},
				{
					title: "Administration",
					icon: "admin",
					description:
						"Manage departments, employees, holidays, and absence types. Complete audit trail of all request status changes.",
				},
				{
					title: "Reports & export",
					icon: "reports",
					description:
						"Generate PDF and Excel reports on leave usage, planning, and balances. Export data for accounting and audit needs.",
				},
				{
					title: "External contractors",
					icon: "contractors",
					description:
						"A dedicated status for freelance contractors working across several institutions. One-click invitation, their own availability, and an overview of hours worked for settlement. Availability can be entered per part of the day, not only per whole day.",
				},
			],
			moreLabel: "more…",
			slotsNote:
				"A contractor does not just pick “available / unavailable” per day — they enter a time window too. One is free only from 4 pm, another only until 2 pm. Luna treats those windows as constraints and builds shifts around them.",
			slots: [
				{ day: "Mon", label: "until 14", start: 0, width: 58 },
				{ day: "Tue", label: "from 16", start: 67, width: 33 },
				{ day: "Wed", label: "all day", start: 0, width: 100 },
			],
		},
		partners: {
			label: "Built in partnership",
			ceo: "Krešimir Dželalija, PhD, CEO",
		},
		security: {
			kicker: "Trust",
			title: "Staff data",
			lead: "Shift schedules, sick leave, and personal employee records are among the more sensitive data an institution holds. That is why access and visibility follow the person's role within the institution, and every request status change is recorded in an audit trail.",
		},
		contact: {
			title: "Show us your worst month",
			lead: "Send us the shift schedule that gave you the most trouble. On the demo call we show what Luna does with it — and how much the workload spread shrinks.",
			nameLabel: "FULL NAME",
			namePlaceholder: "Jane Doe",
			emailLabel: "EMAIL",
			emailPlaceholder: "jane@institution.com",
			orgLabel: "INSTITUTION",
			orgPlaceholder: "Name",
			headcountLabel: "NUMBER OF STAFF",
			headcountPlaceholder: "e.g. 40",
			scopeLabel: "WHAT YOU SCHEDULE",
			scopeOptions: [
				"Doctors / on-call duty",
				"Nurses / ward shifts",
				"External contractors in a clinic",
				"A combination",
			],
			problemLabel: "BIGGEST SCHEDULING PROBLEM (OPTIONAL)",
			problemPlaceholder: "E.g. night shifts always land on the same people...",
			submit: "Request a demo",
			submitPending: "Sending...",
			success: "Thank you! We'll get back to you within 24 hours.",
			toastSuccessTitle: "Sent successfully!",
			toastErrorTitle: "Error",
			toastValidationTitle: "Check your details",
			errors: {
				nameRequired: "Please enter your full name.",
				emailRequired: "Please enter your email address.",
				emailInvalid: "Please enter a valid email address.",
				submitFailed: "Something went wrong. Please try again or contact us directly.",
				captchaFailed: "Please confirm you're not a robot.",
			},
		},
		email: {
			subject: "Luna demo",
			subjectWithOrg: "Luna demo — {org}",
			confirmationSubject: "We've received your Luna demo request",
			confirmationTitle: "Thanks for reaching out, {name}!",
			confirmationBody:
				"We've received your Luna demo request. Our team will review your details and get back to you within 24 hours to schedule a call.",
			confirmationFooterNote: "If you have any questions in the meantime, feel free to reach us at info@luna.med.",
			notificationTitle: "New demo request",
			notificationLead: "Someone just submitted the demo form on luna.med.",
			fieldName: "Full name",
			fieldEmail: "Email",
			fieldOrg: "Institution",
			fieldHeadcount: "Number of staff",
			fieldScope: "What they schedule",
			fieldProblem: "Biggest problem",
		},
		footer: {
			description:
				"Luna is a modern system for managing schedules, leave, and sick days for medical staff.",
			product: "Product",
			productLinks: [
				{ label: "Features", href: "#mogucnosti" },
				{ label: "AI scheduling", href: "#kako" },
				{ label: "How it works", href: "#kako" },
				{ label: "Security", href: "#sigurnost" },
			],
			company: "Company",
			companyLinks: [
				{ label: "About", href: "#suradnja" },
				{ label: "Contact", href: "#kontakt" },
				{ label: "Kodelab", href: "https://kodelab.hr", external: true },
			],
			legal: "Legal",
			legalLinks: [
				{ label: "Terms of use", href: "/terms" },
				{ label: "Privacy policy", href: "/privacy" },
			],
			ctaHeading: "Get started",
			ctaButton: "Request a demo",
			appLink: "Sign in to the app →",
			copyright: "Kodelab d.o.o. All rights reserved.",
		},
		legal: {
			terms: {
				title: "Terms of Use",
				lead: "These Terms of Use govern your access to and use of Luna. By accessing or using Luna, you agree to these terms.",
				sections: [
					{
						heading: "1. Service scope",
						body: "Luna provides software for staff scheduling, absence management, and related administrative workflows for healthcare organizations.",
					},
					{
						heading: "2. Account responsibility",
						body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity performed through your account.",
					},
					{
						heading: "3. Acceptable use",
						body: "You agree not to misuse the service, attempt unauthorized access, interfere with normal operation, or use Luna in violation of applicable laws.",
					},
					{
						heading: "4. Data and privacy",
						bodyHtml:
							'We process data in accordance with applicable data protection rules and our <a class="doc-link" href="/en/privacy">Privacy Policy</a>. Customers remain responsible for the data they submit to Luna.',
					},
					{
						heading: "5. Availability and changes",
						body: "We may update, improve, or modify Luna from time to time. While we aim for high service availability, uninterrupted access is not guaranteed.",
					},
					{
						heading: "6. Limitation of liability",
						body: 'To the maximum extent permitted by law, Luna is provided on an "as is" basis, and we are not liable for indirect or consequential damages arising from use of the service.',
					},
					{
						heading: "7. Contact",
						bodyHtml:
							'For questions regarding these terms, contact us at <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
			privacy: {
				title: "Privacy Policy",
				lead: "This Privacy Policy explains how Luna collects, uses, and protects personal data when you use the service.",
				sections: [
					{
						heading: "1. Data we collect",
						body: "We may process account details, organization and workforce scheduling data, and service usage metadata needed to provide and secure Luna.",
					},
					{
						heading: "2. How we use data",
						body: "Data is used to operate the platform, manage access, support users, improve product performance, and meet legal obligations.",
					},
					{
						heading: "3. Data sharing",
						body: "We do not sell personal data. Data may be shared with trusted service providers that support platform operations, under appropriate contractual and security controls.",
					},
					{
						heading: "4. Security and retention",
						body: "We apply reasonable technical and organizational safeguards and retain data only for as long as necessary for service delivery, compliance, and legitimate business purposes.",
					},
					{
						heading: "5. Your rights",
						body: "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data, as well as the right to object or request data portability.",
					},
					{
						heading: "6. Kodelab privacy policy",
						bodyHtml:
							'Luna is provided by Kodelab. For additional details on privacy practices and legal information, please review Kodelab\'s full privacy policy: <a class="doc-link" href="https://kodelab.hr/privacy" target="_blank" rel="noopener noreferrer">https://kodelab.hr/privacy</a>',
					},
					{
						heading: "7. Contact",
						bodyHtml:
							'For privacy-related questions, contact us at <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
		},
	},

	sl: {
		meta: {
			title: "Luna — Pametno upravljanje razporedov v zdravstvu",
			description:
				"Sodoben sistem za upravljanje razporedov, dopustov in bolniških medicinskega osebja z avtomatiziranimi delovnimi tokovi odobritev.",
		},
		common: {
			close: "Zapri",
		},
		nav: {
			problem: "Problem",
			roles: "Za koga",
			how: "Kako deluje",
			security: "Varnost",
			contact: "Kontakt",
			signIn: "Prijava",
			menuLabel: "Meni",
		},
		hero: {
			kicker: "Orodje, skrojeno za zdravstvene delavce",
			headlineLead: "Razporedi",
			headlineAccent: "brez stresa",
			subheadline:
				"Avtomatizirani razporedi, dopusti in bolniške — brez preglednic in papirjev. Luna poenostavi upravljanje razporedov medicinskega osebja.",
			ctaPrimary: "Naročite predstavitev",
			ctaSecondary: "Kako deluje",
			rota: {
				caption: "DEŽURSTVA · AVGUST 2026 · 9 ZDRAVNIKOV",
				gridAria:
					"Animiran prikaz: iz začetnega stanja z dopusti in nerazpoložljivostmi algoritem zapolni mesečni razpored dežurstev, nato pa izmenjuje pet različnih razporedov, ki so vsi enako pravični.",
				initialLabel: "ZAČETNO STANJE — samo omejitve",
				solutionLabel: "REŠITEV",
				fairFirst: "pravično",
				fairEqual: "enako pravično",
				loadTitle: "Obremenitev · nadure",
				spreadLabel: "Razpon",
				hoursUnit: "h",
				legendLong: "24-urno dežurstvo",
				legendShort: "16-urno dežurstvo",
				legendLeave: "Letni dopust",
				legendUnavailable: "Ni na voljo",
			},
		},
		problem: {
			kicker: "Problem",
			titleLine1: "Oba razporeda sta zakonita,",
			titleLine2: "a nista enaka.",
			lead: "Programska oprema, ki „samo naredi razpored\", se ustavi pri prvi rešitvi, ki ne krši nobenega pravila. A znotraj zakonskih okvirov še vedno obstaja ogromno število razporedov — in razlika med njimi ni formalna, temveč jo nekdo občuti na svoji koži.",
			legalTick: "✓ zakonsko ustrezen",
			barsNote: "Nadure na zdravnika",
			spreadLabel: "Razlika največ ↔ najmanj",
			unfairTitle: "Prvi najdeni razpored",
			fairTitle: "Razpored, ki ga naredi Luna",
		},
		roles: {
			kicker: "Za koga",
			title: "Tri vloge, trije različni problemi",
			lead: "Enakomerna porazdelitev je temelj, a vsaka skupina od razporeda potrebuje nekaj svojega.",
			items: [
				{
					tag: "01 / Zdravniki",
					title: "Dežurstva, ki se ne kopičijo vedno pri istih",
					pain: "Narediti razpored, ki spoštuje zakon, ni težko. Težko je skozi <em>cel mesec ali četrtletje</em> ohranjati dežurstva, nočne in vikende enakomerno razporejene — in hkrati paziti, da je v vsaki izmeni dovolj izkušenj ob specializantih. Luna sestavi celoten razpored, <em>zadnja beseda pa ostane pri vodji</em>.",
					fixes: [
						"Obremenitev se izravnava skozi celotno obdobje, ne teden za tednom",
						"Zakonske omejitve dela in počitka so vgrajene v sam algoritem",
						"Cel mesec je sestavljen naenkrat; če vodja nekaj zaklene ali naknadno spremeni, se razpored sam znova uravnoteži okoli tega",
					],
				},
				{
					tag: "02 / Medicinske sestre",
					title: "Glavna sestra ne zbira razpoložljivosti po listkih",
					pain: "Največ časa gre za <em>zbiranje razpoložljivosti in želja</em> zaposlenih, preden razpored sploh začne nastajati. Luna to zbere na enem mestu, tako da se razpored po izmenah in delovnih mestih generira z enim klikom.",
					fixes: [
						"Razpoložljivost in želje zaposleni vpišejo sami — brez zbiranja po oddelku",
						"Razpored po izmenah in delovnih mestih se generira z enim klikom",
						"Vsak vidi svoje izmene na telefonu, takoj ko se kaj spremeni",
					],
				},
				{
					tag: "03 / Ambulante",
					title: "Razpoložljivost sodelavcev brez tridesetih sporočil in klicev",
					pain: "Zasebne ambulante delajo z zunanjimi sodelavci, ki prihajajo iz drugih ustanov. Največji strošek časa ni sam razpored, temveč <em>zbiranje njihove razpoložljivosti</em> in zapolnjevanje odprtih izmen. Razpoložljivost pa redko velja za cel dan — nekdo lahko <em>šele popoldne od 16</em>, nekdo samo <em>zjutraj do 14</em>.",
					fixes: [
						"Sodelavci sami vpišejo, kdaj lahko — in to po delu dneva, ne samo „na voljo / nisem na voljo\"",
						"Odprte izmene se same ponudijo razpoložljivim z ustrezno specialnostjo",
						"Opravljene ure se zbirajo same, pripravljene za obračun honorarjev",
					],
				},
			],
		},
		how: {
			kicker: "Kako deluje",
			title: "Jedro, izposojeno iz kvantne fizike",
			lead: "Algoritem, ki poganja naše jedro, je navdihnjen z metodami, ki se v kvantni fiziki uporabljajo za simulacijo atomskih in molekularnih sistemov — problemov, kjer število možnih stanj daleč presega tisto, kar je mogoče prešteti, zato se do najboljšega pride s pametnim vzorčenjem namesto po vrsti.",
			spaceTitle: "PROSTOR REŠITEV",
			spaceTitleSuffix: " · PROJEKCIJA PO PRAVIČNOSTI",
			spaceAria:
				"Oblak točk: vsaka točka je zakonsko veljaven razpored. Zlata množica so razporedi, ki so hkrati tudi pravični, in Luna izbere enega izmed njih.",
			solutionsUnit: "REŠITEV",
			axisValid: "Veljaven razpored",
			axisFair: "Veljaven in pravičen",
			axisNote: "vodoravno: razpon nočnih · navpično: razpon skupnih ur",
			steps: [
				{
					title: "Razpored ni seznam, ampak prostor",
					description:
						"Za en mesec in kakšnih dvajset ljudi obstaja astronomsko število razporedov, ki zadostijo vsakemu zakonskemu pravilu. Orodje, ki vrne „prvega, ki gre skozi\", problema ni rešilo — izbralo je zgolj naključno.",
				},
				{
					title: "Pravičnost je merljiva količina",
					description:
						"Luna jo meri: razpon nočnih, vikendov, skupnih ur in drugega — in to optimizira.",
				},
				{
					title: "Vzorčenje namesto preštevanja",
					description:
						"Prostor je prevelik, da bi ga preiskali po vrsti. Luna uporablja postopke vzorčenja, razvite v računalniški fiziki za sisteme z ogromnim številom možnih stanj — take, ki ne obiščejo vseh možnosti, ampak ciljano najdejo najboljše.",
				},
				{
					title: "Celotno obdobje, ne teden za tednom",
					description:
						"Večina orodij izravnava obremenitev znotraj enega tedna. Ko se taki tedni zložijo v mesec, se neenakost nakopiči. Luna optimizira celotno obdobje naenkrat.",
				},
				{
					title: "Pravičnih rešitev je več — in to je dobra novica",
					description:
						"Redko obstaja samo en pošten razpored. Zato vodja ne dobi ultimata, ampak izbiro: več enako pravičnih razporedov, med katerimi izbira po tistem, česar algoritem ne ve — kdo se s kom dobro izmenjuje. Izbrani razpored ostaja v njegovih rokah: dežurstva lahko kadar koli ročno dodeli ali spremeni.",
				},
			],
		},
		features: {
			kicker: "Ob algoritmu",
			title: "Vse, kar potrebujete za upravljanje razporedov",
			lead: "Od zahtevkov do odobritev, od načrtovanja do poročil — Luna pokriva celoten proces.",
			items: [
				{
					title: "Dopusti in bolniške",
					icon: "leave",
					description:
						"Zaposleni ustvarijo zahtevke za dopust, bolniško ali izobraževanje. Večstopenjski tok odobritev zagotavlja preglednost — od vodij oddelkov do direktorja.",
				},
				{
					title: "Načrtovanje in pregled",
					icon: "planning",
					description:
						"Interaktivni Gantt prikaz razpoložljivosti ekipe, 12-mesečni koledar z označenimi tipi odsotnosti in osebna nadzorna plošča za vsakega zaposlenega.",
				},
				{
					title: "Sledenje stanju dni",
					icon: "balance",
					description:
						"Avtomatsko sledenje razpoložljivih dni po tipu odsotnosti, prikaz porabe, prenos neizrabljenih dni in popravki stanja.",
				},
				{
					title: "Administracija",
					icon: "admin",
					description:
						"Upravljanje oddelkov, zaposlenih, praznikov in tipov odsotnosti. Popolna revizijska sled vseh sprememb statusa zahtevkov.",
				},
				{
					title: "Poročila in izvoz",
					icon: "reports",
					description:
						"Generiranje PDF in Excel poročil o rabi dopusta, načrtovanju in stanjih. Izvoz podatkov za potrebe računovodstva in revizije.",
				},
				{
					title: "Zunanji sodelavci",
					icon: "contractors",
					description:
						"Poseben status za honorarne sodelavce, ki delajo v več ustanovah. Vabilo z enim klikom, lastna razpoložljivost in pregled opravljenih ur za obračun. Razpoložljivost se vpisuje tudi po delu dneva, ne le po celem dnevu.",
				},
			],
			moreLabel: "več…",
			slotsNote:
				"Sodelavec ne izbira samo „na voljo / nisem na voljo\" po dnevu — vpiše tudi časovno okno. Nekdo je prost šele popoldne od 16, nekdo samo zjutraj do 14. Luna ta okna upošteva kot omejitev in okoli njih sestavi izmene.",
			slots: [
				{ day: "pon", label: "do 14", start: 0, width: 58 },
				{ day: "tor", label: "od 16", start: 67, width: 33 },
				{ day: "sre", label: "cel dan", start: 0, width: 100 },
			],
		},
		partners: {
			label: "Luna je razvita v sodelovanju",
			ceo: "dr. Krešimir Dželalija, CEO",
		},
		security: {
			kicker: "Zaupanje",
			title: "Podatki o osebju",
			lead: "Razporedi, bolniške in osebni podatki zaposlenih sodijo med občutljivejše podatke, ki jih hrani ustanova. Zato sta dostop in vidnost vezana na vlogo v ustanovi, vsaka sprememba statusa zahtevka pa ostane zabeležena v revizijski sledi.",
		},
		contact: {
			title: "Pokažite nam svoj najhujši mesec",
			lead: "Pošljite nam razpored, ki vam je povzročil največ težav. Na predstavitvenem klicu pokažemo, kaj Luna naredi z njim — in koliko se razpon obremenitve zmanjša.",
			nameLabel: "IME IN PRIIMEK",
			namePlaceholder: "Ana Novak",
			emailLabel: "E-POŠTA",
			emailPlaceholder: "ana@ustanova.si",
			orgLabel: "USTANOVA",
			orgPlaceholder: "Naziv",
			headcountLabel: "ŠTEVILO ZAPOSLENIH",
			headcountPlaceholder: "npr. 40",
			scopeLabel: "KAJ RAZPOREJATE",
			scopeOptions: [
				"Zdravnike / dežurstva",
				"Sestre / izmene na oddelku",
				"Zunanje sodelavce v ambulanti",
				"Kombinirano",
			],
			problemLabel: "NAJVEČJI PROBLEM Z RAZPOREDOM (NI OBVEZNO)",
			problemPlaceholder: "Npr. nočne vedno pristanejo pri istih...",
			submit: "Naročite predstavitev",
			submitPending: "Pošiljanje...",
			success: "Hvala! Javili se bomo v 24 urah.",
			toastSuccessTitle: "Uspešno poslano!",
			toastErrorTitle: "Napaka",
			toastValidationTitle: "Preverite podatke",
			errors: {
				nameRequired: "Obvezno vnesite ime in priimek.",
				emailRequired: "Obvezno vnesite e-poštni naslov.",
				emailInvalid: "Vnesite veljaven e-poštni naslov.",
				submitFailed: "Nekaj je šlo narobe. Poskusite znova ali nas kontaktirajte neposredno.",
				captchaFailed: "Prosimo, potrdite, da niste robot.",
			},
		},
		email: {
			subject: "Luna predstavitev",
			subjectWithOrg: "Luna predstavitev — {org}",
			confirmationSubject: "Prejeli smo vašo zahtevo za Luna predstavitev",
			confirmationTitle: "Hvala za povpraševanje, {name}!",
			confirmationBody:
				"Prejeli smo vašo zahtevo za predstavitev Lune. Naša ekipa bo pregledala vaše podatke in se vam oglasila v 24 urah, da dogovorimo termin.",
			confirmationFooterNote: "Če imate medtem dodatna vprašanja, nam pišite na info@luna.med.",
			notificationTitle: "Nova zahteva za predstavitev",
			notificationLead: "Nekdo je pravkar izpolnil obrazec za predstavitev na luna.med.",
			fieldName: "Ime in priimek",
			fieldEmail: "E-pošta",
			fieldOrg: "Ustanova",
			fieldHeadcount: "Število zaposlenih",
			fieldScope: "Kaj razporejajo",
			fieldProblem: "Največji problem",
		},
		footer: {
			description:
				"Luna je sodoben sistem za upravljanje razporedov, dopustov in bolniških medicinskega osebja.",
			product: "Proizvod",
			productLinks: [
				{ label: "Funkcionalnosti", href: "#mogucnosti" },
				{ label: "AI razporejanje", href: "#kako" },
				{ label: "Kako deluje", href: "#kako" },
				{ label: "Varnost", href: "#sigurnost" },
			],
			company: "Podjetje",
			companyLinks: [
				{ label: "O nas", href: "#suradnja" },
				{ label: "Kontakt", href: "#kontakt" },
				{ label: "Kodelab", href: "https://kodelab.hr", external: true },
			],
			legal: "Pravno",
			legalLinks: [
				{ label: "Pogoji uporabe", href: "/terms" },
				{ label: "Politika zasebnosti", href: "/privacy" },
			],
			ctaHeading: "Začnimo",
			ctaButton: "Naročite predstavitev",
			appLink: "Prijava v aplikacijo →",
			copyright: "Kodelab d.o.o. Vse pravice pridržane.",
		},
		legal: {
			terms: {
				title: "Pogoji uporabe",
				lead: "Ti Pogoji uporabe urejajo vaš dostop do Lune in njeno uporabo. Z dostopom do Lune ali njeno uporabo se strinjate s temi pogoji.",
				sections: [
					{
						heading: "1. Obseg storitve",
						body: "Luna zagotavlja programsko opremo za razporejanje osebja, upravljanje odsotnosti in s tem povezane administrativne procese za zdravstvene ustanove.",
					},
					{
						heading: "2. Odgovornost za račun",
						body: "Odgovorni ste za varovanje zaupnosti poverilnic svojega računa in za vse dejavnosti, izvedene prek vašega računa.",
					},
					{
						heading: "3. Dovoljena uporaba",
						body: "Strinjate se, da storitve ne boste zlorabljali, poskušali pridobiti nepooblaščenega dostopa, ovirali običajnega delovanja ali uporabljali Lune v nasprotju z veljavno zakonodajo.",
					},
					{
						heading: "4. Podatki in zasebnost",
						bodyHtml:
							'Podatke obdelujemo v skladu z veljavnimi predpisi o varstvu podatkov in našimi <a class="doc-link" href="/sl/privacy">Pravili zasebnosti</a>. Naročniki ostajajo odgovorni za podatke, ki jih posredujejo Luni.',
					},
					{
						heading: "5. Razpoložljivost in spremembe",
						body: "Luno lahko občasno posodobimo, izboljšamo ali spremenimo. Čeprav si prizadevamo za visoko razpoložljivost storitve, neprekinjen dostop ni zagotovljen.",
					},
					{
						heading: "6. Omejitev odgovornosti",
						body: 'V največji meri, ki jo dopušča zakon, je Luna na voljo "takšna, kot je", pri čemer ne odgovarjamo za posredno ali posledično škodo, nastalo zaradi uporabe storitve.',
					},
					{
						heading: "7. Kontakt",
						bodyHtml:
							'Za vprašanja v zvezi s temi pogoji nas kontaktirajte na <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
			privacy: {
				title: "Politika zasebnosti",
				lead: "Ta politika zasebnosti pojasnjuje, kako Luna zbira, uporablja in ščiti osebne podatke pri uporabi storitve.",
				sections: [
					{
						heading: "1. Podatki, ki jih zbiramo",
						body: "Obdelujemo lahko podatke o računu, podatke o ustanovi in razporejanju osebja ter metapodatke o uporabi storitve, potrebne za zagotavljanje in varnost Lune.",
					},
					{
						heading: "2. Kako uporabljamo podatke",
						body: "Podatki se uporabljajo za delovanje platforme, upravljanje dostopa, podporo uporabnikom, izboljševanje delovanja izdelka in izpolnjevanje zakonskih obveznosti.",
					},
					{
						heading: "3. Deljenje podatkov",
						body: "Osebnih podatkov ne prodajamo. Podatki se lahko delijo z zaupanja vrednimi ponudniki storitev, ki podpirajo delovanje platforme, ob ustreznih pogodbenih in varnostnih nadzorih.",
					},
					{
						heading: "4. Varnost in hramba podatkov",
						body: "Uporabljamo razumne tehnične in organizacijske zaščitne ukrepe ter podatke hranimo le toliko časa, kolikor je potrebno za izvajanje storitve, skladnost s predpisi in legitimne poslovne namene.",
					},
					{
						heading: "5. Vaše pravice",
						body: "Glede na vašo jurisdikcijo imate lahko pravico do dostopa, popravka, izbrisa ali omejitve obdelave vaših osebnih podatkov ter pravico do ugovora ali prenosljivosti podatkov.",
					},
					{
						heading: "6. Politika zasebnosti Kodelaba",
						bodyHtml:
							'Luno zagotavlja Kodelab. Za dodatne podrobnosti o praksah zasebnosti in pravnih informacijah si oglejte celotno politiko zasebnosti Kodelaba: <a class="doc-link" href="https://kodelab.hr/privacy" target="_blank" rel="noopener noreferrer">https://kodelab.hr/privacy</a>',
					},
					{
						heading: "7. Kontakt",
						bodyHtml:
							'Za vprašanja v zvezi z zasebnostjo nas kontaktirajte na <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
		},
	},

	de: {
		meta: {
			title: "Luna — Intelligente Dienstplanung im Gesundheitswesen",
			description:
				"Modernes System für die Verwaltung von Dienstplänen, Urlaub und Krankmeldungen für medizinisches Personal mit automatisierten Genehmigungsabläufen.",
		},
		common: {
			close: "Schließen",
		},
		nav: {
			problem: "Problem",
			roles: "Für wen",
			how: "So funktioniert es",
			security: "Sicherheit",
			contact: "Kontakt",
			signIn: "Anmelden",
			menuLabel: "Menü",
		},
		hero: {
			kicker: "Ein Werkzeug für Beschäftigte im Gesundheitswesen",
			headlineLead: "Dienstpläne",
			headlineAccent: "ohne Stress",
			subheadline:
				"Automatisierte Dienstpläne, Urlaub und Krankmeldungen — ohne Tabellen und Papierkram. Luna vereinfacht die Dienstplanung für medizinisches Personal.",
			ctaPrimary: "Demo anfragen",
			ctaSecondary: "So funktioniert es",
			rota: {
				caption: "BEREITSCHAFTSDIENST · AUGUST 2026 · 9 ÄRZTINNEN UND ÄRZTE",
				gridAria:
					"Animierte Darstellung: Ausgehend von Urlaubs- und Verfügbarkeitsbeschränkungen füllt der Algorithmus den monatlichen Bereitschaftsplan und wechselt anschließend zwischen fünf verschiedenen Plänen, die alle gleich fair sind.",
				initialLabel: "AUSGANGSLAGE — nur Beschränkungen",
				solutionLabel: "LÖSUNG",
				fairFirst: "fair",
				fairEqual: "genauso fair",
				loadTitle: "Belastung · Überstunden",
				spreadLabel: "Spanne",
				hoursUnit: "h",
				legendLong: "24-Stunden-Dienst",
				legendShort: "16-Stunden-Dienst",
				legendLeave: "Urlaub",
				legendUnavailable: "Nicht verfügbar",
			},
		},
		problem: {
			kicker: "Problem",
			titleLine1: "Beide Dienstpläne sind rechtmäßig,",
			titleLine2: "aber sie sind nicht gleich.",
			lead: "Software, die „einfach einen Dienstplan erstellt“, hält bei der ersten Lösung an, die keine Regel verletzt. Doch innerhalb des rechtlichen Rahmens gibt es weiterhin eine enorme Zahl möglicher Pläne — und der Unterschied zwischen ihnen ist keine Formalität, sondern etwas, das jemand am eigenen Leib spürt.",
			legalTick: "✓ rechtlich korrekt",
			barsNote: "Überstunden pro Ärztin/Arzt",
			spreadLabel: "Differenz höchste ↔ niedrigste",
			unfairTitle: "Erster gefundener Dienstplan",
			fairTitle: "Der Dienstplan von Luna",
		},
		roles: {
			kicker: "Für wen",
			title: "Drei Rollen, drei verschiedene Probleme",
			lead: "Eine gleichmäßige Verteilung ist die Grundlage, doch jede Gruppe braucht vom Dienstplan etwas anderes.",
			items: [
				{
					tag: "01 / Ärzteschaft",
					title: "Dienste, die sich nicht immer bei denselben häufen",
					pain: "Einen gesetzeskonformen Dienstplan zu erstellen ist nicht schwer. Schwer ist es, Bereitschaftsdienste, Nachtschichten und Wochenenden über <em>einen ganzen Monat oder ein Quartal</em> gleichmäßig zu verteilen — und dabei darauf zu achten, dass in jeder Schicht genug Erfahrung neben den Assistenzärzten steht. Luna stellt den gesamten Plan zusammen, <em>das letzte Wort bleibt aber bei der Leitung</em>.",
					fixes: [
						"Die Belastung wird über den gesamten Zeitraum ausgeglichen, nicht Woche für Woche",
						"Gesetzliche Arbeits- und Ruhezeitgrenzen sind direkt im Algorithmus verankert",
						"Der ganze Monat wird auf einmal gelöst; sperrt oder ändert die Leitung etwas, gleicht sich der Plan von selbst wieder darum herum aus",
					],
				},
				{
					tag: "02 / Pflege",
					title: "Die Stationsleitung sammelt keine Verfügbarkeiten mehr auf Zetteln",
					pain: "Die meiste Zeit geht für das <em>Sammeln von Verfügbarkeiten und Wünschen</em> der Mitarbeitenden drauf, bevor der Dienstplan überhaupt entsteht. Luna bündelt das an einem Ort, sodass der Plan nach Schichten und Arbeitsplätzen mit einem Klick erzeugt wird.",
					fixes: [
						"Mitarbeitende tragen Verfügbarkeit und Wünsche selbst ein — kein Einsammeln auf der Station",
						"Der Plan nach Schichten und Arbeitsplätzen wird mit einem Klick erzeugt",
						"Alle sehen ihre Schichten auf dem Handy, sobald sich etwas ändert",
					],
				},
				{
					tag: "03 / Praxen",
					title: "Verfügbarkeit externer Kräfte ohne dreißig Nachrichten und Anrufe",
					pain: "Privatpraxen arbeiten mit externen Kräften aus anderen Einrichtungen. Der größte Zeitaufwand ist nicht der Plan selbst, sondern das <em>Einholen ihrer Verfügbarkeit</em> und das Besetzen offener Schichten. Und Verfügbarkeit gilt selten für einen ganzen Tag — jemand kann <em>erst nachmittags ab 16 Uhr</em>, jemand nur <em>vormittags bis 14 Uhr</em>.",
					fixes: [
						"Externe tragen selbst ein, wann sie können — und zwar nach Tagesabschnitt, nicht nur „geht / geht nicht“",
						"Offene Schichten werden verfügbaren Personen mit passender Fachrichtung automatisch angeboten",
						"Geleistete Stunden summieren sich von selbst, bereit für die Honorarabrechnung",
					],
				},
			],
		},
		how: {
			kicker: "So funktioniert es",
			title: "Ein Kern, entlehnt aus der Quantenphysik",
			lead: "Der Algorithmus hinter unserem Kern ist von Methoden inspiriert, die in der Quantenphysik zur Simulation atomarer und molekularer Systeme eingesetzt werden — Problemen, bei denen die Zahl möglicher Zustände alles Zählbare weit übersteigt, sodass man das Beste durch geschicktes Sampling statt durch vollständiges Durchgehen findet.",
			spaceTitle: "LÖSUNGSRAUM",
			spaceTitleSuffix: " · PROJEKTION NACH FAIRNESS",
			spaceAria:
				"Eine Punktwolke: Jeder Punkt ist ein rechtlich gültiger Dienstplan. Die goldene Gruppe sind Pläne, die zugleich fair sind, und Luna wählt einen davon.",
			solutionsUnit: "LÖSUNGEN",
			axisValid: "Gültiger Dienstplan",
			axisFair: "Gültig und fair",
			axisNote: "waagerecht: Spanne der Nachtdienste · senkrecht: Spanne der Gesamtstunden",
			steps: [
				{
					title: "Ein Dienstplan ist keine Liste, sondern ein Raum",
					description:
						"Für einen Monat und rund zwanzig Personen gibt es eine astronomische Zahl von Plänen, die jede gesetzliche Regel erfüllen. Ein Werkzeug, das „den ersten, der durchgeht“ zurückgibt, hat das Problem nicht gelöst — es hat nur zufällig gewählt.",
				},
				{
					title: "Fairness ist eine messbare Größe",
					description:
						"Luna misst sie: die Spanne der Nachtdienste, Wochenenden, Gesamtstunden und mehr — und optimiert danach.",
				},
				{
					title: "Sampling statt Durchzählen",
					description:
						"Der Raum ist viel zu groß, um ihn der Reihe nach zu durchsuchen. Luna nutzt Sampling-Verfahren aus der Computerphysik für Systeme mit einer riesigen Zahl möglicher Zustände — Verfahren, die nicht jede Möglichkeit besuchen, sondern gezielt die besten finden.",
				},
				{
					title: "Der gesamte Zeitraum, nicht Woche für Woche",
					description:
						"Die meisten Werkzeuge gleichen die Belastung innerhalb einer Woche aus. Werden solche Wochen zu einem Monat gestapelt, summiert sich die Ungleichheit. Luna optimiert den gesamten Zeitraum auf einmal.",
				},
				{
					title: "Es gibt mehr als eine faire Lösung — und das ist eine gute Nachricht",
					description:
						"Selten gibt es nur einen fairen Dienstplan. Deshalb bekommt die Leitung kein Ultimatum, sondern eine Auswahl: mehrere gleich faire Pläne, unter denen sie nach dem entscheidet, was der Algorithmus nicht wissen kann — wer sich mit wem gut abwechselt. Der gewählte Plan bleibt in ihrer Hand: Dienste lassen sich jederzeit manuell zuweisen oder ändern.",
				},
			],
		},
		features: {
			kicker: "Neben dem Algorithmus",
			title: "Alles, was Sie für die Dienstplanverwaltung brauchen",
			lead: "Von Anträgen bis zur Genehmigung, von der Planung bis zum Bericht — Luna deckt den gesamten Prozess ab.",
			items: [
				{
					title: "Urlaub und Krankmeldungen",
					icon: "leave",
					description:
						"Mitarbeitende stellen Anträge für Urlaub, Krankmeldung oder Fortbildung. Mehrstufige Genehmigungsabläufe sorgen für Transparenz — von der Abteilungsleitung bis zur Geschäftsführung.",
				},
				{
					title: "Planung und Überblick",
					icon: "planning",
					description:
						"Interaktive Gantt-Ansicht der Teamverfügbarkeit, 12-Monats-Kalender mit farblich markierten Abwesenheitsarten und ein persönliches Dashboard für jede Person.",
				},
				{
					title: "Urlaubskonto im Blick",
					icon: "balance",
					description:
						"Automatische Verfolgung verfügbarer Tage je Abwesenheitsart, Anzeige des Verbrauchs, Übertrag nicht genutzter Tage und Korrekturen des Guthabens.",
				},
				{
					title: "Administration",
					icon: "admin",
					description:
						"Verwaltung von Abteilungen, Mitarbeitenden, Feiertagen und Abwesenheitsarten. Vollständiger Prüfpfad aller Statusänderungen von Anträgen.",
				},
				{
					title: "Berichte und Export",
					icon: "reports",
					description:
						"Erstellung von PDF- und Excel-Berichten zu Urlaubsnutzung, Planung und Guthaben. Datenexport für Buchhaltung und Revision.",
				},
				{
					title: "Externe Mitarbeitende",
					icon: "contractors",
					description:
						"Ein eigener Status für Honorarkräfte, die in mehreren Einrichtungen arbeiten. Einladung mit einem Klick, eigene Verfügbarkeit und Übersicht der geleisteten Stunden für die Abrechnung. Die Verfügbarkeit lässt sich auch nach Tagesabschnitt eintragen, nicht nur für den ganzen Tag.",
				},
			],
			moreLabel: "mehr…",
			slotsNote:
				"Externe wählen nicht nur „geht / geht nicht“ pro Tag — sie tragen auch ein Zeitfenster ein. Eine Person ist erst ab 16 Uhr frei, eine andere nur bis 14 Uhr. Luna behandelt diese Fenster als Beschränkung und baut die Schichten darum herum.",
			slots: [
				{ day: "Mo", label: "bis 14", start: 0, width: 58 },
				{ day: "Di", label: "ab 16", start: 67, width: 33 },
				{ day: "Mi", label: "ganztags", start: 0, width: 100 },
			],
		},
		partners: {
			label: "Luna entsteht in Zusammenarbeit von Kodelab und Mateh",
			ceo: "Dr. Krešimir Dželalija, CEO",
		},
		security: {
			kicker: "Vertrauen",
			title: "Personaldaten",
			lead: "Dienstpläne, Krankmeldungen und persönliche Daten von Mitarbeitenden gehören zu den sensibleren Daten einer Einrichtung. Deshalb richten sich Zugriff und Sichtbarkeit nach der Rolle in der Einrichtung, und jede Statusänderung eines Antrags bleibt im Prüfpfad festgehalten.",
		},
		contact: {
			title: "Zeigen Sie uns Ihren schlimmsten Monat",
			lead: "Schicken Sie uns den Dienstplan, der Ihnen die meiste Mühe gemacht hat. Im Demo-Gespräch zeigen wir, was Luna daraus macht — und wie stark die Belastungsspanne schrumpft.",
			nameLabel: "VOR- UND NACHNAME",
			namePlaceholder: "Anna Muster",
			emailLabel: "E-MAIL",
			emailPlaceholder: "anna@einrichtung.de",
			orgLabel: "EINRICHTUNG",
			orgPlaceholder: "Name",
			headcountLabel: "ANZAHL DER MITARBEITENDEN",
			headcountPlaceholder: "z. B. 40",
			scopeLabel: "WAS SIE PLANEN",
			scopeOptions: [
				"Ärztinnen und Ärzte / Bereitschaftsdienst",
				"Pflege / Stationsschichten",
				"Externe Mitarbeitende in der Praxis",
				"Kombiniert",
			],
			problemLabel: "GRÖSSTES PROBLEM MIT DEM DIENSTPLAN (OPTIONAL)",
			problemPlaceholder: "Z. B. Nachtdienste landen immer bei denselben ...",
			submit: "Demo anfragen",
			submitPending: "Wird gesendet...",
			success: "Danke! Wir melden uns innerhalb von 24 Stunden.",
			toastSuccessTitle: "Erfolgreich gesendet!",
			toastErrorTitle: "Fehler",
			toastValidationTitle: "Bitte prüfen Sie Ihre Angaben",
			errors: {
				nameRequired: "Bitte geben Sie Vor- und Nachnamen an.",
				emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse an.",
				emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
				submitFailed: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
				captchaFailed: "Bitte bestätigen Sie, dass Sie kein Roboter sind.",
			},
		},
		email: {
			subject: "Luna Demo",
			subjectWithOrg: "Luna Demo — {org}",
			confirmationSubject: "Wir haben Ihre Anfrage für eine Luna-Demo erhalten",
			confirmationTitle: "Danke für Ihre Anfrage, {name}!",
			confirmationBody:
				"Wir haben Ihre Anfrage für eine Luna-Demo erhalten. Unser Team prüft Ihre Angaben und meldet sich innerhalb von 24 Stunden, um einen Termin zu vereinbaren.",
			confirmationFooterNote: "Falls Sie in der Zwischenzeit Fragen haben, schreiben Sie uns gerne an info@luna.med.",
			notificationTitle: "Neue Demo-Anfrage",
			notificationLead: "Jemand hat gerade das Demo-Formular auf luna.med ausgefüllt.",
			fieldName: "Vor- und Nachname",
			fieldEmail: "E-Mail",
			fieldOrg: "Einrichtung",
			fieldHeadcount: "Anzahl der Mitarbeitenden",
			fieldScope: "Was geplant wird",
			fieldProblem: "Größtes Problem",
		},
		footer: {
			description:
				"Luna ist ein modernes System für die Verwaltung von Dienstplänen, Urlaub und Krankmeldungen für medizinisches Personal.",
			product: "Produkt",
			productLinks: [
				{ label: "Funktionen", href: "#mogucnosti" },
				{ label: "KI-Dienstplanung", href: "#kako" },
				{ label: "So funktioniert es", href: "#kako" },
				{ label: "Sicherheit", href: "#sigurnost" },
			],
			company: "Unternehmen",
			companyLinks: [
				{ label: "Über uns", href: "#suradnja" },
				{ label: "Kontakt", href: "#kontakt" },
				{ label: "Kodelab", href: "https://kodelab.hr", external: true },
			],
			legal: "Rechtliches",
			legalLinks: [
				{ label: "Nutzungsbedingungen", href: "/terms" },
				{ label: "Datenschutzerklärung", href: "/privacy" },
			],
			ctaHeading: "Loslegen",
			ctaButton: "Demo anfragen",
			appLink: "Zur App anmelden →",
			copyright: "Kodelab d.o.o. Alle Rechte vorbehalten.",
		},
		legal: {
			terms: {
				title: "Nutzungsbedingungen",
				lead: "Diese Nutzungsbedingungen regeln Ihren Zugriff auf und die Nutzung von Luna. Durch den Zugriff auf oder die Nutzung von Luna stimmen Sie diesen Bedingungen zu.",
				sections: [
					{
						heading: "1. Leistungsumfang",
						body: "Luna bietet Software für die Personalplanung, das Abwesenheitsmanagement und damit verbundene administrative Abläufe für Gesundheitseinrichtungen.",
					},
					{
						heading: "2. Verantwortung für das Konto",
						body: "Sie sind dafür verantwortlich, die Vertraulichkeit Ihrer Kontodaten zu wahren, sowie für alle Aktivitäten, die über Ihr Konto durchgeführt werden.",
					},
					{
						heading: "3. Zulässige Nutzung",
						body: "Sie verpflichten sich, den Dienst nicht zu missbrauchen, keinen unbefugten Zugriff zu versuchen, den normalen Betrieb nicht zu stören und Luna nicht unter Verstoß gegen geltendes Recht zu nutzen.",
					},
					{
						heading: "4. Daten und Datenschutz",
						bodyHtml:
							'Wir verarbeiten Daten gemäß den geltenden Datenschutzbestimmungen und unserer <a class="doc-link" href="/de/privacy">Datenschutzerklärung</a>. Kunden bleiben für die an Luna übermittelten Daten verantwortlich.',
					},
					{
						heading: "5. Verfügbarkeit und Änderungen",
						body: "Wir können Luna von Zeit zu Zeit aktualisieren, verbessern oder ändern. Obwohl wir eine hohe Verfügbarkeit des Dienstes anstreben, wird ein unterbrechungsfreier Zugriff nicht garantiert.",
					},
					{
						heading: "6. Haftungsbeschränkung",
						body: 'Im gesetzlich zulässigen Höchstmaß wird Luna "wie besehen" bereitgestellt, und wir haften nicht für indirekte oder Folgeschäden, die aus der Nutzung des Dienstes entstehen.',
					},
					{
						heading: "7. Kontakt",
						bodyHtml:
							'Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
			privacy: {
				title: "Datenschutzerklärung",
				lead: "Diese Datenschutzerklärung erläutert, wie Luna bei der Nutzung des Dienstes personenbezogene Daten erhebt, verwendet und schützt.",
				sections: [
					{
						heading: "1. Daten, die wir erheben",
						body: "Wir verarbeiten möglicherweise Kontodaten, Daten zur Organisation und Personalplanung sowie Nutzungsmetadaten des Dienstes, die zur Bereitstellung und Absicherung von Luna erforderlich sind.",
					},
					{
						heading: "2. Wie wir Daten verwenden",
						body: "Daten werden verwendet, um die Plattform zu betreiben, den Zugriff zu verwalten, Nutzer zu unterstützen, die Produktleistung zu verbessern und gesetzliche Verpflichtungen zu erfüllen.",
					},
					{
						heading: "3. Datenweitergabe",
						body: "Wir verkaufen keine personenbezogenen Daten. Daten können mit vertrauenswürdigen Dienstleistern geteilt werden, die den Plattformbetrieb unterstützen, unter angemessenen vertraglichen und sicherheitstechnischen Kontrollen.",
					},
					{
						heading: "4. Sicherheit und Aufbewahrung",
						body: "Wir wenden angemessene technische und organisatorische Schutzmaßnahmen an und speichern Daten nur so lange, wie es für die Erbringung der Dienstleistung, die Einhaltung von Vorschriften und legitime Geschäftszwecke erforderlich ist.",
					},
					{
						heading: "5. Ihre Rechte",
						body: "Je nach Ihrer Gerichtsbarkeit haben Sie möglicherweise das Recht auf Zugang, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Widerspruch oder Datenübertragbarkeit.",
					},
					{
						heading: "6. Datenschutzerklärung von Kodelab",
						bodyHtml:
							'Luna wird von Kodelab bereitgestellt. Weitere Einzelheiten zu den Datenschutzpraktiken und rechtlichen Informationen finden Sie in der vollständigen Datenschutzerklärung von Kodelab: <a class="doc-link" href="https://kodelab.hr/privacy" target="_blank" rel="noopener noreferrer">https://kodelab.hr/privacy</a>',
					},
					{
						heading: "7. Kontakt",
						bodyHtml:
							'Bei Fragen zum Datenschutz kontaktieren Sie uns unter <a class="doc-link" href="mailto:dpo@kodelab.hr">dpo@kodelab.hr</a>.',
					},
				],
			},
		},
	},
};
