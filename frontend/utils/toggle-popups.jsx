"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const usePopup = ({ duration = 280 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const [disableToggle, setDisableToggle] = useState(false);

  const togglePopup = useCallback(() => {
    if (disableToggle) return;
    if (!isActive) {
      setIsActive(true);
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsActive(false), duration);
    }
  }, [isActive, disableToggle, duration]);
  const handleClickOutside = useCallback(
    (event) => {
      if (disableToggle) return;
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => setIsActive(false), duration);
      }
    },
    [disableToggle, duration]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    isVisible,
    isActive,
    ref,
    disableToggle, 
    setDisableToggle,
    togglePopup,
    setIsVisible,
    setIsActive,
  };
};
