import {SearchProps} from "./Search.props"
import cn from "classnames"
import styles from './Search.module.css'
import {Button, Input} from "src/components"
import {RxMagnifyingGlass} from "react-icons/rx"
import {KeyboardEventHandler, useState} from "react"
import {useRouter} from "next/router"

const Search = ({className, ...props} : SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: searchValue
      }
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter'){
      goToSearch()
    }
  }

  return (
    <div
      className={cn(styles.search, className)}
      {...props}
    >
      <Input
        placeholder="Поиск..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className={styles.input}
        //@ts-ignore
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <RxMagnifyingGlass/>
      </Button>
    </div>
  )
}

export default Search
