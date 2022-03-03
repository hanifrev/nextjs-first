import Link from "next/link";
import QuranList from "../../src/component/fetch2/QuranList";

const Fetch2 = ({ quran }) => {
  console.log(quran);
  return (
    <div>
      <QuranList alquran={quran} />
    </div>
  );
};

export default Fetch2;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json`
  );
  const quran = await res.json();

  return {
    props: {
      quran,
    },
  };
};
