import { getPostBySlug, getAllSlugs } from 'lib/api'
// import COntainer from 'components/container'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder' 
import Postbody from 'components/post-body'
import { TwoColumn, TwoColumnMain,TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constants'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'
import ContainerArticle from 'components/container-article'

export default function Post({
    title,
    publish,
    content,
    eyecatch,
    categories,
    descripption,
    prevPost,
    nextPost,
}) {
    return (
        <ContainerArticle>
            <Meta
                pageTitle={title}
                pageDesc={descripption}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}            
            
            />

            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}  
                        height={eyecatch.height}
                        size="(min-width: 1152px) 1152px,100vw"
                        priority
                        placeholder="blur"
                        blurDataURL={eyecatch.blurDataURL}
                    />  
                </figure>
                {/* <TwoColumn>
                    <TwoColumnMain>
                        <Postbody>
                            <ConvertBody contentHTML={content} />
                        </Postbody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn> */}

                
                        <Postbody>
                            <ConvertBody contentHTML={content} />
                        </Postbody>
                    

                <Pagination
                    prevText={prevPost.title}
                    prevUrl={`/work/${prevPost.slug}`}
                    nextText={nextPost.title}
                    nextUrl={`/work/${nextPost.slug}`}
                />



            </article>
        </ContainerArticle>

        
        
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()
    return {
        paths: allSlugs.map(({ slug }) => `/work/${slug}`),
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const slug = context.params.slug

    const post = await getPostBySlug(slug)

    const descripption = extractText(post.content)

    const eyecatch =post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost,nextPost] = prevNextPost(allSlugs,slug) 

    return {
        props: {


            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            descripption: descripption,
            prevPost: prevPost,
            nextPost: nextPost,
        },
    }
}