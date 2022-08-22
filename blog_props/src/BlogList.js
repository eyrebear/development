import React from "react";
import BlogPost from "./BlogPost";
import data from "./data"

console.log(data)


export default function BlogList() {
    const blogs = data.map(blog => {
        return (
            <BlogPost
                key={blog.id}
                blog={blog}
            />
        )
    })

    return (
        <section className="bloglist--section">
            {blogs}
        </section>
    )
}