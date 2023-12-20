import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import { Header } from '../components/header';

const PostWrapper = styled.main`
  margin: 0 auto;
  max-width: var(--maxWidth-4xl);
`;

type BlogPostTemplateProps = PageProps<
  Queries.BlogPostBySlugQuery,
  Queries.BlogPostBySlugQueryVariables
>;

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
}: // location,
BlogPostTemplateProps) => {
  const siteTitle = site?.siteMetadata?.title || 'Garden';

  if (!post?.frontmatter?.title || !post?.html) {
    //redirect to 404 route
    return (
      <main>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness. 2</p>
      </main>
    );
  }

  return (
    <div className="global-wrapper">
      <Header siteTitle={siteTitle} />
      <PostWrapper>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
            <p>{post.frontmatter.description}</p>
            <p>
              <Link to="/">Back to home</Link>
            </p>
          </footer>
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous?.fields?.slug && previous?.frontmatter && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next?.fields?.slug && next?.frontmatter && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </PostWrapper>
    </div>
  );
};

export const Head = ({
  data: { markdownRemark: post },
}: BlogPostTemplateProps) => {
  if (!post?.frontmatter?.title || !post?.excerpt) {
    return null;
  }

  return <title>{post?.frontmatter?.title}</title>;
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
