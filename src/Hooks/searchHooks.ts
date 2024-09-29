import UnsplashService from "../Services/UnsplashService";
import {useEffect, useMemo, useState} from "react";
import {Basic} from "unsplash-js/dist/methods/photos/types";

export const useUnsplashSearch = () => {
    const unsplashService = useMemo(() => new UnsplashService(), []);
    const [searchTerm, setSearchTerm] = useState("");
    const [photos, setPhotos] = useState<Array<Basic> | null>(null)
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (isSearching) {
            unsplashService.getPhotosForSearchTerm(searchTerm).then((res) => {
                setIsSearching(false);
                if (typeof res !== "undefined") {
                    setPhotos(res.results);
                    return;
                }

                setPhotos([]);
            });
        }
    }, [isSearching, searchTerm, unsplashService]);

    return { setSearchTerm, searchTerm, setIsSearching, isSearching, photos };
}
