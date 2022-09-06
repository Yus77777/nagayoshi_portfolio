import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import {  getAllPosts } from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
import ContainerArticle from 'components/container-article'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'


export default function Blog({ posts }) {
  return (
        <ContainerArticle>
          <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧"　/>
          <Hero
              title="blog"
              subtitle="Recent Posts" 
          />
          <Posts posts={posts} />
        </ContainerArticle>

  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return{
    props: {
      posts: posts,
    },
  }
}