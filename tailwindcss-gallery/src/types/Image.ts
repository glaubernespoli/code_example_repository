import React from "react";

interface Image {
    id: React.Key
    tags: string
    webformatURL: string
    user: string
    views: number
    downloads: number
    likes: number
}

export default Image;