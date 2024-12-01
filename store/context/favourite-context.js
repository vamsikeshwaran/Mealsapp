import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids: [],
    addfavourite: (id) => { },
    removefavourite: (id) => { }
})

function Favouritecontextprovider({ children }) {
    const [favmealid, setfavmealid] = useState([])
    function addfavourite(id) {
        setfavmealid((currentfavids) => [...currentfavids, id])
    }
    function removefavourite(id) {
        setfavmealid((currentfavids) => currentfavids.filter((meal) => meal !== id))
    }
    const value = {
        ids: favmealid,
        addfavourite: addfavourite,
        removefavourite: removefavourite
    }
    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default Favouritecontextprovider