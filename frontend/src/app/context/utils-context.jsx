'use client';
import { usePopup } from './../../../utils/toggle-popups';
import React, { createContext, useContext, useMemo, useState } from 'react';

export const UtilsContext = createContext(null);

export const UtilsProvider = ({ children }) => {
	const [overlayOpen, setOverlayOpen] = useState(false);
	const {
		isVisible: newLinkPromptVisible,
		isActive: newLinkPrompt,
		togglePopup: toggleNewLinkPrompt,
		ref: newLinkPromptRef,
	} = usePopup();

	const providerValue = useMemo(
		() => ({
			overlayOpen,
			setOverlayOpen,
			newLinkPromptVisible,
			newLinkPrompt,
			toggleNewLinkPrompt,
			newLinkPromptRef,
		}),
		[
			overlayOpen,
			setOverlayOpen,
			newLinkPromptVisible,
			newLinkPrompt,
			toggleNewLinkPrompt,
			newLinkPromptRef,
		],
	);

	return (
		<UtilsContext.Provider value={providerValue}>
			{children}
		</UtilsContext.Provider>
	);
};

export const useUtilsContext = () => {
	const context = useContext(UtilsContext);
	if (!context) {
		throw new Error('Context must be used within a Provider');
	}
	return context;
};

