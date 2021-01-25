import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'posts')

// console.log(process.cwd()) // project root

export function getSortedPostsData() {

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(filename => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    // Combine the data with the id
    // console.log(matterResult.data)
    return {
      id,
      ...matterResult.data
    }
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })

}


export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, '')
      }
    }
  });

}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  // return {
  //   id,
  //   ...matterResult.data,
  // }

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }

}
