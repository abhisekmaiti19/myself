/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import db from "../../services/appwrite/db";
import { useEffect, useState } from "react";

// using react helmet we are adding seo content for each page

export default function PageSeo({ type }) {
  // Fetching data from services\appwrite\db.js
  const [config, setConfig] = useState("loading...");
  useEffect(() => {
    (async function () {
      setConfig(await db.getSeoConfig(type));
    })();
  }, []);

  // and og:data need to handle -> separately - og[title,description,image,url,type,site_name]

  let ogData = (ogType) => {
    if (config.og !== undefined) {
      let ogArr = config.og;
      for (let i = 0; i < ogArr.length; i++) {
        if (ogArr[i].split("@")[0] === ogType) {
          return ogArr[i].split("@")[1];
        }
      }
    } else {
      return "loading...";
    }
  };
  // console.log(config);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Title Tag --/> */}
        <title>{config.title}</title>

        {/* <!-- Meta Description --/> */}
        <meta name="description" content={config.description} />

        {/* <!-- Meta Keywords --> */}
        <meta name="keywords" content={config.keywords} />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href={config.canonical} />

        {/* <!-- Robots Meta Tag --/> */}
        <meta name="robots" content={config.robots} />

        {/* <!-- Open Graph Tags --/> */}
        <meta property="og:title" content={ogData("title")} />
        <meta property="og:description" content={ogData("description")} />
        <meta property="og:image" content={ogData("image")} />
        <meta property="og:url" content={ogData("url")} />
        <meta property="og:type" content={ogData("type")} />
        <meta property="og:site_name" content={ogData("site_name")} />

        {/* <!-- Author Meta Tag --/> */}
        <meta name="author" content={config.author} />

        {/* <!-- Content Language --/> */}
        <meta httpEquiv="Content-Language" content={config.contentLanguage} />

        {/* <!-- Link for Pagination --/> */}
        <link rel="prev" href={config.prev} />
        <link rel="next" href={config.next} />

        {/* <!-- JSON-LD Structured Data --/> */}
        {/* {we can use JSONLD here but not for now ! maybe in future} */}
      </Helmet>
    </>
  );
}
