import { createApi, ColorId, SearchOrderBy } from 'unsplash-js';
import { NoAccessKeyError } from "./errors";


type UnsplashApi = ReturnType<typeof createApi>;
type GetPhotosForSearchTermArgs = {
    searchTerm: string;
    page: number;
    orderBy: SearchOrderBy;
    color?: ColorId;
}
class UnsplashService {
    private api: UnsplashApi

    constructor() {
        if (typeof process.env.REACT_APP_UNSPLASH_ACCESS_KEY === "undefined") {
            throw new NoAccessKeyError();
        }
        this.api = createApi({
            accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
            fetch: fetch,
        });
    }

    getPhotosForSearchTerm = async ({ searchTerm, page, color, orderBy }: GetPhotosForSearchTermArgs) => {
        const result = await this.api.search.getPhotos({
            query: searchTerm,
            page,
            color,
            orderBy
        });
        return result.response;
    }

}

export default UnsplashService;
