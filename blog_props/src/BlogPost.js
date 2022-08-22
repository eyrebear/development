import React from "react";


export default function BlogPost(props) {
<main className="blog--post">
    <h1 className="blog--title">{props.blog.title}</h1>
    <p className="blog--subtitle">{props.blog.subTitle}</p>
    <p className="blog--post-info"><span className="fancy-letters">Posted by {props.blog.author}</span> on {props.blog.date}</p>
    <hr />
</main>
}