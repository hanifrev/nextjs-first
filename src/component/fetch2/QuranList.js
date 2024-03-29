import Link from "next/link";
import Head from "next/head";

const QuranList = ({ alquran }) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 0 0.5rem 10px",
    border: "0.5px solid #000000",
    width: "12rem",
    margin: "1rem auto",
    background: "aliceblue",
  };

  const btnstyle = {
    color: "brown",
    width: "12rem",
  };

  return (
    <div>
      <Head>
        <title>Quran</title>
      </Head>
      {alquran.map((quran, key) => {
        return (
          <Link href="/quran/[id]" as={`/quran/${quran.number_of_surah}`}>
            <a style={btnstyle}>
              <div style={styles} key={key}>
                <div>
                  {quran.name} / {quran.name_translations.ar}
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default QuranList;
