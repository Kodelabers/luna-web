export interface RotaDoctor {
	id: string;
	/** 1-indexed days of annual leave */
	GO: number[];
	/** 1-indexed days spent on other duty */
	ZD: number[];
	/** 1-indexed days the doctor is unavailable */
	X: number[];
}

export interface RotaSolution {
	/** assign[day] = index of the doctor on duty that day */
	assign: number[];
	hours: number[];
	spread: number;
}

export interface RotaData {
	days: number;
	letters: string[];
	holidays: number[];
	/** long[day] = true when the day carries a 24h shift instead of 16h */
	long: boolean[];
	docs: RotaDoctor[];
	solutions: RotaSolution[];
	unfair: RotaSolution;
}

/** Illustrative dataset — the people are invented, not real staff. */
export const ROTA: RotaData = {
	days: 31,
	letters: [
		"S", "N", "P", "U", "S", "Č", "P", "S", "N", "P", "U", "S", "Č", "P", "S", "N",
		"P", "U", "S", "Č", "P", "S", "N", "P", "U", "S", "Č", "P", "S", "N", "P",
	],
	holidays: [5, 15],
	long: [
		true, true, false, false, true, false, false, true, true, false, false, false,
		false, false, true, true, false, false, false, false, false, true, true, false,
		false, false, false, false, true, true, false,
	],
	docs: [
		{ id: "D1", GO: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], ZD: [15, 16], X: [] },
		{ id: "D2", GO: [], ZD: [29, 30], X: [] },
		{ id: "D3", GO: [], ZD: [], X: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
		{ id: "D4", GO: [9, 10, 11, 12, 13, 14, 15, 16, 17], ZD: [8, 22], X: [] },
		{ id: "D5", GO: [], ZD: [5], X: [] },
		{ id: "D6", GO: [26, 27, 28, 29, 30, 31], ZD: [2, 8, 9, 15, 16, 22, 23], X: [25] },
		{ id: "D7", GO: [], ZD: [5, 17, 18, 19], X: [] },
		{ id: "D8", GO: [], ZD: [29, 30], X: [] },
		{ id: "D9", GO: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], ZD: [5, 20], X: [] },
	],
	solutions: [
		{
			assign: [4, 8, 1, 3, 7, 5, 6, 1, 4, 2, 7, 5, 8, 2, 6, 8, 0, 3, 2, 0, 5, 1, 0, 5, 7, 2, 3, 6, 4, 3, 7],
			hours: [56, 64, 64, 72, 72, 64, 56, 72, 64],
			spread: 16,
		},
		{
			assign: [1, 7, 6, 4, 5, 8, 3, 6, 8, 7, 2, 1, 4, 2, 8, 4, 0, 5, 3, 0, 2, 6, 0, 5, 1, 0, 3, 7, 2, 3, 4],
			hours: [72, 56, 72, 72, 72, 56, 64, 56, 64],
			spread: 16,
		},
		{
			assign: [3, 6, 7, 1, 5, 4, 7, 8, 1, 2, 5, 8, 4, 2, 6, 8, 0, 3, 1, 2, 0, 7, 4, 5, 3, 0, 6, 1, 0, 2, 4],
			hours: [72, 72, 72, 56, 72, 56, 64, 56, 64],
			spread: 16,
		},
		{
			assign: [5, 7, 1, 4, 3, 6, 8, 4, 1, 2, 8, 7, 5, 6, 2, 8, 0, 7, 3, 0, 6, 2, 0, 5, 4, 0, 1, 4, 3, 6, 7],
			hours: [72, 56, 64, 64, 72, 56, 72, 72, 56],
			spread: 16,
		},
		{
			assign: [1, 7, 3, 6, 5, 8, 4, 7, 1, 2, 4, 8, 2, 6, 8, 2, 0, 5, 3, 0, 5, 6, 0, 3, 4, 6, 7, 1, 4, 3, 2],
			hours: [56, 64, 72, 72, 72, 56, 72, 64, 56],
			spread: 16,
		},
	],
	unfair: {
		assign: [1, 8, 3, 5, 7, 4, 6, 7, 4, 2, 6, 5, 2, 1, 4, 6, 0, 3, 1, 0, 5, 2, 3, 0, 7, 3, 2, 0, 6, 3, 0],
		hours: [80, 56, 72, 96, 64, 48, 80, 64, 24],
		spread: 72,
	},
};

/** Invented names used across the hero rota and the fairness comparison. */
export const NAMES = [
	"I. Perković",
	"M. Belić",
	"P. Vukas",
	"A. Toprek",
	"L. Sever",
	"M. Glavaš",
	"T. Rendić",
	"N. Prpić",
	"D. Klarić",
];

export function nameOf(index: number): string {
	return NAMES[index] ?? `L${index + 1}`;
}

/** Upper bound of the hour axis used by both the hero bars and the fairness chart. */
export const MAX_HOURS = 100;
