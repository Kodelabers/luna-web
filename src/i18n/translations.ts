import type { Locale } from "./utils";

export interface TranslationKeys {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		features: string;
		aiScheduling: string;
		howItWorks: string;
		contact: string;
		signIn: string;
	};
	hero: {
		headline: string;
		subheadline: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};
	trustBar: {
		employees: string;
		organizations: string;
		uptime: string;
		satisfaction: string;
	};
	features: {
		title: string;
		subtitle: string;
		absence: {
			title: string;
			description: string;
		};
		planning: {
			title: string;
			description: string;
		};
		balance: {
			title: string;
			description: string;
		};
		admin: {
			title: string;
			description: string;
		};
		reports: {
			title: string;
			description: string;
		};
	};
	aiScheduling: {
		badge: string;
		title: string;
		subtitle: string;
		description: string;
		features: string[];
		waitlistPlaceholder: string;
		waitlistButton: string;
	};
	howItWorks: {
		title: string;
		subtitle: string;
		steps: {
			title: string;
			description: string;
		}[];
	};
	cta: {
		title: string;
		subtitle: string;
		button: string;
	};
	footer: {
		description: string;
		product: string;
		productLinks: { label: string; href: string }[];
		company: string;
		companyLinks: { label: string; href: string }[];
		legal: string;
		legalLinks: { label: string; href: string; external?: boolean }[];
		copyright: string;
	};
}

export const translations: Record<Locale, TranslationKeys> = {
	hr: {
		meta: {
			title: "Luna — Pametno upravljanje rasporedom u zdravstvu",
			description:
				"Moderni sustav za upravljanje rasporedom, odmorima i bolovanjima medicinskog osoblja s automatiziranim tijekovima odobravanja.",
		},
		nav: {
			features: "Mogućnosti",
			aiScheduling: "AI Raspoređivanje",
			howItWorks: "Kako radi",
			contact: "Kontakt",
			signIn: "Prijava",
		},
		hero: {
			headline: "Raspored bez stresa",
			subheadline:
				"Automatizirani rasporedi, odmori i bolovanja — bez tablica i papirologije. Luna pojednostavljuje upravljanje rasporedom medicinskog osoblja.",
			ctaPrimary: "Zatražite demo",
			ctaSecondary: "Saznajte više",
		},
		trustBar: {
			employees: "Zaposlenika",
			organizations: "Ustanova",
			uptime: "Dostupnost",
			satisfaction: "Zadovoljstvo",
		},
		features: {
			title: "Sve što vam treba za upravljanje rasporedom",
			subtitle:
				"Od zahtjeva do odobravanja, od planiranja do izvještaja — Luna pokriva cijeli proces.",
			absence: {
				title: "Odmori i bolovanja",
				description:
					"Osoblje kreira zahtjeve za odmor, bolovanje ili edukaciju. Višeslojni tijek odobravanja osigurava transparentnost — od voditelja odjela do ravnatelja.",
			},
			planning: {
				title: "Planiranje i pregled",
				description:
					"Interaktivni Gantt prikaz dostupnosti tima, 12-mjesečni kalendar s označenim tipovima odsutnosti i osobna nadzorna ploča za svakog zaposlenika.",
			},
			balance: {
				title: "Praćenje salda dana",
				description:
					"Automatsko praćenje raspoloživih dana po tipu odsutnosti, prikaz potrošnje, prijenos neiskorištenih dana i korekcije salda.",
			},
			admin: {
				title: "Administracija",
				description:
					"Upravljanje odjelima, zaposlenicima, praznicima i tipovima odsutnosti. Potpuni revizijski trag svih promjena statusa zahtjeva.",
			},
			reports: {
				title: "Izvještaji i izvoz",
				description:
					"Generiranje PDF i Excel izvještaja o korištenju odmora, planiranju i saldima. Izvoz podataka za potrebe računovodstva i revizije.",
			},
		},
		aiScheduling: {
			badge: "Uskoro",
			title: "AI raspoređivanje za zdravstvene ustanove",
			subtitle:
				"Napredni algoritam koji automatski kreira optimalne rasporede smjena za bolnice i klinike.",
			description:
				"Naš algoritam temeljen na umjetnoj inteligenciji uzima u obzir sve varijable pri kreiranju rasporeda — od praznika i bolovanja do omjera specijalizanata i iskusnih specijalista po smjeni.",
			features: [
				"Automatsko raspoređivanje liječnika, medicinskih sestara i ostalog osoblja",
				"Poštivanje zakonskih ograničenja radnog vremena i odmora",
				"Balansiranje omjera specijalizanata i seniora po smjeni",
				"Integracija s praznicima, bolovanjima i planiranim odsutnostima",
				"Optimizacija pokrivanja svih odjela i specijalizacija",
			],
			waitlistPlaceholder: "Vaša email adresa",
			waitlistButton: "Prijavite se na listu čekanja",
		},
		howItWorks: {
			title: "Kako Luna radi",
			subtitle: "Tri jednostavna koraka do organiziranog upravljanja rasporedom.",
			steps: [
				{
					title: "Zaposlenik podnosi zahtjev",
					description:
						"Odaberite tip odsustva, datume i podnesite zahtjev u samo par klikova. Sustav automatski provjerava dostupnost dana.",
				},
				{
					title: "Voditelj odobrava",
					description:
						"Voditelj odjela i ravnatelj pregledavaju i odobravaju zahtjeve kroz jednostavan tijek rada s potpunim uvidom.",
				},
				{
					title: "Saldo se ažurira",
					description:
						"Nakon odobravanja, saldo raspoloživih dana automatski se ažurira. Kalendar i planiranje reflektiraju promjene u realnom vremenu.",
				},
			],
		},
		cta: {
			title: "Spremni za modernizaciju upravljanja rasporedom?",
			subtitle:
				"Pridružite se zdravstvenim ustanovama koje su već pojednostavile svoje procese s Lunom.",
			button: "Zatražite demo",
		},
		footer: {
			description:
				"Luna je moderni sustav za upravljanje rasporedom, odmorima i bolovanjima medicinskog osoblja.",
			product: "Proizvod",
			productLinks: [
				{ label: "Mogućnosti", href: "#features" },
				{ label: "AI Raspoređivanje", href: "#ai-scheduling" },
				{ label: "Kako radi", href: "#how-it-works" },
			],
			company: "Tvrtka",
			companyLinks: [
				{ label: "O nama", href: "#" },
				{ label: "Kontakt", href: "#contact" },
			],
			legal: "Pravno",
			legalLinks: [
				{ label: "Pravila privatnosti", href: "https://kodelab.hr/privacy-policy/", external: true },
			],
			copyright: "Kodelab d.o.o. Sva prava pridržana.",
		},
	},

	en: {
		meta: {
			title: "Luna — Smart Scheduling for Healthcare",
			description:
				"Modern system for managing schedules, leave, and sick days for medical staff with automated approval workflows.",
		},
		nav: {
			features: "Features",
			aiScheduling: "AI Scheduling",
			howItWorks: "How It Works",
			contact: "Contact",
			signIn: "Sign In",
		},
		hero: {
			headline: "Scheduling without the stress",
			subheadline:
				"Automated schedules, leave, and sick days — no spreadsheets, no paperwork. Luna simplifies workforce management for medical staff.",
			ctaPrimary: "Request a demo",
			ctaSecondary: "Learn more",
		},
		trustBar: {
			employees: "Employees",
			organizations: "Facilities",
			uptime: "Uptime",
			satisfaction: "Satisfaction",
		},
		features: {
			title: "Everything you need for schedule management",
			subtitle:
				"From requests to approvals, from planning to reports — Luna covers the entire process.",
			absence: {
				title: "Leave & Sick Days",
				description:
					"Staff create leave, sick day, or education requests. Multi-level approval workflows ensure transparency — from department heads to facility directors.",
			},
			planning: {
				title: "Planning & Overview",
				description:
					"Interactive Gantt view of team availability, 12-month calendar with color-coded absence types, and a personal dashboard for every employee.",
			},
			balance: {
				title: "Days Balance Tracking",
				description:
					"Automatic tracking of available days per absence type, usage display, year-end transfers, and balance corrections.",
			},
			admin: {
				title: "Administration",
				description:
					"Manage departments, employees, holidays, and absence types. Complete audit trail of all request status changes.",
			},
			reports: {
				title: "Reports & Export",
				description:
					"Generate PDF and Excel reports on leave usage, planning, and balances. Export data for accounting and audit needs.",
			},
		},
		aiScheduling: {
			badge: "Coming Soon",
			title: "AI scheduling for healthcare facilities",
			subtitle:
				"Advanced algorithm that automatically creates optimal shift schedules for hospitals and clinics.",
			description:
				"Our AI-powered algorithm considers all variables when creating schedules — from holidays and sick days to the ratio of residents and senior specialists per shift.",
			features: [
				"Automatic scheduling of doctors, nurses, and support staff",
				"Compliance with legal working time and rest requirements",
				"Balancing resident-to-senior specialist ratios per shift",
				"Integration with holidays, sick leave, and planned absences",
				"Optimized coverage across all departments and specializations",
			],
			waitlistPlaceholder: "Your email address",
			waitlistButton: "Join the waitlist",
		},
		howItWorks: {
			title: "How Luna works",
			subtitle: "Three simple steps to organized schedule management.",
			steps: [
				{
					title: "Employee submits a request",
					description:
						"Choose the absence type, select dates, and submit a request in just a few clicks. The system automatically checks day availability.",
				},
				{
					title: "Manager approves",
					description:
						"Department heads and facility directors review and approve requests through a simple workflow with full visibility.",
				},
				{
					title: "Balance updates",
					description:
						"After approval, available day balances update automatically. Calendar and planning views reflect changes in real time.",
				},
			],
		},
		cta: {
			title: "Ready to modernize your scheduling?",
			subtitle:
				"Join healthcare facilities that have already simplified their processes with Luna.",
			button: "Request a demo",
		},
		footer: {
			description:
				"Luna is a modern system for managing schedules, leave, and sick days for medical staff.",
			product: "Product",
			productLinks: [
				{ label: "Features", href: "#features" },
				{ label: "AI Scheduling", href: "#ai-scheduling" },
				{ label: "How It Works", href: "#how-it-works" },
			],
			company: "Company",
			companyLinks: [
				{ label: "About", href: "#" },
				{ label: "Contact", href: "#contact" },
			],
			legal: "Legal",
			legalLinks: [
				{ label: "Privacy Policy", href: "https://kodelab.hr/privacy-policy/", external: true },
			],
			copyright: "Kodelab d.o.o. All rights reserved.",
		},
	},

	sl: {
		meta: {
			title: "Luna — Pametno upravljanje razporedov v zdravstvu",
			description:
				"Sodoben sistem za upravljanje razporedov, dopustov in bolniških medicinskega osebja z avtomatiziranimi delovnimi tokovi odobritev.",
		},
		nav: {
			features: "Funkcionalnosti",
			aiScheduling: "AI Razporejanje",
			howItWorks: "Kako deluje",
			contact: "Kontakt",
			signIn: "Prijava",
		},
		hero: {
			headline: "Razpored brez stresa",
			subheadline:
				"Avtomatizirani razporedi, dopusti in bolniške — brez preglednic in papirjev. Luna poenostavi upravljanje razporedov medicinskega osebja.",
			ctaPrimary: "Zahtevajte predstavitev",
			ctaSecondary: "Izvedi več",
		},
		trustBar: {
			employees: "Zaposlenih",
			organizations: "Ustanov",
			uptime: "Razpoložljivost",
			satisfaction: "Zadovoljstvo",
		},
		features: {
			title: "Vse, kar potrebujete za upravljanje razporedov",
			subtitle:
				"Od zahtevkov do odobritev, od načrtovanja do poročil — Luna pokriva celoten proces.",
			absence: {
				title: "Dopusti in bolniške",
				description:
					"Zaposleni ustvarijo zahtevke za dopust, bolniško ali izobraževanje. Večstopenjski tok odobritev zagotavlja preglednost — od vodij oddelkov do direktorja.",
			},
			planning: {
				title: "Načrtovanje in pregled",
				description:
					"Interaktivni Gantt prikaz razpoložljivosti ekipe, 12-mesečni koledar z barvno označenimi tipi odsotnosti in osebna nadzorna plošča za vsakega zaposlenega.",
			},
			balance: {
				title: "Sledenje stanju dni",
				description:
					"Avtomatsko sledenje razpoložljivih dni po tipu odsotnosti, prikaz porab, prenos neizrabljenih dni in popravki stanja.",
			},
			admin: {
				title: "Administracija",
				description:
					"Upravljanje oddelkov, zaposlenih, praznikov in tipov odsotnosti. Popolna revizijska sled vseh sprememb statusa zahtevkov.",
			},
			reports: {
				title: "Poročila in izvoz",
				description:
					"Generiranje PDF in Excel poročil o rabi dopusta, načrtovanju in stanjih. Izvoz podatkov za potrebe računovodstva in revizije.",
			},
		},
		aiScheduling: {
			badge: "Prihaja kmalu",
			title: "AI razporejanje za zdravstvene ustanove",
			subtitle:
				"Napreden algoritem, ki samodejno ustvari optimalne razporede izmen za bolnišnice in klinike.",
			description:
				"Naš algoritem, ki temelji na umetni inteligenci, upošteva vse spremenljivke pri ustvarjanju razporedov — od praznikov in bolniških odsotnosti do razmerja specializantov in izkušenih specialistov na izmeno.",
			features: [
				"Avtomatsko razporejanje zdravnikov, medicinskih sester in podpornega osebja",
				"Skladnost z zakonskimi omejitvami delovnega časa in počitka",
				"Uravnoteženje razmerja specializantov in seniorjev na izmeno",
				"Integracija s prazniki, bolniškimi odsotnostmi in načrtovanimi odsotnostmi",
				"Optimizacija pokritosti vseh oddelkov in specializacij",
			],
			waitlistPlaceholder: "Vaš e-poštni naslov",
			waitlistButton: "Prijavite se na čakalno listo",
		},
		howItWorks: {
			title: "Kako Luna deluje",
			subtitle: "Trije preprosti koraki do organiziranega upravljanja razporedov.",
			steps: [
				{
					title: "Zaposleni vloži zahtevek",
					description:
						"Izberite tip odsotnosti, datume in oddajte zahtevek v le nekaj klikih. Sistem samodejno preveri razpoložljivost dni.",
				},
				{
					title: "Vodja odobri",
					description:
						"Vodje oddelkov in direktorji pregledajo in odobrijo zahtevke skozi preprost delovni tok s popolnim vpogledom.",
				},
				{
					title: "Stanje se posodobi",
					description:
						"Po odobritvi se stanje razpoložljivih dni samodejno posodobi. Koledar in načrtovanje odražata spremembe v realnem času.",
				},
			],
		},
		cta: {
			title: "Pripravljeni na posodobitev upravljanja razporedov?",
			subtitle:
				"Pridružite se zdravstvenim ustanovam, ki so že poenostavile svoje procese z Luno.",
			button: "Zahtevajte predstavitev",
		},
		footer: {
			description:
				"Luna je sodoben sistem za upravljanje razporedov, dopustov in bolniških medicinskega osebja.",
			product: "Proizvod",
			productLinks: [
				{ label: "Funkcionalnosti", href: "#features" },
				{ label: "AI Razporejanje", href: "#ai-scheduling" },
				{ label: "Kako deluje", href: "#how-it-works" },
			],
			company: "Podjetje",
			companyLinks: [
				{ label: "O nas", href: "#" },
				{ label: "Kontakt", href: "#contact" },
			],
			legal: "Pravno",
			legalLinks: [
				{ label: "Politika zasebnosti", href: "https://kodelab.hr/privacy-policy/", external: true },
			],
			copyright: "Kodelab d.o.o. Vse pravice pridržane.",
		},
	},
};
