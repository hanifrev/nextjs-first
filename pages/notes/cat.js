const Cat = ({cat}) => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto 0 auto',
        textAlign: 'center',
        maxWidth: '1170px'
    }

    return (
        <div style={styles}>
            <h5>Daily random cat facts</h5>
            <br />
            <h1>{cat.fact}</h1>
        </div>
    )
}

export default Cat

export const getStaticProps = async () => {
    const res = await fetch('https://catfact.ninja/fact')
    const cat = await res.json()

    return {
        props: {
            cat
        }
    }
}