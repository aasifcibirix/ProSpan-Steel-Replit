import { css } from 'styled-components'
const breakpointdown = {
	sm: 575.98,
	md: 767.98,
	lg: 991.98,
	xl: 1199.98,
	xxl: 1600
}
export default Object.keys(breakpointdown).reduce((accumulatordown, label) => {
	accumulatordown[label] = (...args) => css`
	 	@media (max-width: ${breakpointdown[label]}px) {
			${css(...args)};
		}
	`
	return accumulatordown
}, {})