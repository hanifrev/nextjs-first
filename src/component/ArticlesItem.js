import Link from "next/link"

const styles = {
    color: '#000000',
}

const ArticlesItem = ({articles}) => (
    <Link href='/article/[id]' as={`/article/${articles.id}`}>
        <a style={styles}>
            <h3>{articles.title} &rarr;</h3>
            <p>{articles.body}</p>
        </a>
    </Link>

)

export default ArticlesItem