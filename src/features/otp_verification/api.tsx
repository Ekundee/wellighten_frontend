import Requester from "@/api/util";

export async function v() {
    const x = await Requester.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(x.data)
    return x.data
}