
import RenderMdx from "../../../components/blog/renderMdx";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({params}:any) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList:any = ["/blogs/image.png"];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? ["http://localhost:3000"+ blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img:any) => {
    return { url: img.includes("http") ? img : "http://localhost:3000" + img };
  });

  const authors = blog?.author ? [blog.author] : "rafia";

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: "http://localhost:3000" + blog.url,
      siteName:' blog',
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : ["rafia"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({params}:any) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList:any = ["rafia"];
  if (blog?.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? ["http://localhost:3000" + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog?.title,
    "description": blog?.description,
    "image": imageList,
    "datePublished": blog?.publishedAt ? new Date(blog.publishedAt).toISOString() : null,
    "dateModified": blog?.updatedAt ? new Date(blog.updatedAt).toISOString() : null,
    "author": [{
        "@type": "Person",
        "name": blog?.author ? [blog.author] : "rafia",
        "url": "http://localhost:3000",
      }]
  }

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={blog?.image?.filePath ? blog?.image.filePath.replace("../public", "") : ""}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          alt={blog?.title || " "}
          width={blog?.image?.width}
          height={blog?.image?.height}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
    

      <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12  lg:col-span-4">
          <details className="border border-solid border-black text-black rounded-lg p-4 sticky top-6  max-h-[80vh] overflow-hidden overflow-y-auto">
              <summary className="text-lg font-semibold capitalize cursor-pointer " >Table of Contant </summary>
              <ul >
                {blog?.toc.map((heading:any)=>{
                  return(
                    <li className="py-1" key={`#${heading.slug}`}>
                        <Link href={`#${heading.slug}`} data-level={heading.level}  className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-black/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start">{heading.level==='three' ? (<span className="flex w-1 h-1 rounded-full bg-black mr-2 ">&nbsp; </span>) : null}
                        <span>{heading.text}</span>
                        </Link>
                    </li>
                  )
                })}
              </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
    </>
   
  );
}