import { getData } from "./api/[id]"

export default function Show({ data, run }) {
    return (
        <>
            {run ? <ShowData data={data} /> : "Invaild"}
        </>
    )
}

function ShowData({ data }) {
    return (
        <>
            {data.map((d) =>
                <div>
                    <span>{d.name}</span>
                    <span>{d.age}</span>
                </div>
            )}
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    let run = params.id === "show" ? true : false
    let data = await getData()
    return { props: { data, run } }
}