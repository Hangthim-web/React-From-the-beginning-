const Blog=({title,author,date,content})=>
{
    return (
        <div>
            <h1>Title:{title}</h1>
            <h2>Author :{author}</h2>
            <h2>Date:{date}</h2>
            <p>Content : {content}</p>
        </div>
    )
}

export default Blog;