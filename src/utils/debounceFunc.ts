export default function debounce(fn: (...args: any) => void, delay?: number) {
    let timeout: ReturnType<typeof setTimeout> | null;

    return (...args: any[]) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = null;

            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            fn(...args);
        }, delay);
    };
}
