import { createSelector } from 'reselect'

const getAllDetails = (state) => state.dataReducer.details

export const getAllDetailsState = createSelector (
	[getAllDetails],
	(details) => details
)