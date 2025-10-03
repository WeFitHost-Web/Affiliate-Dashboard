'use client';
export const toggleOverlay = () => {
	const overlayElement = document.getElementById('overlay');
	const bodyElement = document.getElementById('body');
	if (!overlayElement || !bodyElement) return;

	if (overlayElement.style.transform === 'translateX(0%)') {
		overlayElement.style.transform = 'translateX(-100%)';
		bodyElement.style.overflow = 'auto';
	} else {
		overlayElement.style.transform = 'translateX(0%)';
		bodyElement.style.overflow = 'hidden';
	}
};



