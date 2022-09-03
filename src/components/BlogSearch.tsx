import { SearchClient } from 'algoliasearch'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  Highlight,
  Snippet,
  SearchBox,
  Configure,
  RefinementList,
  Pagination,
  PoweredBy
} from 'react-instantsearch-hooks-web'

const algoliaClient = algoliasearch(
  'UIDFJO4C3W',
  '6c38c8327a86c8af12f25c04b19d2b72'
)

const searchClient = {
  ...algoliaClient
}

function Hit({ hit }) {
  return (
    <article>
      <h1>
        <Highlight attribute='title' hit={hit} />
      </h1>
      <Snippet hit={hit} attribute='title' />
    </article>
  )
}

export function BlogSearch() {
  return (
    <div className='mt-10 flex flex-col items-center relative'>
      <div className=''>
        <InstantSearch
          indexName='blog'
          searchClient={searchClient as SearchClient}
        >
          <Configure hitsPerPage={4} distinct={true} />
          <SearchBox></SearchBox>
          <PoweredBy />

          <RefinementList
            attribute='tags'
            searchable={true}
            operator='and'
            limit={5}
            sortBy={['name:asc']}
            showMore={true}
          />
          <RefinementList
            attribute='author'
            searchable={true}
            operator='and'
            limit={5}
            sortBy={['name:asc']}
            showMore={true}
          />
          <RefinementList
            attribute='category'
            searchable={true}
            operator='and'
            limit={5}
            sortBy={['name:asc']}
            showMore={true}
          />

          <Hits hitComponent={Hit} />
          <Pagination />
        </InstantSearch>
      </div>
    </div>
  )
}
