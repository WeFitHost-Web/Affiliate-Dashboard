'use client';
export const toggleOverlay = (overlayId, bodyId) => {
	const overlayElement = document.getElementById(overlayId);
	const bodyElement = document.getElementById(bodyId);
	if (!overlayElement || !bodyElement) return;

	if (overlayElement.style.transform === 'translateX(0%)') {
		overlayElement.style.transform = 'translateX(-100%)';
		bodyElement.style.overflow = 'auto';
	} else {
		overlayElement.style.transform = 'translateX(0%)';
		bodyElement.style.overflow = 'hidden';
	}
};



