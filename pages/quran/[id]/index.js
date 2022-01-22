import {useRouter} from 'next/router'
import Head from 'next/head'

const Surah = ({quran}) => {

    // const router = useRouter()
    // const {id} = router.query

    const obj = quran.verses.map((v) => {
        return (
            v.text
        )
    })
    // const verse = JSON.stringify(obj)

    // console.log(obj[1])

    return (
        <>
        <Head>
            <title>{quran.name}</title>
        </Head>
            <div>
                <>
                    <h2>{quran.name}</h2>
                    <p style={{fontSize: '30px'}}>{obj}</p>
                </>
            </div>
        </>
    )
}

export default Surah

export const getServerSideProps = async (context) => {
    const {id} = context.query
    const res = await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id}.json`)
    const quran = await res.json()

    return {
        props: {
            quran
        }
    }
}