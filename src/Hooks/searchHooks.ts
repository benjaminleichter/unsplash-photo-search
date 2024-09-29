import UnsplashService from "../Services/UnsplashService";
import {useEffect, useMemo, useState} from "react";
import {Basic} from "unsplash-js/dist/methods/photos/types";

export const useUnsplashSearch = () => {
    const unsplashService = useMemo(() => new UnsplashService(), []);
    const [searchTerm, setSearchTerm] = useState("");
    const [photos, setPhotos] = useState<Array<Basic> | null>(null)
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);

    useEffect(() => {
        if (isSearching) {
            unsplashService.getPhotosForSearchTerm({searchTerm, page}).then((res) => {
                setIsSearching(false);
                if (typeof res !== "undefined") {
                    setPhotos(res.results);
                    setNumPages(res.total_pages)
                    return;
                }

                setPhotos([]);
                setNumPages(0);
            });
        }
    }, [isSearching, page, searchTerm, unsplashService]);

    return { setSearchTerm, searchTerm, setIsSearching, isSearching, photos, numPages, setPage, page };
}
