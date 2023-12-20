import React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { Header } from '../components/header';
import { Feed } from '../components/feed';
import { WEBSITE_NAME } from '../costants';

type HomePageProps = PageProps<Queries.HomePageDataQuery>;

const HomePage = ({ data }: HomePageProps) => {
  const siteTitle = data?.site?.siteMetadata?.title || WEBSITE_NAME;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <div className="global-wrapper">
      <Header title={siteTitle} isHome />
      <main>
        <Feed posts={posts} />
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>{WEBSITE_NAME}</title>;

export const pageQuery = graphql`
  query HomePageData {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          lang
        }
      }
    }
  }
`;
