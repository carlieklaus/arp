import { getServerSideSitemap } from "next-sitemap";
import { API_URL } from "config";

const ServerSitemap = () => {
  return <></>;
};
export const getServerSideProps = async (context) => {
  const query = await fetch(`${API_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const queryResult = await query.json();

  const fields = queryResult.map((book) => ({
    loc: `${process.env.NEXT_PUBLIC_URL}/products/${book?.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, fields);
};

export default ServerSitemap;
