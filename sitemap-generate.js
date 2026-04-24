import path from "path";
import pify from "pify";
import fs from "fs-extra";
import moment from "moment";

const outputFile = pify(fs.outputFile);

const ISO8601_FORMAT = `YYYY-MM-DDTHH:mm:ssZ`;
const SITEMAP_XSL_CONTENT_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?> <xsl:stylesheet version="2.0" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/> <xsl:template match="/"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <title>XML Sitemap</title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <style type="text/css"> body { font-family: sans-serif; font-size: 16px; color: #242628; } a { color: #000; } table { border: none; border-collapse: collapse; width: 100% } th { text-align: left; padding-right: 30px; font-size: 11px; } thead th { border-bottom: 1px solid #7d878a; cursor: pointer; } td { font-size:11px; padding: 5px; } tr:nth-child(odd) td { background-color: rgba(0,0,0,0.04); } tr:hover td { background-color: #e2edf2; } #content { margin: 0 auto; padding: 2% 5%; max-width: 800px; } .desc { margin: 18px 3px; line-height: 1.2em; } </style> </head> <body> <div id="content"> <h1>XML Sitemap</h1> <p class="desc"> Advanced Sitemap for search engine consumption. </p> <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0"> <table id="sitemap" cellpadding="3"> <thead> <tr> <th width="75%">Sitemap</th> <th width="25%">Last Modified</th> </tr> </thead> <tbody> <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap"> <xsl:variable name="sitemapURL"> <xsl:value-of select="sitemap:loc"/> </xsl:variable> <tr> <td> <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a> </td> <td> <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/> </td> </tr> </xsl:for-each> </tbody> </table> </xsl:if> <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1"> <p class="desc"><a href="https://staging-prospan-steel.netlify.app/sitemap.xml" class="back-link">&#8592; Back to index</a></p> <table id="sitemap" cellpadding="3"> <thead> <tr> <th width="70%">URL (<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> total)</th> <th width="15%">Images</th> <th title="Last Modification Time" width="15%">Last Modified</th> </tr> </thead> <tbody> <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/> <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/> <xsl:for-each select="sitemap:urlset/sitemap:url"> <tr> <td> <xsl:variable name="itemURL"> <xsl:value-of select="sitemap:loc"/> </xsl:variable> <a href="{$itemURL}"> <xsl:value-of select="sitemap:loc"/> </a> </td> <td> <xsl:value-of select="count(image:image)"/> </td> <td> <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/> </td> </tr> </xsl:for-each> </tbody> </table> <p class="desc"><a href="https://staging-prospan-steel.netlify.app/sitemap.xml" class="back-link">&#8592; Back to index</a></p> </xsl:if> </div> </body> </html> </xsl:template> </xsl:stylesheet>`;

export const generateSitemapFiles = async (mapping, rootDirPath, siteURL) => {


  const PUBLIC_PATH = path.join(rootDirPath, "public");
  const SITEMAP_INDEX_FILENAME = path.join(PUBLIC_PATH, "sitemap.xml");
  const SITEMAP_XSL_FILENAME = path.join(PUBLIC_PATH, "sitemap.xsl");
  const FILE_SIZE_LIMIT = 2000;
  const updateAt = moment(new Date(), ISO8601_FORMAT).toISOString();

  let count = {};
  let fileContents = {};
  let indexFileContent = "";

  for (let i = 0; i < mapping.length; i++) {
    const { fileName, getRecords } = mapping[i];
    const records = getRecords();
    if (!count[fileName]) {
      count[fileName] = 1;
    }
    if (!fileContents[fileName]) {
      fileContents[fileName] = "";
    }


    for (const record of records) {
      let fileNameFinal = count[fileName] > FILE_SIZE_LIMIT ? fileName + Math.ceil(count[fileName] / FILE_SIZE_LIMIT) : fileName;
      if (!fileContents[fileNameFinal]) {
        fileContents[fileNameFinal] = "";
      }
      let finalUrl = new URL(path.join(record.url, "/"), siteURL);
      fileContents[fileNameFinal] += `<url><loc>${finalUrl.href}</loc><lastmod>${updateAt}</lastmod></url>`;
      count[fileName]++;
    }
  }

  for (const fileName in fileContents) {
    fileContents[fileName] = `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="sitemap.xsl"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${fileContents[fileName]}</urlset>`;
    indexFileContent += `<sitemap><loc>${siteURL}/${fileName}.xml</loc><lastmod>${updateAt}</lastmod></sitemap>`;
  }

  indexFileContent = `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="sitemap.xsl"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexFileContent}</sitemapindex>`;

  // Sitemap Stylesheet
  await outputFile(SITEMAP_XSL_FILENAME, SITEMAP_XSL_CONTENT_TEMPLATE.replace("{{SITE_URL}}", siteURL));

  // Sitemap Index File
  await outputFile(SITEMAP_INDEX_FILENAME, indexFileContent);

  // Sitemap Files
  for (const fileName in fileContents) {
    await outputFile(`${PUBLIC_PATH}/${fileName}.xml`, fileContents[fileName]);
  }
}
