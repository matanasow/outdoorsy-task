import { ChangeEvent } from "react";

export interface ISearchBar {
    search: string;
    handleSearchChange(event: ChangeEvent, searchString: string): void;
    clearSearch(): void;
}