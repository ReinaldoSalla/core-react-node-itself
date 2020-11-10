import CarouselItems from '../CarouselItems';

const moveToNextItem = (state) => {
	let newIndex = state.index + 1;
	if (newIndex === CarouselItems.length) {
		newIndex = 0;
	}
	return {
		index: newIndex,
		isTimerEnabled: true,
	};
};

const moveToFirstItem = () => ({
	index: 0,
	isTimerEnabled: false,
});

const moveToSecondItem = () => ({
	index: 1,
	isTimerEnabled: false,
});

const moveToThirdItem = () => ({
	index: 2,
	isTimerEnabled: false,
});

export {
	moveToNextItem,
	moveToFirstItem,
	moveToSecondItem,
	moveToThirdItem,
};