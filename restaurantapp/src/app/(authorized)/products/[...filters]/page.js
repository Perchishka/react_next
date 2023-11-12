export default function ProductListPage ({params: {filters}}) {
    return <div>ProductListPage: {filters.join(", ")}</div>
    }