import { css } from 'styled-components'
const breakpointup = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1600
}
export default Object.keys(breakpointup).reduce((accumulatorup, label) => {
	accumulatorup[label] = (...args) => css`
		@media (min-width: ${breakpointup[label]}px) {
			${css(...args)};
		}
	`
	return accumulatorup
}, {})