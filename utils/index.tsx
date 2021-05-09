// Examples:
// classNames(styles.foo, isEnabled && styles.fooEnabled)

/**
 * Concats given params into a valid html classList.
 * Example: 
 *   classNames(styles.foo, isEnabled && styles.fooEnabled)
 * @param names values to contact
 */
export function classNames(...names: Array<string | false>): string {
    return names.filter(it => typeof it === 'string').join(' ')
}

export function requireNotNull<T>(obj: T | null, message?: string):  T {
    if (obj === null) {
        throw new Error(`requireNotNull check failed` + obj ? ` message: '${message}.'` : '.');
    }
    return obj;
}

export function notNull<T>(obj: T | null, message?: string): asserts obj is T {
    if (obj === null) {
        throw new Error(`notNull check failed` + obj ? ` message: '${message}.'` : '.');
    }
}