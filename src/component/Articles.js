import ArticlesItem from "./ArticlesItem"

const Articles = ({articles}) => {

    const styles = {
        color: "brown",
        border: "1px solid #000000",
        padding: "0.5rem 0 0.5rem 1rem",
        backgroundColor: 'rgba(235, 228, 231, 0.59)',
        width: '50%',
      }
      
    return (
        <div>
        {articles.map((articles, key) => {
            return (
            <div style={styles} key={key}>
                {/* <h3>{item.title}</h3> */}
                <ArticlesItem articles={articles} />
            </div>
            )
        })}
        </div>
    )
}

export default Articles