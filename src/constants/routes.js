export const ROUTES = {
    home: {
        categoryName: "Strona główna",
    },
    movies: {
        categoryName: "Filmy",
        subcategories: {
            genres: {
                categoryName: "Gatunki",
                subcategories: {
                    action: {
                        categoryName: "Akcja",
                    },
                    comedy: {
                        categoryName: "Komedia",
                    },
                    drama: {
                        categoryName: "Dramat",
                    },
                    fantasy: {
                        categoryName: "Fantasy",
                    },
                    horror: {
                        categoryName: "Horror",
                    },
                    romance: {
                        categoryName: "Romans",
                    },
                }
            },
            popular: {
                categoryName: "Popularne",
                subcategories: {
                    "most-popular": {
                        categoryName: "Najpopularniejsze",
                    },
                    "new-releases": {
                        categoryName: "Nowości",
                    },
                    recommended: {
                        categoryName: "Polecane",
                    },
                }
            },
        }
    },
    blog: {
        categoryName: "Blog",
    }
}