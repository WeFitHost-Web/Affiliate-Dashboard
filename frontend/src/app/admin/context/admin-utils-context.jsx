'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';

export const AdminUtilsContext = createContext(null);

export const AdminUtilsProvider = ({ children }) => {
	const [overlayOpen, setOverlayOpen] = useState(false);

	const providerValue = useMemo(
		() => ({
			overlayOpen,
			setOverlayOpen,
		}),
		[
			overlayOpen,
			setOverlayOpen,
		],
	);

	return (
		<AdminUtilsContext.Provider value={providerValue}>
			{children}
		</AdminUtilsContext.Provider>
	);
};

export const useAdminUtilsContext = () => {
	const context = useContext(AdminUtilsContext);
	if (!context) {
		throw new Error('Context must be used within a Provider');
	}
	return context;
};

