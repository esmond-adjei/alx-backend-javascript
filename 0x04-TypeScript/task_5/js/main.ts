interface MajorCredits {
	credits: number;
	_brandMajorCredits: "MajorCredits";
}

interface MinorCredits {
	credits: number;
	_brandMinorCredits: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		_brandMajorCredits: "MajorCredits",
	};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		_brandMinorCredits: "MinorCredits",
};
}

// test
const subject1Major: MajorCredits = { credits: 3, _brandMajorCredits: "MajorCredits" };
const subject2Major: MajorCredits = { credits: 4, _brandMajorCredits: "MajorCredits" };
const sumResultMajor = sumMajorCredits(subject1Major, subject2Major);
console.log("Sum of Major Credits:", sumResultMajor);

const subject1Minor: MinorCredits = { credits: 2, _brandMinorCredits: "MinorCredits" };
const subject2Minor: MinorCredits = { credits: 1, _brandMinorCredits: "MinorCredits" };
const sumResultMinor = sumMinorCredits(subject1Minor, subject2Minor);
console.log("Sum of Minor Credits:", sumResultMinor);
