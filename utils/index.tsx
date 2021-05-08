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