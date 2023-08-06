import Link from "next/link";

const HistoryItem = ({id, totalPrice, status}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 12,
            border: '1px solid #000',
            borderRadius: 8,
            margin: 12
        }}>
            <div>
                id: {id}
            </div>
            <div>
                total price: {totalPrice}
            </div>
            <div>
                status: {status}
            </div>
            <Link href={`/cart/history/${id}`}>
                <div>
                    show details
                </div>
            </Link>
        </div>
    )
}

export default HistoryItem