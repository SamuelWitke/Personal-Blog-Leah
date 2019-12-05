import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData(fileName) {
    const splits = fileName.split('/')
    const relativePath = splits[splits.length - 1]
    const data = useStaticQuery(graphql`
  query PhotosQuery {
    allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
         edges {
           node {
             extension
             relativePath
             publicURL
             childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
           }
         }
   }
   }
  `)
    const image = data.allFile.edges.find(image => image.node.relativePath.includes(relativePath))
    return image.node
}