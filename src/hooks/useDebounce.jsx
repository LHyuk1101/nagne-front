import { useCallback, useRef } from 'react';

/**
 * 버튼 클릭 이벤트에 대해 디바운스 처리를 수행하는 커스텀 훅입니다.
 *
 * @param {Function} callback - 디바운스 처리할 클릭 이벤트 핸들러 함수입니다.
 * @param {number} delay - 디바운스 지연 시간(밀리초)입니다.
 * @returns {Function} 디바운스 처리된 클릭 이벤트 핸들러 함수를 반환합니다.
 *
 * @example
 * const handleClick = useDebounceClick(() => {
 *   console.log('Button clicked!');
 * }, 300);
 *
 * return <button onClick={handleClick}>Click me</button>;
 */
export const useDebounceClick = (callback, delay) => {
    const timeoutRef = useRef(null);

    return useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);
};