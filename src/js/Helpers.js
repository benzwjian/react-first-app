	const newTimer = (timer) => {
		const t = new Date().getTime();
		return {
			id: t,
			title: timer.title,
			project: timer.project,
			elapsed: 0,
			runningSince: null
		}
	}

	const renderElapsedString = (elapsed, runningSince) => {
		if (runningSince)
			return millisecondsToHuman(elapsed + new Date().getTime() - runningSince);
		else
			return millisecondsToHuman(elapsed);
	}

	const millisecondsToHuman = (milliseconds) => {
		const hours = milliseconds / (60*60*1000);
		const minutes = milliseconds % (60*60*1000) / (60*1000);
		const seconds = milliseconds % (60*60*1000) % (60*1000) / (1*1000);
		return zerolize(hours.toFixed(0)) + ':' + zerolize(minutes.toFixed(0)) + ':' + zerolize(seconds.toFixed(0));
	}

	const zerolize = (number) => number < 10 ? '0' + number : number;

export default {
	newTimer: newTimer,
	renderElapsedString: renderElapsedString
};
