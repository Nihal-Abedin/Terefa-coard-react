
export const sharedWithMeQueryKeys = {
    all: ["sharedWithMe"] as const,
    lists: () => [...sharedWithMeQueryKeys.all, "sharedLists"] as const,
    list: (searchTxt: string) =>
        [...sharedWithMeQueryKeys.lists(), { searchTxt }] as const,
};