import React, { FC } from 'react';
import { Link } from 'gatsby';

type FeedProps = {
  posts: Queries.HomePageDataQuery['allMarkdownRemark']['nodes'];
}

export const Feed: FC<FeedProps> = ({ posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {posts.flatMap((post) => {
        const title = post.frontmatter?.title || post.fields?.slug;
        const slug = post.fields?.slug;
        const html = post.frontmatter?.description || post.excerpt;

        // If we don't have a slug or html, we can't render the post
        if (!slug || !html) return [];

        return (
          <li key={slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={post.fields?.slug || '404'} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter?.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        );
      })}
    </ol>
  );
};

