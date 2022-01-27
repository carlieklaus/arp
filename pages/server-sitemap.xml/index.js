import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (context) => {
  const query = await fetch(`${API_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const queryResult = await query.json();

  const fields = queryResult.map((book) => ({
    loc: `${process.env.NEXT_PUBLIC_URL}/${book?.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, fields);
};

export default () => {};
