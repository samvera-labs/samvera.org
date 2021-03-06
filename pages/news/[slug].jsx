import DynamicNewsContent from "components/layout/DynamicNewsContent";
import {
  getMarkdownPageContent,
  getSideNav,
  getPaths,
} from "lib/markdown-helpers";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "news",
  parentDirLabel: "News and Events",
};

export default function NewsPage({
  content,
  frontmatter,
  sideNav,
  sideNewsAndEvents,
}) {
  return (
    <DynamicNewsContent
      config={CONFIG}
      content={content}
      frontmatter={frontmatter}
      sideNav={sideNav}
      sideNewsAndEvents={sideNewsAndEvents}
    />
  );
}

export async function getStaticPaths() {
  const paths = getPaths(`markdown/${CONFIG.parentDir}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, frontmatter } = getMarkdownPageContent(
    `markdown/${CONFIG.parentDir}/${slug}.md`
  );
  const { sideNav } = getSideNav(`markdown/${CONFIG.parentDir}`);
  const { sideNav: sideNewsAndEvents } = getSideNav(`markdown/news`);
  return {
    props: {
      content,
      frontmatter,
      sideNav,
      sideNewsAndEvents,
    },
  };
}
