import {withLayout} from "src/layout"
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next"
import axios from "axios"
import {MenuItem} from "src/interfaces/menu.interface"
import {ParsedUrlQuery} from "querystring"
import {firstLevelMenu} from "src/helpers/helpers"
import {TopLevelCategory} from "src/interfaces/page.interface"
import {API} from "src/helpers/api";

const Type = ({firstCategory}: TypeProps) => {

  return (
    <div>
      type {firstCategory}
    </div>
  )
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params){
    return {
      notFound: true
    }
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)

  if (!firstCategoryItem){
    return {
      notFound: true
    }
  }

  const {data: menu} = await axios.post(API.topPage.find, {
    firstCategory: firstCategoryItem.id
  })

  return {
    props: {
      firstCategory: firstCategoryItem.id,
      menu
    }
  }
}

interface TypeProps {
  firstCategory: TopLevelCategory
  menu: MenuItem[]
}