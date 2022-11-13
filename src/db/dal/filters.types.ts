interface ListFilters {
	isDeleted?: boolean;
	includeDeleted?: boolean;
}

export interface GetAllUsersFilter extends ListFilters {}
