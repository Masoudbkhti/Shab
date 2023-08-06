import {useCallback, useMemo, useState} from "react";
import {searchByName} from "@/utils/searchByName";
import Image from "next/image";
import Link from "next/link";


const Search = () => {

    const [search, setSearch] = useState('')

    const handleChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [])

    const SEARCH_PRODUCT = useMemo(() => searchByName(search), [search])
    const isNotSearchEmpty = SEARCH_PRODUCT.length

    return (
        <div style={{position: 'relative'}}>
            <label>search: </label>
            <input value={search} onChange={handleChange}/>
            <div style={{position: 'absolute', width: '100%'}}>
                {!!search && SEARCH_PRODUCT.map(product => (
                    <Link href={`/${product.category}/${product.name}`}>
                        <div style={{
                            display: 'flex',
                            border: '1px solid #000',
                            padding: 4,
                            width: '100%',
                            cursor: 'pointer'
                        }}>
                            <Image width={30} src={product.image} alt={product.name}/>
                            <div>
                                {product.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Search